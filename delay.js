let context = new AudioContext();

let osc = context.createOscillator();
osc.frequency.value = 440;

let VCA = context.createGain();
let LFO = context.createOscillator();
LFO.frequency.value = 1;
LFO.type = "square";

let delay = context.createDelay(2.0); //Creates a DelayNode (in this example - max value of 2 seconds **)
delay.delayTime.value = 1.75; //Assigns the delay time in seconds (in this example 1.75 seconds)

LFO.connect(VCA.gain);
osc.connect(VCA);
VCA.connect(delay); //Connects gain to the delay

VCA.connect(context.destination); //Connects gain to speakers (“dry” signal / no delay)
delay.connect(context.destination); //Connects delay to speakers (“wet” signal / with delay)

LFO.start();
osc.start();
