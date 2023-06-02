import { useState, useEffect } from "react";
/**
 *
 * @param {string} url the url to fetch from
 * @description sets 3 states, changes them based on if fetch is loading, it errors out or it is succesfull
 * @returns 3 states, data = fetched data, isLoading = bool, isError = bool
 * taken from moodle, but fixed for this api with the if statement
 */
function useApi(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedData = await fetch(url);
        const json = await fetchedData.json();
        if (fetchedData.ok) {
          setData(json);
          //the api gives an response that is not an error that can be catched by the catch block. this is the case if you make too many requests in a short time.
        } else {
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url]);
  return { data, isLoading, isError };
}
export default useApi;
