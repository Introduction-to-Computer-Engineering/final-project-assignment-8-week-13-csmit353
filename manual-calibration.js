let MoistureLevel: number = 0;
let ScaledLevel = pins.map(MoistureLevel, 0, 4, 10, 500)

basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 1);
    MoistureLevel = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P8, 0);

    led.plot(0, ScaledLevel)
    basic.pause(100);
    led.unplot(0, ScaledLevel)
    basic.pause(1000);

}) 
