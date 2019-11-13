class Basic {
    constructor(){

        this.planetName = document.getElementById('planetName');
        this.planetSizeDescritpion = document.getElementById('planetSizeDescription');
        this.planetSizeName = document.getElementById('planetSizeName');
this.starName = document.getElementById('starName');

        this.calc = new Calculations();
        this.data = new DataPlanets();

    }

    planetTypeDraw() {

        let drawNameForPlanet = this.calc.drawPropertyFromArray(this.data.uniquePlanetName);
        let drawSizeForPlanet = this.calc.drawPropertyFromArray(this.data.planetSize);
        let drawNameForStar = this.calc.drawPropertyFromArray(this.data.starName);

        this.planetName.textContent = this.data.uniquePlanetName[drawNameForPlanet];
        this.planetSizeName.textContent = `Wielkość planety: ${this.data.planetSize[drawSizeForPlanet].planetSizeName}`;
        this.planetSizeDescritpion.textContent = `Jak określamy wielkość: ${this.data.planetSize[drawSizeForPlanet].description}`;

        this.starName.textContent = this.data.starName[drawNameForStar];


    }

    ecosfera() {



    }

}