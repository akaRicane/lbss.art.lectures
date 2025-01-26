(function () {
    var ___MIDI = {

        inputs: undefined,
        outputs: undefined,
        outputArray: [],
        inputArray: [],

        /**
         *  the p5.midi.event holds the most recent midi input event.
         *  
         *  
         *  @property A Uint8Array containing the MIDI data bytes of a single MIDI message
         */
        event: undefined,

        /**
         *  initialize - request midi access
         *
         *  @method  init
         */
        init: function () {
            try {
                navigator.requestMIDIAccess().then(this._midiSuccess, this._midiError);
            }
            catch (e) {
                console.warn('This browser does not support the WebMIDI API')
                throw (e);
            }
        },

        /**
         *  list available midi inputs and outputs
         *  
         *  @method list
         */
        list: function () {

            this.inputArray.forEach(function (item) {
                console.log('p5.MIDI input : ' + item.name + ', ID: ' + item.id);

            });

            this.outputArray.forEach(function (item) {
                console.log('p5.MIDI output: ' + item.name + ', ID: ' + item.id);
            });

        },

        listInputs: function () {
            dlist = [];

            this.inputArray.forEach(function (item) {
                // console.log('p5.MIDI input: ' + item.name + ', ID: ' + item.id);
                dlist.push(item);
            });

            return dlist;
        },

        listOutputs: function () {
            dlist = [];

            this.outputArray.forEach(function (item) {
                // console.log('p5.MIDI output: ' + item.name + ', ID: ' + item.id);
                dlist.push(item);
            });

            return dlist;
        },

        // private callback
        _midiSuccess: function (midiAccess) {
            ___MIDI.access = midiAccess;
            ___MIDI.inputs = midiAccess.inputs.values();
            ___MIDI.outputs = midiAccess.outputs.values();
            ___MIDI._setupMidiIn();
            ___MIDI._setupMidiOut();
        },

        // private callback
        _midiError: function (message) {
            console.log('Error: ' + message);
        },


        // create array of possible inputs
        _setupMidiIn: function () {
            var inputs = this.inputs;
            var hasAtLeastOneDevice = false;
            for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
                input.value.onmidimessage = this.MIDIMessageEventHandler;
                this.input = input.value;
                this.inputArray.push(input.value);
                hasAtLeastOneDevice = true;
            }
            if (!hasAtLeastOneDevice) { this._midiError('No MIDI Input'); }
        },

        // create array of possible outputs
        _setupMidiOut: function () {
            var outputs = this.outputs;
            var hasMidiOutput = false;
            var entries = [];
            for (var entry of outputs) {
                var tempObj = { "done": false, "value": entry };
                entries.push(tempObj);
            }

            for (var entry of entries) {
                this.outputArray.push(entry.value);
                hasMidiOutput = true;
            }

            if (!hasMidiOutput) { this._midiError('No MIDI Output'); }
        },

        /**
         *  this method is called when a midi message is received
         */
        MIDIMessageEventHandler: function (event) {
            ___MIDI.event = event;
            ___MIDI.onInput(event);
        },

        /**
         *  Callback from midi input event.
         *  
         *  Should be overwritten by the user, similar to mouseClicked(), like this:
         *  p5.midi.onInput(){
         *    var note = p5.midi.event[1];
         *    var velocity = p5.midi.event[2];
         *    
         *    // do something with note and velocity
         *  }
         *
         *  @method  onInput
         *  @param  {Array} event Event will be passed in automatically
         *                        or can be referenced as p5.midi.event
         */
        onInput: function (event) {

            inputMsg = {
                "_id": this.event["target"]["id"],
                "_name": this.event["target"]["name"],
                "_manufacturer": this.event["target"]["manufacturer"],
                "_f": this.event["data"][0],
                "_key": this.event["data"][1],
                "_vel": this.event["data"][2]
            }
            // console.log(inputMsg)
            if (typeof MIDI_INTERFACE !== 'undefined') {
                MIDI_INTERFACE.onInput(inputMsg);
            }
        },

        /**
         *  Format MIDI data to be sent to midi output.
         *  
         *  Examples:
         *    MIDI.send('attack', 60, 127) --> triggers attack on middle C
         *    MIDI.send('release', 60, 0) --> triggers release of middle C
         *  
         *  @param  {String} message  'attack', 'release' or # betw 0 to 127
         *  @param  {Number} note     0 to 127
         *  @param  {Number} velocity 0 to 127
         */
        send: function (portID, message, note, velocity) {
            var msg = [message, note, velocity];
            // console.log(msg)

            switch (message) {
                case 'attack':
                    msg[0] = 0x90;
                    break;
                case 'release':
                    msg[0] = 0x80;
                    velocity = 0;
                    break;
                default:
                // console.log('midi error, did not recognize ' + message)
                // return;
            }

            if (typeof (note) !== 'number' || typeof (velocity) !== 'number') {
                console.log('midi error, did not recognize ' + note + ' or ' + velocity);
                return;
            }
            msg[1] = note;
            msg[2] = velocity;

            // send the message to the connected output portID
            var output = this.access.outputs.get(portID);
            if (typeof output !== 'undefined') {
                output.send(msg);
            }
            else {
                // console.log("J'ai planté batard")
            }

        }
    }

    // initialize midi and create p5 object if one doesn't exist on the page
    if (!window.p5) {
        p5 = {};
    }
    p5.midi = ___MIDI;
    window.addEventListener('load', p5.midi.init());

})();
