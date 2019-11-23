'use strict';

// const asd = require('./Tools/AddOutpost');
// asd.addAllSociety();

class Tools {

    getRandomNumber(maxNumber) {
        maxNumber = Math.floor(maxNumber);
        return Math.floor(Math.random() * maxNumber);
    }

    getNameFromArray(array, index) {

        if (typeof array === 'object' && typeof index === 'number') {

            return array[index]

        } else if (typeof array === 'object' && typeof index !== 'number') {

            return this.getRandomNumber(array.length)
        }
    }

    getNameFromObject(object, index, parameter) {
        return object[index][parameter];
    }


    randomNumberFromArrayInRange(array, insertIndex, minKeyName, maxKeyName) {
        this.collection = array;

        this.minKeyToString = minKeyName.toString();
        this.maxKeyToString = maxKeyName.toString();

        let minNumber = this.collection[insertIndex][this.minKeyToString];
        let maxNumber = this.collection[insertIndex][this.maxKeyToString];

        return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    }


    checkChance(requiredValue) {
        let chanceValue = this.getRandomNumber(100);

        if (chanceValue >= requiredValue) {
            return true;
        } else {
            return false;
        }
    }

    sortObjectInArray(array, sortProperty) {

        array.sort(function (a, b) {
            return b[sortProperty] - a[sortProperty];
        });

    }

    findNumberFromTotal(totalNumber, percent) {
        return Math.round((totalNumber / 100) * percent);
    }

    randomNumberInRange(minNumber, maxNumber) {
        return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    }


}