import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const AdminAllUsersTableRow = ({ user, refetch }) => {
  const { name, totalBookingsCount, totalCalcPrice, email } = user;
  const axiosSecure = useAxiosSecure();

  //   put user role change
  const { mutateAsync } = useMutation({
    mutationFn: async ({ role, email }) => {
      // console.log(role, email);
      const { data } = await axiosSecure.put(`/users/${email}`, { role });
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      refetch();
      toast.success("Successfully Updated the Role");
    },
  });
  const changeRoles = async (role, email) => {
    // console.log(role, email);
    // const role = role;
    // post on database
    try {
      // console.log(role, email);
      await mutateAsync({ role, email });
    } catch (err) {
      console.log(err);
    }
  };
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

      <TableCell>{totalBookingsCount}</TableCell>
      <TableCell>$ {totalCalcPrice}</TableCell>
      <TableCell>
        <Button
          onClick={() => changeRoles("admin", email)}
          variant="destructive"
          className="mr-2"
        >
          Make Admin
        </Button>
        <Button
          onClick={() => changeRoles("delivery man", email)}
          className="bg-yellow-500"
        >
          Make Delivery Man
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default AdminAllUsersTableRow;
