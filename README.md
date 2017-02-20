# Web Audio API Presentation
This is the sample code from a presentation on the basics of the Web Audio API.
It was presented for the Nashville Music Programmers Meetup Group 2-27-2017.

## Usage
TODO: Write usage instructions

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## General Info
High-level JavaScript API for processing audio in web apps.
Everything you need is right in your web browser!
The foundation of the Web Audio API is AudioContext();
Everything is created inside the AudioContext();
Inside the AudioContext, you create AudioNodes and connect them together, finally connecting them all to their destination, the speakers.
Think of each AudioNode as different guitar pedals (reverb, delay, flanger, etc), and the arrows as the guitar cords connecting each pedal to the next.
There can be as many or as few AudioNodes as you want, this example has 3.

## Creating Effects
Every AudioNode can connect to any other node as demonstrated in previous slides.
BUT, one of the awesome features of the Web Audio API is that any audioNode can connect to any other node’s Params.
Example?
You can connect the output of an oscillator Node (set to a low frequency) to a GainNode’s “gain” param to control volume of another sound source.

## Audio Buffer Source
Use an XMLHttpRequest (XHR) for getting sound files.
Audio file data is binary, so you assign the XHR’s ‘responseType’ to an ‘arraybuffer’.
An ArrayBuffer is a generic container for binary data.  The buffer allows you to replay sounds repeatedly without needing to reload them.
Decode asynchronously using the AudioContext.decodeAudioData() method using JavaScript Promises.

## Credits
Nick Chemsak
2-27-2017

## License
TODO: Write license
