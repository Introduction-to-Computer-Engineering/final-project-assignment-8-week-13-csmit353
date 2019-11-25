# CPE 1040 - Introduction to Computer Engineering

## Assignment: Final Project

### LED's

  #### [original-guide](original-guide.js)

  **This first java script file contains code that controls three external LEDs. For this program, the microbit LED screen is disabled so pins 6, 8, and 9 can be used for i/o's.** 

  *Imgur Video: [original.js](https://imgur.com/gallery/k6ipMn5)*

  #### [enable-matrix](enable-matrix.js)

  **Next I edited the previous code to enable microbit's LED screen. A smiley face was added to display the LED screen is active and working correctly. Additionally, the pins for the external LED's were changed to pins 8, 12, and 16. Otherwise, the microbit LED screen spazzes out, and no one wants that.**

*Imgur Video: [enableLED.js](https://imgur.com/gallery/v8ysgeM)*
  
  #### [twenty-eight.js](twenty-eight.js)

  **This file runs a microbit LED screen animation at the same time the external LED's are running. An issue I ran into was getting the microbit animation and LED lights to run simultaneously, instead of in sequence.**

  *Imgur Video: [Twenty-Eight.js](https://imgur.com/gallery/kMVHQRg)*


### Soil Sensor

  #### [digital-in](digital-in.js)

  **When the microbit recieves a 1 (input on button 'A') the LED will light up. When the microbit senses a 0 (input on button'B') the LED will turn off.**

  *Imgur Video: [digital-in.js](https://imgur.com/gallery/JgSFuxS)*

  #### [manual-calibration](manual-calibration.js)
  
   **This code cycles signals for the oscilloscope to read. The microbit does this by bouncing the duty cycle between a range of 5-95% and will look like blocks on the screen of the oscilloscope.**


### Oscilloscopes 
   a.
  
   b. [Imgur Video](https://imgur.com/a/ICwsE6Q)
  
   c. [Imgur Video](https://imgur.com/a/0IYuvEC).
  
   d. [continuous-signal.js](continuous-signal.js).
     

### SparkFun Questions
     
  *1. The main issue with UART is that it is a 'asynchronous port.' This means that connected devices must first agree on data rate, communication is restricted to only two divices, hardware overhead, and data rate. SPI has issues because of the amount of pins needed, which effects layout, and the fact that it only allows for one master on the bus. I2C fixes these issues by giving these prolems more capabilites. Asynchronous ports supposrt moe slaves, it allows more masters on bus, and better communication rates.* 

  *2. The two wires for I2C are SDA and SCL. SDA is the clock signal and SCL is the data signal.*

  *3. The clock distinguishes the master and slaves. It is always transmitted by the bus master, although some slaves can delay the master from sending data.*

  *4. The two types of protocol frames are Address and Data. Address frames always come first and dictates the order of operations in an address. Data frames follow after address frames and begins the data transmitting process.* 

  *5. What is the most appropriate _trigger_ for capturing an I2C frame on the oscilloscope? Clock stretching is the most appropriate trigger for capturing an I2C frame on an oscilloscope. This is because the slaves hold the clock low, forcing the master to wait for its signal.* 

  *6. (Advanced) If the micro:bit is configured by default as a _master_, and two micro:bits, connected to each other via the SDA and SCL lines, communicate over I2C? (**Bonus** for a convincing argument, one way or another.)*
  
### I2C 
  
#### Address capture
 
 *[Code For I2C](I2C-code.js)*

**Part 1: [Picture](https://imgur.com/a/j8gZvXI)**
  a. I captured a frame with two channel inputs. Channel 2 had a much higher frequency while channel one had a wider period. 
  b.
  c.
**Part 2: [Picture](https://imgur.com/a/Zn5JSfy)**
  d. I had difficulty with this step and did not get readings and values.
  e. I did, however, notice that moving the microbit around effected what I was seeing on the oscilloscope.
  

