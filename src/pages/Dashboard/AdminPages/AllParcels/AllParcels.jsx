import LoadingSkeleton from "@/components/LoadingSkeleton/LoadingSkeleton";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AdminAllParcelsTableRow from "@/components/Dashboard/Tables/AdminAllParcelsTableRow";

const AllParcels = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: allParcels = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["allParcels"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `${import.meta.env.VITE_API_URL}/bookings`
      );
      return data;
    },
  });
  // console.log(allParcels);
  if (isPending) {
    return <LoadingSkeleton />;
  }
  return (
    <div className="w-full p-10 bg-gray-200">
        <h2 className="text-center font-semibold text-4xl py-4">
       All Parcels :
      </h2>
      <Table>
        <TableCaption>A list of your users recent Bookings.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Sender Name</TableHead>
            <TableHead>Sender Phone</TableHead>
            <TableHead>Booking Date</TableHead>
            <TableHead>Requested Delivery Date</TableHead>
            <TableHead>Cost</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Manage Button</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allParcels.map((parcel) => (
            <AdminAllParcelsTableRow key={parcel._id} parcel={parcel} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllParcels;
