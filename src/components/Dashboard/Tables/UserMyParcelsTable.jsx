import PropTypes from "prop-types";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const UserMyParcelsTable = ({ parcel, handleDelete }) => {
  const {
    _id,
    name,
    email,
    phoneNumber,
    parcelType,
    receiversName,
    receiversPhoneNumber,
    parcelDeliveryAddress,
    requestedDeliveryDate,
    deliveryAddressLatitude,
    deliveryAddressLongitude,
    BookingDate,
    parcelWeight,
    calcPrice,
    //   currentDate,
    bookingStatus,
    approximateDeliveryDate,
    deliveryMenId,
  } = parcel;
  //   const formated = format(BookingDate, "yyyy-MM-dd");
  //   console.log(today)
  // const dateString = today.toISOString().split('T')[0];
  //   console.log(formated);
  return (
    <TableRow>
      <TableCell>{parcelType}</TableCell>
      <TableCell>{requestedDeliveryDate}</TableCell>
      <TableCell>
        {approximateDeliveryDate ? approximateDeliveryDate : "Will be set"}
      </TableCell>
      <TableCell>{format(BookingDate, "yyyy-MM-dd")}</TableCell>
      <TableCell>
        {deliveryMenId ? deliveryMenId : "Will be assigned"}
      </TableCell>
      <TableCell>{bookingStatus}</TableCell>
      <TableCell className="flex gap-2">
        <Link to={`/dashboard/updateParcel/${_id}`}>
          <Button variant="outline">Update</Button>
        </Link>
        <Button
          onClick={() => handleDelete(_id, bookingStatus)}
          variant="destructive"
        >
          Cancel
        </Button>
      </TableCell>
      <TableCell>
        {bookingStatus === "delivered" && <Button>Review</Button>}
      </TableCell>
      <TableCell>
        <Button className="px-5">Pay</Button>
      </TableCell>
    </TableRow>
  );
};

UserMyParcelsTable.propTypes = {
  parcels: PropTypes.array,
};

export default UserMyParcelsTable;
