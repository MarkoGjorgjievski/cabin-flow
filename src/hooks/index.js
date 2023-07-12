import { CONFIGURATION } from "$lib/constants";

export const seatingConfig = (cabin) => {
  const config = []
  for (let i = CONFIGURATION[cabin].rowStart; i <= CONFIGURATION[cabin].rowEnd; i++) {
    let row = CONFIGURATION[cabin].seats.map(seat => i + seat)
    config.push(row)
  }

  return config
}

export const getDividers = (config, zones) => config.map((_, i) => {
  const findZone = zones.find(zone => zone.row === i);
  if (findZone) {
    return [{ row: i, id: i, crew: findZone.crew }];
  }
  return [];
});
