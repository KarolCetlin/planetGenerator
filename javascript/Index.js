
class Index{
    constructor() {
        document.getElementById('active').addEventListener('click', this.render.bind(this));

        this.basic = new Basic();
        this.life = new Life();
        this.world = new World();
        this.star = new Generator();

        this.basic.hideElementsByTag();
    }

    render() {
        this.basic.showElementsByTag('section');
        this.basic.hideElementById('sectionVisible');

        this.basic.addPlanet();
        this.basic.inspectEcosferic();
        this.life.inspectLife();



        this.star.initStar();


    }








}

const planetGenerator = new Index;


