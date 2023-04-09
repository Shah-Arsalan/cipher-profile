import { useContext } from "react";
import { createContext } from "react";
import { useEffect , useState } from "react";
import cipher from "../images/cipher.png"


const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [appear , setAppear] = useState(false)
  const [appearPasswordModal , setAppearPasswordModal] = useState(false)
  const [appearProfileModal , setAppearProfileModal] = useState(false)
  const [image , setImage] = useState(cipher)
const [interestData, setInterestData] = useState()
  return (
    <DataContext.Provider value={{ appear , setAppear ,appearPasswordModal, interestData, setInterestData, setAppearPasswordModal , appearProfileModal , setAppearProfileModal , image , setImage}}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
