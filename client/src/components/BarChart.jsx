import { Bar } from "react-chartjs-2";
export default function BarChart({ chartData, setTurbineClickedCoords, setTurbineIdClicked }) {
  console.log(chartData);
  return (
    <div className="chart-container">
      <h2 id="turbine-capacity-title">Turbine Capacity</h2>
      <Bar
        data={chartData}
        options={{
          onClick: (event, elements) => {
            if (elements.length > 0) {
              console.log(chartData);
              const index = elements[0].index; 
              const clickedLabel = chartData.labels[index];
              const clickedValue = chartData.datasets[0].data[index];
              const coords = chartData.datasets[0].coords[index];
              const turbineId = chartData.datasets[0].id[index];
              console.log(
                `Clicked Bar - Label: ${clickedLabel}, Value: ${clickedValue}`
                
              );
              setTurbineClickedCoords(coords)
              setTurbineIdClicked(turbineId)

             
            }
          },
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
