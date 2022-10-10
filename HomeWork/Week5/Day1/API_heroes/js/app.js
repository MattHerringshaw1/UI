
const superHeroMoviesUL = document.getElementById("superHeroMoviesUL")

function getAllMovies(moviesCallBack) {

    let request = new XMLHttpRequest
    request.addEventListener("load", function() {
        const result = JSON.parse(this.responseText)
        console.log(result)
        let movies = result.Search
        moviesCallBack(movies)
    })

    request.open("GET", "http://www.omdbapi.com/?s=Iron-Man&apikey=22b16cb1")
    request.send()  
    }    

    getAllMovies(function(allMovies) {
        displayMovies(allMovies)

})

function displayMovies(movies) {
    const movieItems = movies.map(function(movie) {
        return `
        <li>
            <label>Title: ${movie.Title}</label>
            <img src = ${movie.Poster} />
        </li>
        `
    })

    superHeroMoviesUL.innerHTML = movieItems.join("")
}
