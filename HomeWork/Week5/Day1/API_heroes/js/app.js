
const superHeroMoviesUL = document.getElementById("superHeroMoviesUL")

function getAllMovies(moviesCallBack) {

    const url = "http://www.omdbapi.com/?s=Iron-Man&apikey=22b16cb1"
    let request = new XMLHttpRequest()
    request.addEventListener("load", function() {
        const result = JSON.parse(this.responseText)
        const movies = result.Search
        moviesCallBack(movies)
    })

    request.open("GET", url)
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
                <img class="pic" src = ${movie.Poster} />
            </li>


            <li>
                <a href="#" onclick="getMovieInfo('${movie.imdbID}')">${movie.Title}</a>
            <li/>

            
            
        </div>
        `
    })
    superHeroMoviesUL.innerHTML = movieItems.join("")
}
       

const movieTitleHeading = document.getElementById("movieTitleHeading")
const movieDirectorHeading = document.getElementById("movieDirectorHeading")

function getMovieInfo(imdbID) {
    
    const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=22b16cb1`
    let request = new XMLHttpRequest()
    request.addEventListener("load", function() {
        const result = JSON.parse(this.responseText)
        movieTitleHeading.innerHTML = result.Title
        movieDirectorHeading.innerHTML = result.Director
    })

    request.open("GET", url)
    request.send()  

}    







// http://www.omdbapi.com/?i=tt1300854&apikey=22b16cb1