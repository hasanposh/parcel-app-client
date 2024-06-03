import useAuth from "@/hooks/useAuth";
import { Link } from "react-router-dom";

const UserBookAParcel = () => {
  const { user } = useAuth();
  //   console.log(user)
  //   function for price
  const calcPrice = (weight) => {
    if (weight == 1) {
      return (weight = weight * 50);
    }
    if (weight == 2) {
      return (weight = weight * 100);
    }
    if (weight >= 2) {
      return (weight = weight * 150);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const email = user?.email;
    const phoneNumber = form.phoneNumber.value;
    const parcelType = form.parcelType.value;
    const parcelWeight = form.parcelWeight.value;
    const price = calcPrice(parcelWeight);
    const receiversName = form.receiversName.value;
    const receiversPhoneNumber = form.receiversPhoneNumber.value;
    const parcelDeliveryAddress = form.parcelDeliveryAddress.value;
    const requestedDeliveryDate = form.requestedDeliveryDate.value;
    const deliveryAddressLatitude = form.deliveryAddressLatitude.value;
    const deliveryAddressLongitude = form.deliveryAddressLongitude.value;
    const BookingDate = new Date();
    const currentDate = new Date().toDateString();
    const bookingStatus = "pending";
    console.table(
      name,
      email,
      phoneNumber,
      parcelType,
      price,
      receiversName,
      receiversPhoneNumber,
      parcelDeliveryAddress,
      requestedDeliveryDate,
      deliveryAddressLatitude,
      deliveryAddressLongitude,
      BookingDate,
      currentDate,
      bookingStatus
    );
  };
  return (
    <section className=" p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <Link to={"/"} className="flex items-center justify-center gap-2">
        <img
          className="w-auto h-6 sm:h-7"
          src="/bike-city-svgrepo-com.svg"
          alt=""
        />
        <h2 className="text-4xl font-bold">
          Quo<span className="text-red-500">k</span>
          <span className="text-yellow-500">k</span>a
        </h2>
      </Link>

      <h1 className="text-xl pt-4 font-bold text-center text-gray-700 dark:text-gray-200">
        Book A Parcel
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
          <div>
            <label className="text-gray-700  ">User Name</label>
            <input
              readOnly
              value={user?.displayName}
              id="username"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 ">Email Address</label>
            <input
              readOnly
              value={user?.email}
              id="emailAddress"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700  ">Phone Number</label>
            <input
              name="phoneNumber"
              id="Phone Number"
              type="number"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700  ">Parcel Type</label>
            <input
              name="parcelType"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700  ">Parcel Weight</label>
            <input
              name="parcelWeight"
              type="number"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700  ">Receivers Name</label>
            <input
              name="receiversName"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700  ">Receivers Phone Number</label>
            <input
              name="receiversPhoneNumber"
              type="number"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700  ">Parcel Delivery Address</label>
            <input
              name="parcelDeliveryAddress"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700  ">Requested Delivery Date</label>
            <input
              name="requestedDeliveryDate"
              type="date"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700  ">Delivery Address Latitude</label>
            <input
              step="any"
              name="deliveryAddressLatitude"
              type="number"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700  ">
              Delivery Address Longitude
            </label>
            <input
              step="any"
              name="deliveryAddressLongitude"
              type="number"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-red-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Book
          </button>
        </div>
      </form>
    </section>
  );
};

export default UserBookAParcel;
