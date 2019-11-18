'use strict';

class Calc{

    getRandomItemFromArray(arrayName){
        return Math.floor(Math.random() * arrayName.length);
    }

    getRandomProperty(){
        return Math.floor(Math.random() * 100)
    }

    clearDate($htmlElement) {
        this.clearThisElement  = $htmlElement;
        this.clearThisElement.innerHTML = ''
    }

    resetSetting() {

    }



}