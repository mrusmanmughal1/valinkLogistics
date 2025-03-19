import { FaCalendarCheck, FaCheckSquare } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { useGetAllQuotations } from "../Services/Quotations/useGetAllQuotations";
import { MdCancel } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const AdminTopWidgets = () => {
  const { data, isError, isPending } = useGetAllQuotations("");
  const { statusCounts } = data?.data || {};
  const Raw = [
    {
      title: "Total Accepted",
      number: statusCounts?.Accepted,
      icons: <FaCheckSquare />,
      bg: "hover:bg-green-700",
    },
    {
      title: "Total  Cancelled",
      number: statusCounts?.Cancelled,
      icons: <MdCancel />,
      bg: "hover:bg-red-700",
    },
    {
      title: "Total  Completed",
      number: statusCounts?.Completed,
      icons: <BsPersonWorkspace />,
      bg: "hover:bg-blue-900",
    },
    {
      title: "Total InProgress",
      number: statusCounts?.InProgress,
      icons: <FaCalendarCheck />,
      bg: "hover:bg-yellow-500",
    },
    {
      title: "Total Pending",
      number: statusCounts?.Pending,
      icons: <FaCalendarCheck />,
      bg: "hover:bg-cyan-800",
    },
  ];
  if (isPending) {
    return (
      <div className="h-screen w-full">
        <div className="grid grid-cols-3 w-full gap-8">
          {Raw.map((_, i) => (
            <div
              key={i}
              className="bg-white w-full rounded-md p-8 border-2 hover:text-white flex-col flex gap-3 font-semibold shadow-lg"
            >
              <Skeleton height={20} width="80%" className="mb-4" />
              <Skeleton height={40} width="60%" className="mb-4" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isError)
    return (
      <div className="text-center text-2xl font-bold">
        {" "}
        Sorry Unable To Fetch Data Right Now Try later
      </div>
    );
  return (
    <div className="h-screen  w-full">
      <div className="grid grid-cols-3 w-full gap-8      ">
        {Raw?.map((val, i) => {
          const { title, number, bg } = val;
          return (
            <div
              className={`bg-white w-full  rounded-md p-8 transition-all duration-500    border-2 ${bg} hover:text-white flex-col flex gap-3 font-semibold   shadow-lg  `}
              key={i}
            >
              <p className="font-bold uppercase   text-center text-lg">
                {title}
              </p>
              <p className="text-btn-primary  text-2xl   2xl:text-4xl font-bold flex  justify-center gap-4">
                {number}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminTopWidgets;
