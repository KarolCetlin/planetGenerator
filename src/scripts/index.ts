import "../../sass/main.scss";
import { generatePlanet } from "./Modules/Generator.js";
import ShowDOM from "./View/ShowDOM";
import '../../public/images/planets/planets2.jpg';
import '../../public/images/population/colony.jpg';
import '../../public/images/stars/star.jpg';
import '../../public/images/world/savanna.jpg';
import '../../public/images/background/wallpaper.jpg';


export let currentPlanetNumber: number = 0;
export let planetsCollection: Array<object> = [];

enum Method {

    Auto = 'auto',
    Parameter = 'parameter',
    Custom = 'custom',

}




class Init {
    constructor($element, chosenMethod) {
        this.click($element, chosenMethod);
    }


    checkMethod(chosenMethod) {

        switch (chosenMethod) {
            case Method.Auto:
                this.initGenerator();
                new ShowDOM();
                break;

            case Method.Parameter:
                console.log("change one parameter");
                break;

            case Method.Custom:
                console.log("custom planet");
                break;
        }
    }

    initGenerator() {

        let newPlanet: any = generatePlanet();
        planetsCollection.push(newPlanet);
        console.log(planetsCollection);
    }

    click($element, chosenMethod) {
        let clickedElement = document.getElementById($element);
        clickedElement.onclick = () => {
            this.checkMethod(chosenMethod);
            currentPlanetNumber++;
        };
    }
}

new Init("active", Method.Auto);