let context = new AudioContext(); //Creates the AudioContext

let osc = context.createOscillator(); //createOscillator is method on context. Creates the oscillator node.

osc.frequency.value = 261.6; //Assigns a frequency to the oscillator (440 is default)

osc.type = "triangle"; //Declares the type of oscillator (“sine” is default)

osc.connect(context.destination); //Connects the oscillator to speakers

osc.start(); //Starts the oscillator
