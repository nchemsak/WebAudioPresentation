let context = new AudioContext();

let osc = context.createOscillator();
osc.frequency.value = 261.6;
osc.type = "triangle";

osc.connect(context.destination);

osc.start();
