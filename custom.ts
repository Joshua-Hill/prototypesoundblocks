/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */


/**
 * Prototype Sound blocks
 */
//% weight=105 color=#F38500 icon=""
namespace sound {
    /**
     * Squeak - slide between two frequencies over a variable period of time. 
     * @param note pitch of the tone to play in Hertz (Hz), eg: Note.C
     */
    //% blockId=music_squeak
    //% block="squeak from $start_tone to $end_tone taking $duration milliseconds "
    //% start_tone.min=10 start_tone.max=9000 start_tone.defl=600
    //% end_tone.min=10 end_tone.max=9000 end_tone.defl=1000
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
    //% block="warble between $freq_1 and $freq_2 with gap $duration milliseconds, repeat $numRepeats"
    //% freq_1.min=10 freq_1.max=9000 freq_1.defl=2000
    //% freq_2.min=10 freq_2.max=9000 freq_2.defl=2500
    //% duration.min=100 duration.max=1000 duration.defl=50
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
    //% block="chirp from $freq_1 to $freq_2 taking $duration milliseconds"
    //% freq_1.min=10 freq_1.max=9000 freq_1.defl=600
    //% freq_2.min=10 freq_2.max=9000 freq_2.defl=1000
    //% duration.min=100 duration.max=1000 duration.defl=300
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



}
