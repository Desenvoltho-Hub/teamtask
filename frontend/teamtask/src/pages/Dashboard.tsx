import { BarPlot, ChartContainer } from "@mui/x-charts";
import CardDashboard from "../components/dashboard/CardDashboard";
import TableTasks from "../components/dashboard/TableTasks";

function Dashboard() {
  return (
    <div>
      <h1 className="text-5xl p-5">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 p-5">
        <CardDashboard title="Todas Tasks" quantidade="0" />
        <CardDashboard title="Concluídas" quantidade="0" />
        <CardDashboard title="Por fazer" quantidade="0" />
      </div>
      <div className="flex">
        <h2 className="text-5xl p-5">Minhas Tasks</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-5">
        <div className="col-span-2 p-5 overflow-y-scroll max-h-96">
          <TableTasks />
        </div>
        <div>
        
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
