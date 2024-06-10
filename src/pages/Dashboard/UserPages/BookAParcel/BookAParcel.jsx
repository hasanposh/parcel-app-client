import UserBookAParcel from "@/components/Dashboard/Forms/UserBookAParcel";

const BookAParcel = () => {
  return (
    <div className="relative w-full md:p-10 bg-gray-200">
      <UserBookAParcel />
      <img
        className="absolute -z-50 md:z-10 bottom-0 right-10 md:size-40 lg:size-60"
        src="/bike_png1.png"
        alt=""
      />
    </div>
  );
};

export default BookAParcel;
