// Learned about obtaining values from an object and setting a value of a property within an object, "getters" and "setters"

function makeClass() {
  "use strict";
  /* Alter code below this line */
class Thermostat{
  constructor(temperature){
    this._temperature = temperature;
  }
  get temperature (){
  return ((5/9) * (this._temperature - 32));
  }
  set temperature (celsius){
  this._temperature = celsius * ((9.0/5) + 32);
}
}
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
