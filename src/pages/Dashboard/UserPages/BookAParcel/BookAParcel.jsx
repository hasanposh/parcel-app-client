import UserBookAParcel from "@/components/Dashboard/Forms/UserBookAParcel";

const BookAParcel = () => {
  return (
    <div className="relative w-full p-10 bg-gray-200">
      <UserBookAParcel />
      <img
        className="absolute bottom-0 right-10 size-60"
        src="/bike_png1.png"
        alt=""
      />
    </div>
  );
};

export default BookAParcel;
