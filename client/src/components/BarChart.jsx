import { Bar } from "react-chartjs-2";
export default function BarChart({ chartData, setTurbineClickedCoords, setTurbineIdClicked }) {
  return (
    <div className="chart-container">
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
            title: {
              display: true,
              text: "Turbine Capacity",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
