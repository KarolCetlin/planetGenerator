'use strict';

class NewStar {
    constructor(){
        this.starNameHTML = document.getElementById('starName');
        this.starSpectralTypeHTML = document.getElementById('starSpectreType');

        this.calc = new Calculations();
        this.data = new DataPlanets();
    }


    initStar(){

        let drawNameForStar = this.calc.drawPropertyFromArray(this.data.starName);
        this.starNameHTML.textContent = this.data.starName[drawNameForStar];

        let drawSizeForStar = this.calc.drawPropertyFromArray(this.data.starType);
        this.starType.innerHTML = `<span>Wielkość gwiazdy:</span> ${this.data.starType[drawSizeForStar].name}`;

        let drawNumberFromThisRange = this.drawStarTemeperature(drawSizeForStar);

        this.starSpectralTypeHTML.innerHTML = `<span>Temperatura barmowa:</span> ${this.data.starSpectralType[drawNumberFromThisRange].name}`;



    }

    drawStarTemeperature(starNumber){
        let minSpectral = this.data.starType[starNumber].minSpectralType;
        let maxSpectral = this.data.starType[starNumber].maxSpectralType;

        return Math.floor(Math.random() * (maxSpectral - minSpectral)) + minSpectral;

    }


}