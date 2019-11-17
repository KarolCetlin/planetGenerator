
class Generator{
    constructor() {

        document.getElementById('active').addEventListener('click', this.render.bind(this));

    this.basic = new Basic();
    this.life = new Life();
    this.weather = new Weather();
    this.star = new Star();

    }

    render() {
        this.basic.resetClass();

        this.basic.planetTypeDraw();

        this.life.isLifeOnPlanet();
        this.weather.keyParametersForMakePlanet();

        this.star.initStar();

    }








}

const planetGenerator = new Generator;
