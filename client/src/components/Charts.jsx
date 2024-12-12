import Chart from "chart.js/auto";
import BarChart from "./BarChart";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { MOCK_TURBINE } from "../data";

Chart.register(CategoryScale);

export default function Charts() {
  const [chartData, setChartData] = useState({
    labels: MOCK_TURBINE.map((data) => data.name), 
    datasets: [
      {
        label: "Turbine Capacity",
        data: MOCK_TURBINE.map((data) => data.capacity),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  return (
    <div id="chart">
      <BarChart chartData={chartData} />
    </div>
  );
}
