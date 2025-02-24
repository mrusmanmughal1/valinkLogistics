import Logo from "../assets/Logo-01.png";
import { IoMdLogOut } from "react-icons/io";
import { AiOutlineNotification } from "react-icons/ai";
import { clearLocalStorage } from "../helpers/Helpers";
import { useNavigate } from "react-router-dom";
// import { useLogout } from "../Services/Logout/useLogout";
const Header = () => {
  const navigate = useNavigate();
  //   const { mutate: logout  , isLoading} = useLogout();
  const clearLocalStoragevalues = () => {
    clearLocalStorage();
    navigate("/");
  };
  return (
    <div className="shadow-sm">
      <div className="w-11/12 mx-auto">
        <div>
          <div className="flex   justify-between items-center">
            <div className={` "pb-0" : "pb-2 w-36  xl:w-auto "}`}>
              <img src={Logo} alt="" width={100} className="" />
            </div>

            <div className="flex   items-center gap-6">
              <div className="flex gap-2 bg-blue-primary text-white   p-2 md:p-3 rounded-sm ">
                <div className="    ">
                  <p className="  md:text-sm font-bold ">Administrator</p>
                </div>
              </div>
              <div className="flex gap-2 relative">
                <p className="w-2  h-2 left-6 top-1 bg-red-700 absolute  animate-ping rounded-full top"></p>

                <button
                  // disabled={isLoading}
                  onClick={clearLocalStoragevalues}
                  className="md:text-2xl hover:border-red-700 border   transition-all duration-500  hover:border hover:shadow-lg shadow-md p-2 rounded-md hover:text-red-500 cursor-pointer"
                >
                  {" "}
                  <IoMdLogOut />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
