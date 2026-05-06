'use strict';

document.getElementById('btn').addEventListener('click', function() {
  const value = document.getElementById('search').value;
  const results = document.getElementById('results');
  results.innerHTML = '';

  fetch(`https://api.chucknorris.io/jokes/search?query=${value}`)
    .then(response => response.json())
    .then(data => {
      data.result.forEach(function(joke) {
        results.innerHTML += `
          <article>
            <p>${joke.value}</p>
          </article>
        `;
      });
    });
});