// http://www.omdbapi.com/?i=tt3896198&apikey=3089f95a

moviesHTML = document.querySelector(".movies")



 async function main() {
    const movies = await fetch(`https://www.omdbapi.com/?s=avengers&page=1&apikey=3089f95a`)
    const moviesData = await movies.json()
    const moviesList = moviesData.Search
    moviesHTML.innerHTML = moviesList.map((movie) => moviesShow(movie)).join('')
   
}


function moviesShow(movie) {
    return `<div class="movie">
    <figure class="movie__img--wrapper">
      <img src="${movie.Poster}" alt="" class="movie__img">
    </figure>
    <div class="movie__description">
    <p class="movie__name">${movie.Title}</p>
    <p class="movie__date">${movie.Year}</p>
  </div>
  </div>`;
}
main()