/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

/**
  * Wave Types
  */
enum WaveType
{
    //% block="Square"
    SquareWave = 3,
    //% block="Sine"
    SineWave = 0,
    //% block="Sawtooth"
    SawtoothWave = 1,
    //% block="Triangle"
    TriangleWave = 2,
    //% block="Noise"
    NoiseWave = 4
}

/**
  * Curve Types
  */
enum CurveType
{
    //% block="Curve"
    Curve = 2,
    //% block="No Curve"
    None = 0,
    //% block="Linear"
    Linear = 1,
    //% block="Exponential Rising"
    ExpRising = 5,
    //% block="Exponential Falling"
    ExpFalling = 6
}

/**
  * Effect Types
  */
enum EffectType
{
    //% block="NoEffect"
    None = 0,
    //% block="Frequency Vibrato"
    FreqVibrato = 1,
    //% block="Volume Vibrato"
    VolumeVibrato = 2,
    //% block="Warble Interpolation"
    WarbleInterpolation = 3
}

/**
 * Prototype Sound blocks
 */
//% weight=105 color=#F38500 icon=""  block="Sound (V2 Only)"
namespace sound{
    /**
     * Squeak - slide between two frequencies over a variable period of time. 
     * @param note pitch of the tone to play in Hertz (Hz), eg: Note.C
     */
    //% weight=100
    //% blockId=music_squeak
    //% block="squeak from $start_tone hz to $end_tone hz taking $duration milliseconds "
    //% start_tone.min=1000 start_tone.max=9000 start_tone.defl=1000
    //% end_tone.min=1000 end_tone.max=9000 end_tone.defl=1500
    //% duration.min=100 duration.max=1000 duration.defl=300
    export function squeakSound(start_tone: number, end_tone: number, duration: number) {
        //Pad to 4 chars
        let start = start_tone.toString();
        let end = end_tone.toString();
        let dur = duration.toString();
        while(start.length < 4){start = "0" + start;}
        while(end.length < 4){end = "0" + end;}
        while(dur.length < 4){dur = "0" + dur;}
        new SoundExpression("31023" + start + dur + "02440"+ end + "08881023012800000000240000000000000000000000000000").play();
    }

    /**
     * Warble - oscillate between two frequencies some number of times during a variable period of time.
     * @param note pitch of the tone to play in Hertz (Hz), eg: Note.C
     */
    //% blockId=music_warble
    //% weight=99
    //% block="warble between $freq_1 hz and $freq_2 hz with gap $duration milliseconds, repeat $numRepeats"
    //% freq_1.min=10 freq_1.max=9000 freq_1.defl=2000
    //% freq_2.min=10 freq_2.max=9000 freq_2.defl=2500
    //% duration.min=100 duration.max=9000 duration.defl=50
    //% numRepeats.min=1 numRepeats.max=100 numRepeats.defl=5
    export function warbleSound(freq_1: number, freq_2: number, duration: number, numRepeats: number) {
        //Pad to 4 chars
        let f1 = freq_1.toString();
        let f2 = freq_2.toString();
        let dur = duration.toString();
        while(f1.length < 4){f1 = "0" + f1;}
        while(f2.length < 4){f2 = "0" + f2;}
        while(dur.length < 4){dur = "0" + dur;}
        for(let i = 0 ; i < numRepeats ; i++)
            new SoundExpression("31023" + f1 + dur + "02440"+ f2 + "08881023012800000000240000000000000000000000000000" + "," + "31023" + f2 + dur + "02440"+ f1 + "08881023012800000000240000000000000000000000000000").play();
    }

    /**
     * Chirp - logarithmic frequency increase or decrease from a base frequency 
     * @param note pitch of the tone to play in Hertz (Hz), eg: Note.C
     */
    //% blockId=music_chirp
    //% weight=98
    //% block="chirp from $freq_1 hz to $freq_2 hz taking $duration milliseconds"
    //% freq_1.min=10 freq_1.max=9000 freq_1.defl=600
    //% freq_2.min=10 freq_2.max=9000 freq_2.defl=1000
    //% duration.min=100 duration.max=9000 duration.defl=300
    export function chirpSound(freq_1: number, freq_2: number, duration: number) {
        //Pad to 4 chars
        let f1 = freq_1.toString();
        let f2 = freq_2.toString();
        let dur = duration.toString();
        while(f1.length < 4){f1 = "0" + f1;}
        while(f2.length < 4){f2 = "0" + f2;}
        while(dur.length < 4){dur = "0" + dur;}
        let direction = "05";
        if(freq_1 > freq_2){direction = "06"}
        new SoundExpression("31023" + f1 + dur + direction + "440"+ f2 + "08881023" + "0128" + "00000000240000000000000000000000000000").play();
    }

