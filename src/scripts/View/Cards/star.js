"use strict";
exports.__esModule = true;
var Index_1 = require("../../Index");
exports.starCard = function () {
    showTitle("starName", "name");
    showLifeCycle("starSize", "Etap życia gwiazdy:", "name");
    showLifeCycle("starSizeDescription", '', "description");
    showSpectralType("starSpectreType", "Typ widma:", "name");
    showSpectralType("starSpectreTypeDescription", 'Wyjaśnienie:', "description");
    showSpectralType("starSpectreTemperature", "Temperatura barwowa(w Kelvinach):", "temperature");
};
var showTitle = function ($element, property) {
    var $domElement = document.getElementById($element);
    $domElement.innerHTML = "" + Index_1.planetsCollection[Index_1.currentSolarSystemNumber]['star'][property];
};
var showLifeCycle = function ($element, description, firstProperty) {
    var $domElement = document.getElementById($element);
    $domElement.innerHTML = "<span>" + description + "</span> " + Index_1.planetsCollection[Index_1.currentSolarSystemNumber]['star']['lifeCycle'][firstProperty];
};
var showSpectralType = function ($element, description, firstProperty) {
    var $domElement = document.getElementById($element);
    $domElement.innerHTML = "<span>" + description + "</span> " + Index_1.planetsCollection[Index_1.currentSolarSystemNumber]['star']['spectral'][firstProperty];
};
