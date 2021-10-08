const listUI = document.querySelector(".list");
const modal = document.querySelector(".modal");
const header = document.querySelector(".cartBtn");
const closeBtn = document.querySelector(".root .close");
const cartBtn = document.querySelector(".root-nav-header .cartBtn");
const productList = document.getElementsByClassName(".list");
let newCartList = [];

const createUI = (product) => {
  let childrenUI = "";
  product.product.forEach((item) => {
    let { name, brand, description, price } = item;
    let ui = `<div class="product-content">
    <img src="./phone.png"></img>
    <div class="line"></div>
    
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

    childrenUI += ui;
  });
  listUI.innerHTML = childrenUI;
};
const getProduct = () => {
  var data = fetch("./products.json")
    .then((response) => response.json())
    .then((item) => item);

  return data;
};

document.addEventListener("DOMContentLoaded", () => {
  var products = getProduct();
  products.then((product) => createUI(product));
});

listUI.addEventListener("click", (e) => {
  if (e.target.className === "orderBtn") {
    e.target.addEventListener("click", () => {
      var selecteditem = e.target.parentNode.parentNode.parentNode;

      listUI.childNodes.forEach((item, index) => {
        if (selecteditem === item) {
          if (!newCartList.includes(index)) {
            newCartList.push(index);
          }
        }
      });
      localStorage.setItem("cartList", newCartList);
    });
  }
});

cartBtn.addEventListener("click", (e) => {
  modal.classList.toggle("hidden");
});

closeBtn.addEventListener("click", (e) => {
  modal.classList.toggle("hidden");
});
