var video = document.getElementById("v");
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

video.src = "https://raw.githack.com/bl17ak2/psychic-broccoli/refs/heads/main/IMG_8500-ezgif.com-gif-to-webm-converter.webm";
video.loop = true;
video.muted = true;
video.removeAttribute("controls");

function resize() {
  var scale = 1.5;
  canvas.width = Math.floor(window.innerWidth / scale);
  canvas.height = Math.floor(window.innerHeight / scale);
}
window.addEventListener("resize", resize);
resize();

ctx.imageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;

document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});

function block(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}
["click","mousedown","mouseup","mousemove","touchstart","touchmove","touchend","keydown","keyup","dragstart","selectstart","contextmenu"].forEach(function (t) {
  canvas.addEventListener(t, block);
});

function draw() {
  if (video.readyState >= 2 && video.videoWidth && video.videoHeight) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  }
  requestAnimationFrame(draw);
}

video.addEventListener("loadeddata", function () {
  video.play();
  draw();
});
