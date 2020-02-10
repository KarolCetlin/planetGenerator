

function getRandomNumber(maxNumber: number): number {
    maxNumber = Math.floor(maxNumber);
    return Math.floor(Math.random() * maxNumber);
}


function getName(array: Array<number>, index: number = getRandomNumber(array.length)){

    return array[index]

}

function getNameFromArray(array: Array<object> | Array<string>, index?: number): any {

    if (typeof array === 'object' && typeof index === 'number') {

        return array[index]

    } else if (typeof array === 'object' && typeof index !== 'number') {

        return getRandomNumber(array.length)
    }
}

function getNameFromObject(object: object, index: number, parameter: string): string {
    return object[index][parameter];
}


function randomNumberFromArrayInRange(array: Array<object>, insertIndex: number, minKeyName: string, maxKeyName: string): number {
    let collection: Array<object> = array;

    let minKeyToString = minKeyName.toString();
    let maxKeyToString = maxKeyName.toString();

    let minNumber = collection[insertIndex][minKeyToString];
    let maxNumber = collection[insertIndex][maxKeyToString];

    return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
}


function checkChance(requiredValue: number): boolean {

    let maxChanceToSucces: number = 100;
    let drawnValue: number = getRandomNumber(maxChanceToSucces);


    if(drawnValue >= requiredValue){
        return false;
    } else {
        return true;
    }

}

function sortObjectInArray(array: [], sortProperty: string): void {

    array.sort((a: string, b: string) => b[sortProperty] - a[sortProperty]
    )

}

function findNumberFromTotal(totalNumber: number, percent: number): number {
    let maxChanceToSucces: number = 100;
    return Math.round((totalNumber / maxChanceToSucces) * percent);
}

function randomNumberInRange(minNumber: number, maxNumber: number): number {
    return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
}




export{getRandomNumber, getNameFromArray, getNameFromObject, randomNumberFromArrayInRange, checkChance, sortObjectInArray, findNumberFromTotal, randomNumberInRange, getName};