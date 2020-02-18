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
var $ElementId;
(function ($ElementId) {
    $ElementId["Outpost"] = "outpostSection";
    $ElementId["Description"] = "colonyDescription";
    $ElementId["Structure"] = "colonyStructure";
})($ElementId || ($ElementId = {}));
var Animation;
(function (Animation) {
    Animation["Out"] = "animation__rollOut";
    Animation["In"] = "animation__rollIn";
})(Animation || (Animation = {}));
var View;
(function (View) {
    View["Show"] = "block";
    View["Hide"] = "none";
})(View || (View = {}));
var Description;
(function (Description) {
    Description["Empty"] = "";
    Description["Humidity"] = "Wilgotno\u015B\u0107:";
    Description["Temperature"] = "Temperatura:";
})(Description || (Description = {}));
var Props;
(function (Props) {
    Props["HumName"] = "humidityName";
    Props["HumDesc"] = "humidityDescription";
    Props["TemName"] = "temperatureName";
    Props["TemDesc"] = "temperatureDescription";
    Props["WorName"] = "worldName";
    Props["WodDesc"] = "worldDescription";
})(Props || (Props = {}));
exports.environmentCard = function () {
    if (events_1.planetHasEcosferic === true) {
        visibleCard('worldSection', View.Show);
        showTextWithDescription('humidityName', Description.Humidity, Props.HumName);
        showTextWithDescription('humidityDescription', Description.Empty, Props.HumDesc);
        showTextWithDescription('temperatureName', Description.Temperature, Props.TemName);
        showTextWithDescription('temperatureDescription', Description.Empty, Props.TemDesc);
        showTextWithDescription('planetTypeName', Description.Empty, Props.WorName);
        showTextWithDescription('planetTypeDescription', Description.Empty, Props.WodDesc);
    }
    else {
        visibleCard('worldSection', View.Hide);
        clearElements("humidityName", "humidityDescription", 'temperatureName', 'temperatureDescription', 'planetTypeName', 'planetTypeDescription');
    }
};
var visibleCard = function ($element, view) {
    var element = document.getElementById($element);
    element.style.display = view;
    element.classList.remove(Animation.Out);
    element.classList.add(Animation.In);
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
