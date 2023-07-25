export const seatingConfig = (configuration) => {
  const config = []
  for (let i = configuration.rowStart; i <= configuration.rowEnd; i++) {
    let row = configuration.seats.map(seat => i + seat)
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

export const truncateString = (str, num = 15) => {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}

export const getCabin = page => page.route.id.split('/')[1];

export const createAcronymObject = (arr) => {
  return arr.reduce((acronymObject, item) => {
    acronymObject[item.acronym] = item;
    return acronymObject;
  }, {});
}

/**
 * [{...}, {...}]
 * [{...}, {...}]
 */

export const getServiceZones = (positions) => {
  let serviceZones = [];
  Object.values(positions).map(position => position.cabin.map(cabin => serviceZones.push(cabin)));

  return serviceZones
}

export const splitMeals = (positions) => Object.entries(positions).map(([key, value]) => {
  return [key, value];
})