    /**
     * Croak - low pitched croak sound
     * @param note pitch of the tone to play in Hertz (Hz), eg: Note.C
     */
    //% weight=97    
    //% blockId=music_croak
    //% block="croak from $freq_1 hz to $freq_2 hz taking $duration milliseconds"
    //% freq_1.min=1 freq_1.max=1000 freq_1.defl=5
    //% freq_2.min=1 freq_2.max=1000 freq_2.defl=30
    //% duration.min=100 duration.max=9000 duration.defl=1500
    export function croakSound(freq_1: number, freq_2: number, duration: number) {
        //Pad to 4 chars
        let f1 = freq_1.toString();
        let f2 = freq_2.toString();
        let dur = duration.toString();
        while(f1.length < 4){f1 = "0" + f1;}
        while(f2.length < 4){f2 = "0" + f2;}
        while(dur.length < 4){dur = "0" + dur;}
        let direction = "05";
        if(freq_1 > freq_2){direction = "06"}
        new SoundExpression("31023" + f1 + dur + "02" + "440"+ f2 + "08881023" + "0128" + "00000000240000000000000000000000000000").play();
    }
    
    //Do we want click as V2 too or make with V1?

    /**
     * Click - short click sound
     * @param note pitch of the tone to play in Hertz (Hz), eg: Note.C
     */
    //% weight=96
    //% blockId=music_click
    //% block="click at $freq_1 hz"
    //% freq_1.min=1 freq_1.max=50 freq_1.defl=10
    export function clickSound(freq_1: number) {
        //Pad to 4 chars
        let f1 = freq_1.toString();
        let f2 = (freq_1+(freq_1/2)).toString();
        while(f1.length < 4){f1 = "0" + f1;}
        while(f2.length < 4){f2 = "0" + f2;}
        new SoundExpression("3" + "1023" + f1 + "0050" + "02" + "440"+ f2 + "08881023" + "0032" + "0000000024"+"0000000000000000000000000000").play();
    }

    //WIP for hiss - only take one param then repeat X times and goto frequency that is +-Var at random each time to make a hissing sound
    
    export class Sound{

        startFreq : number;
        endFreq : number;
        duration : number;
        curveType : number;
        waveType : number;
        effect : number;
        fxParam : number;
        fxSteps : number;

        constructor(){
            this.startFreq = 2000;
            this.endFreq = 2500;
            this.duration = 500;
            this.curveType = 2;
            this.waveType = 3;
            this.effect = 0;
            this.fxParam  = 1500;
            this.fxSteps = 1500;
        }

        playSound(){
            new SoundExpression(this.waveType + "1023" + pad4(this.startFreq) + pad4(this.duration) + pad2(this.curveType) + "440" + pad4(this.endFreq) + "08881023" + "0032" + pad2(this.effect) + "00000024" + "00000000000000000000" + pad4(this.fxParam) + pad4(this.fxSteps)).play();
        }
    }

    /**
     * Padding Funciton from number to 4 byte string
     */
    function pad4(num : number){
        let str = num.toString();
        while(str.length < 4){str = "0" + str;}
        return str;
    }

    /**
     * Padding Funciton from number to 2 byte string
     */
    function pad2(num : number){
        let str = num.toString();
        while(str.length < 2){str = "0" + str;}
        return str;
    }

