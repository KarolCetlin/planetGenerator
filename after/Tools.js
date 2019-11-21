'use strict';

class Tools{
    constructor(range){
        this.obs()
    }

    obs(range) {
        if(typeof range === 'object') {

            return this.getRandomIndexFromArray(range)

        } else if(typeof range === 'number') {

           return this.getRandomNumberFromRange(range)


        }


}

    getRandomNumber(max){
        max = Math.floor(max);
        return Math.floor(Math.random() * max);
    }

    getNameFromArray(array, index) {

        if(typeof array === 'object' && typeof index === 'number'){

            return array[index]

        } else if(typeof array === 'object' &&  typeof index !== 'number'){

            return this.getRandomNumber(array.length)
        }
    }

    getNameFromObject(object, index, parametr){
        return object[index][parametr]
    }


    randomNumberFromArrayInRange(array, insertIndex, minKeyName, maxKeyName) {
        this.collection = array;

        this.minKeyToString = minKeyName.toString();
        this.maxKeyToString = maxKeyName.toString();

        let minNumber = this.collection[insertIndex][this.minKeyToString];
        let maxNumber = this.collection[insertIndex][this.maxKeyToString];

        return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    }






}