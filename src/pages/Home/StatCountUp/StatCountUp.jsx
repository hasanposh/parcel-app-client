import LoadingSkeleton from "@/components/LoadingSkeleton/LoadingSkeleton";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

import CountUp from "react-countup";

const StatCountUp = () => {
  const axiosSecure = useAxiosSecure();

  const { data, isLoading } = useQuery({
    queryKey: ["countUp"],
    // enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/stats-home`);
      return data;
    },
  });
  console.log(data, isLoading);
  if (isLoading) return <LoadingSkeleton />;
  return (
    <div>
      {data?.map((p) => (
        <div key={p._id}>
          <CountUp delay={10} end={p.totalBookings} />
        </div>
      ))}
    </div>
  );
};

export default StatCountUp;
