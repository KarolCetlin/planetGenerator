import {currentSolarSystemNumber, planetsCollection} from "../../Index";
import { planetHasEcosferic } from '../../Modules/generators/events'

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
    Humidity = 'Wilgotność:',
    Temperature = 'Temperatura:',

}

enum Props {
    HumName = 'humidityName',
    HumDesc = 'humidityDescription',
    TemName = 'temperatureName',
    TemDesc = 'temperatureDescription',
    WorName = 'worldName',
    WodDesc = 'worldDescription',
}



export const environmentCard = () => {

    if(planetHasEcosferic === true){
    visibleCard('worldSection', View.Show);
    showTextWithDescription('humidityName', Description.Humidity, Props.HumName);
    showTextWithDescription('humidityDescription', Description.Empty, Props.HumDesc);

    showTextWithDescription('temperatureName', Description.Temperature, Props.TemName);
    showTextWithDescription('temperatureDescription', Description.Empty, Props.TemDesc);

    showTextWithDescription('planetTypeName', Description.Empty, Props.WorName);
    showTextWithDescription('planetTypeDescription', Description.Empty, Props.WodDesc);
    } else {

        visibleCard('worldSection', View.Hide);
        clearElements("humidityName", "humidityDescription", 'temperatureName', 'temperatureDescription', 'planetTypeName', 'planetTypeDescription')

    }

};

const visibleCard = ($element: string, view: string): void => {

    let element = document.getElementById($element);

    element.style.display = view;
    element.classList.remove(Animation.Out);
    element.classList.add(Animation.In)

};


const showTextWithDescription = ($element: string, description: string, firstProperty: string): void => {
    const $domElement = document.getElementById($element);
    $domElement.innerHTML = `<span>${description}</span> ${planetsCollection[currentSolarSystemNumber]['environment'][firstProperty]}`;
};

const clearElements = (...args: string[]): void => {

    let $elementsToClear = [...args];


    for(let elementIndex = 0; elementIndex < $elementsToClear.length; elementIndex++ ){


        let cleared = document.getElementById($elementsToClear[elementIndex]);
        cleared.innerHTML = '';
    }
};