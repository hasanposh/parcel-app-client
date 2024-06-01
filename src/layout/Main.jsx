import Navbar from "@/components/common/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      {/* nav */}
      <Navbar />
      {/* outlet */}
      <Outlet />
      {/* Footer */}
    </div>
  );
};

export default Main;
