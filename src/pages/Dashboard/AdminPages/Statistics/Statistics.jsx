import BarChart from "@/components/Dashboard/Statistics/BarChart";
import LoadingSkeleton from "@/components/LoadingSkeleton/LoadingSkeleton";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Statistics = () => {
  const axiosSecure = useAxiosSecure();
  const [chartData, setChartData] = useState();

  const { data, isLoading } = useQuery({
    queryKey: ["bookingByDate"],
    // enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/stats`);
      return data;
    },
  });
  console.log(data);
  useEffect(() => {
    setChartData({
      series: [
        {
          data: data?.map((d) => d.count),
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            borderRadiusApplication: "end",
            horizontal: true,
          },
        },
        title: {
            text: "Chart that shows date by bookings",
            align: "left",
          },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: data?.map((d) => d._id),
        },
      },
    });
  }, [data]);

  if (isLoading) return <LoadingSkeleton />;

  return (
    <div className="w-full p-10 bg-gray-200">
      <h2 className="text-center font-semibold text-4xl py-4">
        Current Stats of Your Site:
      </h2>
      <div className="w-3/4 mx-auto py-10">
      

        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={350}
        />
      </div>
      <BarChart />
    </div>
  );
};

export default Statistics;
