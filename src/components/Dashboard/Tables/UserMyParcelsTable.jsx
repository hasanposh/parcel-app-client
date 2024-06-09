import PropTypes from "prop-types";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const UserMyParcelsTable = ({ parcel, handleDelete }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    _id,
    parcelType,
    requestedDeliveryDate,
    approximateDeliveryDate,
    BookingDate,
    bookingStatus,
    selectedDeliveryMan,
    payment,
  } = parcel;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const email = user?.email;
    const userPhoto = user?.photoURL;
    const rating = Number(form.rating.value);
    const feedback = form.feedback.value;
    const parcelId = _id;

    const reviewInfo = {
      name,
      email,
      userPhoto,
      rating,
      selectedDeliveryMan,
      feedback,
      parcelId,
    };
    // console.table(reviewInfo);
    try {
      const { data } = await axiosSecure.post(`/reviews`, reviewInfo);
      if (data.insertedId) {
        toast.success("Review Posted successfully");
      }
    } catch (err) {
      toast.error(err.message);
      // console.log(err);
    }
    setIsDialogOpen(false);
    // Here you can make an API call to save the reviewInfo data
  };

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
        {bookingStatus === "delivered" && (
          <div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Review</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Give A Review</DialogTitle>
                  <DialogDescription>
                    Let me know how was your delivery service!
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                  <div className="flex items-center gap-4">
                    <img className="size-36" src={user?.photoURL} alt="" />
                    <div className="w-full">
                      <div>
                        <label className="block mb-2 text-sm font-medium">
                          Your Name
                        </label>
                        <input
                          className="block w-full px-4 py-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                          type="text"
                          name="name"
                          value={user?.displayName}
                          readOnly
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium">
                          Your Email Address
                        </label>
                        <input
                          className="block w-full px-4 py-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                          type="email"
                          name="email"
                          value={user?.email}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium">
                      Your Rating
                    </label>
                    <select
                      className="block w-full px-4 py-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                      name="rating"
                      // onChange={(e) => setRating(Number(e.target.value))}
                    >
                      <option value="">Select a rating</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Your Feedback
                    </label>
                    <textarea
                      className="block w-full px-4 py-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                      name="feedback"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Deliver man ID
                    </label>
                    <input
                      className="block w-full px-4 py-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                      value={selectedDeliveryMan}
                      readOnly
                    />
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </TableCell>
      <TableCell>
        {!payment ? (
          <Link
            to={`/dashboard/payment/${_id}`}
            className="px-5 py-3 text-white rounded-md hover:bg-blue-600 bg-blue-400"
          >
            Pay
          </Link>
        ) : (
          <Button
            onClick={() => toast("Payment Complete")}
            className="px-5 py-3 text-white rounded-md hover:bg-blue-600 bg-blue-400"
          >
            Pay
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};

UserMyParcelsTable.propTypes = {
  parcel: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default UserMyParcelsTable;
