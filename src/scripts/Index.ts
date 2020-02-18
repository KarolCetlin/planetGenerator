import "../../sass/main.scss";
import {generatePlanet} from "./Modules/Generator";
import {cardCollection} from "./View/ShowDOM";
import '../../public/images/planets/planets2.jpg';
import '../../public/images/population/colony.jpg';
import '../../public/images/stars/star.jpg';
import '../../public/images/world/savanna.jpg';
import '../../public/images/background/wallpaper.jpg';


export let currentSolarSystemNumber: number = 0;
export let planetsCollection: Array<object> = [];


enum Method {

    Auto = 'auto',
    Parameter = 'parameter',
    Custom = 'custom',

}

const Init = (chosenMethod: string): void => {

    switch (chosenMethod) {
        case Method.Auto:
            initGenerator();
            cardCollection();
            break;

        case Method.Parameter:
            console.log("change one parameter");
            break;

        case Method.Custom:
            console.log("custom planet");
            break;
    }




}


const initGenerator = () => {

    let newPlanet: any = generatePlanet();
    planetsCollection.push(newPlanet);
    console.log(planetsCollection);

};


const click = ($element: string, chosenMethod: string) => {
    let clickedElement: any = document.getElementById($element);
    clickedElement.onclick = (): void => {
        Init(chosenMethod);
        currentSolarSystemNumber++;
    };
};

Init(Method.Auto);

// class Init {
//     constructor($element: string, chosenMethod) {
//         this.click($element, chosenMethod);
//     }
//
//
//     checkMethod(chosenMethod) {
//
//         switch (chosenMethod) {
//             case Method.Auto:
//                 this.initGenerator();
//                 cardCollection();
//                 break;
//
//             case Method.Parameter:
//                 console.log("change one parameter");
//                 break;
//
//             case Method.Custom:
//                 console.log("custom planet");
//                 break;
//         }
//     }
//
//     initGenerator() {
//
//         let newPlanet: any = generatePlanet();
//         planetsCollection.push(newPlanet);
//         console.log(planetsCollection);
//
//     }
//
//     click($element, chosenMethod) {
//         let clickedElement = document.getElementById($element);
//         clickedElement.onclick = () => {
//             this.checkMethod(chosenMethod);
//             currentSolarSystemNumber++;
//         };
//     }
// }
//
// new Init("active", Method.Auto);