// This file contains the application logic for the web app
(function(document) {
  'use strict';

  // define application interface
  const NestApplicationInterface = require('./nest/NestApplicationInterface');
  window.NestApplicationInterface = NestApplicationInterface;

  // listen for update events:
  NestApplicationInterface.addUpdateListener(function(){
    console.log("update event");
  });

  // listen for hydrated events:
  NestApplicationInterface.addHydratedListener(function(){
    console.log("hydrate event");
    // once hydrated, get the device cache
    var deviceCache = NestApplicationInterface.getAllDevices();
    // pass the device cache to the device page Polymer element
    var page = Polymer.dom(document).querySelector('#device-page');
    page.deviceObject = deviceCache;
    page.hasDevices = true;
  });

})(document);
