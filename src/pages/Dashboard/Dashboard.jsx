import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex gap-10">
      {/* sidebar */}
      <Sidebar />
      {/* outlet */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
