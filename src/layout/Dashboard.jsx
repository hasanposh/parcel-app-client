import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="md:flex block ">
      {/* sidebar */}
      <Sidebar />
      {/* outlet */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
