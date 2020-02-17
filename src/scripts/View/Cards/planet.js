"use strict";
exports.__esModule = true;
var Index_1 = require("../../Index");
var Description;
(function (Description) {
    Description["Name"] = "Wyt\u0142umaczenie:";
    Description["Description"] = "Rodzaj wielko\u015Bci:";
    Description["Radius"] = "Rozmiar wzgl\u0119dem ziemii (promie\u0144):";
})(Description || (Description = {}));
exports.planetCard = function () {
    showTitle("planetName", "name");
    showTextWithDescription("planetSizeName", Description.Name, "name");
    showTextWithDescription("planetSizeDescription", Description.Description, "description");
    showTextWithDescription("planetRadius", Description.Radius, "radius");
    switchEvent("switchOutpost", "hasOutpost");
    switchEvent("switchEcosferic", "hasEcosferic");
    switchEvent("switchMinerals", "hasMinerals");
    switchEvent("switchAnomaly", "hasAnomaly");
};
var showTitle = function ($element, property) {
    var $domElement = document.getElementById($element);
    $domElement.innerHTML = "" + Index_1.planetsCollection[Index_1.currentSolarSystemNumber][property];
};
var showTextWithDescription = function ($element, description, firstProperty) {
    var $domElement = document.getElementById($element);
    $domElement.innerHTML = "<span>" + description + "</span> " + Index_1.planetsCollection[Index_1.currentSolarSystemNumber]['size'][firstProperty];
};
var switchEvent = function ($checkboxId, propertyCheck) {
    var $checkboxElement = document.getElementById($checkboxId);
    var readProperty = Index_1.planetsCollection[Index_1.currentSolarSystemNumber]['event'][propertyCheck];
    readProperty === true ? $checkboxElement.checked = true : $checkboxElement.checked = false;
};
