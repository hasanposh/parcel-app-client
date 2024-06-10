import LoadingSkeleton from "@/components/LoadingSkeleton/LoadingSkeleton";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const axiosSecure = useAxiosSecure();
  const [chartData, setChartData] = useState(null);

  const { data: data = [], isLoading } = useQuery({
    queryKey: ["bookingByDelivery"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/stats-lineChart`);
      return data;
    },
  });

  useEffect(() => {
    if (!isLoading && data.length > 0) {
      setChartData({
        series: [
          {
            name: "Delivery",
            data: data.map((d) => d.totalBookings),
          },
        ],
        options: {
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "straight",
          },
          title: {
            text: "Chart that shows bookings by Delivery",
            align: "left",
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5,
            },
          },
          xaxis: {
            categories: data.map((d) => d.deliveredBookings),
          },
        },
      });
    }
  }, [isLoading, data]);

  if (isLoading) return <LoadingSkeleton />;
  if (!chartData) return null;

  return (
    <div className="md:w-3/4 mx-auto py-10">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default BarChart;
