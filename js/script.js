
let userInfo = document.querySelector ("#user_info")
let userD = document.querySelector ("#user")
let links = document.querySelector ("#links")

if (localStorage.getItem("username")){
    links.remove()
    userInfo.style.display ="flex"
    userD.innerHTML = localStorage.getItem("username")
}



let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click", function (){
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";
    } , 1500)
})

let allProducts = document.querySelector(".products")
let products = [
    {
        id:1,
        title: "oppo reno 7",
        color: "black",
        imageUrl : "images/oppo reno 7.jpg" , 
        description : "the new mobile from oppo company"
    },
    {
        id:2,
        title: "i phone 13",
        color: "red",
        imageUrl : "images/IPhone-13.jpg" , 
        description : "the new mobile from i phone company"
    },
    {
        id:3,
        title: "watch32",
        color: "blue",
        imageUrl : "images/w32.jpg" , 
        description : "the new brand from this watch"
    },
    {
        id:4,
        title: "car19",
        color: "grey",
        imageUrl : "images//car19.jpg" , 
        description : "the new brand from this car"
    },
]
function drawItems (){
    let y = products.map((item) => {
        return `
        <div class="product_item">
        <img class="product_item_img" src="${item.imageUrl}" alt="">
        <div class="product_item_desc">
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            <span>${item.color}</span>
        </div>
        <div class="product_item_action">
         <button class="add_to_cart" onClick="addToCart(${item.id})">Add To Cart</button>
         <i class="far fa-heart fav"></i>
        </div>
    </div>
        `
    })
    allProducts.innerHTML = y;
}
drawItems ()




let cartProductDiv = document.querySelector(".carts_products div")
let badge = document.querySelector(".badge")


// let addedItem = [];
let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];

if(addedItem) {
    addedItem.map(item => {
        cartProductDiv.innerHTML += `<p>${item.title}</p>`;
    })
    badge.style.display = "block";
    badge.innerHTML = addedItem.length;
}

  if(localStorage.getItem=("username")){ 
        function addToCart(id){
            let choosenItem = products.find((item) => item.id === id );
            cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`;

            addedItem = [...addedItem , choosenItem]
            localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )

            let cartProductsLength = document.querySelectorAll(".carts_products div p")
            badge.style.display ="block";
            badge.innerHTML = cartProductsLength.length;
        }
    }else {
        window.location ="login.html"
    }




let shoppingCartIcon = document.querySelector(".shopping_cart")
let cartsProducts = document.querySelector(".carts_products")
shoppingCartIcon.addEventListener("click", opencart)

function opencart(){
     if(cartProductDiv.innerHTML !=""){
         if(cartsProducts.style.display=="block"){ 
            cartsProducts.style.display="none"
         }else {
            cartsProducts.style.display="block";
         }
     } 
}

