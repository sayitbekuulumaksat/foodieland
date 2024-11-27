const delicious = document.querySelector(".delicious__block");

let deliciousData = [
  {
    image: "./assets/img/delicious/mixed.png",
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    iconTime: "./assets/img/delicious/time-icon.svg",
    textTime: "30 Minutes",
    iconKnife: "./assets/img/delicious/ForkKnife.svg",
    textKnife: "Snack",
  },
  {
    image: "./assets/img/delicious/big.png",
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    iconTime: "./assets/img/delicious/time-icon.svg",
    textTime: "35 Minutes",
    iconKnife: "./assets/img/delicious/ForkKnife.svg",
    textKnife: "Fish",
  },
  {
    image: "./assets/img/delicious/vegetarian.png",
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    iconTime: "./assets/img/delicious/time-icon.svg",
    textTime: "30 Minutes",
    iconKnife: "./assets/img/delicious/ForkKnife.svg",
    textKnife: "Breakfast",
  },
  {
    image: "./assets/img/delicious/mushroom.png",
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    iconTime: "./assets/img/delicious/time-icon.svg",
    textTime: "30 Minutes",
    iconKnife: "./assets/img/delicious/ForkKnife.svg",
    textKnife: "Healthy",
  },
  {
    image: "./assets/img/delicious/asparagus.png",
    title: "Chicken Meatballs with Cream Cheese",
    iconTime: "./assets/img/delicious/time-icon.svg",
    textTime: "30 Minutes",
    iconKnife: "./assets/img/delicious/ForkKnife.svg",
    textKnife: "Meat",
  },
  {
    image: "./assets/img/delicious/raindow.png",
    title: "Fruity Pancake with Orange & Blueberry",
    iconTime: "./assets/img/delicious/time-icon.svg",
    textTime: "30 Minutes",
    iconKnife: "./assets/img/delicious/ForkKnife.svg",
    textKnife: "Sweet",
  },
  {
    image: "./assets/img/delicious/spicy.png",
    title: "The Best Easy One Pot Chicken and Rice",
    iconTime: "./assets/img/delicious/time-icon.svg",
    textTime: "30 Minutes",
    iconKnife: "./assets/img/delicious/ForkKnife.svg",
    textKnife: "Snack",
  },
  {
    image: "./assets/img/delicious/chips.png",
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    iconTime: "./assets/img/delicious/time-icon.svg",
    textTime: "30 Minutes",
    iconKnife: "./assets/img/delicious/ForkKnife.svg",
    textKnife: "Noodles",
  },
];

let deliciousContent = `
`;

for (let item of deliciousData) {
  deliciousContent += `
     <div class="delicious__item">
      <img src="${item.image}" alt="${item.title}" class="delicious__item_image" />
      
      <h3 class="delicious__name">${item.title}</h3>
      <div class="delicious__info">
        <img src="${item.iconTime}" alt="Time Icon" class="delicious__icon" />
        <span>${item.textTime}</span>
        <img src="${item.iconKnife}" alt="Knife Icon" class="delicious__icon" />
        <span>${item.textKnife}</span>
      </div>
    <div class = "delicious__like">
      <img  src="./assets/img/delicious/heart.svg " class="delicious__like--icon" />
    </div>
    </div>
   `;
}

delicious.innerHTML = deliciousContent;

let like = document.querySelectorAll(".delicious__like--icon");
function hearClick(e) {
  if (e.target.src.includes("redheart")) {
    e.target.src = "./assets/img/delicious/heart.svg";
  } else {
    e.target.src = "./assets/img/delicious/redheart.svg";
  }
}
like.forEach((icon) => {
  icon.addEventListener("click", hearClick);
});
