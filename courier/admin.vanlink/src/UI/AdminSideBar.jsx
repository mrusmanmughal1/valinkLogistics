import { NavLink, useNavigate } from "react-router-dom";
// import { useUserinfo } from "../Context/Userinfo";
import { MdDashboardCustomize } from "react-icons/md";
import { FaThList } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaNetworkWired } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { clearLocalStorage } from "../helpers/Helpers";
// import { useLogout } from "../Services/Logout/useLogout";
import { CiLogin } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
const AdminSideBar = () => {
  //   const { dispatch } = useUserinfo();
  //   const { mutate: logout } = useLogout();
  const navigate = useNavigate();

  const clearLocalStoragevalue = () => {
    clearLocalStorage();
    navigate("/");
  };

  const AdminNavLinks = [
    {
      title: "Dashboard",
      to: `/admin/dashboard`,
      icon: <MdDashboardCustomize />,
    },

    {
      title: "All Quotations",
      to: `/admin/all-quotations`,
      icon: <FaThList />,
    },

    // { title: "Candidates Lists", to: `/admin/candidates`, icon: <FaThList /> },

    // {
    //   title: "Approved Jobs List",
    //   to: `/admin/jobs`,
    //   icon: <FaNetworkWired />,
    // },

    {
      title: "Vehicles",
      to: `/admin/vehicles-settings`,
      icon: <BsPersonWorkspace />,
    },
    {
      title: "Settings",
      to: "/admin/settings",
      icon: <IoSettingsSharp />,
    },
  ];
  return (
    <div className="relative w-full pe-3 ">
      <div className="   mx-auto    ">
        <ul className={`flex flex-col    gap-2 pt-8`}>
          {AdminNavLinks.map((NavValue, i) => {
            const { title, icon, to } = NavValue;
            return (
              <li key={i} className=" md:py-3    ">
                <NavLink
                  to={to}
                  className="flex admin  gap-4 text-lg hover:text-yellowcolor   items-center"
                >
                  <span className="text-2xl">{icon} </span> {title}
                </NavLink>
              </li>
            );
          })}

          <button
            className="  flex gap-2 items-center  md:py-3  lg:py-4 text-start"
            onClick={clearLocalStoragevalue}
          >
            <span>
              {" "}
              <IoMdLogOut className="text-white text-3xl" />{" "}
            </span>
            <span>Logout</span>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default AdminSideBar;
