/**
 *
 * @param {array} product an array of all the products
 * @returns an filtered array of products based on the search term (this)
 */

function searchFilter(product) {
    let { title } = product;
    const string = this.toLowerCase();
    return title.toLowerCase().indexOf(string) !== -1;
  }
  
  export default searchFilter;
  