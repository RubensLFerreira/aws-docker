import { loadCardsPopular } from './cards.js';

export const handlePopular = async () => {
  const searchResult = document.querySelector('#search-result');
  try {
    const response = await fetch(`http://44.202.205.50:8080/popular`);
    const data = await response.json();
    loadCardsPopular(data.results);
  } catch (error) {
    console.error(error);
    searchResult.innerHTML = `
      <div class="alert alert-danger" role="alert">${error.message}</div>
    `;
  }
};
