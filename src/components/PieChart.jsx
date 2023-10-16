import { PieChart } from "@mui/x-charts/PieChart";

export default function Chart({ selectedValue }) {
  const chartData = [
    { id: 0, value: 10, label: "40% male", color: "#0096ff" },
    { id: 1, value: 15, label: "25% unknown", color: "#323c46" },
    { id: 2, value: 20, label: "35% female", color: "#ff823c" },
  ];

  const newData = chartData.filter((point) => point.value === selectedValue);

  const dataToDisplay = selectedValue ? newData : chartData;

  return (
    <PieChart
      series={[
        {
          data: dataToDisplay,
          innerRadius: 65,
          paddingAngle: 2,
        },
      ]}
      width={450}
      height={220}
    />
  );
}
