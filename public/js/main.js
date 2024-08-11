import { handleSearch } from './search.js';

document.addEventListener('DOMContentLoaded', () => {
  const btnSearch = document.querySelector('#btn-search');
  btnSearch.addEventListener('click', handleSearch);
});
