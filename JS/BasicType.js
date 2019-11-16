class Basic {
    constructor(){
        this.planetName = document.getElementById('planetName');
        this.planetSizeDescritpion = document.getElementById('planetSizeDescription');
        this.planetSizeName = document.getElementById('planetSizeName');
        this.planetRadiusHTML = document.getElementById('planetRadius');


        this.calc = new Calculations();
        this.data = new DataPlanets();

    }

    planetTypeDraw() {

        let drawNameForPlanet = this.calc.drawPropertyFromArray(this.data.uniquePlanetName);
        let drawSizeForPlanet = this.calc.drawPropertyFromArray(this.data.planetSize);

        this.planetName.textContent = this.data.uniquePlanetName[drawNameForPlanet];
        this.planetSizeName.innerHTML = `<span>Rodzaj wielkości: </span> ${this.data.planetSize[drawSizeForPlanet].planetSizeName}`;

        this.planetRadiusHTML.innerHTML = `<span>Rozmiar względem ziemii (promień):</span> ${this.drawPlanetSize(drawSizeForPlanet)}`;


        this.planetSizeDescritpion.innerHTML = `<span> Wytłumaczenie: </span> ${this.data.planetSize[drawSizeForPlanet].description}`;



    }

    drawPlanetSize(planetSizeNumber){
        let min = this.data.planetSize[planetSizeNumber].minSizeRadius;
        let max = this.data.planetSize[planetSizeNumber].maxSizeRadius;

        return Math.floor(Math.random() * (max - min)) + min;

    }

}