let logo = "./assets/img/header/Foodieland.logo.svg";
let navData = [
  {
    href: "#",
    name: "Home",
  },
  {
    href: "./recipes.html",
    name: "Recipes",
  },
  {
    href: "./blog.html",
    name: "Blog",
  },
  {
    href: "./contact.html",
    name: "Contact",
  },
  {
    href: "./aboutus.html",
    name: "About us",
  },
];
let socialsData = [
  {
    src: "./assets/img/header/facebook.icon.svg",
    alt: "facebook.icon",
  },
  {
    src: "./assets/img/header/twitter.icon.svg",
    alt: "twitter.icon",
  },
  {
    src: "./assets/img/header/instagram.icon.svg",
    alt: "instagram.icon",
  },
];

let header = document.querySelector(".header__content");
let headerPart = `
<a href="#" class="header__logo">
    <img
        class="header__logo_img"
        src="${logo}"
        alt="logo"/>
</a>
<ul class="header__nav">
`;
for (const item of navData) {
  headerPart += `<li class="header__item"><a href='${item.href}' class="header__link">${item.name}</a> </li>`;
}
headerPart += `</ul> <div class="header__socials">`;
for (const item of socialsData) {
  headerPart += `
    <img class="header__icon" src="${item.src}" alt="${item.alt}"/>`;
}
headerPart += `</div>`;
header.innerHTML = headerPart;

navData.shift();
const footer = document.querySelector(".footer__content");
let footerPart = `
<div class = "footer__block">
 <a href="#" class="footer__logo">
    <img
        class="footer__logo_img"
        src="${logo}"
        alt="logo"/>
 </a>
 <p class = " footer__description">Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
</div>
<ul class="footer__nav">
`;
for (const item of navData) {
  footerPart += `<li class="footer__item"><a href='${item.href}' class="footer__link">${item.name}</a> </li>`;
}
footerPart += `</ul> `;
footer.innerHTML = footerPart;


const footerSoc = document.querySelector(".footer__socials");
let footerSocials = ``;
for (const item of socialsData) {
  footerSocials += `
    <img class="footer__icon" src="${item.src}" alt="${item.alt}"/>`;
}
footerSoc.innerHTML = footerSocials;
