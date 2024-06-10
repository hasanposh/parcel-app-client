import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
const phoneNumber = `01${Math.floor(Math.random() * 10)}${Math.floor(
  Math.random() * 10
)}${Math.floor(Math.random() * Math.pow(10, 7))
  .toString()
  .padStart(7, "0")}`;
const AdminAllDeliverMenTableRow = ({ deliveryMan }) => {
  const { name, numberOfParcels, avgRating } = deliveryMan;
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>+88 {phoneNumber}</TableCell>

      <TableCell>{numberOfParcels}</TableCell>
      <TableCell>{avgRating ? avgRating.toFixed(1) : 0}</TableCell>
    </TableRow>
  );
};

export default AdminAllDeliverMenTableRow;
