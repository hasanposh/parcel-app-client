import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `${import.meta.env.VITE_API_URL}/users`
      );

      return data;
    },
  });
  return [data, refetch, isLoading];
};

export default useAllUsers;
