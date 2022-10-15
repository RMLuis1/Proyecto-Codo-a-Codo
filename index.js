

const menuButton = document.getElementsByClassName("menu-button")[0];

const navbarLinks = document.getElementsByClassName("navbar-links")[0];

menuButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
const array = [];
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "62a27778ddmshec4a0e1bd2340c0p1961ffjsn88737cf2671c",
    "X-RapidAPI-Host": "ecommerce-store.p.rapidapi.com",
  },
};

const productos = fetch(
  "https://ecommerce-store.p.rapidapi.com/products",
  options
)
  .then((response) => response.json())
  .then(
    (response) => {
     array.push(response.products)
      console.log(array)
    }
    
    )
    .catch((err) => console.error(err));
    
    
    

