
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
        <div id="phone-container">
            <li>
                <label class="title">Movie Name: ${movie.Title}</label>
            </li>
            <li>
                <img class="pic"src = ${movie.Poster} />
            </li>
        </div>
        `
    })

    superHeroMoviesUL.innerHTML = movieItems.join("")
}
            // insert above after getting poster img
            // <li>
            //     <label onclick='getMovieInfo("${movie.imdbID}")'>
            //     </label>
            // <li/>



// const movieInfo = document.getElementById("movieInfo")
// function getMovieInfo(movieId) {
    
//     let request = new XMLHttpRequest
//     request.addEventListener("load", function() {
//         const result = JSON.parse(this.responseText)
//         let oneMovie = result
//         movieId(oneMovie)
//     })

//     request.open("GET", `http://www.omdbapi.com/?i=${movieId}&apikey=22b16cb1`)
//     request.send()  

// }    

