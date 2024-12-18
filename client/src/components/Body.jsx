import { useState } from "react";
import Charts from "./Charts";
import Filters from "./Filters";
import Map from "./Map";
import SiteInfoCard from "./SiteInfoCard";
import { MOCK_SITE } from "../data";

export default function Body() {
  const [ turbineIdClicked, setTurbineIdClicked ] = useState(null);
  const [ turbineClickedCoords, setTurbineClickedCoords ] = useState([51.481402, 1.600944]);

  return (
    <div id="body-main">
      <section id="body-left">
        <Filters />
      </section>
      <section id="body-right">
        <Map setTurbineIdClicked={setTurbineIdClicked} turbineClickedCoords={turbineClickedCoords} setTurbineClickedCoords={setTurbineClickedCoords} />
        <div id="chart-wrapper">
          <Charts turbineIdClicked={turbineIdClicked} setTurbineClickedCoords={setTurbineClickedCoords} setTurbineIdClicked={setTurbineIdClicked}/>
          <SiteInfoCard name={MOCK_SITE[0].name} capacity={MOCK_SITE[0].capacity} location={MOCK_SITE[0].location} status={MOCK_SITE[0].status} turbineCount={MOCK_SITE[0].turbineCount} />
        </div>
      </section>
    </div>
  );
}
