import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserBookAParcel = () => {
  const { user } = useAuth();
  const [price, setPrice] = useState();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  //   console.log(user)
  //   function for price
  const calcPrice = (weight) => {
    if (weight == 1) {
      setPrice(weight * 50);
    }
    if (weight == 2) {
      setPrice(weight * 100);
    }
    if (weight >= 2) {
      setPrice(weight * 150);
    }
  };
  const onWeightChange = (event) => {
    const parcelWeight = event.target.value;
    console.log(parcelWeight);
    if (parcelWeight) {
      calcPrice(parseInt(parcelWeight));
    }
  };

  //   const getNext7thDay =(dateStr)=> {
  //     // Parse the input date
  //     const date = new Date(dateStr);

  //     // Add 7 days
  //     date.setDate(date.getDate() + 7);

  //     // Format the result back to YYYY-MM-DD
  //     const year = date.getFullYear();
  //     const month = String(date.getMonth() + 1).padStart(2, '0');
  //     const day = String(date.getDate()).padStart(2, '0');

  //     return `${year}-${month}-${day}`;
  //   }

  //   Post
  const { mutateAsync } = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axiosSecure.post(`/bookings`, formData);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Successfully Add Your Booking.");
      navigate("/dashboard/myParcels");
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const email = user?.email;
    const phoneNumber = form.phoneNumber.value;
    const parcelType = form.parcelType.value;
    const parcelWeight = form.parcelWeight.value;
    const calcPrice = price;
    const receiversName = form.receiversName.value;
    const receiversPhoneNumber = form.receiversPhoneNumber.value;
    const parcelDeliveryAddress = form.parcelDeliveryAddress.value;
    const requestedDeliveryDate = form.requestedDeliveryDate.value;
    const deliveryAddressLatitude = form.deliveryAddressLatitude.value;
    const deliveryAddressLongitude = form.deliveryAddressLongitude.value;
    const bookingStatus = "pending";
    const BookingDate = new Date();
    // const approximateDeliveryDate = getNext7thDay(requestedDeliveryDate)
    // console.log(approximateDeliveryDate)

    // const approximateDeliveryDate = new Date();
    // approximateDeliveryDate.setDate(approximateDeliveryDate.getDate() + 7);

    // console.log(approximateDeliveryDate);
    const formData = {
      name,
      email,
      phoneNumber,
      parcelType,
      receiversName,
      receiversPhoneNumber,
      parcelDeliveryAddress,
      requestedDeliveryDate,
      deliveryAddressLatitude,
      deliveryAddressLongitude,
      BookingDate,
      parcelWeight,
      calcPrice,
      //   currentDate,
      bookingStatus,
    };
    console.table(formData);

    // post on database
    try {
      await mutateAsync(formData);
    } catch (err) {
      console.log(err);
    }
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
              onChange={onWeightChange}
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
          <div>
            <label className="text-gray-700  ">Price</label>
            <input
              readOnly
              value={price}
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
