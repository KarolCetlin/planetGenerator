'use strict';

class Star {
    constructor(){
        this.starNameHTML = document.getElementById('starName');


        this.starSpectralTypeHTML = document.getElementById('starSpectreType');
        this.starSpectralDescriptionHTML = document.getElementById('starSpectreTypeDescription');

        this.starSizeHTML = document.getElementById('starSize');
        this.starSizeDescritpionHTML = document.getElementById('starSizeDescription');

        this.calc = new Tools();
        this.data = new Data();
    }


    initStar(){

        let drawNameForStar = this.calc.getRandomIndexFromArray(this.data.starNamesSet);
        this.starNameHTML.textContent = this.data.starNamesSet[drawNameForStar];

        let drawSizeForStar = this.calc.getRandomIndexFromArray(this.data.setLifeCycleStars);
        this.starSizeHTML.innerHTML = `<span>Etap życia gwiazdy:</span> ${this.data.setLifeCycleStars[drawSizeForStar].planetName}`;
        this.starSizeDescritpionHTML.innerHTML = this.data.setLifeCycleStars[drawSizeForStar].description;

        let drawNumberFromThisRange = this.drawStarTemeperature(drawSizeForStar);

        this.starSpectralTypeHTML.innerHTML = `<span>Typ widmowy:</span> ${this.data.setSpectralTypes[drawNumberFromThisRange].planetName}`;
        this.starSpectralDescriptionHTML.innerHTML = `${this.data.setSpectralTypes[drawNumberFromThisRange].description}`;


    }

    drawStarTemeperature(starNumber){
        let min = this.data.setLifeCycleStars[starNumber].minSpectralType;
        let max = this.data.setLifeCycleStars[starNumber].maxSpectralType;

        return Math.floor(Math.random() * (max - min)) + min;

    }


}