
/*
[
  [{}, {}],
  [{}, {}],
  [{}, {}],
  [{}, {}],
],
---
[
  {
    position: L3,
    galley: FWD,
    standardMeals: { HB: [20, 29, 54], WS: [30, 38], LD: [48, 38, 95] },
    specialMeals: [],
  },
  {
    position: R3,
    galley: FWD,
    standardMeals: { HB: [20, 29, 54], WS: [30, 38], LD: [48, 38, 95] },
    specialMeals: [],
  }
], ...
*/

/*
positions: {
      FWD: {
        cabin: [
          ['L1', 'R5A'],
        ],
        galley: 'R1',
      },
      MID: {
        cabin: [
          ['L2', 'R2A'],
        ],
        galley: 'R2',
      }
    },
*/

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
