import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
// import { useLogin } from "../Services/Login/useLogin";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
// import MiniLoader from "./MiniLoader";
import { LoginSchema } from "../helpers/FormValidation";
import logo from "../assets/Logo-01.png";
import { useLogin } from "../Services/Login/useLogin";
import { getToken } from "../helpers/Helpers";
import MiniLoader from "../UI/MiniLoader";
const credentials = {
  userName: "",
  password: "",
};

const LoginForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const Token = getToken();
    if (Token) {
      navigate("/admin/dashboard");
    }
  }, []);
  const { mutate: Login, isPending } = useLogin();

  const [showPassword, setshowPassword] = useState(false);

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: credentials,
      onSubmit: (values, action) => {
        Login(values);
      },
      validationSchema: LoginSchema,
    });

  return (
    <div className="bg-yellowcolor   h-screen flex justify-center items-center">
      <div
        className={`    shadow-lg  bg-white w-[90%] md:w-[60%] mx-auto  p-10  py-10  `}
      >
        <div
          className={`md:mx-auto    md:w-1/2   lg:w-1/2 xl:w-1/2 text-center flex flex-col justify-center  gap-6`}
        >
          <div className="font-bold text-blue-primary flex justify-center flex-col items-center ">
            <img src={logo} width={250} alt="" className="drop-shadow-lg" />
            Existing Users Login Below
          </div>

          <form onSubmit={handleSubmit}>
            <div className=" flex flex-col gap-6">
              <div className="">
                <input
                  className="border   p-3 font-bold w-full bg-slate-200 "
                  placeholder="User Name or Email Address"
                  name="userName"
                  id="userName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.userName}
                />
                {errors.userName && touched.userName && (
                  <p className="text-start px-1  text-sm font-semibold text-red-600">
                    {errors.userName}
                  </p>
                )}
              </div>
              <div className="">
                <div className="relative">
                  <div className="absolute hover:cursor-pointer right-4 top-1/3 ">
                    {showPassword ? (
                      <FaEyeSlash onClick={() => setshowPassword(false)} />
                    ) : (
                      <FaEye onClick={() => setshowPassword(true)} />
                    )}
                  </div>
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    className="border p-3 w-full  font-bold bg-slate-200 "
                    placeholder="Password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </div>
                {errors.password && touched.password && (
                  <p className="text-start px-1 text-sm font-semibold text-red-600">
                    {errors.password}
                  </p>
                )}
              </div>
            </div>
            <div className={`  flex justify-between text-sm  py-4`}>
              <div className={` flex  items-center font-semibold   gap-2`}>
                <input type="checkbox" name="" id="remember" />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <div className=" font-semibold">
                <NavLink
                  to="/forget-password"
                  className="hover:text-btn-primary"
                >
                  {" "}
                  Forget Password?
                </NavLink>
              </div>
            </div>
            <div className="flex    gap-4 justify-center">
              <div className=" ">
                <button
                  type="submit"
                  disabled={isPending}
                  className="font-bold bg-blue-primary text-white border-btn-primary border-2  px-10  w-full  rounded-md py-4"
                >
                
                  {isPending ? <MiniLoader color='border-blue-400'/> : 'LOGIN'}
                </button>
              </div>
              {/* <div className=" ">
              <NavLink to="/register">
                <button
                  type="button"
                  href=""
                  className=" text-[#4e007a] font-bold rounded-md   px-8   border-btn-primary border-2 py-2 hover:bg-black hover:text-white  transition-all hover:ease-in "
                >
                  REGISTER
                </button>
              </NavLink>
            </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
