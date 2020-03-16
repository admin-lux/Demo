const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 遍历图片并添加至缩略图区 */
for (let i = 1; i <= 5; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', "images/pic" + i + ".jpg");
  thumbBar.appendChild(newImage);
}
let thumbImages = thumbBar.childNodes;
thumbImages.forEach(image => {
  image.onclick = function(e) {
    displayedImage.setAttribute("src", e.target.src);
  }
})

/* 编写 变亮/变暗 按钮 */
let clazz = btn.getAttribute("class");
if (clazz === "dark") {
  btn.setAttribute('class', "light");
  btn.textContent = "变量";
  overlay.style.backgroundColor = rgb(0, 0, 0, 0.5);
} else {
  btn.setAttribute('class', "dark");
  btn.textContent = "变暗";
  overlay.style.backgroundColor = rgb(0, 0, 0, 0);
}