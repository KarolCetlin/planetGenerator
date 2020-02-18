import {currentSolarSystemNumber, planetsCollection} from "../../Index";

export const starCard = (): void => {

    showTitle("starName", "name");
    showLifeCycle("starSize", "Etap życia gwiazdy:", "name", );
    showLifeCycle("starSizeDescription", '', "description");

    showSpectralType("starSpectreType", "Typ widma:", "name", );
    showSpectralType("starSpectreTypeDescription", 'Wyjaśnienie:', "description");
    showSpectralType("starSpectreTemperature", "Temperatura barwowa(w Kelvinach):", "temperature", );
};

const showTitle = ($element: string, property: string): void => {
    const $domElement: any = document.getElementById($element);
    $domElement.innerHTML = `${planetsCollection[currentSolarSystemNumber]['star'][property]}`
};

const showLifeCycle = ($element: string, description: string, firstProperty: string): void => {
    const $domElement: any = document.getElementById($element);
    $domElement.innerHTML = `<span>${description}</span> ${planetsCollection[currentSolarSystemNumber]['star']['lifeCycle'][firstProperty]}`;
};

const showSpectralType = ($element: string, description: string, firstProperty: string): void => {
    const $domElement: any = document.getElementById($element);
    $domElement.innerHTML = `<span>${description}</span> ${planetsCollection[currentSolarSystemNumber]['star']['spectral'][firstProperty]}`;
};

