import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import payment from "../../../public/payment.json";
import Lottie from "lottie-react";
import CheckoutForm from "./CheckoutForm";
import {  useParams } from "react-router-dom";
import useUserMyParcels from "@/hooks/useUserMyParcels";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";

// TODO : add pk
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const PaymentPage = () => {
  const [parcels, isLoading, refetch] = useUserMyParcels();
  const { id } = useParams();
  //   console.log(id);
  //   console.log(parcels);
  const parcel = parcels?.find((p) => p._id === id);
//   const price = parcel.calcPrice;
  if (isLoading) {
    return <LoadingSkeleton />;
  }
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Lottie animationData={payment} style={{ width: 300, height: 300 }} />
      <h2 className="text-center font-semibold text-4xl py-4">
        Please Complete the Payment :
      </h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={parcel.calcPrice} />
      </Elements>
    </div>
  );
};

export default PaymentPage;
