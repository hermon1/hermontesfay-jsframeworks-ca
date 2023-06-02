import { createContext, useState, useEffect } from "react";
export const NavModalContext = createContext();
/**
 *
 * @param {object} props the children prop so context is around most of page
 * @returns context provider and children
 */
const NavModal = ({ children }) => {
  const [modalStatus, setModalStatus] = useState(false);
  let [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onWidthChange = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", onWidthChange);
    return () => {
      window.removeEventListener("resize", onWidthChange);
    };
  }, []);
  return (
    <NavModalContext.Provider value={{ modalStatus, setModalStatus, width }}>
      {children}
    </NavModalContext.Provider>
  );
};

export default NavModal;
