import { Outlet } from "react-router-dom";
import AdminSideBar from "../../UI/AdminSideBar";
import Header from "../../Components/Header";

const Adminlayout = () => {
  return (
    <div>
      <Header />

      <div className="flex         mx-auto   md:flex-row flex-col  ">
        <div className="w-[25%] flex  py-10 ps-10   bg-blue-950 text-white px-4   md:w-1/4">
          <AdminSideBar />
        </div>
        <div className=" md:w-[75%] w-full  mx-auto bg-gray-50 p-10 pb-20  ">
          {" "}
          {<Outlet />}
        </div>
      </div>
    </div>
  );
};

export default Adminlayout;
