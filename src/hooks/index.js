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
    let left = { totalOccupants: 0, specialMeals: [] }
    let right = { totalOccupants: 0, specialMeals: [] }

    for (const pair of nestedArray) {
      const [leftArr, rightArr] = pair;
      const occupantsLeft = leftArr.filter(spot => !!spot.passenger)
      const occupantsRight = rightArr.filter(spot => !!spot.passenger)

      for (const leftSide of occupantsLeft) {
        if (leftSide.passenger.specialMeal) (left.specialMeals = [...left.specialMeals, leftSide])
      }
      left.totalOccupants = left.totalOccupants + occupantsLeft.length

      for (const rightSide of occupantsRight) {
        if (rightSide.passenger.specialMeal) (right.specialMeals = [...right.specialMeals, rightSide])
      }
      right.totalOccupants = right.totalOccupants + occupantsRight.length
    }

    result.push([{ ...left, ...adjustedPositions[index][0] }, { ...right, ...adjustedPositions[index][1] }])
    left = { totalOccupants: 0, specialMeals: [] }
    right = { totalOccupants: 0, specialMeals: [] }
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

export const sumArrays = (arr1, arr2) => {
  return arr1.map((row, rowIndex) =>
    row.map((value, colIndex) => value + arr2[rowIndex][colIndex])
  );
}

export const sumNestedArrays = (data) => {
  return data.FWD.map((service, serviceIndex) => service.map((category, categoryIndex) => category.map((option, optionIndex) => option + data.MID[serviceIndex][categoryIndex][optionIndex] + data.AFT[serviceIndex][categoryIndex][optionIndex])))
}

export const getPercentage = data => {
  const output = {};

  for (const section in data) {
    output[section] = data[section].map(subArray => {
      const totalSum = subArray.reduce((sum, value) => sum + value, 0);
  
      if (totalSum === 0) {
        return subArray.map(() => 0);
      }
  
      return subArray.map(value => +(value / totalSum).toFixed(3));
    });
  }

  return output
}

export const mealSplit = (meals, zones, serviceIndex, maxMeals = 40) => {
  let currentGalley = ''
  let currentService = []

  const result = zones.map(group => {
    let idealSplits = []

    const groupMap = group.map((zone, i) => {
      if (currentGalley !== zone.galley) {
        currentGalley = zone.galley
        currentService = [...meals[currentGalley][serviceIndex]]
      }

      const totalMeals = meals[currentGalley][serviceIndex].reduce((sum, value) => sum + value);
      const percentage = meals[currentGalley][serviceIndex].map(value => totalMeals > 0 ? +(value / totalMeals).toFixed(3) : 0);
      
      let totalOccupants = zone.totalOccupants

      if (zone.totalOccupants > maxMeals) {
        totalOccupants = maxMeals
      }

      const idealSplit = optimisticSplit(currentService, totalOccupants, zone.specialMeals.length, percentage)

      idealSplits = [...idealSplits, idealSplit]

      if (i === group.length - 1) {
        let [left, right] = idealSplits
        
        currentService.forEach((quantity, index) => {
          if (quantity <= 0) {
            left[index] = 0
            right[index] = 0
          }
          if (quantity < left[index] + right[index]) {
            const [left1, right1] = equalRatio(left[index], right[index], quantity)
            left[index] = left1
            right[index] = right1
          }
        })

        currentService = currentService.map((value, index) => value - left[index] - right[index]);
      }

      const zoneTotal = idealSplits[i].reduce((a,b) => a+b) + zone.specialMeals.length

      return { ...zone, mealSplit: idealSplits[i], totalMeals: zoneTotal }
    })

    idealSplits = []
    return groupMap
  })

  return result
}

const optimisticSplit = (currentService, totalOccupants, zoneSpecials, percentage) => {
  return currentService.reduce((accumulator, option, i) => {
    let currentOptionQuantity = Math.round((totalOccupants - zoneSpecials) * percentage[i]);

    if (currentOptionQuantity > option) {
      currentOptionQuantity = option;
    }

    accumulator.push(currentOptionQuantity);

    return accumulator;
  }, []);
}

export const rearrangeZones = (arr, subarrayIndex, slicePosition) => {
  const result = [...arr];

  if (subarrayIndex >= 0 && subarrayIndex < result.length) {
    const subarrayToManipulate = result[subarrayIndex];

    if (slicePosition === 'start' && subarrayIndex > 0) {
      const elementToMove = result[subarrayIndex - 1].pop();
      subarrayToManipulate.unshift(elementToMove);
    } else if (slicePosition === 'end' && subarrayIndex < result.length - 1) {
      const elementToMove = result[subarrayIndex + 1].shift();
      subarrayToManipulate.push(elementToMove);
    }
  }

  return result;
}

export const sortTotalSpecialMeals = specialMeals => {
  return Object.values(specialMeals.reduce((acc, { seat, passenger }) => {
    const { specialMeal } = passenger;
    
    if (!acc[specialMeal.label]) {
      acc[specialMeal.label] = {
        specialMeal,
        passengers: []
      };
    }

    acc[specialMeal.label].passengers.push({ name: passenger.name, seat });

    return acc;
  }, {}))
  .sort((a, b) => b.passengers.length - a.passengers.length);
}

const equalRatio = (left, right, total) => {
  const ratio = left / right;
  const totalParts = left + right;

  const partsForBucket1 = ratio / (1 + ratio) * totalParts;
  const partsForBucket2 = 1 / (1 + ratio) * totalParts;

  let left1 = Math.round((partsForBucket1 / totalParts) * total);
  let right1 = Math.round((partsForBucket2 / totalParts) * total);

  if ((left1 + right1) > total) {
    right1 = right1 - 1
  }

  return [left1, right1];
}

export const crewKeys = (inputDict) => {
  const result = [];

  for (const key in inputDict) {
      if (inputDict.hasOwnProperty(key)) {
          const values = inputDict[key];
          values.forEach(value => {
              const valueWithKey = { ...value, key }; // Spread operator to add the key
              result.push(valueWithKey);
          });
      }
  }

  return result;
}

export const cloneDeep = (value) => {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    const newArray = [];
    for (const item of value) {
      newArray.push(cloneDeep(item));
    }
    return newArray;
  }

  const newObj = {};
  for (const key in value) {
    newObj[key] = cloneDeep(value[key]);
  }
  return newObj;
}