const container = document.querySelector(".container-modal");

const getOrderProducts = () => {
  var data = fetch("./products.json")
    .then((response) => response.json())
    .then((item) => item);

  return data;
};

const createModal = (product, list) => {
  let childrenUI = "";
  list = list.split(",");

  list.forEach((element) => {
    let ui = "";
    product.product.forEach((item, index) => {
      if (item.id === element) {
        let { name, brand, description, price } = item;
        ui = `<div class="content">
      <img src="./phone.png"></img>
      <div class="detail">
          <p class="name">${name}</p>
          <p class="brand">Brand : ${brand}</p>
          <p class="price">Price : ${price}</p>
  
          <div class="line"></div>
  
          <p class="name">${description}</p>
  
      </div>
    </div>`;
      }
    });
    childrenUI += ui;
  });
  container.innerHTML = childrenUI;
};

document.addEventListener("DOMContentLoaded", () => {
  var products = getOrderProducts();

  var list = localStorage.getItem("cartList");
  products.then((product) => createModal(product, list));
});
