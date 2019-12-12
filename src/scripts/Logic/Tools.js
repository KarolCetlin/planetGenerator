

    function getRandomNumber(maxNumber) {
        maxNumber = Math.floor(maxNumber);
        return Math.floor(Math.random() * maxNumber);
    }


    function getName(array, index = getRandomNumber(array.length)){

        return array[index]

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

        let maxChanceToSucces = 100;
        let drawnValue = getRandomNumber(maxChanceToSucces);

        if(drawnValue >= requiredValue){
            return false;
        } else {
            return true;
        }

    }

    function sortObjectInArray(array, sortProperty) {

        array.sort((a, b) => b[sortProperty] - a[sortProperty]
        );

    }

    function findNumberFromTotal(totalNumber, percent) {
        let maxChanceToSucces = 100;
        return Math.round((totalNumber / maxChanceToSucces) * percent);
    }

    function randomNumberInRange(minNumber, maxNumber) {
        return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    }




export {getRandomNumber, getNameFromArray, getNameFromObject, randomNumberFromArrayInRange, checkChance, sortObjectInArray, findNumberFromTotal, randomNumberInRange, getName};