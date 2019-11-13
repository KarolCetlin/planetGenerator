'use strict';

class Generator{
    constructor() {
        document.getElementById('active').addEventListener('click', this.render.bind(this));

this.basic = new Basic();
this.life = new Life();
this.weather = new Weather();

   }

    render() {
        this.basic.planetTypeDraw();
        this.life.isLifeOnPlanet();
        this.weather.keyParametersForMakePlanet();

    }








}

const planetGenerator = new Generator;
