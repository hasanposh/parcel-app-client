import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DeliveryManMyDeliveryListTableRow from "@/components/Dashboard/Tables/DeliveryManMyDeliveryListTableRow";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const MyDeliveryList = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: myDeliveryList = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["myDeliveryList", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/deliveryman/${user?.email}`);
    //   console.log("Response Data:", data);
      return data;
    },
  });
  console.log(myDeliveryList);



  return (
    <div className="w-full md:p-10 bg-gray-200">
      <h2 className="text-center font-semibold md:text-4xl py-4">
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
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {myDeliveryList.map((delivery) => (
            <DeliveryManMyDeliveryListTableRow
              key={delivery._id}
              delivery={delivery}
            //   handleDelete={handleDelete}
            refetch={refetch}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyDeliveryList;
