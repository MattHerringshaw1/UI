
const newsUL = document.getElementById("newsUL")

const newsItems = news.articles.map(function(results) {
    return `
    <li>
        <h3>Title: ${results.title}</h3>
        <p>${results.author}</p>
        <p>${results.description}</p>
        <a href="${results.url}">Follow Link to Article</a>
        <img src="${results.urlToImage} alt="Broken Link"/>
        <p>Published At: ${results.publishedAt}</p>
    </li>
    `
})

newsUL.innerHTML = newsItems.join("")
