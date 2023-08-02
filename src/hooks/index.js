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

export const splitArrayDataByMaxLength = (arrayData, maxLength = 40) => {
  let result = [];
  let leftTotal = 0;
  let rightTotal = 0;
  let currentSlice = [];

  for (const pair of arrayData) {
    const [leftArr, rightArr] = pair;

    if (leftTotal < maxLength && rightTotal < maxLength) {
      currentSlice.push(pair);
      leftTotal += leftArr.length;
      rightTotal += rightArr.length;
    } else {
      if (currentSlice.length > 0) {
        result.push([...currentSlice]);
        currentSlice = [];
      }
      currentSlice.push(pair);
      leftTotal = leftArr.length;
      rightTotal = rightArr.length;
    }
  }

  if (currentSlice.length > 0) {
    result.push([...currentSlice]);
  }

  return result;
}

export const zoneDetails = (subArray) => {
  const result = []

  for (const nestedArray of subArray) {
    let left = { total: 0, specialMeals: 0 }
    let right = { total: 0, specialMeals: 0 }

    for (const pair of nestedArray) {
      const [leftArr, rightArr] = pair;
      for (const leftSide of leftArr) {
        if (leftSide.specialMeal) left.specialMeals++;
      }
      left.total = left.total + leftArr.length

      for (const rightSide of rightArr) {
        if (rightSide.specialMeal) right.specialMeals++;
      }
      right.total = right.total + rightArr.length
    }

    result.push([left, right])
    left = { total: 0, specialMeals: 0 }
    right = { total: 0, specialMeals: 0 }
  }

  return result;
};


export const passengerSeating = (configuration) => {
  const config = seatingConfig(configuration);
  const middleIndex = Math.floor(configuration.seats.length / 2);

  const pax = config.map(row => {
    // assign random passenger to a seat or leave it empty
    // Should be fetched directly from JSON
    const currentRow = row.map(seat => {
      const random = Math.random();

      if (configuration.ghostSeats.includes(seat) || random < 0.2) {
        return null
      }
      
      return {
        seat: seat,
        name: NAMES[Math.floor(Math.random() * NAMES.length)],
        specialMeal: random > 0.9 ? SPECIAL_MEALS[Math.floor(Math.random() * SPECIAL_MEALS.length)] : null
      }
    });

    // split row in two zones
    const firstHalf = currentRow.slice(0, middleIndex).filter(Boolean);
    const secondHalf = currentRow.slice(middleIndex).filter(Boolean);

    return [firstHalf, secondHalf];
  });

  return pax
}

export const getDividers = (config, zones) => config.map((_, i) => {
  const findZone = zones.find(zone => zone.row === i);
  if (findZone) {
    return [{ row: i, id: i, crew: findZone.crew }];
  }
  return [];
});
