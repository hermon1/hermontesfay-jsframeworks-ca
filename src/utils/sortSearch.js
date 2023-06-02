/**
 *
 * @param {array} results  the results of the search
 * @returns an sorted array of products based on the search term
 */
function sortSearch(results, searchTerm) {
    const sortedSearch = [...results].sort((productA, productB) => {
      const productATitle = productA.title.toLowerCase();
      const productBTitle = productB.title.toLowerCase();
      const aIndex = productATitle.indexOf(searchTerm);
      const bIndex = productBTitle.indexOf(searchTerm);
      if (aIndex < bIndex) {
        return -1;
      }
      if (aIndex > bIndex) {
        return 1;
      }
      return 0;
    });
    return sortedSearch;
  }
  export default sortSearch;
  