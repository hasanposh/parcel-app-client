import PropTypes from "prop-types";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { toast } from "react-toastify";

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
    selectedDeliveryMan,
    payment,
  } = parcel;
  //   const formated = format(BookingDate, "yyyy-MM-dd");
  //   console.log(today)
  // const dateString = today.toISOString().split('T')[0];
  //   console.log(formated);
  console.log(calcPrice);
  return (
    <TableRow>
      <TableCell>{parcelType}</TableCell>
      <TableCell>{requestedDeliveryDate}</TableCell>
      <TableCell>
        {approximateDeliveryDate ? approximateDeliveryDate : "Will be set"}
      </TableCell>
      <TableCell>{format(BookingDate, "yyyy-MM-dd")}</TableCell>
      <TableCell>
        {selectedDeliveryMan ? selectedDeliveryMan : "Will be assigned"}
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
        {payment ? (
          <Button onClick={()=>toast('Payment Complete')} className="px-5 py-3 text-white rounded-md hover:bg-blue-600 bg-blue-400">
            Pay
          </Button>
        ) : (
          <Link
            to={`/dashboard/payment/${_id}`}
            className="px-5 py-3 text-white rounded-md hover:bg-blue-600 bg-blue-400"
          >
            Pay
          </Link>
        )}
      </TableCell>
    </TableRow>
  );
};

UserMyParcelsTable.propTypes = {
  parcels: PropTypes.array,
};

export default UserMyParcelsTable;
