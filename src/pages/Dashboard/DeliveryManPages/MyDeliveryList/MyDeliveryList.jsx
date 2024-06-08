import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyDeliveryList = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: myDeliveryList, isLoading, error } = useQuery({
    queryKey: ["myDeliveryList", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/deliveryman/${user?.email}`);
      console.log("Response Data:", data);
      return data;
    },
  });
  console.log(myDeliveryList);
  return (
    <div>
      <h2>My Delivery List</h2>
      /deliveryman/:email
    </div>
  );
};

export default MyDeliveryList;
