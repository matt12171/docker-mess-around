import { useEffect, useState } from "react";
import Charts from "./Charts";
import Filters from "./Filters";
import Map from "./Map";
import SiteInfoCard from "./SiteInfoCard";
// import { MOCK_SITE } from "../data";
import axios from "axios";

const baseURL = "http://localhost:3000/";

export default function Body() {
  const [ turbineIdClicked, setTurbineIdClicked ] = useState(null);
  const [ turbineClickedCoords, setTurbineClickedCoords ] = useState([51.481402, 1.600944]);
  const [ fetchedTurbineData, setFetchedTurbineData ] = useState(null);
  const [ loading, setLoading ] = useState(true);



  useEffect(() => {
    axios.get(baseURL + "turbines")
      .then((response) => {
        console.log("Data fetched: ", response.data);
        setFetchedTurbineData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching turbine data: ", error);
        setLoading(false);
      });
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
        <Map fetchedTurbineData={fetchedTurbineData} setTurbineIdClicked={setTurbineIdClicked} turbineClickedCoords={turbineClickedCoords} setTurbineClickedCoords={setTurbineClickedCoords} />
        <div id="chart-wrapper">
          <Charts fetchedTurbineData={fetchedTurbineData} turbineIdClicked={turbineIdClicked} setTurbineClickedCoords={setTurbineClickedCoords} setTurbineIdClicked={setTurbineIdClicked}/>
          {/* <SiteInfoCard name={MOCK_SITE[0].name} capacity={MOCK_SITE[0].capacity} location={MOCK_SITE[0].location} status={MOCK_SITE[0].status} turbineCount={MOCK_SITE[0].turbineCount} /> */}
        </div>
      </section>
    </div>
  );
}
