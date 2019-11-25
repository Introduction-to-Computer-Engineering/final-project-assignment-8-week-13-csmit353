let percent_list: number[] = [15, 20, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15];
let i: number = 0
// P = 20000 usec
const P: number = 20000 // microseconds
basic.forever(function () {
    pins.servoSetPulse(AnalogPin.P0, P * percent_list[i] / 100.0);
    i = (i + 1) % percent_list.length
    basic.pause(2000);
})

// period * 15/100
