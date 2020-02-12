"use strict";
exports.__esModule = true;
function getRandomNumber(maxNumber) {
    maxNumber = Math.floor(maxNumber);
    return Math.floor(Math.random() * maxNumber);
}
exports.getRandomNumber = getRandomNumber;
function getName(array, index) {
    if (index === void 0) { index = 0; }
    var defaultNumber = 0;
    if (defaultNumber === 0) {
        defaultNumber = getRandomNumber(array.length);
        return array[defaultNumber];
    }
    else {
        return array[index];
    }
}
exports.getName = getName;
function getNameFromArray(array, index) {
    if (typeof array === 'object' && typeof index === 'number') {
        return array[index];
    }
    else if (typeof array === 'object' && typeof index !== 'number') {
        return getRandomNumber(array.length);
    }
}
exports.getNameFromArray = getNameFromArray;
function getNameFromObject(object, index, parameter) {
    return object[index][parameter];
}
exports.getNameFromObject = getNameFromObject;
function randomNumberFromArrayInRange(array, insertIndex, minKeyName, maxKeyName) {
    var collection = array;
    var minKeyToString = minKeyName.toString();
    var maxKeyToString = maxKeyName.toString();
    var minNumber = collection[insertIndex][minKeyToString];
    var maxNumber = collection[insertIndex][maxKeyToString];
    return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
}
exports.randomNumberFromArrayInRange = randomNumberFromArrayInRange;
function checkChance(requiredValue) {
    var maxChanceToSucces = 100;
    var drawnValue = getRandomNumber(maxChanceToSucces);
    if (drawnValue >= requiredValue) {
        return false;
    }
    else {
        return true;
    }
}
exports.checkChance = checkChance;
function sortObjectInArray(array, sortProperty) {
    array.sort(function (a, b) { return b[sortProperty] - a[sortProperty]; });
}
exports.sortObjectInArray = sortObjectInArray;
function findNumberFromTotal(totalNumber, percent) {
    var maxChanceToSucces = 100;
    return Math.round((totalNumber / maxChanceToSucces) * percent);
}
exports.findNumberFromTotal = findNumberFromTotal;
function randomNumberInRange(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
}
exports.randomNumberInRange = randomNumberInRange;
