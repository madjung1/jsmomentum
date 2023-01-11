const images = [
    "img_file/img1.jpg",
    "img_file/img2.jpg",
    "img_file/img3.jpg",
    "img_file/img4.jpg",

];
const choseImage = Math.floor(Math.random()*images.length);
const bgImage = document.createElement("img");
bgImage.src = images[choseImage];
console.log(bgImage);
document.body.appendChild(bgImage);