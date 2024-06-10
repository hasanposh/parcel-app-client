import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
const MyReviews = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: myReviews = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["myReviews", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/reviews/${user?.email}`);
      console.log("Response Data:", data);
      return data;
    },
  });
  //   const date = new Date()
  //     console.log(date)
  console.log(myReviews);
  return (
    <div className="w-full p-10 bg-gray-200">
      <h2 className="text-center font-semibold text-4xl py-4">
        Hello! {user?.displayName}, Your reviews are here:
      </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {myReviews.map((review) => (
        <div
          key={review._id}
          className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800"
        >
          <div className="flex justify-center -mt-16 md:justify-end">
            <img
              className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
              alt="Testimonial avatar"
              src={review.userPhoto}
            />
          </div>

          <Rating
            initialRating={review.rating}
            emptySymbol={<FaRegStar className="text-gray-300" size={24} />}
            fullSymbol={<FaStar className="text-yellow-500" size={24} />}
            // fractions={2}
            readonly
          />
          <h2 className="mt-2  font-semibold text-gray-800 dark:text-white md:mt-0">
            Date : {moment(review.date).format("YYYY-MM-DD")}
          </h2>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            {review.feedback}
          </p>

          <div className="flex justify-end mt-4">
            <a
              className="text-lg font-medium text-blue-600 dark:text-blue-300"
              role="link"
            >
              {review.name}
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MyReviews;
