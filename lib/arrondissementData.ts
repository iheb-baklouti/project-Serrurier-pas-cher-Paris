// Données géographiques pour chaque arrondissement de Paris
export const arrondissementData: Record<number, {
  name: string;
  postalCode: string;
  latitude: number;
  longitude: number;
}> = {
  1: { name: '1er', postalCode: '75001', latitude: 48.8606, longitude: 2.3376 },
  2: { name: '2ème', postalCode: '75002', latitude: 48.8698, longitude: 2.3413 },
  3: { name: '3ème', postalCode: '75003', latitude: 48.8630, longitude: 2.3622 },
  4: { name: '4ème', postalCode: '75004', latitude: 48.8546, longitude: 2.3522 },
  5: { name: '5ème', postalCode: '75005', latitude: 48.8448, longitude: 2.3447 },
  6: { name: '6ème', postalCode: '75006', latitude: 48.8448, longitude: 2.3376 },
  7: { name: '7ème', postalCode: '75007', latitude: 48.8566, longitude: 2.3122 },
  8: { name: '8ème', postalCode: '75008', latitude: 48.8756, longitude: 2.3117 },
  9: { name: '9ème', postalCode: '75009', latitude: 48.8750, longitude: 2.3397 },
  10: { name: '10ème', postalCode: '75010', latitude: 48.8756, longitude: 2.3622 },
  11: { name: '11ème', postalCode: '75011', latitude: 48.8592, longitude: 2.3797 },
  12: { name: '12ème', postalCode: '75012', latitude: 48.8448, longitude: 2.3700 },
  13: { name: '13ème', postalCode: '75013', latitude: 48.8322, longitude: 2.3561 },
  14: { name: '14ème', postalCode: '75014', latitude: 48.8331, longitude: 2.3264 },
  15: { name: '15ème', postalCode: '75015', latitude: 48.8412, longitude: 2.2992 },
  16: { name: '16ème', postalCode: '75016', latitude: 48.8534, longitude: 2.2650 },
  17: { name: '17ème', postalCode: '75017', latitude: 48.8846, longitude: 2.3219 },
  18: { name: '18ème', postalCode: '75018', latitude: 48.8932, longitude: 2.3447 },
  19: { name: '19ème', postalCode: '75019', latitude: 48.8827, longitude: 2.3742 },
  20: { name: '20ème', postalCode: '75020', latitude: 48.8630, longitude: 2.3984 },
};

export function getArrondissementData(arrondissement: number) {
  return arrondissementData[arrondissement] || arrondissementData[20];
}

