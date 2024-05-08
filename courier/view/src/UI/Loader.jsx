const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className=" border-orange-600 border-8 rounded-full border-solid  animate-spin  w-20 h-20  border-t-transparent"></div>
      <p className="text-2xl font-bold uppercase text-orange-600">
        Please Wait  ....
      </p>
    </div>
  );
};

export default Loader;
