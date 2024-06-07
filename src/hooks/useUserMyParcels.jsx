import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUserMyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: parcels = [],
    isLoading,
    refetch,
    isError,
    error,
  } = useQuery({
    queryKey: ["my-parcels", user?.email],
    queryFn: async () => {
      try {
        const { data } = await axiosSecure.get(`/bookings/${user?.email}`);
        // console.log("Fetched data:", data); // Log fetched data
        return data;
      } catch (error) {
        console.error("Error fetching data:", error); // Log error if any
        throw error;
      }
    },
  });
  return [parcels, isLoading, refetch, isError, error];
};

export default useUserMyParcels;
