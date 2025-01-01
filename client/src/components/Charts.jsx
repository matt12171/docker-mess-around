import Chart from "chart.js/auto";
import BarChart from "./BarChart";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
// import { MOCK_TURBINE } from "../data";

Chart.register(CategoryScale);

export default function Charts({ turbineIdClicked, setTurbineIdClicked, setTurbineClickedCoords, fetchedTurbineData }) {
  const [chartData, setChartData] = useState({
    labels: fetchedTurbineData.map((data) => data.name),
    datasets: [
      {
        label: "Turbine Capacity",
        data: fetchedTurbineData.map((data) => data.capacity),
        backgroundColor: "#4a5ecb",
        borderWidth: 2,
        coords: fetchedTurbineData.map((data) => [data.coords_lat, data.coords_long]),
        id: fetchedTurbineData.map((data) => data.id),
      },
    ],
  });

  useEffect(() => {
    setChartData((prev) => ({
      ...prev,
      datasets: prev.datasets.map((dataset) => ({
        ...dataset,
        borderColor: fetchedTurbineData.map((data) =>
          data.id === turbineIdClicked ? "red" : "black"
        ),
        borderWidth: fetchedTurbineData.map((data) => (data.id === turbineIdClicked ? 4 : 2)),
      })),
    }));
  }, [turbineIdClicked]);

  return (
    <div id="chart">
      <BarChart chartData={chartData} setTurbineClickedCoords={setTurbineClickedCoords} setTurbineIdClicked={setTurbineIdClicked}/>
    </div>
  );
}
