import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import Lottie from "lottie-react";
import paymentAnimation from "../../../public/paymentAnimation.json";
const PaymentDone = () => {
  const { width, height } = useWindowSize();
  return (
    <div className="flex items-center justify-center w-full">
      <Confetti width={width} height={height} />
      <div className="flex flex-col items-center">
        <h2 className="text-3xl text-blue-500">Payment Successful!</h2>
        <Lottie
          animationData={paymentAnimation}
          style={{ width: 300, height: 300 }}
        />
      </div>
    </div>
  );
};

export default PaymentDone;
