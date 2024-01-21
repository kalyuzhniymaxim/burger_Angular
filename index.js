document.getElementById('main-action-button').onclick = function(){
    document.getElementById('products').scrollIntoView({ behavior: "smooth"})
}

let links = document.querySelectorAll('.menu-item > a')
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function(){
        document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({ behavior: "smooth"})
    }
    
}

let button = document.getElementsByClassName('product-button')
for (let i = 0; i < button.length; i++) {
    button[i].onclick = function(){
        document.getElementById('order').scrollIntoView({ behavior: "smooth"})
    }
    
}

let burger = document.getElementById('burger');
let phone = document.getElementById('phone');
let namee = document.getElementById('namee');

document.getElementById('order-action').onclick = function() {
    let hasError = false;

    [burger, phone, namee].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = 'red'
            hasError = true
        }else{
            item.parentElement.style.background = ''
            
        }
    })

    if (!hasError) {
        [burger, phone, namee].forEach(item => {
            item.value = ''

        })
        alert('мы вам перезвоним!')
    }

}
let prices = document.getElementsByClassName('products-item-price')
document.getElementById('change-currency').onclick = function(e) {
    let currency = e.target.innerText
    let newCurrncy = '$'
    let coefficent = 1 
    if (currency === '$') {
        newCurrncy = '₽'
        coefficent =80;
    }else if (currency === '₽'){
        newCurrncy = 'BYN'
        coefficent = 3
    }else if (currency === 'BYN'){
        newCurrncy = '€'
        coefficent = 0.8
    }
    else if (currency === '€'){
        newCurrncy = '¥'
        coefficent = 9
    }
    e.target.innerText = newCurrncy
    for (let i = 0; i < prices.length; i++) {
        prices[i].innerHTML = (prices[i].getAttribute('data-base-price')* coefficent).toFixed(0) + " " + newCurrncy;
        
    }
}