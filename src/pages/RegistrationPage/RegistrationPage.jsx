import { getImageFromBB } from "@/api/utils/getImageFromBB";
import LoginWithGoogle from "@/components/LoginwithGoogle/LoginWithGoogle";
import useAuth from "@/hooks/useAuth";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegistrationPage = () => {
  const { setLoading, createUser, updateUserProfile } = useAuth();
  // const today = new Date();
  // console.log(today)
  // console.log(typeof(today))
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    const selectedRole = form.selectedRole.value;
    // console.log(name, email, password, image, selectedRole);

    try {
      setLoading(true);
      const imageUrl = await getImageFromBB(image);
      console.log(imageUrl);

      // user registration
      const result = await createUser(email, password);
      console.log(result);
      // update profile / save user name and photo in firebase
      await updateUserProfile(name, imageUrl);

      // user entry in database
      const userInfo = {
        name,
        imageUrl,
        email,
        role: selectedRole,
      };

      try {
        const { data } = await axiosPublic.post(`/users`, userInfo);
        if (data.insertedId) {
          toast.success("Registered Successfull");
          navigate(location?.state ? location?.state : "/");
        }
      } catch (err) {
        toast.error(err.message);
        // console.log(err);
      }
      navigate(location?.state ? location?.state : "/");
      toast.success("Sign In Successfull");
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-0 items-center flex bg-cover bg-[linear-gradient(45deg,rgba(0,0,0,0.6),rgba(0,0,0,0.3)),url('https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg')]">
      <div className="flex w-full items-center flex-row-reverse  mx-auto overflow-hidden rounded-lg shadow-lg bg-white lg:max-w-4xl">
        <div className="hidden h-full lg:block lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/7203785/pexels-photo-7203785.jpeg"
            alt=""
            className="object-cover"
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
              or Register here
            </p>

            <span className="w-1/5 border-b  lg:w-1/4"></span>
          </div>

          <form onSubmit={handleSubmit} action="">
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium  ">
                Your Name
              </label>
              <input
                className="block w-full px-4 py-2 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="name"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium  ">
                Your Photo
              </label>
              <input
                className="block w-full px-4 py-2 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="file"
                name="image"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium">
                Your Role
              </label>
              <select
                className="block w-full px-4 py-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="selectedRole"
              >
                <option value="user">User</option>
                <option value="delivery man">Delivery Man</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium  ">
                Your Email Address
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
                  Your Password
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
                Register
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>

            <Link
              to={"/login"}
              className="text-xs text-gray-500  hover:underline"
            >
              Have Account? Login
            </Link>

            <span className="w-1/5 border-b  md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
