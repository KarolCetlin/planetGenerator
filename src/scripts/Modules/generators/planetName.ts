const availablePlanetNames: string[] = require('./availablePlanetNames.json');

const generatePlanetName = (): string => {
  const availablePlanetsCount = availablePlanetNames.length - 1;
  const randomIndex = Math.floor(Math.random() * availablePlanetsCount);

  return availablePlanetNames[ randomIndex ];
};

export default generatePlanetName;
