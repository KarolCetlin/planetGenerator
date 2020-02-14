
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
  const availablePlanetsCount = availablePlanetNames.length;
  const randomIndex = Math.floor(Math.random() * availablePlanetsCount - 1);

  return availablePlanetNames[ randomIndex ];
};

export default generatePlanetName;