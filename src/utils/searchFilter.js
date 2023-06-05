

function searchFilter(product) {
    let { title } = product;
    const string = this.toLowerCase();
    return title.toLowerCase().indexOf(string) !== -1;
  }
  
  export default searchFilter;
  