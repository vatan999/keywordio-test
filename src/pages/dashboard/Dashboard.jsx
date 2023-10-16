import { Stack } from "@mui/material";
import SortedTable from "../../components/SortedTable";
import ChartSection from "../../components/ChartSection";

const Dashboard = () => {
  return (
    <Stack direction={"row"} padding={"10px"} gap={"20px"} justifyContent={"space-between"}>
      <SortedTable />
      <ChartSection />
    </Stack>
  );
};

export default Dashboard;
