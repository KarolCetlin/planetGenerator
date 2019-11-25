

    function getRandomNumber(maxNumber) {
        maxNumber = Math.floor(maxNumber);
        return Math.floor(Math.random() * maxNumber);
    }

    function getNameFromArray(array, index) {

        if (typeof array === 'object' && typeof index === 'number') {

            return array[index]

        } else if (typeof array === 'object' && typeof index !== 'number') {

            return getRandomNumber(array.length)
        }
    }

    function getNameFromObject(object, index, parameter) {
        return object[index][parameter];
    }


    function randomNumberFromArrayInRange(array, insertIndex, minKeyName, maxKeyName) {
        let collection = array;

        let minKeyToString = minKeyName.toString();
        let maxKeyToString = maxKeyName.toString();

        let minNumber = collection[insertIndex][minKeyToString];
        let maxNumber = collection[insertIndex][maxKeyToString];

        return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    }


    function checkChance(requiredValue) {
        let chanceValue = getRandomNumber(100);

        if (chanceValue >= requiredValue) {
            return true;
        }
    }

    function sortObjectInArray(array, sortProperty) {

        array.sort(function (a, b) {
            return b[sortProperty] - a[sortProperty];
        });

    }

    function findNumberFromTotal(totalNumber, percent) {
        return Math.round((totalNumber / 100) * percent);
    }

    function randomNumberInRange(minNumber, maxNumber) {
        return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    }




export {getRandomNumber, getNameFromArray, getNameFromObject, randomNumberFromArrayInRange, checkChance, sortObjectInArray, findNumberFromTotal, randomNumberInRange};