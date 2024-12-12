import Chart from "chart.js/auto";
import BarChart from "./BarChart";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import { MOCK_TURBINE } from "../data";

Chart.register(CategoryScale);

export default function Charts({ turbineIdClicked, setTurbineIdClicked, setTurbineClickedCoords}) {
  const [chartData, setChartData] = useState({
    labels: MOCK_TURBINE.map((data) => data.name),
    datasets: [
      {
        label: "Turbine Capacity",
        data: MOCK_TURBINE.map((data) => data.capacity),
        backgroundColor: "#7CB9E8",
        borderColor: "black",
        borderWidth: 2,
        coords: MOCK_TURBINE.map((data) => data.coords),
        id: MOCK_TURBINE.map((data) => data.id),
      },
    ],
  });

  useEffect(() => {
    setChartData((prev) => ({
      ...prev,
      datasets: prev.datasets.map((dataset) => ({
        ...dataset,
        borderColor: MOCK_TURBINE.map((data) =>
          data.id === turbineIdClicked ? "red" : "black"
        ),
        borderWidth: MOCK_TURBINE.map((data) => (data.id === turbineIdClicked ? 4 : 2)),
      })),
    }));
  }, [turbineIdClicked]);

  return (
    <div id="chart">
      <BarChart chartData={chartData} setTurbineClickedCoords={setTurbineClickedCoords} setTurbineIdClicked={setTurbineIdClicked}/>
    </div>
  );
}
