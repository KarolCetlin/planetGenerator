import {currentSolarSystemNumber, planetsCollection} from "../../Index";
import {planetHasOutpost } from '../../Modules/generators/events';

enum $ElementId {

    Outpost = 'outpostSection',
    Description = 'colonyDescription',
    Structure = 'colonyStructure',

}

enum Animation {

    Out = 'animation__rollOut',
    In = 'animation__rollIn',

}

enum View {

    Show = 'block',
    Hide = 'none',

}

enum Description {

    Empty = '',
    Population = "Liczba mieszkańców:",

}

enum Props {
    Name = 'name',
    Description = 'description'
}

export const outpostCard = (): void => {

    if(planetHasOutpost === true){
        visibleCard($ElementId.Outpost, View.Show);
        showColonyText( $ElementId.Structure, Description.Empty, Props.Name);
        showColonyText($ElementId.Description, Description.Empty, Props.Description);
    } else {
        visibleCard($ElementId.Outpost, View.Hide);
        clearElements($ElementId.Description, $ElementId.Structure,);
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
