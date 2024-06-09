import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MyDeliveryList = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: myDeliveryList = [],
    isLoading,
    error,
  } = useQuery({
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
    <div className="w-full p-10 bg-gray-200">
      <h2 className="text-center font-semibold text-4xl py-4">
        Hello! {user?.displayName}, Your Delivery List :
      </h2>
      <Table>
        <TableCaption>A list of your Delivery.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Booked User’s Name</TableHead>
            <TableHead>Receivers Name</TableHead>
            <TableHead>Booked User’s Phone</TableHead>
            <TableHead>Requested Delivery Date</TableHead>
            <TableHead>Approximate Delivery Date</TableHead>
            <TableHead>Recievers phone number</TableHead>
            <TableHead>Receivers Address</TableHead>
            <TableHead>View Location</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* {myDeliveryList.map((delivery) => (
            // <UserMyParcelsTable
            //   key={delivery._id}
            //   delivery={delivery}
            // />
          ))} */}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyDeliveryList;
