import { createContext, useState, useEffect } from "react";
import useApi from "../../hooks/useApi";
import { baseUrl } from "../../utils/constants";

export const ProductContext = createContext();

const Products = ({ children }) => {
  const { data, isLoading, isError } = useApi(baseUrl);
  const [dataToDisplay, setDataToDisplay] = useState([]);
  useEffect(() => {
    setDataToDisplay(data);
  }, [data]);

  const reset = () => {
    setDataToDisplay(data);
  };
  return (
    <ProductContext.Provider
      
      value={{
        dataToDisplay,
        isLoading,
        isError,
        reset,
        setDataToDisplay,
        data,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default Products;
