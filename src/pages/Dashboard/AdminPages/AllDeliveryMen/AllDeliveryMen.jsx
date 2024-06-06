import useAllDeliveryMen from "@/hooks/useAllDeliveryMen";

const AllDeliveryMen = () => {
  const [data, refetch, isLoading] = useAllDeliveryMen();
  console.log(data)
  return (
    <div>
      <h2>all delivery men</h2>
    </div>
  );
};

export default AllDeliveryMen;
