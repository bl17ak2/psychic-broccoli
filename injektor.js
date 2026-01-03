window.AudioContext = window.AudioContext || window.webkitAudioContext;

var cats = new Array(
  "http://i.postimg.cc/bw377BmG/IMG-0263.png",
  "http://i.postimg.cc/jSxVkb4H/IMG-0262.jpg"
);

var i = 0;

var context = null;
var buffer = null;
var source = null;

function navercat() {
  alert("WAT DA CAT");
}

function startLoop() {
  if (!buffer || !context) return;

  if (source) {
    try { source.stop(0); } catch (e) {}
    try { source.disconnect(); } catch (e) {}
  }

  source = context.createBufferSource();
  source.buffer = buffer;
  source.loop = true;
  source.connect(context.destination);
  source.start(0);
}

window.onbeforeunload = function (e) {
  var msg = "are you very sure buddy your going back NOW";
  e = e || window.event;
  if (e) {
    e.returnValue = msg;
  }
  return msg;
};

function initModal() {
  if (window.showModalDialog) {
    try {
      window.showModalDialog(
        "about:blank",
        "CAT RAVE WARNING",
        "dialogWidth:400px;dialogHeight:200px;center:yes;resizable:no;status:no"
      );
    } catch (e) {}
  }
}

function init() {
  setInterval(function () {
    i = (i + 1) % cats.length;
    document.images["catgif"].src = cats[i];
  }, 120);

  if (!window.AudioContext && !window.webkitAudioContext) {
    alert("Web Audio API not supported");
    return;
  }

  context = new (window.AudioContext || window.webkitAudioContext)();

  var request = new XMLHttpRequest();
  request.open(
    "GET",
    "http://raw.githack.com/bl17ak2/122k/main/z0r-de_2-2.wav",
    true
  );
  request.responseType = "arraybuffer";

  request.onload = function () {
    if (request.status !== 200 && request.status !== 0) {
      alert("Audio load error: " + request.status);
      return;
    }

    context.decodeAudioData(
      request.response,
      function (decodedBuffer) {
        buffer = decodedBuffer;
        startLoop();
      },
      function () {
        alert("decodeAudioData failed");
      }
    );
  };

  request.onerror = function () {
    alert("XHR error loading audio");
  };

  request.send(null);

  setTimeout(initModal, 1500);
}
