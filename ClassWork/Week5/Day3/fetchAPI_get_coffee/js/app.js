
async function getOrders() {
  try {
    let response = await fetch("https://troubled-peaceful-hell.glitch.me/orders")
    let orders = await response.json()
    console.log(orders)
  } catch {
    console.log(error)
  }
}

getOrders()