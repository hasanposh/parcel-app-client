import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const MyReviews = () => {
    const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: myReviews =[], isLoading, error } = useQuery({
    queryKey: ["myReviews", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/reviews/${user?.email}`);
      console.log("Response Data:", data);
      return data;
    },
  });
  console.log(myReviews)
    return (
        <div>
            <h2>My reviews</h2>
        </div>
    );
};

export default MyReviews;