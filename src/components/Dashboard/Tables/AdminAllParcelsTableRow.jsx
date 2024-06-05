import PropTypes from "prop-types";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const AdminAllParcelsTableRow = ({ parcel }) => {
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
      <TableCell>{name}</TableCell>
      <TableCell>{phoneNumber}</TableCell>

      <TableCell>{format(BookingDate, "yyyy-MM-dd")}</TableCell>
      <TableCell>{requestedDeliveryDate}</TableCell>
      <TableCell>৳ {calcPrice}</TableCell>
      <TableCell>{bookingStatus}</TableCell>
      <TableCell>
        <Button className="px-5">Manage</Button>
      </TableCell>
    </TableRow>
  );
};

AdminAllParcelsTableRow.propTypes = {
  parcels: PropTypes.array,
};

export default AdminAllParcelsTableRow;
