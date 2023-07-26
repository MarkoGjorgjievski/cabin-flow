export const seatingConfig = (configuration) => {
  const config = []
  for (let i = configuration.rowStart; i <= configuration.rowEnd; i++) {
    if (configuration.ghostRow !== i) {
      let row = configuration.seats.map(seat => `${i}${seat}`)
      config.push(row)
    }
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
