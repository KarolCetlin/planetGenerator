// const availablePlanetNames: string[] = require('../../Data/availablePlanetNames.json');

const generatePlanetName = (availablePlanetNames: any): string => {
  const availablePlanetsCount = availablePlanetNames.length - 1;
  const randomIndex = Math.floor(Math.random() * availablePlanetsCount);

  return availablePlanetNames[ randomIndex ];
};

export default generatePlanetName;
