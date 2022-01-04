let total = 0
let items = [{
    itemName: "Apple",
    price: "1.99",
    counter: 0,
    dblClkCounter: 0
}, {
    itemName: "Bannana",
    price: "2.99",
    counter: 0,
    dblClkCounter: 0
}, {
    itemName: "Gold",
    price: "150",
    counter: 0,
    dblClkCounter: 0
}, {
    itemName: "Orange",
    price: "1.10",
    counter: 0,
    dblClkCounter: 0
}, {
    itemName: "Piccles",
    price: ".99",
    counter: 0,
    dblClkCounter: 0
}, {
    itemName: "News-Paper",
    price: "0",
    counter: 0,
    dblClkCounter: 0
}]


function priceInput() {
    numStr = document.querySelector('#item-price').value
    if (/^[0-9]+$/.test(numStr) || /^\d+\.\d+$/.test(numStr)) {
        return numStr
    } else {
        alert('Not a correct price. Please try again.')
        return false
    }
}

function createItem() {
    if (document.querySelector('#item-name').value == '') {
        closeAddItemWindow()
    } else if (priceInput()) {
        items.push({
            itemName: document.querySelector('#item-name').value,
            price: document.querySelector('#item-price').value,
            counter: 0,
            dblClkCounter: 0
        })
        updateLocaleStorage()
        putItems()
        closeAddItemWindow()
    } else { addItemWindow }
}

function submitBtn() {
    createItem()
}

function closeAddItemWindow() {
    document.getElementById("add-item").innerHTML = ''
}

document.getElementById("add-item-btn").addEventListener('click', addItemWindow)

function addItemWindow() {
    document.getElementById("add-item").innerHTML = ` <div class="add-item">
    <label for="item-name">Item Name: </label>
    <input type="text" id="item-name" name="item-name">
    <br>
    <label for="item-price">Item Price: </label>
    <input type="number" id="item-price" name="item-price">
    <button id="add">Add</button>
</div>`
    document.querySelector("#add").addEventListener('click', submitBtn)
}

const addItemToCart = (event) => {
    itemEl = items.find(({ itemName }) => itemName == event.target.id);
    if (!document.getElementById(`${event.target.id}-cart`)) {
        const cartList = document.getElementById("cart")
        const cartItemEl = document.createElement("li")
        cartItemEl.id = `${itemEl.itemName}-cart`
        cartItemEl.className = "item item-cart";
        cartItemEl.ondblclick = removeFromCart;
        cartList.appendChild(cartItemEl);
    }
    itemEl.counter++
        priceUpdate(itemEl)
    updateLocaleStorage()
}

const removeFromCart = (event) => {
    let itemEl = items.find(item => item.itemName == event.target.innerHTML.split(' ')[0])
    let clkCounter = itemEl.dblClkCounter
    if (clkCounter == 0) {
        items.find(item => item.itemName == event.target.innerHTML.split(' ')[0]).counter--
            items.find(item => item.itemName == event.target.innerHTML.split(' ')[0]).dblClkCounter++
            priceUpdate(itemEl)
        updateLocaleStorage()
    }
    if (clkCounter == 1 || items.find(item => item.itemName == event.target.innerHTML.split(' ')[0]).counter == 0) {
        items.find(item => item.itemName == event.target.innerHTML.split(' ')[0]).counter = 0
        items.find(item => item.itemName == event.target.innerHTML.split(' ')[0]).dblClkCounter = 0
        document.getElementById(event.target.id).remove()
        priceUpdate()
        updateLocaleStorage()
    }
}

function putItems() {
    if (localStorage.list) {
        items = JSON.parse(localStorage.list)
        cartRefresh()
    }
    for (i = 0; i < items.length; i++) {
        const itemList = document.getElementById("item-list")
        const itemEl = document.createElement("li")
        itemEl.id = items[i].itemName
        itemEl.className = "item";
        itemEl.onclick = addItemToCart;
        itemList.appendChild(itemEl);
        document.getElementById(itemEl.id).innerHTML = `${itemEl.id} || ${items[i].price}$ `;
    }
}

putItems()

function cartRefresh() {
    console.log(items.filter(a => a.counter > 0));
    console.log(items.filter(a => a.counter > 0).forEach(a => itemToCart));
    let oldCart = items.filter(a => a.counter > 0)
    oldCart.forEach(itemToCart)
}

function itemToCart(item) {
    let itemEl = items.find(({ itemName }) => itemName == item.itemName);
    const cartList = document.getElementById("cart")
    const cartItemEl = document.createElement("li")
    cartItemEl.id = `${itemEl.itemName}-cart`
    cartItemEl.className = "item item-cart";
    cartItemEl.ondblclick = removeFromCart;
    cartList.appendChild(cartItemEl);
    priceUpdate(itemEl)
}

function priceUpdate(item) {
    try {
        document.getElementById(`${item.itemName}-cart`).innerHTML = `${item.itemName} || Quantity:${item.counter}`;
    } catch (error) {
        console.log('item deleted');
    }
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        sum += (Number(items[i].price) * items[i].counter)
    };
    total = sum
    document.getElementById("total").innerHTML = `Total ${total.toFixed(2)}$`
}

function updateLocaleStorage() {
    localStorage.list = JSON.stringify(items)
}