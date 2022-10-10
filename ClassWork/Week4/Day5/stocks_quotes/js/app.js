//step1 input
//step2 button
//step3 store value 
//step4 get value from getStockQuote



const stockPrice = document.getElementById("stockPrice")
const showQuotesBtn = document.getElementById("showQuotesBtn")

showQuotesBtn.addEventListener("click", function() {
    const userInput = document.getElementById("userInput").value
    let quote = getStockQuote(userInput)
    let quotes = `
        Stock: ${quote.name} 
        <br>
        Price: ${quote.price}
        `
    stockPrice.innerHTML = quotes


    setInterval(function() {
    let quote = getStockQuote(userInput)
    let quotes = `
        Stock: ${quote.name} 
        <br>
        Price: ${quote.price}
        `
    stockPrice.innerHTML = quotes
    }, 3000)

})











// const newsUL = document.getElementById("newsUL")

// const newsItems = news.articles.map(function(results) {
//     return `
//     <li>
//         <h3>Title: ${results.title}</h3>
//         <p>${results.author}</p>
//         <p>${results.description}</p>
//         <a href="${results.url}">Follow Link to Article</a>
//         <img src="${results.urlToImage} alt="Broken Link"/>
//         <p>Published At: ${results.publishedAt}</p>
//     </li>
//     `
// })

// newsUL.innerHTML = newsItems.join("")
