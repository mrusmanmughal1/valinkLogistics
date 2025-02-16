import { FaCalendarCheck } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
const AdminTopWidgets = () => {
  const Raw = [
    {
      title: "Total Users",
      number: 2,
      icons: <FaUserGraduate />,
    },
    {
      title: "Total  Quotations",
      number: 2,
      icons: <BsBriefcaseFill />,
    },
    {
      title: "Total  Pending",
      number: 2,
      icons: <BsPersonWorkspace />,
    },
    {
      title: "Total Approvals",
      number: 2,
      icons: <FaCalendarCheck />,
    },
  ];
  return (
    <div className="h-screen">
      <div className="flex  justify-between flex-col md:flex-row gap-8       ">
        {Raw?.map((val, i) => {
          const { title, number, icons } = val;
          return (
            <div
              className="bg-white   rounded-md p-8 transition-all duration-500 hover:border-blue-primary  border-2 hover:bg-blue-primary hover:text-white flex-col flex gap-3 font-semibold   shadow-lg  "
              key={i}
            >
              <p className="font-bold uppercase   text-center text-lg">
                {title}
              </p>
              <p className="text-btn-primary  text-2xl   2xl:text-4xl font-bold flex  justify-center gap-4">
                {number} {icons}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminTopWidgets;
