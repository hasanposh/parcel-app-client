import useAllUsers from "@/hooks/useAllUsers";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AdminAllUsersTableRow from "@/components/Dashboard/Tables/AdminAllUsersTableRow";
import LoadingSkeleton from "@/components/LoadingSkeleton/LoadingSkeleton";
import useAllDeliveryMen from "@/hooks/useAllDeliveryMen";

const AllUsers = () => {
  const [allUsers, refetch, isLoading] = useAllUsers();
  
  //   console.log(data);
  //   const allUsersOnly = data?.filter((d) => d.role === "user");
  //   console.log(allUsersOnly);
  if (isLoading) {
    return <LoadingSkeleton />;
  }
  return (
    <div className="w-full p-10 bg-gray-200">
      <h2 className="text-center font-semibold text-4xl py-4">All Users :</h2>
      <Table>
        <TableCaption>A list of your recent Bookings.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>User Name</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Number of parcel Booked</TableHead>
            <TableHead>Total Spent Amount</TableHead>
            <TableHead>Actoins</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allUsers?.map((user) => (
            <AdminAllUsersTableRow key={user._id} user={user} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllUsers;
