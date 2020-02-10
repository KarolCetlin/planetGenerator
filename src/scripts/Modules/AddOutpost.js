"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var Tools_js_1 = require("../Logic/Tools.js");
var Data_js_1 = require("../Data/Data.js");
var AddOutpost = /** @class */ (function () {
    function AddOutpost() {
        this.raceArray = [];
        this.outpostPopulation = null;
        this.outpostIndex = null;
        this.outpostName = '';
        this.addAllSociety();
        console.log(this.raceArray);
    }
    AddOutpost.prototype.addAllSociety = function () {
        this.addRaceToSociety();
        var initialPercentPopulation = 100;
        var lastPercentPopulation = 1;
        var amountRacesToRemove = 1;
        var hasPopulationToDraw;
        var copyRacesCollection = __spreadArrays(Data_js_1.mainRacesCollection);
        function checkState(checkedArgument) {
            checkedArgument = true;
            if (initialPercentPopulation <= lastPercentPopulation) {
                checkedArgument = false;
            }
        }
        while (hasPopulationToDraw === true) {
            checkState(hasPopulationToDraw);
            var percentDrawnRace = Tools_js_1.randomNumberInRange(lastPercentPopulation, initialPercentPopulation);
            var indexDrawnRace_1 = Tools_js_1.getNameFromArray(copyRacesCollection);
            var quantityDrawnRace = Tools_js_1.findNumberFromTotal(this.outpostPopulation, percentDrawnRace);
            //
            // if (copyRacesCollection[indexDrawnRace] === undefined) {
            //     copyRacesCollection.push(
            //         "Brak szczegółowych danych, błędy w raportach"
            //     );
            // }
            var raceOnOutpost = [];
            raceOnOutpost['name'] = copyRacesCollection[indexDrawnRace_1];
            raceOnOutpost['quantity'] = quantityDrawnRace;
            raceOnOutpost['percent'] = percentDrawnRace;
            this.raceArray.push(raceOnOutpost);
            initialPercentPopulation -= percentDrawnRace;
            copyRacesCollection.splice(indexDrawnRace_1, amountRacesToRemove);
        }
        Tools_js_1.sortObjectInArray(this.raceArray, 'percent');
        return this.raceArray;
    };
    AddOutpost.prototype.addRaceToSociety = function () {
        this.outpostIndex = Tools_js_1.getNameFromArray(Data_js_1.outpostsSet);
        this.outpostName = Tools_js_1.getNameFromObject(Data_js_1.outpostsSet, this.outpostIndex, 'name');
        this.outpostDescription = Tools_js_1.getNameFromObject(Data_js_1.outpostsSet, this.outpostIndex, 'description');
        this.outpostPopulation = Tools_js_1.randomNumberFromArrayInRange(Data_js_1.outpostsSet, this.outpostIndex, 'minSize', 'maxSize');
    };
    return AddOutpost;
}());
exports["default"] = AddOutpost;
