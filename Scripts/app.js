/**
 * FileName: app.js
 * 
 * @author Tom Tsiliopoulos
 * @date June 6, 2016
 * 
 * StudentID: 300818557
 * website: comp125-s2016-lesson5.azurewebsites.net
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";






//app entry function
function init() {
    console.log ("App started");

    var mmstring = "Mamun";

    var newstring = mmstring.toUpperCase();

    console.log(newstring);
    var firstNameLastName = "Mamun Rahman";
    var spacepsition = firstNameLastName.indexOf(" ");

    var firstName = firstNameLastName.slice(0,spacepsition+2)
    console.log(firstName);
}
//call init function
  window.addEventListener("load", init);

})();