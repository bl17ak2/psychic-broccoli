var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
var buffer = null;
var source = null;
var playing = false;
var url = "https://raw.githack.com/bl17ak2/psychic-broccoli/refs/heads/main/z0r-de_4407-_1_.wav";
var cutDuration = 3.55;

function loadAudio() {
  if (buffer) return Promise.resolve(buffer);
  return fetch(url)
    .then(function (r) { return r.arrayBuffer(); })
    .then(function (ab) { return audioCtx.decodeAudioData(ab); })
    .then(function (b) { buffer = b; return buffer; });
}

function startLoop() {
  if (playing) return;
  playing = true;
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  loadAudio().then(function () {
    source = audioCtx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    source.loopStart = 0;
    source.loopEnd = cutDuration;
    source.connect(audioCtx.destination);
    source.start(0, 0);
  });
}

function stopLoop() {
  playing = false;
  if (source) {
    try { source.stop(); } catch (e) {}
    source.disconnect();
    source = null;
  }
}

document.getElementById("play").onclick = function () {
  if (playing) {
    stopLoop();
  } else {
    startLoop();
  }
};
