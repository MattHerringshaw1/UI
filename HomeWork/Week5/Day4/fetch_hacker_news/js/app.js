
const articleId = document.getElementById("articleId")

async function getId() {
    const url = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    // try {
        let response = await fetch(url)
        let articleId = await response.json()
        console.log(articleId)

        const mapping = articleId.map((val) => {console.log(val);})
        
        

//     } catch {
//         console.log(error)
//     }
}

getId()




const articleUL = document.getElementById("articleUL")

async function getNewsArticle() {

    const url = `https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty`

    // try {
        let response = await fetch(url)
        let articles = await response.json()
        console.log(articles)

        for (const [key, value] of Object.entries(articles)) {
            if (key === "id") {
                // value = [value];
                // console.log(value)

            }

        //     return value.map(item, index) => <p key={index}> {item.name}</p>

        


        let article = Object.entries(articles)
        console.log(article)

        articleUL.innerHTML = article.by


        let info = article.map(function(result) {
            return `
            <li>
                <a href="${result.url}">${result.title}</a>
                <h6>Created by: ${result.by}</h6>
                <label>Date: ${result.time}</label>

            </li>
            `
        })
        articleUL.innerHTML = info.join("")

    }
    // } catch {
    //     console.log(error)
    // }

}
getNewsArticle()

