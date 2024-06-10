import LoadingSkeleton from "@/components/LoadingSkeleton/LoadingSkeleton";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const TopDeliveryMan = () => {
  const axiosSecure = useAxiosSecure();

  const { data: topThreeDeliveryMan = [], isLoading } = useQuery({
    queryKey: ["topThreeDeliveryMan"],
    // enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/top-delivery-man`);
      return data;
    },
  });

  console.log(topThreeDeliveryMan);
  if (isLoading) return <LoadingSkeleton />;
  return (
    <div className="scroll-pb-20">
      <h2 className="text-2xl md:text-4xl text-red-500 font-lato font-bold text-center">
        Our Top Three Delivery Men
      </h2>
      <div className="flex flex-col gap-10 md:flex-row justify-center">
        {topThreeDeliveryMan.map((d) => (
          <div
            key={d._id}
            className="flex flex-col max-w-md p-6 dark:bg-gray-50 dark:text-gray-800 space-y-4"
          >
            <img
              src={d.imageUrl}
              alt=""
              className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square"
            />
            <div>
              <h2 className="text-xl font-semibold">{d.name}</h2>
              <span className="block pb-2 text-sm dark:text-gray-600">
               Total Bookings : {d.totalBookings}
              </span>
              <p>
              Average Rating : {d.avgRating.toFixed(1)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeliveryMan;
