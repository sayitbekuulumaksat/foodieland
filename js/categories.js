let categoriesData = [
  {
    image: `./assets/img/categories/Breakfast.svg`,
    title: "Breakfast",
    color: "#7082461A",
  },
  {
    image: "./assets/img/categories/Vegan.svg",
    title: "Vegan",
    color: "#6CC63F1A",
  },
  {
    image: "./assets/img/categories/Meat.svg",
    title: "Meat",
    color: "#CC261B1A",
  },
  {
    image: "./assets/img/categories/Dessert.svg",
    title: "Dessert",
    color: "#F09E001A",
  },
  {
    image: "./assets/img/categories/lunch.svg",
    title: "Lunch",
    color: "#0000000D",
  },
  {
    image: "./assets/img/categories/Chocolate.svg",
    title: "Chocolate",
    color: "#0000000D",
  },
];
let categories = document.querySelector(".categories__menu");

let categoriesPart = `
`;
for (item of categoriesData) {
  categoriesPart += `<a href="#"  class = "categories__item"> <img src= "${item.image}"/> <h3 style="--item-color: ${item.color}">${item.title}</h3> </a>`;
}
categories.innerHTML = categoriesPart;
