let recipes = document.querySelector(".recipes__items");

let recipesData = [
  {
    id: "0",
    image: "./assets/img/recipes/snack1.png",
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    iconTime: "./assets/img/recipes/Timer.svg",
    textTime: "30 Minutes",
    iconKnife: "./assets/img/recipes/ForkKnife.svg",
    textKnife: "Snack",
  },
  {
    id: "1",
    image: "./assets/img/recipes/fish.png",
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    iconTime: "./assets/img/recipes/Timer.svg",
    textTime: "30 Minutes",
    iconKnife: "./assets/img/recipes/ForkKnife.svg",
    textKnife: "Fish",
  },
  {
    id: "2",
    image: "./assets/img/recipes/breakfast.png",
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    iconTime: "./assets/img/recipes/Timer.svg",
    textTime: "30 Minutes",
    iconKnife: "./assets/img/recipes/ForkKnife.svg",
    textKnife: "Breakfast",
  },
  {
    id: "3",
    image: "./assets/img/recipes/healthy.png",
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    iconTime: "./assets/img/recipes/Timer.svg",
    textTime: "30 Minutes",
    iconKnife: "./assets/img/recipes/ForkKnife.svg",
    textKnife: "Healthy",
  },
  {
    id: "4",
    image: "./assets/img/recipes/meat.png",
    title: "Chicken Meatballs with Cream Cheese",
    iconTime: "./assets/img/recipes/Timer.svg",
    textTime: "30 Minutes",
    iconKnife: "./assets/img/recipes/ForkKnife.svg",
    textKnife: "Meat",
  },
  {
    advertising: "./assets/img/recipes/Ads.png",
  },
  {
    id: "6",
    image: "./assets/img/recipes/sweet.png",
    title: "Fruity Pancake with Orange & Blueberry",
    iconTime: "./assets/img/recipes/Timer.svg",
    textTime: "30 Minutes",
    iconKnife: "./assets/img/recipes/ForkKnife.svg",
    textKnife: "Sweet",
  },
  {
    id: "7",
    image: "./assets/img/recipes/snack2.png",
    title: "The Best Easy One Pot Chicken and Rice",
    iconTime: "./assets/img/recipes/Timer.svg",
    textTime: "30 Minutes",
    iconKnife: "./assets/img/recipes/ForkKnife.svg",
    textKnife: "Snack",
  },
  {
    id: "8",
    image: "./assets/img/recipes/noodlist.png",
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    iconTime: "./assets/img/recipes/Timer.svg",
    textTime: "30 Minutes",
    iconKnife: "./assets/img/recipes/ForkKnife.svg",
    textKnife: "Noodles",
  },
];
let favorites = [];

let recipesContent = `
`;

for (let item of recipesData) {
  if (item["advertising"]) {
    recipesContent += `
         <a href="#" class="recipes__item advertising"><img src="${item.advertising}"/> </a>`;
  } else {
    recipesContent += `
     <div class="recipes__item">
      <img src="${item.image}" alt="${item.title}" class="recipes__item_image" />
      
      <h3 class="recipes__name">${item.title}</h3>
      <div class="recipes__info">
        <img src="${item.iconTime}" alt="Time Icon" class="recipes__icon" />
        <span>${item.textTime}</span>
        <img src="${item.iconKnife}" alt="Knife Icon" class="recipes__icon" />
        <span>${item.textKnife}</span>
      </div>
    <div class = "recipes__like">
      <img id = "${item.id}"  src="./assets/img/recipes/heart.svg" class="recipes__like--icon" />
    </div>
    </div>
   `;
  }
}
recipes.innerHTML = recipesContent;
let favoritesNum = document.querySelector(".favorites__number");
let heart = document.querySelectorAll(".recipes__like--icon");
function hearClick(e) {
  if (e.target.src.includes("redheart")) {
    e.target.src = "./assets/img/recipes/heart.svg";
    favorites = favorites.filter((item) => item.id !== e.target.id);
    console.log(e.target.id);
  } else {
    e.target.src = "./assets/img/recipes/redheart.svg";

    favorites.push(recipesData[e.target.id]);
    // console.log(favorites);
  }
  favoritesNum.innerHTML = favorites.length;
  if (favoritesNum.textContent == 0) {
    favoritesNum.innerHTML = "";
  }
}
heart.forEach((icon) => {
  icon.addEventListener("click", hearClick);
});
