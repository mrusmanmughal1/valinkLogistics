import { createContext, useContext, useState } from "react";

const MainPostalCodes = createContext();

const PostalCodeProvider = ({ children }) => {
  const [ALLPostalCodes, setPostalCOdes] = useState({});  

  return (
    <MainPostalCodes.Provider value={{ ALLPostalCodes, setPostalCOdes }}>
      {children}
    </MainPostalCodes.Provider>
  );
};

const ListPostalCodes = () => {
  const AllCodes = useContext(MainPostalCodes);
  return AllCodes;
};

export { PostalCodeProvider, ListPostalCodes };
