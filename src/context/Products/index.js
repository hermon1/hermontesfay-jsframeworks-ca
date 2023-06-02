import { createContext, useState, useEffect } from "react";
import useApi from "../../hooks/useApi";
import { baseUrl } from "../../utils/constants";

export const ProductContext = createContext();
/**
 *
 * @param {object} props  children
 * @returns context provider and children
 */
const Products = ({ children }) => {
  const { data, isLoading, isError } = useApi(baseUrl);
  const [dataToDisplay, setDataToDisplay] = useState([]);
  useEffect(() => {
    setDataToDisplay(data);
  }, [data]);
  //reset function for filters later
  const reset = () => {
    setDataToDisplay(data);
  };
  return (
    <ProductContext.Provider
      //data is added here for when displaying single products, this might be a problem later based on re rendering the home page... will test this later
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
