// http://www.omdbapi.com/?i=tt3896198&apikey=3089f95a
let moviesHTML = document.querySelector(".movies");
let moviesList = [];

async function main(search) {
  let movies = await fetch(
    https://www.omdbapi.com/?i=tt3896198&apikey=bdab0567&s=${search}
  );
  let moviesData = await movies.json();
  moviesList = moviesData.Search;
  moviesHTML.innerHTML = moviesData.Search.map((movie) =>
    moviesShow(movie)
  ).join("");
}

function searchInput(event) {
  const search = event.target.value;

  event.preventDefault();
  moviesShow(search);
}

function moviesShow(movie) {
  return <div class="movie">
    <figure class="movie__img--wrapper">
      <img src="${movie.Poster}" alt="" class="movie__img"/>
    </figure>
    <div class="movie__description">
    <p class="movie__name">${movie.Title}</p>
    <p class="movie__date">${movie.Year}</p>
  </div>
  </div>;
}
main();

function showMovies() {
  moviesHTML.style.display = "flex";
}