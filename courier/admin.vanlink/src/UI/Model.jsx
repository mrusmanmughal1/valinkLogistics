import { BiCross } from "react-icons/bi";
import { CgCross } from "react-icons/cg";
import { GiCancel } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Model = ({ children, model, setmodel, index }) => {
  const handlemodel = () => {
    setmodel(false);
  };
  return (
    <div
      className={`fixed         top-0 w-full left-0 ${
        model ? "block" : "hidden"
      }`}
      id="modal"
    >
      <div className="flex items-center justify-center      pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-950 opacity-80" />
          <div
            className="inline-block   mt-10 bg-white rounded-lg text-left overflow-y-auto shadow-xl transform transition-all     md:w-3/4  sm:w-full "
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="flex justify-end pt-4 pe-4">
              <button className=" " onClick={handlemodel}>
                <ImCross className="text-black hover:text-red-900  " />
              </button>
            </div>
            {children}
          </div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
      </div>
    </div>
  );
};

export default Model;
