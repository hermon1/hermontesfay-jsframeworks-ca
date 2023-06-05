import { createContext, useState, useEffect } from "react";
export const NavModalContext = createContext();

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
