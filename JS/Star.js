'use strict';

class Star {
    constructor(){
        this.starNameHTML = document.getElementById('starName');


        this.starSpectralTypeHTML = document.getElementById('starSpectreType');
        this.starSpectralDescriptionHTML = document.getElementById('starSpectreTypeDescription');

        this.starSizeHTML = document.getElementById('starSize');
        this.starSizeDescritpionHTML = document.getElementById('starSizeDescription');

        this.calc = new Calculations();
        this.data = new DataPlanets();
    }


    initStar(){

        let drawNameForStar = this.calc.drawPropertyFromArray(this.data.starName);
        this.starNameHTML.textContent = this.data.starName[drawNameForStar];

        let drawSizeForStar = this.calc.drawPropertyFromArray(this.data.starType);
        this.starSizeHTML.innerHTML = `<span>Etap życia gwiazdy:</span> ${this.data.starType[drawSizeForStar].name}`;
        this.starSizeDescritpionHTML.innerHTML = this.data.starType[drawSizeForStar].description;

        let drawNumberFromThisRange = this.drawStarTemeperature(drawSizeForStar);

        this.starSpectralTypeHTML.innerHTML = `<span>Typ widmowy:</span> ${this.data.starSpectralType[drawNumberFromThisRange].name}`;
        this.starSpectralDescriptionHTML.innerHTML = `${this.data.starSpectralType[drawNumberFromThisRange].description}`;


    }

    drawStarTemeperature(starNumber){
        let min = this.data.starType[starNumber].minSpectralType;
        let max = this.data.starType[starNumber].maxSpectralType;

        return Math.floor(Math.random() * (max - min)) + min;

    }


}