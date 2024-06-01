import { useState } from "react";
import { createContext } from "react";

const PostalCodes = createContext();

const PostalCodeProvider = ({ children }) => {
  const [PostalCodes, setPostalCOdes] = useState('sss');

  return (
    <PostalCodes.Provider value={{ PostalCodes, setPostalCOdes }}>
      {children}
    </PostalCodes.Provider>
  );
};

export { PostalCodeProvider, PostalCodes };
