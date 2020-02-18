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
    Description["Population"] = "Liczba mieszka\u0144c\u00F3w:";
})(Description || (Description = {}));
var Props;
(function (Props) {
    Props["Name"] = "name";
    Props["Description"] = "description";
})(Props || (Props = {}));
exports.outpostCard = function () {
    if (events_1.planetHasOutpost === true) {
        visibleCard($ElementId.Outpost, View.Show);
        showColonyText($ElementId.Structure, Description.Empty, Props.Name);
        showColonyText($ElementId.Description, Description.Empty, Props.Description);
    }
    else {
        visibleCard($ElementId.Outpost, View.Hide);
        clearElements($ElementId.Description, $ElementId.Structure);
    }
};
var visibleCard = function ($element, view) {
    var element = document.getElementById($element);
    element.style.display = view;
    element.classList.remove(Animation.Out);
    element.classList.add(Animation.In);
};
var showColonyText = function ($element, description, firstProperty) {
    var $domElement = document.getElementById($element);
    $domElement.innerHTML = "<span>" + description + "</span> " + Index_1.planetsCollection[Index_1.currentSolarSystemNumber]['outpost'][firstProperty];
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
//             new Diagram();
//
//
//             //  const racesDiagram = new Diagram();
//             // setTimeout(() => racesDiagram.renderDiagram(), 2000);
