let context = new AudioContext();

let osc = context.createOscillator();
osc.type = "triangle";

let LFO = context.createOscillator();
LFO.type = "sine";
LFO.frequency.value = .02; //The delay for a flanger effect is typically less than 20 milliseconds (.002). //To create a Chorus effect in this example, change this value to 1.5;

let gain = context.createGain();
gain.gain.value = .002;

let delay = context.createDelay();
delay.delayTime.value = .02;

osc.connect(delay);
LFO.connect(gain);
gain.connect(delay.delayTime);
osc.connect(context.destination);
delay.connect(context.destination);

osc.start();
LFO.start();
