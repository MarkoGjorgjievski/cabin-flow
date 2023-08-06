export const getArrayOfPositions = (positions) => {
  let arr = []
  Object.values(positions).map(value => value.cabin.map(position => arr.push(position)))
  return arr
}

export const getNonEmptyIndexes = (arrOfArrays) => {
  return arrOfArrays.reduce((acc, currArr, index) => {
    if (currArr.length > 0) {
      acc.push(index);
    }
    return acc;
  }, []);
}

export const subArrayLengthCounter = (array) => {
  let counter = 0;
  const result = array.map((obj) => obj[0].rowSpan).reduce((acc, curr) => {
    counter += curr;
    acc.push(counter);
    return acc;
  }, []);

  result.unshift(0)
  return result.slice(0, result.length - 1)
};

export const getDividers = (config, zones) => config.map((_, i) => {
  const findZone = zones.find(zone => zone.row === i);
  if (findZone) {
    return [{ row: i, id: i, crew: findZone.crew }];
  }
  return [];
});

export const splitArrayDataByMaxLength = (arrayData, maxLength = 40) => {
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

export const zoneConfig = (subArray, positions) => {
  const result = [];

  const adjustedPositions = transformedPositions(positions)
  let index = 0

  for (const nestedArray of subArray) {
    let left = { totalOccupants: 0, specialMeals: 0 }
    let right = { totalOccupants: 0, specialMeals: 0 }

    for (const pair of nestedArray) {
        const [leftArr, rightArr] = pair;

        const occupantsLeft = leftArr.filter(spot => !!spot.passenger)
        const occupantsRight = rightArr.filter(spot => !!spot.passenger)

        for (const leftSide of leftArr) {
            if (leftSide.passenger?.specialMeal) left.specialMeals++;
        }
        left.totalOccupants = left.totalOccupants + occupantsLeft.length

        for (const rightSide of rightArr) {
            if (rightSide.passenger?.specialMeal) right.specialMeals++;
        }
        right.totalOccupants = right.totalOccupants + occupantsRight.length
    }

    result.push([{ ...left, ...adjustedPositions[index][0] }, { ...right, ...adjustedPositions[index][1] }])
    left = { totalOccupants: 0, specialMeals: 0 }
    right = { totalOccupants: 0, specialMeals: 0 }
    index++
  }

  return result;
};

export const intialMealSplit = (zones, meals, service) => {
  const MAX_MEALS = 40

  const meal = meals.find(meal => meal.acronym === service)
  const quantity = meal.options.map(option => option.quantity)

  const quantityPerGalley = totalSum(meal.options)
  const percentagePerMeal = percentagesArray(quantity, quantityPerGalley)

  console.log(quantity)
  console.log(percentagePerMeal)

  const allExceptLast = zones.slice(0, zones.length - 1);
  const lastItem = zones.slice(zones.length - 1);

  const standardLoad = allExceptLast.map(group => group.map(zone => {
    return {
      ...zone,
      meals: percentagePerMeal.map(opt => Math.round((MAX_MEALS - zone.specialMeals)*opt[zone.galley]))
    }
  }))

  const adjustedLoad = lastItem.map(group => group.map(zone => {
    return {
      ...zone,
      meals: percentagePerMeal.map(opt => Math.round((zone.totalOccupants - zone.specialMeals)*opt[zone.galley]))
    }
  }))

  return [...standardLoad, ...adjustedLoad]
}

const transformedPositions = (data) => 
  Object.entries(data).flatMap(([galley, { cabin }]) => {
    return cabin.map(positions => {
      return positions.map((position) => {
        return { galley, position };
      });
  });
});

const totalSum = (options) => options.reduce((acc, option) => {
  acc.FWD += option.quantity.FWD;
  acc.MID += option.quantity.MID;
  acc.AFT += option.quantity.AFT;
  return acc;
}, { FWD: 0, MID: 0, AFT: 0 });

const percentagesArray = (options, totalOptions) => options.map(option => {
  const percentages = { FWD: 0, MID: 0, AFT: 0 };
  for (const key in option) {
    if (key !== 'total' && totalOptions[key] !== 0) {
      percentages[key] = +(option[key] / totalOptions[key]).toFixed(5);
    }
  }
  return percentages;
});
