'use strict';
function Weather(cityName,description){
  this.cityName = cityName;
  this.description =description;
  this._temprature = '';
}

Object.defineProperty(Weather.prototype,'temprature',{
  get:function(){
    return this._temprature;
  },
  set:function(value){
   this._temprature = (value*1.8 + 32).toFixed(2) + '.F';
  }
}) 