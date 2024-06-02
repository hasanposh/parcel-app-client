import LoginWithGoogle from "@/components/LoginwithGoogle/LoginWithGoogle";
import useAuth from "@/hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegistrationPage = () => {
  const { setLoading, signIn } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    try {
      setLoading(true);
      // user sign in
      const result = await signIn(email, password);
      console.log(result);
      navigate("/");
      toast.success("Sign in Successfull");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-0 items-center flex bg-cover bg-[linear-gradient(45deg,rgba(0,0,0,0.6),rgba(0,0,0,0.3)),url('https://images.pexels.com/photos/7130537/pexels-photo-7130537.jpeg')]">
      <div className="flex w-full items-center mx-auto overflow-hidden rounded-lg shadow-lg bg-white lg:max-w-4xl">
        <div className="hidden bg-cover lg:block lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/4498126/pexels-photo-4498126.jpeg"
            alt=""
          />
        </div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="bike-city-svgrepo-com.svg"
              alt=""
            />
          </div>

          <p className="mt-3 text-xl text-center">Welcome to Quokko!</p>
          <div className="flex items-center justify-center">
            <LoginWithGoogle />
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  lg:w-1/4"></span>

            <p className="text-xs text-center text-gray-500 uppercase  ">
              OR LOGIN WITH EMAIL
            </p>

            <span className="w-1/5 border-b  lg:w-1/4"></span>
          </div>

          <form onSubmit={handleSubmit} action="">
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium  "
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                name="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium  "
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                name="password"
              />
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>

            <Link
              to={"/register"}
              className="text-xs text-gray-500 uppercase hover:underline"
            >
              OR Register here
            </Link>

            <span className="w-1/5 border-b  md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
