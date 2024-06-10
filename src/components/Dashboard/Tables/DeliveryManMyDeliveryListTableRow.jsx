import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DeliveryManMap from "@/components/deliveryManMap/DeliveryManMap";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "@/hooks/useAxiosSecure";
const DeliveryManMyDeliveryListTableRow = ({ delivery, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const {
    approximateDeliveryDate,
    bookedUserName,
    bookedUserPhone,
    deliveryAddressLatitude,
    deliveryAddressLongitude,
    receiversName,
    receiversPhoneNumber,
    requestedDeliveryDate,
    receiversAddress,
    bookingStatus,
    bookingId,
  } = delivery;
  console.log(bookingStatus);

  // Post
  const { mutateAsync } = useMutation({
    mutationFn: async ({ booking }) => {
      console.log(booking);
      const { data } = await axiosSecure.put(`/bookings/deliveryman/${bookingId}`, {
        bookingStatus: booking,
      });
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      //   toast.success("Successfully Deleted Your Booking.");
      refetch();
    },
  });
  // delete from database
  const handleDelete = async () => {
    const booking = "Cancelled";
    if (bookingStatus == "On The Way") {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, cancel it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await mutateAsync({ booking });
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
    } else {
      if (bookingStatus == "Delivered") {
        toast.error("You allready delivered this parcel");
      } else if (bookingStatus == "Cancelled") {
        toast.error("You allready cancelled this parcel");
      }
    }
  };

  const handleUpdate = () => {
    const booking = "Delivered";
    if (bookingStatus == "On The Way") {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delivered it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await mutateAsync({ booking });
            Swal.fire({
              title: "Delivered",
              text: "Your parcel has been delivred.",
              icon: "success",
            });
          } catch (err) {
            console.log(err);
          }
        }
      });
    } else {
      if (bookingStatus == "Delivered") {
        toast.error("You allready delivered this parcel");
      } else if (bookingStatus == "Cancelled") {
        toast.error("You allready cancelled this parcel");
      }
    }
  };

  return (
    <TableRow>
      <TableCell>{bookedUserName}</TableCell>
      <TableCell>{receiversName}</TableCell>
      <TableCell>{bookedUserPhone}</TableCell>
      <TableCell>{requestedDeliveryDate}</TableCell>
      <TableCell>{approximateDeliveryDate}</TableCell>
      <TableCell>{receiversPhoneNumber}</TableCell>
      <TableCell>{receiversAddress}</TableCell>
      <TableCell>
        {/* update modal start */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">View Location</Button>
          </DialogTrigger>
          <DialogContent className="h-2/3">
            <DialogHeader>
              <DialogTitle>Delivery Location</DialogTitle>
              <DialogDescription>
                You can check the parcel delivery location here. Click close
                when you are done.
              </DialogDescription>
            </DialogHeader>
            <DeliveryManMap
              receiversAddress={receiversAddress}
              latitude={deliveryAddressLatitude}
              longitude={deliveryAddressLongitude}
            />
          </DialogContent>
        </Dialog>
        {/* update modal end */}
      </TableCell>
      <TableCell>
        <Button onClick={handleDelete} variant="destructive" className="mr-2">
          Cancel
        </Button>
        <Button onClick={handleUpdate} variant="outline">
          Deliver
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default DeliveryManMyDeliveryListTableRow;
