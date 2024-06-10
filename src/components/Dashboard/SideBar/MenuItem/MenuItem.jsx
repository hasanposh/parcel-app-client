import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <li className="dark:bg-gray-100 ">
      <NavLink
        to={address}
        end
        className={({ isActive }) =>
          `flex items-center p-2 transition-colors duration-300 transform text-xs md:text-base  hover:bg-white   hover:text-yellow-400 ${
            isActive ? "bg-white  text-red-500" : "text-white"
          }`
        }
      >
        <Icon className="w-5 h-5" />

        <span className="mx-4 font-medium">{label}</span>
      </NavLink>
    </li>
  );
};

MenuItem.propTypes = {
    label: PropTypes.string,
    address: PropTypes.string,
    icon: PropTypes.elementType,
  }


export default MenuItem;
