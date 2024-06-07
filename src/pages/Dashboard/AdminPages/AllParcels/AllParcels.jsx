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
import { useState } from "react";
import { Button } from "@/components/ui/button";

const AllParcels = () => {
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  // console.log(startDate, endDate);
  const {
    data: allParcels = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["allParcels", endDate],

    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `${import.meta.env.VITE_API_URL}/bookings`,
        {
          params: {
            startDate,
            endDate,
          },
        }
      );
      return data;
    },
  });

  // console.log(allParcels);

  const handleSearch = (e) => {
    e.preventDefault();
    refetch();
  };
  if (isPending) {
    return <LoadingSkeleton />;
  }
  return (
    <div className="w-full p-10 bg-gray-200">
      <h2 className="text-center font-semibold text-4xl py-4">All Parcels :</h2>
      <h2 className=" font-semibold text-2xl py-4">Filter parcels by requested date :</h2>
      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex gap-4 ">
         <div className="flex w-full items-center gap-4">
         <label className="block mb-2 text-sm font-medium">From</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md"
          />
         </div>
          <div className="flex items-center w-full gap-4">
          <label className="block mb-2 text-sm font-medium">To</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md"
          />
          </div>
          <Button type="submit">Search</Button>
        </div>
      </form>

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
            <AdminAllParcelsTableRow
              refetch={refetch}
              key={parcel._id}
              parcel={parcel}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllParcels;
