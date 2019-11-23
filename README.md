This assignment [README](README.md) is _intentionally_ blank. It is part of the assignment to fill it. Read the [requirements](requirements.md) and [criteria](criteria.md).
 
 
 1. SparkFun [I2C tutorial](https://learn.sparkfun.com/tutorials/i2c).
      1. The main issue with UART is that it is a 'asynchronous port.' This means that connected devices must first agree on data rate, communication is restricted to only two divices, hardware overhead, and data rate. SPI has issues because of the amount of pins needed, which effects layout, and the fact that it only allows for one master on the bus. I2C fixes these issues by giving these prolems more capabilites. Asynchronous ports supposrt moe slaves, it allows more masters on bus, and better communication rates. 
      2. The two wires for I2C are SDA and SCL. SDA is the clock signal and SCL is the data signal.
      3. The clock distinguishes the master and slaves. It is always transmitted by the bus master, although some slaves can delay the master from sending data.
      4. The two types of protocol frames are Address and Data. Address frames always come first and dictates the order of operations in an address. Data frames follow after address frames and begins the data transmitting process. 
      5. What is the most appropriate _trigger_ for capturing an I2C frame on the oscilloscope? Clock stretching is the most appropriate trigger for capturing an I2C frame on an oscilloscope. This is because the slaves hold the clock low, forcing the master to wait for its signal. 
      6. (Advanced) If the micro:bit is configured by default as a _master_, and two micro:bits, connected to each other via the SDA and SCL lines, communicate over I2C? (**Bonus** for a convincing argument, one way or another.)
