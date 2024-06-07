import LoadingSkeleton from "@/components/LoadingSkeleton/LoadingSkeleton";
import useAllDeliveryMen from "@/hooks/useAllDeliveryMen";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AdminAllDeliverMenTableRow from "@/components/Dashboard/Tables/AdminAllDeliverMenTableRow";

const AllDeliveryMen = () => {
  const [data, refetch, isLoading] = useAllDeliveryMen();
  console.log(data)
   //   console.log(allUsersOnly);
   if (isLoading) {
    return <LoadingSkeleton />;
  }
  return (
    <div className="w-full p-10 bg-gray-200">
      <h2 className="text-center font-semibold text-4xl py-4">All Delivery Men :</h2>
      <Table>
        <TableCaption>A list of your delivery men.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Delivery Man's Name</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Number of parcel delivered</TableHead>
            <TableHead>Average review</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((deliveryMan) => (
            <AdminAllDeliverMenTableRow key={deliveryMan._id} deliveryMan={deliveryMan} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllDeliveryMen;
