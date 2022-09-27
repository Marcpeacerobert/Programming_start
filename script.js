const cartItems = [];
let isTotalHidden = true;
const brunch = {name: "Brunch", Price: 200};
const lunch ={name: "Lunch", Price: 300};

function addToCart(item) {
    cartItems.push(item);
    document.getElementById("itemCounter").innerHTML = cartItems.length;
    showTotal();
}

function clickCart() {
    isTotalHidden = !isTotalHidden;
    showTotal();
}

function showTotal() {
    const orderTotal = 
    document.getElementById("orderTotal");
    orderTotal.innerHTML =""

    if (isTotalHidden === false) {
        let total = 0;
        for (let i=0; i< cartItems.length; i++) {
            total += cartItems[i].Price;             
        }
        orderTotal.innerHTML += "Total: €" + total;
    }
}

function calculateTotal(total) {
    let shipping;
    if (total >=500) {
        shipping = 0;
    } else {
        shipping = 50;
    }
    return shipping;
}