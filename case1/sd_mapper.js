/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Caleb Brown
   Date:  1/16/20 

*/
"use strict";

//Var for thisTime
var thisTime = new Date("2/3/18 3:15:28 AM");
var timeStr = date.toLocaleString();
var thisHour = dete.getHous();
var thisMonth = date.getMonth();
var mapNum = (2 * thisMonth + thisHours) % 24;
var imgStr = "<img src='sd_sky" + mapNum + ".png' />"

//HTML stuff
document.getElementById("timestamp").innerHTML = timeStr;
document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);
