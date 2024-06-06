import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";

const AdminAllUsersTableRow = ({user}) => {
    const {name} = user
    // console.log(user)
    return (
        <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{}</TableCell>

      <TableCell>{}</TableCell>
      <TableCell>৳ {}</TableCell>
      <TableCell>{}</TableCell>
      <TableCell>
        <Button className="px-5">Manage</Button>
      </TableCell>
    </TableRow>
    );
};

export default AdminAllUsersTableRow;