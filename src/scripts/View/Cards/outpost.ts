import {currentSolarSystemNumber, planetsCollection} from "../../Index";
import {planetHasOutpost } from '../../Modules/generators/events';
import { Animation, View, Description, Props, $outpost } from '../../Modules/Types';


export const outpostCard = (): void => {

    if(planetHasOutpost === true){
        visibleCard($outpost.Card, View.Show);
        showColonyText( $outpost.Structure, Description.Empty, Props.Name);
        showColonyText($outpost.Description, Description.Empty, Props.Description);
    } else {
        visibleCard($outpost.Card, View.Hide);
        clearElements($outpost.Description, $outpost.Structure,);
    }

};



const visibleCard = ($element: string, view: string): void => {

    let element: any = document.getElementById($element);

    element.style.display = view;
    element.classList.remove(Animation.Out);
    element.classList.add(Animation.In)

};

const showColonyText = ($element: string, description: string, firstProperty: string): void => {
    const $domElement: any = document.getElementById($element);
    $domElement.innerHTML = `<span>${description}</span> ${planetsCollection[currentSolarSystemNumber]['outpost'][firstProperty]}`;
};

const clearElements = (...args: string[]) => {

    let $elementsToClear = [...args];

    for(let elementIndex = 0; elementIndex < $elementsToClear.length; elementIndex++ ){


        let cleared = document.getElementById($elementsToClear[elementIndex]);
        cleared.innerHTML = '';
    }
};


//             new Diagram();
//
//
//             //  const racesDiagram = new Diagram();
//             // setTimeout(() => racesDiagram.renderDiagram(), 2000);
