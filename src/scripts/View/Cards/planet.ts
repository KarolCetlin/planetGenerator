import {currentSolarSystemNumber, planetsCollection} from "../../Index";

enum Description {

    Name = "Wytłumaczenie:",
    Description = "Rodzaj wielkości:",
    Radius = "Rozmiar względem ziemii (promień):",

}

export const planetCard = (): void => {

    showTitle("planetName", "name")
    showTextWithDescription("planetSizeName", Description.Name, "name", )
    showTextWithDescription("planetSizeDescription",  Description.Description, "description",);
    showTextWithDescription("planetRadius",Description.Radius, "radius");

    switchEvent("switchOutpost", "hasOutpost")
    switchEvent("switchEcosferic", "hasEcosferic");
    switchEvent("switchMinerals", "hasMinerals");
    switchEvent("switchAnomaly", "hasAnomaly");

};

const showTitle = ($element: string, property: string): void => {
    const $domElement = document.getElementById($element);
    $domElement.innerHTML = `${planetsCollection[currentSolarSystemNumber][property]}`
};

const showTextWithDescription = ($element: string, description: string, firstProperty: string): void => {
    const $domElement = document.getElementById($element);
    $domElement.innerHTML = `<span>${description}</span> ${planetsCollection[currentSolarSystemNumber]['size'][firstProperty]}`;
};

const switchEvent = ($checkboxId: string, propertyCheck: string): void => {
    const $checkboxElement = document.getElementById($checkboxId) as HTMLInputElement;
    const readProperty: boolean = planetsCollection[currentSolarSystemNumber]['event'][propertyCheck];

    readProperty === true ? $checkboxElement.checked = true : $checkboxElement.checked = false;

};