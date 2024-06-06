import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";


const AdminAllUsersTableRow = ({ user }) => {
  const { name, numberOfParcels } = user;

  

  // console.log(user)
  const phoneNumber = `01${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10
  )}${Math.floor(Math.random() * Math.pow(10, 7))
    .toString()
    .padStart(7, "0")}`;


  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>+88 {phoneNumber}</TableCell>

      <TableCell>{numberOfParcels}</TableCell>
      <TableCell>৳ {}</TableCell>
      <TableCell>
       <Button>Heelo</Button>
      </TableCell>
    </TableRow>
  );
};

export default AdminAllUsersTableRow;
