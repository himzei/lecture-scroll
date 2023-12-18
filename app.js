const canvas = document.querySelector(".video-canvas");
const context = canvas.getContext("2d");

let loadedImagesCount = 0;
let totalImagesCount = 289;

const videoImages = [];

function loadImages() {
  for (let i = 0; i < totalImagesCount; i++) {
    let imgElem = new Image();
    imgElem.src = `./images/frame_${i}.jpg`;
    videoImages.push(imgElem);

    imgElem.addEventListener("load", function () {
      loadedImagesCount++;
      if (loadedImagesCount === totalImagesCount) {
        console.log("이미지 로드 완료");
        init();
      }
    });
  }
}

loadImages();

let progress;
let currentFrame;

function init() {
  context.drawImage(videoImages[0], 0, 0);

  window.addEventListener("scroll", function () {
    progress =
      pageYOffset / (document.body.offsetHeight - this.window.innerHeight);
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;
    this.requestAnimationFrame(function () {
      currentFrame = Math.round((totalImagesCount - 1) * progress);
      context.drawImage(videoImages[currentFrame], 0, 0);
    });
  });
}
