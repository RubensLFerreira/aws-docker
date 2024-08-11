import { loadCards } from './cards.js';
import { loadMetas } from './meta.js';

export const handleSearch = async (event) => {
  event.preventDefault();
  const btnSearch = document.querySelector('#btn-search');
  const searchResult = document.querySelector('#search-result');
  const resultMeta = document.querySelector('.result-meta');
  const publicIP = "52.23.253.158"

  btnSearch.disabled = true;
  searchResult.innerHTML = '';
  resultMeta.innerHTML = '';
  const searchArticle = document.querySelector('#search-article').value;

  try {
    const response = await fetch(
      `http://${publicIP}:8080/articles?q=${searchArticle}`,
    );

    if (!response.ok) {
      throw new Error(`Error request: ${response.statusText}`);
    }

    const data = await response.json();
    loadCards(data.docs);
    loadMetas(searchArticle, data.meta);
  } catch (error) {
    console.error('There was error with request:', error);
    searchResult.innerHTML =
      '<p>An error occurred while fetching articles. Please try again later.</p>';
  } finally {
    btnSearch.disabled = false;
  }
};
