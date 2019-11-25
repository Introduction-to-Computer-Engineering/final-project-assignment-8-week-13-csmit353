basic.forever(function () {
    pins.i2cWriteNumber(30, 1500, NumberFormat.Int8LE, false)
})
Code for #4 part 2
basic.forever(function () {
    let numb1 = pins.i2cReadNumber(0x19E, NumberFormat.Int8LE, false);
    basic.showNumber(numb1);
})
