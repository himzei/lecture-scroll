const imgElem = document.querySelector(".video-img");

let loadedImagesCount = 0;
let totalImagesCount = 289;

let videoImages = [];

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
console.log(videoImages);

function init() {
  const container = document.querySelector(".container");
  window.addEventListener("scroll", function () {
    progress =
      this.window.scrollY / (container.offsetHeight - this.window.innerHeight);
    // console.log(progress);
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    this.requestAnimationFrame(function () {
      currentFrame = Math.round((totalImagesCount - 1) * progress);
      imgElem.src = videoImages[currentFrame].src;
    });
  });
}

// window.addEventListener("load", init);
// setImages();
