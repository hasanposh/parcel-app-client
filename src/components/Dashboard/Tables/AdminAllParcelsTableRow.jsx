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

const AdminAllParcelsTableRow = ({ parcel }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [allDeliveryMen, refetch, isLoading] = useAllDeliveryMen();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const deliveryMenId = formData.get("deliveryMenId");
    const approximateDeliveryDate = formData.get("approximateDeliveryDate");
    console.log({ deliveryMenId, approximateDeliveryDate });
  };
  const {
    name,
    phoneNumber,
    requestedDeliveryDate,
    BookingDate,
    calcPrice,
    //   currentDate,
    bookingStatus,
  } = parcel;
  //   const formated = format(BookingDate, "yyyy-MM-dd");
  //   console.log(today)
  // const dateString = today.toISOString().split('T')[0];
  //   console.log(formated);

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{phoneNumber}</TableCell>

      <TableCell>{format(BookingDate, "yyyy-MM-dd")}</TableCell>
      <TableCell>{requestedDeliveryDate}</TableCell>
      <TableCell>৳ {calcPrice}</TableCell>
      <TableCell>{bookingStatus}</TableCell>
      <TableCell>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Manage</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Manage This Booking</DialogTitle>
              <DialogDescription>
                Assign a Deliveryman for this Parcel.And also set a approximate
                delivery date.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid gap-4 ">
              <div className="flex justify-center items-center gap-4"></div>
              <p>Assign A Delivery Man</p>
              <div>
                <select
                  className="block w-full px-4 py-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  name="selectedRole"
                >
                  {allDeliveryMen.map((deliveryMan) => (
                    <option name={'deliveryMenId'} key={deliveryMan._id} value={deliveryMan._id}>
                      {deliveryMan.name} {deliveryMan._id}
                    </option>
                  ))}
                </select>
              </div>
              <label className="text-gray-700  ">
                Requested Delivery Date :{" "}
                <span className="text-blue-500 hover:underline">
                  {requestedDeliveryDate}
                </span>
              </label>
              <div className="">
                <Label htmlFor="username" className="text-right">
                  Set Approximate Delivery Date
                </Label>
                <input
                  name="approximateDeliveryDate"
                  type="date"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        {/* manage modal end */}
      </TableCell>
    </TableRow>
  );
};

AdminAllParcelsTableRow.propTypes = {
  parcels: PropTypes.array,
};

export default AdminAllParcelsTableRow;
