var cartIcon = document.querySelector(".cartIcon");
const listUI = document.querySelector(".carts");
const cartsUI = document.querySelector(".carts");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const modalOrder = document.querySelector(".modal-products");
const modalUI = document.querySelector(".modal");
let childrenProductsUI = "";
let childrenOrderUI = "";
let orderlist = [];
const allproducts = [];

const createUI = (product) => {
  allproducts.push(product);
  let { name, brand, description, price } = product;
  let ui = `<div class="product-content">
    <img src="./phone.png"></img>
    <div class="line-detail"></div>

    <div class="detail">
    <p class="name">${name}</p>
    <p class="brand">Brand : ${brand}</p>
    <p class="description">Description :  ${description}</p>
    <div class="detail-product">
    <p class="price">${price}</p>
    <button class="orderBtn">Order</button>
    </div>
    </div>

    </div>`;

  listUI.innerHTML = childrenProductsUI += ui;
};

const createModalUI = (product) => {
  let { name, brand, description, price } = product;
  let ui = `<div class="product-content">
    <img src="./phone.png"></img>
    <div class="line-detail"></div>

    <div class="detail">
    <p class="name">${name}</p>
    <p class="brand">Brand : ${brand}</p>
    <p class="description">Description :  ${description}</p>
    <p class="price">${price}</p>  
    </div>

    </div>`;

  modalOrder.innerHTML = childrenOrderUI += ui;
};

// -------------------------EVENTS-------------------------
cartIcon.addEventListener("click", () => {
  modal.classList.toggle("show");

  orderlist.forEach((el) => {
    var id = el;
    createModalUI(allproducts[id]);
  });

  childrenOrderUI = "";
});

close.addEventListener("click", (e) => {
  modal.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("./products.json")
    .then((response) => response.json())
    .then((item) => item.product.forEach((val) => createUI(val)));
});

cartsUI.addEventListener("click", (e) => {
  var nodes = document.querySelectorAll(".carts > .product-content");
  const parent = e.target.parentNode.parentNode.parentNode;
  var index = [].indexOf.call(nodes, parent);
  if (e.target.className === "orderBtn") {
    if (orderlist === null) {
      orderlist.push(index);
    }

    if (!orderlist.includes(index)) {
      orderlist.push(index);
    }
  }
});

// -------------------------end of EVENTS-----------------------------

// --------------------BANNER----------------------
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
// --------------------end of BANNER----------------------
