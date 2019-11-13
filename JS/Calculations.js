'use strict';

class Calculations{
    constructor(){


    }

    drawPropertyFromArray(providePropertyArray){
        return Math.floor(Math.random() * providePropertyArray.length);
    }

    drawProperty(){
        return Math.floor(Math.random() * 100)
    }



}