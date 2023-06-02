import { useState, useEffect, useRef } from "react";
import searchFilter from "../utils/searchFilter";
import sortSearch from "../utils/sortSearch";

/**
 *
 * @param {array} dataToDisplay the data that needs to be filtered and sorted
 * @param {} location the react routing location to enable useEffect to run on page change
 * @returns all the functions and values needed to search and manage state
 */
const useSearch = (dataToDisplay, location) => {
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState([]);
  const [focus, setFocus] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const searchResultRef = useRef();
  //both updates search term and filters the data to display based on the search term
  const updateSearch = (e) => {
    //setting state
    setSearch(e.target.value);
    //if nothing is typed in the searchbar, show no results
    if (e.target.value === "") {
      setShowResults([]);
    } else {
      //setting the results to display based on the search term
      let results = dataToDisplay.filter(searchFilter, e.target.value);
      const sortedSearch = sortSearch(results, e.target.value);
      setShowResults(sortedSearch);
    }
  };
  //this function triggers when the searchbar is focused
  const showResult = (e) => {
    setFocus(true);
  };
  //this function triggers when the searchbar is clicked or touched, this is to prevent the searchbar from closing when the user clicks on a search result, especially on mobile
  const clicked = () => {
    setIsClicked(true);
  };
  //this function triggers when the searchbar is blurred, but only if the user has not clicked on a search result
  const hideResult = (e) => {
    if (isClicked) {
      setIsClicked(false);
      return;
    } else if (searchResultRef.current && e.relatedTarget === null) {
      setFocus(false);
    }
  };
  //this useEffect is to reset the conditions when the user navigates to a different page, the setSearch and SetShowResult can be reomved, but it is debatable...
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
