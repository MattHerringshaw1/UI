

const postsUL = document.getElementById("postsUL")

for(let index = 0; index < posts.length; index++) {
    const post = posts[index]
    const postItem = `
        <li>
            <h2>${post.title}</h2>
            <h4>${post.body}</h4>
            
        </li>
    `
    postsUL.insertAdjacentHTML("beforeend", postItem)
}





