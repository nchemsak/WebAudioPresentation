let context = new AudioContext();

let osc = context.createOscillator();

let vol = context.createGain();
vol.gain.value = 0.5;

osc.connect(vol);
vol.connect(context.destination);

osc.start();
