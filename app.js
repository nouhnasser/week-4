// http://www.omdbapi.com/?i=tt3896198&apikey=3089f95a

moviesHTML = document.querySelector(".movies")
 async function main() {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=3089f95a`)
    const moviesData = await movies.json()
    moviesHTML.innerHTML = moviesData.Search.map((movie) => moviesShow(movie)).join()
    console.log(moviesData)
}



main()
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


