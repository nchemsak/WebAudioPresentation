let context = new AudioContext();

let osc = context.createOscillator();
osc.frequency.value = 440;

let VCA = context.createGain();
let LFO = context.createOscillator();
LFO.frequency.value = 1;
LFO.type = "square";

let delay = context.createDelay(2.0);
delay.delayTime.value = 1.75;

LFO.connect(VCA.gain);
osc.connect(VCA);
VCA.connect(delay);

VCA.connect(context.destination);
delay.connect(context.destination);

LFO.start();
osc.start();
