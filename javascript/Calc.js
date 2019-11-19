'use strict';

class Calc{

    getRandomIndexFromArray(arrayName){
        return Math.floor(Math.random() * arrayName.length);
    }

    getRandomNumberFromRange(maxRange = 100){
        return Math.floor(Math.random() * maxRange)
    }

    clearDate($htmlElement) {
        this.clearThisElements  = $htmlElement;
        this.clearThisElements.innerHTML = ''
    }

    randomNumberFromArrayInRange(array, insertIndex, minKeyName, maxKeyName) {
        this.collection = array;

        this.minKeyToString = minKeyName.toString();
        this.maxKeyToString = maxKeyName.toString();

        let minNumber = this.collection[insertIndex][this.minKeyToString];
        let maxNumber = this.collection[insertIndex][this.maxKeyToString];

        return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    }

    resetSetting() {
        this.data.changeOnMinerals = 15;
    }

    initCheckbox($trueElement, value){
        if(value === true) {
            $trueElement.checked = true;
    } else {
        $trueElement.checked = false;
        }
    }

    addCheckbox() {




    }



}