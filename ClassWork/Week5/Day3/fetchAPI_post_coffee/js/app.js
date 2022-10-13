
const placeOrderButton = document.getElementById('placeOrderButton')
placeOrderButton.addEventListener('click', function() {
    const order = {
        email: "steven@gmail.com", 
        type: "Hot Coffee", 
        size: "Small", 
        price: 6
    }   
    placeOrder(order) 
})

async function placeOrder(order) {
    const response = await fetch('https://troubled-peaceful-hell.glitch.me/orders', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(order)
    })
    const result = await response.json()
    console.log(result)
}


