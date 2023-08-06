import { getArrayOfPositions, subArrayLengthCounter } from "$hooks";
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

const generatePassengers = (configuration, seating) => {
    const pax = {}
  
    for (const row of seating) {
      for (const seat of row) {
        const random = Math.random();

        pax[seat] = {
            seat,
            passenger: 
                !configuration.ghostSeats.includes(seat) && random > 0.15  ? {
                    name: NAMES[Math.floor(Math.random() * NAMES.length)],
                    specialMeal: random > 0.9 ? SPECIAL_MEALS[Math.floor(Math.random() * SPECIAL_MEALS.length)] : null
                } : null
            }
        }
      
    }
  
    return pax
  }

const passengerLoad = passengers => {
    return Object.values(passengers).filter(slot => !!slot.passenger).length
}

const splitArrayDataByMaxLength = (arrayData, maxLength = 40) => {
    let result = [];
    let leftTotal = 0;
    let rightTotal = 0;
    let currentSlice = [];

    for (const pair of arrayData) {
        const [leftArr, rightArr] = pair;
        const occupiedLeft = leftArr.filter(spot => !!spot.passenger)
        const occupiedRight = rightArr.filter(spot => !!spot.passenger)
        // (leftTotal < maxLength && rightTotal < maxLength) shows better results, but || is more technically accurate.
        if (leftTotal < maxLength && rightTotal < maxLength) {
            currentSlice.push(pair);
            leftTotal += occupiedLeft.length;
            rightTotal += occupiedRight.length;
        } else {
            if (currentSlice.length > 0) {
                result.push([...currentSlice]);
                currentSlice = [];
            }
            currentSlice.push(pair);
            leftTotal = occupiedLeft.length;
            rightTotal = occupiedRight.length;
        }
    }

    if (currentSlice.length > 0) {
        result.push([...currentSlice]);
    }

    return result;
}

const zoneConfig = (subArray) => {
    const result = []

    for (const nestedArray of subArray) {
        let left = { total: 0, specialMeals: 0 }
        let right = { total: 0, specialMeals: 0 }
        let counter = 0

        for (const pair of nestedArray) {
            const [leftArr, rightArr] = pair;
            for (const leftSide of leftArr) {
                if (leftSide?.specialMeal) left.specialMeals++;
            }
            left.total = left.total + leftArr.length

            for (const rightSide of rightArr) {
                if (rightSide?.specialMeal) right.specialMeals++;
            }
            right.total = right.total + rightArr.length
        }

        result.push([left, right])
        left = { total: 0, specialMeals: 0 }
        right = { total: 0, specialMeals: 0 }
    }

    return result;
};

const passengerSeatingConfig = (configuration, seating, passengers) => {
    const middleIndex = Math.floor(configuration.seats.length / 2);

    const pax = seating.map(row => {
        const currentRow = row.map(seat => passengers[seat]);

        const firstHalf = currentRow.slice(0, middleIndex)
        const secondHalf = currentRow.slice(middleIndex)

        return [firstHalf, secondHalf];
    });

    return pax
}

const getZonesByPosition = (configuration, zones) => {
    const positionsArray = getArrayOfPositions(configuration.positions);
    const zoneRows = subArrayLengthCounter(zones);
    
    return positionsArray.map((crew, i) => ({ row: zoneRows[i], id: zoneRows[i], crew }))
}

export const useZone = configuration => {
    const seating = seatingConfig(configuration)
    const passengerList = generatePassengers(configuration, seating)
    const load = passengerLoad(passengerList)

    const passengerSeating = passengerSeatingConfig(configuration, seating, passengerList)

    const zonesSplitByQuantity = splitArrayDataByMaxLength(passengerSeating)
    const zones = zoneConfig(zonesSplitByQuantity);
    const zoneRows = getZonesByPosition(configuration, zones);

    return {
        seating,
        passengerList,
        load,
        passengerSeating,
        zones,
        zonesSplitByQuantity,
        zoneRows,
        splitArrayDataByMaxLength,
    }
}
