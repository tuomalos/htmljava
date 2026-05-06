'use strict';

document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const value = document.getElementById('query').value;

  fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
    .then(response => response.json())
    .then(data => console.log(data));
});