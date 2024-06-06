import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const useAllDeliveryMen = () => {
    const axiosSecure = useAxiosSecure();
  const { data : allDeliveryMen =[], refetch, isLoading } = useQuery({
    queryKey: ["allDeliveryMen"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `${import.meta.env.VITE_API_URL}/allDeliverymen`
      );

      return data;
    },
  });
  return [allDeliveryMen, refetch, isLoading];
};

export default useAllDeliveryMen;