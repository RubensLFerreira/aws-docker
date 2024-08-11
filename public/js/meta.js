export const loadMetas = (searchArticle, meta) => {
  const resultMeta = document.querySelector('.result-meta');
  const divHeader = document.createElement('div');
  divHeader.classList.add('result-meta');

  divHeader.innerHTML = `
    <h3>Result by: <span>${searchArticle}</span></h3>
    <p>Hits: <span>${meta.hits}</span> Time: <span>${meta.time}</span></p>
  `;
  resultMeta.appendChild(divHeader);
};
