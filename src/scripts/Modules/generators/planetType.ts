import { AvailablePlanetSizeParameters, PlanetSize} from "../Types";

const availablePlanetSizes: AvailablePlanetSizeParameters[] = require('./availablePlanetSizes.json');

const generatePlanetSizeRadius = (planetSizeParameters: AvailablePlanetSizeParameters):number => {
  const minValue = planetSizeParameters.minSizeRadius;
  const maxValue = planetSizeParameters.maxSizeRadius;

  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};

export const generatePlanetSize = (): PlanetSize => {
  const countOfAvailableSizes = availablePlanetSizes.length;
  const randomAvailableSizeIndex = Math.floor(Math.random() * countOfAvailableSizes);

  const planetSizeParameters = availablePlanetSizes[randomAvailableSizeIndex];

  return {
    description: planetSizeParameters.description,
    name: planetSizeParameters.planetSizeName,
    radius: generatePlanetSizeRadius(planetSizeParameters),
  };
};