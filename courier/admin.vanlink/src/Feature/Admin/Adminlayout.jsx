import { Outlet } from "react-router-dom";
import AdminSideBar from "../../UI/AdminSideBar";
import Header from "../../Components/Header";

const Adminlayout = () => {
  return (
    <div>
      <Header />

      <div className="flex         mx-auto   md:flex-row flex-col  ">
        <div className="   flex  py-10  z-10   bg-blue-950 text-white px-6  md:absolute md:w-16 md:hover:w-max overflow-hidden">
          <AdminSideBar />
        </div>
        <div className=" ml-16 w-full  mx-auto bg-gray-50 p-6 pb-20  ">
          {" "}
          {<Outlet />}
        </div>
      </div>
    </div>
  );
};

export default Adminlayout;
