const availablePlanetNames = ['Helara',
  'Kitrarth',
  'Zeceitera',
  'Chemion',
  '51 Pegasi b',
  'PSR 1257+12 C',
  'OGLE-TR-56b',
  'Fomalhaut',
  '2M1207b',
];

const generatePlanetName = (): string => {
  const availablePlanetsCount = availablePlanetNames.length - 1;
  const randomIndex = Math.floor(Math.random() * availablePlanetsCount);

  return availablePlanetNames[ randomIndex ];
};

export default generatePlanetName;
