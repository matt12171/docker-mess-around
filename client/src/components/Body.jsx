import { useEffect, useState } from "react";
import Charts from "./Charts";
import Filters from "./Filters";
import Map from "./Map";
import SiteInfoCard from "./SiteInfoCard";
import { MOCK_TURBINE, MOCK_SITE } from "../data";
import axios from "axios";
import SmallinfoCard from "./SmallinfoCard";
import { calculateCurrentSitePowerCapacity, calculateMaxSitePowerCapacity, calculatePercentageOfActiveTurbines } from "../utils";
import Header from "./Header";


const baseURL = "http://localhost:3000/";
const isDevelopment = process.env.NODE_ENV === "development";


export default function Body() {
  const [turbineIdClicked, setTurbineIdClicked] = useState(null);
  const [turbineClickedCoords, setTurbineClickedCoords] = useState([
    51.481402, 1.600944,
  ]);
  const [fetchedTurbineData, setFetchedTurbineData] = useState(null);
  const [fetchedSiteData, setFetchedSiteData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isDevelopment) {
      console.log("Using real data");
      axios
        .get(baseURL + "turbines")
        .then((response) => {
          console.log("Data fetched: ", response.data);
          setFetchedTurbineData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching turbine data: ", error);
          setLoading(false);
        })
        .then(() => {
          axios
            .get(baseURL + "sites")
            .then((response) => {
              console.log("Data fetched: ", response.data);
              setFetchedSiteData(response.data);
              setLoading(false);
            })
            .catch((error) => {
              console.error("Error fetching site data: ", error);
              setLoading(false);
            });
        });
    } else {
      console.log("Using mock data");
      setFetchedTurbineData(MOCK_TURBINE);
      setFetchedSiteData(MOCK_SITE);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!fetchedTurbineData) {
    return <div>Error fetching data</div>;
  }

  return (
    <div id="body-main">
      <section id="body-left">
        <Filters />
      </section>
      <section id="body-right">
        <Header />
        <Map
          fetchedTurbineData={fetchedTurbineData}
          setTurbineIdClicked={setTurbineIdClicked}
          turbineClickedCoords={turbineClickedCoords}
          setTurbineClickedCoords={setTurbineClickedCoords}
        />
        <div id="chart-wrapper">
          <Charts
            fetchedTurbineData={fetchedTurbineData}
            turbineIdClicked={turbineIdClicked}
            setTurbineClickedCoords={setTurbineClickedCoords}
            setTurbineIdClicked={setTurbineIdClicked}
          />
          <SiteInfoCard site={fetchedSiteData} />
          <div id="card-wrapper">
          <SmallinfoCard title='Current total power capacity' value={`${calculateCurrentSitePowerCapacity(fetchedTurbineData)} MW`} icon={<i className="fa-solid fa-bolt"></i>}/>
          <SmallinfoCard title='Max power capacity' value={`${calculateMaxSitePowerCapacity(fetchedTurbineData)} MW`} icon={<i className="fa-solid fa-bolt"></i>}/>
          <SmallinfoCard title='Active turbines' value={`${calculatePercentageOfActiveTurbines(fetchedTurbineData)}%`} icon={<i className="fa-solid fa-power-off"></i>}/>
          </div>
        </div>
      </section>
    </div>
  );
}
