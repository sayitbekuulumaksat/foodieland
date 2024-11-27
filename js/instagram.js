let instagramData = [
  {
    screen: "./assets/img/instagram/Post.png",
  },
  {
    screen: "./assets/img/instagram/Post(1).png",
  },
  {
    screen: "./assets/img/instagram/Post(2).png",
  },
  {
    screen: "./assets/img/instagram/Post(3).png",
  },
];

let instagram = document.querySelector(".instagram__photos");

let instagramPart = ``;
for (item of instagramData) {
  instagramPart += ` <img src= "${item.screen}" alt="insta-photo" class= "instagram__photos_item "/>`;
}
instagram.innerHTML = instagramPart;
