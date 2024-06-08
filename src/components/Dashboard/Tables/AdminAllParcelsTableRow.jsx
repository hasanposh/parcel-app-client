import PropTypes from "prop-types";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import useAllDeliveryMen from "@/hooks/useAllDeliveryMen";
import { toast } from "react-toastify";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";

const AdminAllParcelsTableRow = ({ parcel, refetch }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [allDeliveryMen] = useAllDeliveryMen();
  const [selectedDeliveryMan, setSelectedDeliveryMan] = useState("");
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    name,
    phoneNumber,
    requestedDeliveryDate,
    BookingDate,
    calcPrice,
    bookingStatus,
  } = parcel;

  //   Post
  const { mutateAsync } = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axiosSecure.put(
        `/bookings/admin/${_id}`,
        formData
      );
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Successfully Updated This Booking.");
      refetch();
      setIsDialogOpen(false);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const approximateDeliveryDate = e.target.approximateDeliveryDate.value;
    const bookingStatus = "On The Way";
    // console.log({
    //   selectedDeliveryMan,
    //   approximateDeliveryDate,
    //   bookingStatus,
    // });
    // You can now send these values to your API or perform further actions
    const formData = {
      selectedDeliveryMan,
      approximateDeliveryDate,
      bookingStatus,
    };
    // post on database
    try {
      await mutateAsync(formData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeliveryManChange = (value) => {
    setSelectedDeliveryMan(value);
  };

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{phoneNumber}</TableCell>
      <TableCell>{format(BookingDate, "yyyy-MM-dd")}</TableCell>
      <TableCell>{requestedDeliveryDate}</TableCell>
      <TableCell>৳ {calcPrice}</TableCell>
      <TableCell>{bookingStatus}</TableCell>
      <TableCell>
        {bookingStatus == "delivered" ? (
          <Button onClick={() => toast("Parcel delivered")} variant="outline">
            Manage
          </Button>
        ) : (
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">Manage</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Manage This Booking</DialogTitle>
                <DialogDescription>
                  Assign a Deliveryman for this Parcel and set an approximate
                  delivery date.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="flex justify-center items-center gap-4"></div>
                <p>Assign A Delivery Man</p>
                <div>
                  <Select onValueChange={handleDeliveryManChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a delivery man" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Delivery Men</SelectLabel>
                        {allDeliveryMen.map((deliveryMan) => (
                          <SelectItem
                            key={deliveryMan._id}
                            value={deliveryMan._id}
                          >
                            {deliveryMan.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <label className="text-gray-700">
                  Requested Delivery Date:{" "}
                  <span className="text-blue-500 hover:underline">
                    {requestedDeliveryDate}
                  </span>
                </label>
                <div>
                  <Label
                    htmlFor="approximateDeliveryDate"
                    className="text-right"
                  >
                    Set Approximate Delivery Date
                  </Label>
                  <input
                    name="approximateDeliveryDate"
                    type="date"
                    // value={approximateDeliveryDate}
                    // onChange={handleDateChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  />
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </TableCell>
    </TableRow>
  );
};

AdminAllParcelsTableRow.propTypes = {
  parcel: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default AdminAllParcelsTableRow;
