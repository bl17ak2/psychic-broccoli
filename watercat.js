(function(){
  var AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  var audioCtx = new AudioContext();
  var buffer = null;
  var source = null;
  var playing = false;

  var url = "https://raw.githack.com/bl17ak2/psychic-broccoli/refs/heads/main/z0r-de_4407-_1_.wav";
  var cutDuration = 3.55;

  function decode(ab, cb){
    if (audioCtx.decodeAudioData.length === 1) {
      audioCtx.decodeAudioData(ab).then(cb);
    } else {
      audioCtx.decodeAudioData(ab, cb);
    }
  }

  function loadAudio(cb){
    if (buffer) { cb(buffer); return; }

    if (window.fetch) {
      fetch(url).then(function(r){
        return r.arrayBuffer();
      }).then(function(ab){
        decode(ab, function(b){
          buffer = b;
          cb(buffer);
        });
      });
    } else {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType = "arraybuffer";
      xhr.onload = function(){
        decode(xhr.response, function(b){
          buffer = b;
          cb(buffer);
        });
      };
      xhr.send(null);
    }
  }

  function startLoop(){
    if (playing) return;
    playing = true;

    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    loadAudio(function(){
      source = audioCtx.createBufferSource();
      source.buffer = buffer;
      source.loop = true;
      source.loopStart = 0;
      source.loopEnd = cutDuration;
      source.connect(audioCtx.destination);
      source.start(0, 0);
    });
  }

  function stopLoop(){
    playing = false;
    if (source) {
      try { source.stop(0); } catch(e){}
      try { source.disconnect(); } catch(e){}
      source = null;
    }
  }

  window.startLoop = startLoop;
  window.stopLoop = stopLoop;
})();