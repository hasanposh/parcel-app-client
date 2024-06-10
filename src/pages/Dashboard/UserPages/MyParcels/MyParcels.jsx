import UserMyParcelsTable from "@/components/Dashboard/Tables/UserMyParcelsTable";
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useUserMyParcels from "@/hooks/useUserMyParcels";
import LoadingSkeleton from "@/components/LoadingSkeleton/LoadingSkeleton";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();


  const [parcels, isLoading, refetch] = useUserMyParcels();
  //   console.log(parcels)
  //   Post
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/bookings/${id}`);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      //   toast.success("Successfully Deleted Your Booking.");
      refetch();
    },
  });
  // delete from database
  const handleDelete = async (id, status) => {
    if (status !== "pending") {
      return toast.error(`Cannot delete if status not pending`);
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await mutateAsync(id);

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } catch (err) {
          console.log(err);
        }
      }
    });
  };
  if (isLoading) {
    return <LoadingSkeleton />;
  }
  return (
    <div className="w-full md:p-10 bg-gray-200">
      <h2 className="text-center font-semibold md:text-4xl py-4">
        Hello! {user?.displayName}, Your Parcels :
      </h2>
      <Table>
        <TableCaption>A list of your recent Bookings.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Parcel Type</TableHead>
            <TableHead>Requested Delivery Date</TableHead>
            <TableHead>Approximate Delivery Date</TableHead>
            <TableHead>Booking Date</TableHead>
            <TableHead>Delivery Men ID</TableHead>
            <TableHead>Booking Status</TableHead>
            <TableHead className="text-center">Actions</TableHead>
            <TableHead>Review</TableHead>
            <TableHead>Payment</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parcels.map((parcel) => (
            <UserMyParcelsTable
              key={parcel._id}
              parcel={parcel}
              handleDelete={handleDelete}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyParcels;
