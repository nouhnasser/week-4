const moviesHTML = document.querySelector(".movies");
let moviesList = [];

async function main(search) {
  let movies = await fetch(
    ` http://www.omdbapi.com/?i=tt3896198&apikey=d90f3a14&s=${search}`
  );
  let moviesData = await movies.json();
  moviesList = moviesData.Search;
  moviesHTML.innerHTML = moviesData.Search.map((movie) =>
    moviesShow(movie)
  ).join("");
}

function searchInput(event) {
  const search = event.target.value;
  document.querySelector('.container').style.display = "block";

  event.preventDefault();
  main(search);
}

function moviesShow(movie) {
  return `<div class="movie">
    <figure class="movie__img--wrapper">
      <img src="${movie.Poster}" alt="" class="movie__img"/>
    </figure>
    <div class="movie__description">
    <p class="movie__name">${movie.Title}</p>
    <p class="movie__date">${movie.Year}</p>
  </div>
  </div>`
}
main();

function showMovies() {
  moviesHTML.style.display = "block";
}