let context = new AudioContext();

let osc = context.createOscillator();

let vol = context.createGain(); //Creates a Gain Node

vol.gain.value = 0.5; //Sets the volume at half (1 is default)

osc.connect(vol); //Connects Oscillator Node to the Gain Node
vol.connect(context.destination); //Connects Gain Node to speakers

osc.start();
