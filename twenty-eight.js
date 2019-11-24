led.enable(true)
pins.analogWritePin(AnalogPin.P8, 0)
pins.analogWritePin(AnalogPin.P12, 0)
pins.analogWritePin(AnalogPin.P16, 0)
basic.forever(function () {
    for (let index = 0; index <= 3071; index++) {
        if (index < 2046) {
            if (index <= 1023) {
                pins.analogWritePin(AnalogPin.P8, index)
            } else {
                pins.analogWritePin(AnalogPin.P8, 1023 - (index - 1023))
            }
        } else {
            pins.analogWritePin(AnalogPin.P8, 0)
        }
        if (index > 1023) {
            if (index <= 2046) {
                pins.analogWritePin(AnalogPin.P12, index - 1023)
            } else {
                pins.analogWritePin(AnalogPin.P12, 1023 - (index - 2047))
            }
        } else {
            pins.analogWritePin(AnalogPin.P12, 0)
        }
        if (index < 1023) {
            pins.analogWritePin(AnalogPin.P16, 1022 - index)
        } else if (index > 2048) {
            pins.analogWritePin(AnalogPin.P16, index - 2048)
        } else {
            pins.analogWritePin(AnalogPin.P16, 0)
        }
        control.waitMicros(1000)
    }
    let X = 0; X <= 4; X++
    led.plot(0, 0)
    led.plot(4, 0)
    basic.pause(100)
    led.plot(1, 1)
    led.plot(3, 1)
    basic.pause(100)
    led.plot(2, 2)
    led.plot(2, 2)
    basic.pause(100)
    led.plot(3, 3)
    led.unplot(0, 0)
    led.plot(1, 3)
    led.unplot(4, 0)
    basic.pause(100)
    led.plot(4, 4)
    led.unplot(1, 1)
    led.plot(0, 4)
    led.unplot(3, 1)
    basic.pause(100)
    led.unplot(2, 2)
    led.unplot(2, 2)
    basic.pause(100)
    led.unplot(3, 3)
    led.unplot(1, 3)
    basic.pause(100)
    led.plot(3, 3)
    led.plot(1, 3)
    basic.pause(100)
    led.plot(2, 2)
    led.plot(2, 2)
    basic.pause(100)
    led.plot(1, 1)
    led.unplot(4, 4)
    led.plot(3, 1)
    led.unplot(0, 4)
    basic.pause(100)
    led.unplot(3, 3)
    led.plot(0, 0)
    led.unplot(1, 3)
    led.plot(4, 0)
    basic.pause(100)
    led.unplot(2, 2)
    led.unplot(2, 2)
    basic.pause(100)
    led.unplot(1, 1)
    led.unplot(3, 1)

})
