let context = new AudioContext();

let osc = context.createOscillator();
osc.frequency.value = 440;

let gain = context.createGain();
let LFO = context.createOscillator(); //Creates the LFO Oscillator Node
LFO.frequency.value = 5; //Assigns a frequency (hertz)
LFO.type = "sine"; //Assigns a wave shape

LFO.connect(gain.gain); //Connects LFO to the gain’s gain param
osc.connect(gain); //Connects Oscillator to gain
gain.connect(context.destination); //Connects gain to speakers


LFO.start(); //Starts the LFO
osc.start(); //Starts the oscillator
