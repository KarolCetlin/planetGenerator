
class Index{
    constructor() {

        document.getElementById('active').addEventListener('click', this.render.bind(this));

    this.basic = new Basic();
    this.life = new Life();
    this.weather = new Weather();
    this.star = new Star();

    }

    render() {
        this.basic.showSection();
        this.basic.hideText();

        this.basic.planetTypeDraw();

        this.life.isLifeOnPlanet();
        this.weather.keyParametersForMakePlanet();

        this.star.initStar();

    }








}

const planetGenerator = new Index;

function resetClass(){
    let sectionHTML = [...document.getElementsByTagName('section')];

    for(const element in sectionHTML) {
        sectionHTML[element].classList.add('disable');
    }
}

resetClass()