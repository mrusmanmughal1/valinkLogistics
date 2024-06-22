'use client';
import { useRouter } from 'next/navigation'

const FloatQuote = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/#quote");
  };
  return (
    <div className=" md:block hidden">
      <div className="fixed bottom-[8%]  flex  flex-col gap-2  items-center right-5 bg-blue-primary  px-4 py-5 shadow-2xl  rounded-full text-white font-semibold border-4 border-orange-100">
        <button onClick={handleClick}>Get a Quote ! </button>
      </div>
    </div>
  );
};

export default FloatQuote;
