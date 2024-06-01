import Footer from "@/components/common/Footer/Footer";
import Navbar from "@/components/common/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="font-ubuntu">
      {/* nav */}
      <Navbar />
      {/* outlet */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
