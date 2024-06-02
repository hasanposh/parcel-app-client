import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [close, setClose] = useState(true);
  const { user, logOut } = useAuth();
  // console.log(user);
  // console.log(close);
  const handleLogOutUser = () => {
    logOut();
    setClose(true);
  };
  const navLinks = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "text-red-500 hover:text-yellow-500"
            : " hover:text-yellow-500"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/dashboard"}
        className={({ isActive }) =>
          isActive
            ? "text-red-500 hover:text-yellow-500"
            : " hover:text-yellow-500"
        }
      >
        Dashboard
      </NavLink>
    </>
  );
  return (
    <div>
      <nav className="relative shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <Link to={'/'} className="flex items-center gap-2">
                <img
                  className="w-auto h-6 sm:h-7"
                  src="bike-city-svgrepo-com.svg"
                  alt=""
                />
                <h2 className="text-4xl font-bold">
                  Quo<span className="text-red-500">k</span>
                  <span className="text-yellow-500">k</span>a
                </h2>
              </Link>

              {/* Mobile menu button  */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setOpen(!open)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden"  */}
            <div
              className={`${
                open && "-my-96"
              } lg:my-0 absolute inset-x-0 z-20 w-full px-6 py-4 top-[72px] transition-all duration-500 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
            >
              <div className="flex text-lg flex-col gap-4 -mx-6 lg:flex-row lg:items-center lg:mx-8">
                {navLinks}
              </div>

              <div className="flex items-center mt-4 lg:mt-0">
                <button
                  className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                  aria-label="show notifications"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {!user ? (
                  <Link
                    to={"/login"}
                    className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-red-50 text-red-600 inline-block"
                  >
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 group-hover:h-full opacity-90"></span>
                    <span className="relative group-hover:text-white">
                      Login
                    </span>
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => setClose(!close)}
                      type="button"
                      className="relative flex items-center focus:outline-none"
                      aria-label="toggle profile dropdown"
                    >
                      <div className="size-14 overflow-hidden border-2 border-gray-400 rounded-full">
                        <img
                          src={user?.photoURL}
                          className="object-cover w-full h-full"
                          alt="avatar"
                        />
                      </div>
                    </button>
                  </div>
                )}
                <div
                  className={`${
                    close ? "-top-[400px]" : "top-[170px] lg:top-[72px]"
                  } flex flex-col gap-2 absolute z-20 border w-3/4 bg-white p-4 rounded-md transition-all duration-500 ease-in-out  `}
                >
                  <p className="font-medium text-red-500">Hello, {user?.displayName}</p>
                  <Link to={"dashboard"} className="hover:underline">
                    Dashboard
                  </Link>
                  <Button
                    variant="destructive"
                    onClick={handleLogOutUser}
                    className="hover:underline"
                  >
                    Log Out
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
