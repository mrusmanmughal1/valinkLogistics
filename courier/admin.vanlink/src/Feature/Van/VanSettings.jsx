import React from "react";
import { useGetAllVans } from "../../Services/Vehicles/useGetAllVans";
import Loader from "../../UI/Loader";
import one from "../../assets/Cars/1.png";
import two from "../../assets/Cars/2.png";
import three from "../../assets/Cars/3.png";
import four from "../../assets/Cars/4.png";
import five from "../../assets/Cars/5.png";
import six from "../../assets/Cars/6.png";
const VanSettings = () => {
  const { data, isPending, isError } = useGetAllVans();
  const cars = [one, five, three, four, two, six];

  if (isPending)
    return (
      <div className="py-20">
        <Loader />
      </div>
    );
  return (
    <div>
      <p className="text-2xl capitalize font-bold">Vehicles Setting </p>
      <div className="grid grid-cols-3 gap-10 p-10">
        {data.data.map((val, i) => {
          return (
            <div className="border rounded-md p-2 shadow-md bg-white ">
              <form action="">
                <div className="flex items-center justify-center">
                  <img src={cars[i]} alt="" width={200} />
                </div>
                <div className="p-2 space-y-1">
                  <div>
                    {" "}
                    <span className="font-bold">Van ID :</span> {val._id}
                  </div>
                  <div>
                    {" "}
                    <span className="font-bold">Ideal Use : </span>{" "}
                    {val.idealUses}
                  </div>
                  <div>
                    {" "}
                    <span className="font-bold"> Size :</span> {val.size}
                  </div>
                  <div>
                    {" "}
                    <span className="font-bold"> Type : </span>
                    {val.typeofVan}
                  </div>
                  <div>
                    {" "}
                    <span className="font-bold"> Best for :</span> {val.weight}
                  </div>
                  <div className="grid">
                    <label htmlFor="" className="font-bold">
                      Rate Per Mile
                    </label>
                    <input
                      type="text"
                      value={val.mileRate}
                      className="w-full border p-2"
                    />
                  </div>
                  <div className="grid">
                    <label htmlFor="" className="font-bold">
                      Minimum Charge
                    </label>
                    <input
                      type="text"
                      value={val.minCharge}
                      className="w-full border p-2"
                    />
                  </div>
                  <div className="flex items-center pt-2 justify-center">
                    <button
                      className="bg-blue-primary w-full text-white px-6 py-2 rounded-md"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VanSettings;
