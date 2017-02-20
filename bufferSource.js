let context = new AudioContext();

// use an XMLHttpRequest (xhr) for getting sound files.
let url = "/TeamSleep.wav";
let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);

// An audio file data is binary, so the 'responseType' of the request is set to
// 'arraybuffer'. An ArrayBuffer is a container for binary data.
xhr.responseType = 'arraybuffer';

// Decode Asynchronously
// Once the (undecoded) audio file data has been received, it can be decoded
// using the AudioContext decodeAudioData() method using JS Promises:
xhr.onload = function() {
  context.decodeAudioData(xhr.response)
    .then(function(buffer) {
      myBuffer = buffer;
    });
}
xhr.send();


function play(event) {
  source = context.createBufferSource();
  source.buffer = event;
  source.connect(context.destination);
  source.start();
}


function stop() {
  if (source) {
    source.stop();
  }
}