    /**
     * create Sound Generic Block
     * @param freq1 Start Frequency in Hertz (Hz), eg: 2000
     * @param duration Duration of sound (ms), eg: 500
     * @param freq2 End Frequency in Hertz (Hz), eg: 2000
     * @param curveType Type of curve between frequencies, eg: 2
     * @param waveType Type of wave to play the sound on, eg: 3
     * @param effect Effect to put on the sound, eg: 3
     */
    //% weight=68
    //% blockId=music_soundGeneric
    //% expandableArgumentMode="enabled"
    //% inlineInputMode=inline
    //% block="Create sound, start  $freq1 (Hz), end  $freq2 (Hz), duration $duration (ms)||, curve type $curveType|, wave type $waveType|, effect $effect"
    //% freq1.min=6 freq1.max=9000 freq1.defl=1000
    //% freq2.min=6 freq2.max=9000 freq2.defl=1200
    //% duration.min=10 duration.max=9000 duration.defl=200
    //% curveType.min=0 curveType.max=6 curveType.defl=2
    //% waveType.min=0 waveType.max=4 waveType.defl=3
    //% effect.min=0 effect.max=3 effect.defl=0
    export function createSound(freq1 : number = 2000, freq2 : number = 2500, duration : number = 200, curveType : CurveType = CurveType.Curve, waveType : WaveType = WaveType.SquareWave, effect : EffectType = EffectType.None) : Sound{
        let sound = new Sound();
        sound.startFreq = freq1;
        sound.endFreq = freq2;
        sound.duration = duration;
        sound.curveType = curveType;
        sound.waveType = waveType;
        sound.effect = effect;
        return sound;
    }

    /**
     * create Sound Generic Block Short
     * @param freq1 Start Frequency in Hertz (Hz), eg: 2000
     * @param duration Duration of sound (ms), eg: 500
     * @param freq2 End Frequency in Hertz (Hz), eg: 2000
     */
    //% weight=70
    //% blockId=music_soundGenericShort
    //% block="Play sound, start  $freq1 (Hz), end  $freq2 (Hz), duration $duration (ms)"
    //% freq1.min=6 freq1.max=9000 freq1.defl=1000
    //% freq2.min=6 freq2.max=9000 freq2.defl=1200
    //% duration.min=10 duration.max=9000 duration.defl=200
    export function createSoundShort(freq1 : number = 2000, freq2 : number = 2500, duration : number = 200){
        let sound = new Sound();
        sound.startFreq = freq1;
        sound.endFreq = freq2;
        sound.duration = duration;
        sound.playSound();
    }

    /**
     * play Sound Block
     * @param sound instance of Sound to play
     */
    //% weight=69
    //% blockId=music_playSound
    //% block="play sound %sound"
    export function playSound(sound : Sound){
        sound.playSound();
    }

    /**
     * Create a Sound widget and automtically set it to a variable
     */
    //% blockId=music_soundVar
    //% block="create_sound"
    //% blockSetVariable=sound
    export function createSoundVar(): Sound {
        return new Sound();
    }

    /**
     * set wave type
     * @param sound instance of Sound to change
     * @param waveType wave type to change to
     */
    //% blockId=music_set_wave_type
    //% block="set %sound wave type to %waveType"
    export function setWave(sound : Sound, waveType : WaveType){
        sound.waveType = waveType;
    }

    /**
     * set curve type
     * @param sound instance of Sound to change
     * @param curveType curve type to change to
     */
    //% blockId=music_set_curve_type
    //% block="set %sound curve type to %curveType"
    export function setCurve(sound : Sound, curveType : CurveType){
        sound.curveType = curveType;
    }

    /**
     * set start frequency
     * @param sound instance of Sound to change
     * @param freq1 new start frequency for the speicified sound
     */
    //% blockId=music_set_start_freq
    //% block="set %sound start frequency to %freq1"
    //% freq1.min=6 freq1.max=9000 freq1.defl=2000
    export function setStartFreq(sound : Sound, freq1 : number = 2000){
        sound.startFreq = freq1;
    }

    /**
     * set end frequency
     * @param sound instance of Sound to change
     * @param freq1 new start frequency for the speicified sound
     */
    //% blockId=music_set_end_freq
    //% block="set %sound end frequency to %freq2"
    //% freq2.min=6 freq2.max=9000 freq2.defl=2500
    export function setEndFreq(sound : Sound, freq2 : number = 2500){
        sound.endFreq = freq2;
    }

    /**
     * set duration
     * @param sound instance of Sound to change
     * @param dur duration of the note
     */
    //% blockId=music_set_duration
    //% block="set %sound duration to %dur"
    //% dur.min=1 dur.max=9000 dur.defl=200
    export function setDuration(sound : Sound, dur : number = 200){
        sound.duration = dur;
    }
}