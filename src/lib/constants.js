export const SPECIAL_MEALS = [
  { label: 'AVML', title: 'Asian Vegetarian Meal', color: 'green' },
  { label: 'HNML', title: 'Hindu Meal', color: 'blue' },
  { label: 'VGML', title: 'Vegan Meal', color: 'orange' },
  { label: 'VLML', title: 'Vegetarian Lactose Meal', color: 'yellow' },
  { label: 'GFML', title: 'Gluten Free Meal', color: 'purple' },
  { label: 'CHML', title: 'Child Meal', color: 'blue' },
  { label: 'VOML', title: 'Vegetarian Ovo Meal', color: 'white' },
  { label: 'FPML', title: 'Fruit Platter Meal', color: 'red' },
  { label: 'VJML', title: 'Vegetarian Jain Meal', color: 'orange' },
  { label: 'BBML', title: 'Baby Meal', color: 'sky' },
  { label: 'RVML', title: 'Raw Vegetarian Meal', color: 'teal' },
  { label: 'LFML', title: 'Low Fat Meal', color: 'yellow' },
  { label: 'LSML', title: 'Low Sodium Meal', color: 'white' },
  { label: 'LCML', title: 'Low Calorie Meal', color: 'white' },
  { label: 'BLML', title: 'Bland Meal', color: 'white' },
  { label: 'DBML', title: 'Diabetic Meal', color: 'white' },
  { label: 'NLML', title: 'Non-Lactose Meal', color: 'white' },
  { label: 'KSML', title: 'Kosher Meal', color: 'slate' },
];

export const SERVICE_TYPES = {
  FOOD: 'food',
  DRINKS: 'drinks',
};


export const CONFIGURATION = {
  minimumCrew: ['L1', 'R1', 'L2', 'R2', 'L3', 'R3', 'L4', 'R4', 'L5', 'R5'],
  business: {
    rowStart: 1,
    rowEnd: 7,
    seats: ['A', 'B', 'E', 'F', 'J', 'K'],
    ghostRows: null,
    ghostSeats: [],
    galleys: [{ slug: 'FWD', label: 'FWD', beforeRow: 1 }, { slug: 'MID', label: 'MID', afterRow: 4 }],
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
  },
  economy: {
    rowStart: 10,
    rowEnd: 43,
    seats: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K'],
    ghostRow: 13,
    ghostSeats: ['10D', '11D', '12D', '17C', '17H'],
    galleys: [{ slug: 'MID', label: 'MID', afterRow: 29 }, { slug: 'AFT', label: 'AFT', afterRow: 43 }],
    positions: {
      MID: {
        cabin: [
          ['L3', 'R3'],
          ['L4', 'R5C']
        ],
        galley: 'R4',
      },
      AFT: {
        cabin: [
          ['L5', 'R4'],
          ['L5A', 'R5']
        ],
        galley: 'L5A',
      }
    },
  }
};

export const CREW = {
  CP: [
    {
      id: 1234,
      firstName: 'Benjamin',
      lastName: 'Davis',
      languages: ['English']
    }
  ],
  FO: [
    {
      id: 2345,
      firstName: 'William',
      lastName: 'Lee',
      languages: ['English']
    }
  ],
  CSD: [
    {
      id: 3456,
      firstName: 'Emma',
      lastName: 'Johnson',
      languages: ['English']
    }
  ],
  CS: [
    {
      id: 4567,
      firstName: 'Isabella',
      lastName: 'Ramirez',
      languages: ['English']
    }
  ],
  F1: [
    {
      id: 5678,
      firstName: 'Sophia',
      lastName: 'Hernandez',
      languages: ['English']
    },
    {
      id: 5679,
      firstName: 'Mia',
      lastName: 'Anderson',
      languages: ['English']
    },
    {
      id: 5680,
      firstName: 'Charlotte',
      lastName: 'Turner',
      languages: ['English']
    }
  ],
  F2: [
    {
      id: 6789,
      firstName: 'Henry',
      lastName: 'Clark',
      languages: ['English']
    },
    {
      id: 6790,
      firstName: 'Amelia',
      lastName: 'Scott',
      languages: ['English']
    },
    {
      id: 6791,
      firstName: 'Iris',
      lastName: 'Marques',
      languages: ['English']
    },
    {
      id: 6792,
      firstName: 'James',
      lastName: 'Martinez',
      languages: ['English']
    },
    {
      id: 6793,
      firstName: 'Harper',
      lastName: 'Taylor',
      languages: ['English']
    },
    {
      id: 6794,
      firstName: 'Alexander',
      lastName: 'Walker',
      languages: ['English']
    },
    {
      id: 6795,
      firstName: 'Ava',
      lastName: 'Wilson',
      languages: ['English']
    }
  ],
}
