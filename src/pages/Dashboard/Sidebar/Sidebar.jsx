import { Link } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";
import { PiUserFill } from "react-icons/pi";
import { ImStatsDots } from "react-icons/im";
import {
  FaBoxOpen,
  FaBoxes,
  FaUsers,
  FaUserAstronaut,
  FaClipboardList,
} from "react-icons/fa";
import { TbStarsFilled } from "react-icons/tb";
import MenuItem from "@/components/Dashboard/SideBar/MenuItem/MenuItem";

import useAuth from "@/hooks/useAuth";
import useRole from "@/hooks/useRole";
const Sidebar = () => {
  const { logOut } = useAuth();
  const [role] = useRole();
  // const role = "admin";
  // console.log(role)
  const navLinks = (
    <>
      {/* admin */}
      {role === "admin" && (
        <>
         <MenuItem
        label="All Parcels"
        address="/dashboard/allParcels"
        icon={FaBoxes}
      />
      <MenuItem
        label="All Users"
        address="/dashboard/allUsers"
        icon={FaUsers}
      />
      <MenuItem
        label="All Delivery Men"
        address="/dashboard/allDeliveryMen"
        icon={FaUserAstronaut}
      />
      <MenuItem
        label="Statistics"
        address="/dashboard/statistics"
        icon={ImStatsDots}
      />
        </>
      )}
      {/* user  */}
      {role === "user" && (
        <>
          <MenuItem label="My Profile" address="/dashboard/userProfile" icon={PiUserFill} />
          <MenuItem
            label="Book a Parcel"
            address="/dashboard/bookAParcel"
            icon={TfiWrite}
          />
          <MenuItem
            label="My Parcels"
            address="/dashboard/myParcels"
            icon={FaBoxOpen}
          />
        </>
      )}
      {/* delivery man */}
      {role === "delivery man" && (
        <>
          <MenuItem
            label="My Delivery List"
            address="/dashboard/myDeliveryList"
            icon={FaClipboardList}
          />
          <MenuItem
            label="My Reviews"
            address="/dashboard/myReviews"
            icon={TbStarsFilled}
          />
        </>
      )}
    </>
  );
  return (
    <div className="min-h-screen p-3 space-y-2 md:w-72 bg-red-900 text-white">
      <div className="divide-y h-full flex flex-col justify-between">
        <div>
          <Link
            to={"/"}
            className="flex items-center justify-center gap-2 bg-white text-black py-2"
          >
            <img
              className="w-auto h-7 "
              src="/bike-city-svgrepo-com.svg"
              alt=""
            />
            <h2 className=" md:text-3xl font-bold">
              Quo<span className="text-red-500">k</span>
              <span className="text-yellow-500">k</span>a
            </h2>
          </Link>
          <ul className="pt-2 pb-4 space-y-1 text-md">{navLinks}</ul>
        </div>
        <div>
          <ul className="pt-4 pb-2 space-y-1 text-md">
            <li>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current "
                >
                  <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                  <rect width="32" height="64" x="256" y="232"></rect>
                </svg>
                <button onClick={() => logOut()}>Logout</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
