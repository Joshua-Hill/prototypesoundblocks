// tests go here; this will not be compiled when this package is used as an extension.
let cricket: sound.Sound = null
function ProtoBlocks () {
    sound.playSound(sound.createSound(262, 440, 200))
    sound.playSound(sound.createSound(input.acceleration(Dimension.X), input.compassHeading(), 500, CurveType.ExpRising, WaveType.SquareWave))
}
function Squeakmouse () {
    sound.squeakSound(262, 659, 398)
    sound.squeakSound(988, 220, 586)
    sound.squeakSound(392, 880, 209)
    sound.squeakSound(990, 700, 695)
}
function otherBird () {
    sound.warbleSound(
    4288,
    4723,
    40,
    6
    )
    sound.warbleSound(
    4288,
    4000,
    50,
    6
    )
}
function Cricket () {
    for (let index = 0; index < 30; index++) {
        sound.croakSound(10, 40, 200)
        sound.croakSound(10, 40, 20)
        sound.croakSound(10, 40, 20)
    }
}
input.onButtonPressed(Button.A, function () {
    Squeakmouse()
    basic.pause(1000)
    otherBird()
    basic.pause(1000)
    Cricket()
    basic.pause(1000)
    Bird()
    basic.pause(1000)
    clicks()
    basic.pause(1000)
    Frog()
})
function Frog () {
    for (let index = 0; index < 5; index++) {
        basic.pause(500)
        sound.croakSound(5, randint(10, 50), randint(100, 2500))
    }
}
function Bird () {
    sound.chirpSound(2000, 4000, 100)
    sound.chirpSound(2000, 5000, 150)
    sound.chirpSound(2000, 6000, 200)
    sound.chirpSound(2000, 4000, 200)
    sound.chirpSound(2000, 5000, 300)
    sound.chirpSound(2000, 6000, 300)
    basic.pause(200)
    sound.chirpSound(2000, 6000, 300)
    sound.chirpSound(6000, 4000, 260)
    sound.chirpSound(6000, 4000, 209)
}
function Bird2 () {
    sound.playSound(sound.createSound(2000, 4000, 100))
    sound.playSound(sound.createSound(2000, 5000, 150))
    sound.playSound(sound.createSound(2000, 6000, 200))
    sound.playSound(sound.createSound(2000, 4000, 200))
    sound.playSound(sound.createSound(2000, 5000, 300))
    sound.playSound(sound.createSound(2000, 6000, 300))
    basic.pause(200)
    sound.playSound(sound.createSound(2000, 6000, 300))
    sound.playSound(sound.createSound(6000, 4000, 260))
    sound.playSound(sound.createSound(6000, 4000, 206))
}
function clicks () {
    for (let index = 0; index < 10; index++) {
        sound.clickSound(randint(1, 50))
        basic.pause(200)
    }
    for (let index = 0; index < 10; index++) {
        sound.clickSound(10)
        basic.pause(200)
    }
}
function Cricket3 () {
    cricket = sound.createSound(262, 440, 200)
    sound.setCurve(cricket, CurveType.None)
    sound.setWave(cricket, WaveType.SquareWave)
    sound.playSound(cricket)
}
function Cricket2 () {
    for (let index = 0; index < 30; index++) {
        sound.playSound(sound.createSound(10, 40, 200))
        sound.playSound(sound.createSound(10, 40, 20))
        sound.playSound(sound.createSound(10, 40, 20))
    }
}
