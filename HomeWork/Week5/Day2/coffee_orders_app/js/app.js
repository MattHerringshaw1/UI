
const emailTextBox = document.getElementById("emailTextBox")
const typeTextBox = document.getElementById("typeTextBox")
const sizeTextBox = document.getElementById("sizeTextBox")
const priceTextBox = document.getElementById("priceTextBox")
const placeOrderBtn = document.getElementById("placeOrderBtn")
const viewOrdersBtn = document.getElementById("viewOrdersBtn")
const ordersUL = document.getElementById("ordersUL")

// add button event listener
placeOrderBtn.addEventListener("click", function() {
   // create body
    const order = {
        email: emailTextBox.value,
        type: typeTextBox.value,
        size: sizeTextBox.value,
        price: priceTextBox.value,
    }
    placeOrder(order) 
})

// fetch async function () method:LOAD
async function placeOrder(order) {
    const url = "https://troubled-peaceful-hell.glitch.me/orders"
    const response = await fetch(url, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(order)
    })
    const result = await response.json()
    console.log(result)
}



// add button event lsitener


viewOrdersBtn.addEventListener("click", function() {
// fetch async function () method:GET
    async function getOrders()  {
        const url = "https://troubled-peaceful-hell.glitch.me/orders"
        try {
            let response = await fetch(url)
            let orders = await response.json()

            
            console.log(orders)


            // next map thru the array
            // template literals 

            let order = orders.map(function(result) {
                return `
                <li>
                    <h6>Email: ${result.email}</h6>
                    <h6>Result: ${result.type}</h6>
                    <h6>Size: ${result.size}</h6>
                    <h6>Price: $${result.price}</h6>
                </li>
                `
            })

            // store li into ul

            ordersUL.innerHTML = order.join("")


        } catch {
            console.log(error)
        }
    
    }
    

    // run function
    getOrders() 


})

   
    

// XMLHttpRequest way to GET, POST


//     let request = new XMLHttpRequest()
//     request.addEventListener("load", function() {
//         const result = JSON.parse(this.responseText)
//         if(result.success) {
//             alert(result.message)
//         }
//     })

//     request.open("POST", url)
//     request.setRequestHeader("Content-Type", "application/json")

    // const body = {
    //     email: emailTextBox.value,
    //     type: typeTextBox.value,
    //     size: sizeTextBox.value,
    //     price: priceTextBox.value,
    // }


//     console.log(body)
//     console.log(JSON.stringify(body))
//     request.send(JSON.stringify(body)) 


// })

    


// parseFloat, parseInt to change string into float/ integer