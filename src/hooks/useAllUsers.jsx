import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: allUsers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `${import.meta.env.VITE_API_URL}/allUsers`
      );

      return data;
    },
  });
  return [allUsers, refetch, isLoading];
};

export default useAllUsers;
