import { useRef, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSkeleton from "@/components/LoadingSkeleton/LoadingSkeleton";

const CountUpPage = () => {
  const [counterOn, setCounterOn] = useState(false);

  const axiosSecure = useAxiosSecure();

  const { data, isLoading } = useQuery({
    queryKey: ["countUp"],
    // enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/stats-home`);
      return data;
    },
  });
  const handleEnter = () => {
    setCounterOn(true);
  };

  const handleExit = () => {
    setCounterOn(false);
  };
  //   const [state, setState] = useState(null);
  //   const ref = useRef(0);

  //   const accumulator = end / 200;

  //   const updateCounterState = ()=>{
  //     if(ref.current < end){
  //         const result =
  //     }
  //   }
  // console.log(data, isLoading);
  if (isLoading) return <LoadingSkeleton />;
  return (
    <ScrollTrigger onEnter={handleEnter} onExit={handleExit}>
      <div className="md:px-12 my-10">
        <h2 className="text-2xl md:text-4xl text-red-500 font-lato font-bold text-center">
          Our Website Performance Metrics
        </h2>
        <section className="p-6 my-6">
          <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-orange-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="h-9 w-9 dark:text-gray-100"
                >
                  <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="text-3xl font-semibold leading-none">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={data.totalBookings}
                      duration={3}
                      delay={0}
                    />
                  )}
                </p>
                <p className="capitalize">Our Bookings</p>
              </div>
            </div>
            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-orange-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="h-9 w-9 dark:text-gray-100"
                >
                  <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                  <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                  <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="text-3xl font-semibold leading-none">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={data.deliveredBookings}
                      duration={3}
                      delay={0}
                    />
                  )}
                </p>
                <p className="capitalize">Delivered Parcels</p>
              </div>
            </div>

            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-orange-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="h-9 w-9 dark:text-gray-100"
                >
                  <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                  <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                  <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                  <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
                </svg>
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="text-3xl font-semibold leading-none">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={data.nonAdminUsersCount}
                      duration={3}
                      delay={0}
                    />
                  )}
                </p>
                <p className="capitalize">Our Happy Users</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ScrollTrigger>
  );
};

export default CountUpPage;
