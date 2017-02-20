let context = new AudioContext();

let osc = context.createOscillator();
osc.frequency.value = 440;

let VCA = context.createGain();
let LFO = context.createOscillator();
LFO.frequency.value = 5;
LFO.type = "sine";

LFO.connect(VCA.gain);
osc.connect(VCA);

VCA.connect(context.destination);

LFO.start();
osc.start();
