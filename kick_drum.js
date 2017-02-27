var context = new AudioContext();
var now = context.currentTime; //This sets a variable “now” to current time.


var osc = context.createOscillator();
osc.frequency.setValueAtTime(100, now); //Sets the frequency immediately to 100 hz

osc.frequency.exponentialRampToValueAtTime(0.001, now + 0.5); //Changes the frequency to nearly 0 over half a second.


var gain = context.createGain();
gain.gain.setValueAtTime(1, now); //Sets the volume at full (1) immediately.

gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);  //Changes the volume to near 0 over half a second.


osc.connect(gain);
gain.connect(context.destination);
osc.start();
