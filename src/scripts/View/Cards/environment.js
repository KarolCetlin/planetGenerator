"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var Index_1 = require("../../Index");
var events_1 = require("../../Modules/generators/events");
exports.environmentCard = function () {
    if (events_1.planetHasEcosferic === true) {
        visibleCard('worldSection', 'block');
        showTextWithDescription('humidityName', 'Wilgotność:', 'humidityName');
        showTextWithDescription('humidityDescription', '', 'humidityDescription');
        showTextWithDescription('temperatureName', 'Temperatura:', 'temperatureName');
        showTextWithDescription('temperatureDescription', '', 'temperatureDescription');
        showTextWithDescription('planetTypeName', '', 'worldName');
        showTextWithDescription('planetTypeDescription', '', 'worldDescription');
    }
    else {
        visibleCard('worldSection', 'none');
        clearElements("humidityName", "humidityDescription", 'temperatureName', 'temperatureDescription', 'planetTypeName', 'planetTypeDescription');
    }
};
var HtmlElements;
(function (HtmlElements) {
    HtmlElements["ShowCard"] = "block";
    HtmlElements["AnimationOut"] = "animation__rollOut";
    HtmlElements["AnimationIn"] = "animation__rollIn";
})(HtmlElements || (HtmlElements = {}));
var visibleCard = function ($element, view) {
    var element = document.getElementById($element);
    element.style.display = view;
    element.classList.remove(HtmlElements.AnimationOut);
    element.classList.add(HtmlElements.AnimationIn);
};
var showTextWithDescription = function ($element, description, firstProperty) {
    var $domElement = document.getElementById($element);
    $domElement.innerHTML = "<span>" + description + "</span> " + Index_1.planetsCollection[Index_1.currentSolarSystemNumber]['environment'][firstProperty];
};
var clearElements = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var $elementsToClear = __spreadArrays(args);
    for (var elementIndex = 0; elementIndex < $elementsToClear.length; elementIndex++) {
        var cleared = document.getElementById($elementsToClear[elementIndex]);
        cleared.innerHTML = '';
    }
};
