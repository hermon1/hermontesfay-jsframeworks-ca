import { useState, useEffect, useRef } from "react";
import searchFilter from "../utils/searchFilter";
import sortSearch from "../utils/sortSearch";

const useSearch = (dataToDisplay, location) => {
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState([]);
  const [focus, setFocus] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const searchResultRef = useRef();
  
  const updateSearch = (e) => {

    setSearch(e.target.value);
   
    if (e.target.value === "") {
      setShowResults([]);
    } else {
  
      let results = dataToDisplay.filter(searchFilter, e.target.value);
      const sortedSearch = sortSearch(results, e.target.value);
      setShowResults(sortedSearch);
    }
  };
 
  const showResult = (e) => {
    setFocus(true);
  };
  
  const clicked = () => {
    setIsClicked(true);
  };
  
  const hideResult = (e) => {
    if (isClicked) {
      setIsClicked(false);
      return;
    } else if (searchResultRef.current && e.relatedTarget === null) {
      setFocus(false);
    }
  };
  
  useEffect(() => {
    setFocus(false);
    setIsClicked(false);
    setSearch("");
    setShowResults([]);
  }, [location]);
  return {
    setSearch,
    search,
    updateSearch,
    showResults,
    focus,
    setFocus,
    showResult,
    hideResult,
    clicked,
    setShowResults,
    searchResultRef,
  };
};

export default useSearch;
