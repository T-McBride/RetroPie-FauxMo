/* 
 * This script modified from the sample found here
 * https://github.com/lspiehler/node-fauxmo#readme
 */

'use strict';

/* Dependencies */
const FauxMo = require('node-fauxmo'); //emulator

/* Toggle debug messages on/off */
const debug = 0;

/*
 * Dictionary to convert  0/1
 * to args for other scripts 
 */
const dict = { 1: "start", 0: "stop" };

/**************************************** 
 * Begin dev1 block
 */

/* Variables for dev 1 */
var dev1status = 1; //default status: on
var dev1name = "Retro Pie";
var dev1port = 11200;


/* Dev 1 status handler */ 
var dev1statushandler = function() {
    if (debug==1){console.log('dev1statushandler run '+ dev1status);}
    return dev1status;
}

/* Dev 1 handler */
var dev1handler = function(action) {
  if (debug==1){console.log('dev1handler run '+action);}
  const {exec}=require('child_process');
  exec('./Scripts/powerPie.sh ' + dict[action],
  (err, stdout, stderr) =>{
    if (err) {
      console.log(err);
    } else {
      /*Uncomment for verbose logging*/
      //console.log(`stdout: ${stdout}`);
      //console.log(`stderr: ${stderr}`);
      dev1status=action;
    }
  });
        dev1status = action;
}

/* 
 * End dev 1 block
 *
 ****************************************/

/* Register devices and handlers */
let fauxMo = new FauxMo({
  devices: [{
    name: dev1name,
    port: dev1port,
    handler: function(action) {
      console.log(dev1name + ': ' , action);
      dev1handler(action);
    },
      statusHandler: function(callback) {
      callback(dev1statushandler());
    }
  }]
});

if (debug==1){console.log('Main script run');}
