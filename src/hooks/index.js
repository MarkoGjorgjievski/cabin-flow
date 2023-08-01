import { SPECIAL_MEALS, NAMES } from "$lib/constants";

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

// reason for having both functions is that the latter will change
// for odd config seats (3-3-3) -> 9

export const calculations = (configuration) => {
  const config = seatingConfig(configuration);
  const middleIndex = Math.floor(configuration.seats.length / 2);

  const configSplit = config.map(row => {
    const firstHalf = row.slice(0, middleIndex);
    const secondHalf = row.slice(middleIndex);

    return [firstHalf, secondHalf]
  })

  return configSplit
}

export const passengerSeating = (configuration) => {
  const zones = calculations(configuration);

  const pax = zones.map(row => row.map(zone => zone.map(seat => {
    if (configuration.ghostSeats.includes(seat)) {
      return { 
        seat,
        passenger: null,
      }
    }

    return { 
      seat,
      passenger: {
        name: NAMES[Math.floor(Math.random() * NAMES.length)],
        specialMeal: Math.random() > 0.9 ? SPECIAL_MEALS[Math.floor(Math.random() * SPECIAL_MEALS.length)] : null
      }
    }
  })));

  return pax
}

export const getDividers = (config, zones) => config.map((_, i) => {
  const findZone = zones.find(zone => zone.row === i);
  if (findZone) {
    return [{ row: i, id: i, crew: findZone.crew }];
  }
  return [];
});
