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

export const JUMP_SEATS = [
  [{ id: 'L1', crew: [], seat: 'L1', type: 'CSD' }, { id: 'L1A', crew: [], seat: 'L1A', type: 'F1' }, { id: 'empty1', crew: [], seat: false }, { id: 'R1', crew: [], seat: 'R1', type: 'F1' }],
  [{ id: 'L2', crew: [], seat: 'L2', type: 'F1' }, { id: 'empty2', crew: [], seat: false }, { id: 'empty3', crew: [], seat: false }, { id: 'R2', crew: [], seat: 'R2', type: 'F1' }],
  [{ id: 'L2A', crew: [], seat: 'L2A', type: 'F1' }, { id: 'empty4', crew: [], seat: false }, { id: 'empty5', crew: [], seat: false }, { id: 'R2A', crew: [], seat: 'R2A', type: 'F1' }],
  [{ id: 'L3', crew: [], seat: 'L3', type: 'F2' }, { id: 'empty6', crew: [], seat: false }, { id: 'empty7', crew: [], seat: false }, { id: 'R3', crew: [], seat: 'R3', type: 'F2' }],
  [{ id: 'L4', crew: [], seat: 'L4', type: 'F2' }, { id: 'empty8', crew: [], seat: false }, { id: 'empty9', crew: [], seat: false }, { id: 'R4', crew: [], seat: 'R4', type: 'F2' }],
  [{ id: 'L4A', crew: [], seat: 'L4A', type: 'F2' }, { id: 'empty9', crew: [], seat: false }, { id: 'empty10', crew: [], seat: false }, { id: 'R5C', crew: [], seat: 'R5C', type: 'F1' }],
  [{ id: 'L5', crew: [], seat: 'L5', type: 'CS' }, { id: 'L5A', crew: [], seat: 'L5A', type: 'F2' }, { id: 'R5A', crew: [], seat: 'R5A', type: 'F2' }, { id: 'R5', crew: [], seat: 'R5', type: 'F2' }]
];

export const MENU = {
  business: {
    drinks: [
      {
        slug: 'wine',
        label: 'Wine',
        categories: [
          {
            slug: 'white',
            label: 'White',
            options: [
              {
                id: 4,
                title: 'La Chablisienne',
                vintage: '2013',
                region: 'Burgundy, France',
                grape: 'Chardonnay',
                label: 'Chardo',
                color: 'teal'
              },
              {
                id: 5,
                title: 'Yealands Estate',
                vintage: '2014',
                region: 'Marlborough, New Zealand',
                grape: 'Sauvignon Blanc',
                label: 'Sov Blanc',
                color: 'lime'
              },
              {
                id: 6,
                title: 'Comte de la Boisserie',
                vintage: '2013',
                region: 'Loire Valley, France',
                grape: 'Chenin Blanc',
                label: 'Chenin',
                color: 'lime'
              },
              {
                id: 7,
                title: 'Chateau Petit Vedrines',
                vintage: '2011',
                region: 'Bordeaux, France',
                grape: 'Semillon & Sauvignon Blanc',
                label: 'Semi Sov',
                color: 'lime'
              },
            ]
          },
          {
            slug: 'red',
            label: 'Red',
            options: [
              {
                id: 1,
                title: 'St. Hallett',
                vintage: '2014',
                region: 'Barossa Valley, Australia',
                grape: 'Shiraz',
                label: 'Shiraz',
                color: 'red',
                quantity: 4
              },
              {
                id: 2,
                title: 'Losada',
                vintage: '2011',
                region: 'Leon, Spain',
                grape: 'Mencia',
                label: 'Mencia',
                color: 'red',
                quantity: 4
              },
              {
                id: 3,
                title: 'Chateau Smith Haut Lafitte',
                vintage: '2011',
                region: 'Bordeaux, France',
                grape: 'Merlot & Cabernet',
                label: 'Merlo',
                color: 'red',
                quantity: 4
              },
            ]
          },
          {
            slug: 'port',
            label: 'Port',
            options: [
              {
                id: 8,
                title: "Dow's",
                vintage: '2013',
                region: 'Douro Valley, Portugal',
                grape: 'Port',
                label: 'Port',
                color: 'purple'
              },
            ]
          },
          {
            slug: 'champagne',
            label: 'Champagne',
            options: [
              {
                id: 9,
                title: "Billecart-Salmon",
                vintage: '2020',
                region: 'France',
                grape: 'Brut',
                label: 'Brut',
                color: 'green'
              },
              {
                id: 10,
                title: "Lanson",
                vintage: '2020',
                region: 'France',
                grape: 'Brut Rose',
                label: 'Rose',
                color: 'pink'
              },
            ]
          },
        ]
      },
      {
        slug: 'spirits',
        label: 'Spirits',
        categories: [
          {
            slug: 'liquors',
            label: 'Liquors',
            options: [
              {
                id: 11,
                title: 'Campari',
                label: 'Campari',
                color: 'orange'
              },
              {
                id: 12,
                title: 'Bacardi',
                label: 'Bacardi',
                color: 'white'
              },
              {
                id: 13,
                title: 'Belvedere',
                label: 'Belvedere',
                color: 'blue'
              },
              {
                id: 14,
                title: 'Bombay Sapphire',
                label: 'Bombay',
                color: 'cyan'
              },
              {
                id: 15,
                title: 'Chivas Regal 12 years old',
                label: 'Chivas',
                color: 'orange'
              },
              {
                id: 16,
                title: 'Glenfiddich 15 years old',
                label: 'Glenfidich',
                color: 'orange'
              },
              {
                id: 17,
                title: "Jack Daniel's",
                label: 'Jack',
                color: 'orange'
              },
              {
                id: 18,
                title: "Martini Extra Dry",
                label: 'Martini',
                color: 'red'
              },
              {
                id: 19,
                title: "Camus XO Elegance",
                label: 'Camus',
                color: 'orange'
              },
            ]
          },
          {
            slug: 'beer',
            label: 'Beer',
            options: [
              {
                id: 20,
                title: 'Corona Extra',
                label: 'Corona',
                color: 'yellow'
              },
              {
                id: 21,
                title: 'Guinness',
                label: 'Guinness',
                color: 'stone'
              },
              {
                id: 22,
                title: 'Heineken',
                label: 'Heineken',
                color: 'green'
              },
            ]
          },
          {
            slug: 'liqueurs',
            label: 'Liqueurs',
            options: [
              {
                id: 23,
                title: "Baileys",
                label: 'Baileys',
                color: 'white'
              },
              {
                id: 24,
                title: 'Cointreau',
                label: 'Cointreau',
                color: 'white'
              },
              {
                id: 25,
                title: 'Kahlua',
                label: 'Kahlua',
                color: 'white'
              },
            ]
          },
        ],
      },
      {
        slug: 'cold-drinks',
        label: 'Cold drinks',
        categories: [
          {
            slug: 'soft-drinks',
            label: 'Soft Drinks',
            options: [
              {
                id: 26,
                title: 'Coca Cola',
                label: 'Coke',
                color: 'stone'
              },
              {
                id: 27,
                title: 'Diet Coca Cola',
                label: 'Diet Coke',
                color: 'stone'
              },
              {
                id: 28,
                title: 'Sprite',
                label: 'Sprite',
                color: 'white'
              },
              {
                id: 29,
                title: 'Diet Sprite',
                label: 'Diet Sprite',
                color: 'white'
              },
              {
                id: 30,
                title: 'Fanta',
                label: 'Fanta',
                color: 'orange'
              },
              {
                id: 31,
                title: 'Ginger Ale',
                label: 'Ginger Ale',
                color: 'orange'
              },
              {
                id: 32,
                title: 'Soda Water',
                label: 'Soda',
                color: 'white'
              },
              {
                id: 33,
                title: 'Tonic Water',
                label: 'Tonic',
                color: 'yellow'
              },
            ]
          },
          {
            slug: 'juices',
            label: 'Juices',
            options: [
              {
                id: 34,
                title: 'Apple',
                label: 'Apple',
                color: 'rose'
              },
              {
                id: 35,
                title: 'Cranberry',
                label: 'Cranb',
                color: 'pink'
              },
              {
                id: 36,
                title: 'Mango',
                label: 'Mango',
                color: 'orange'
              },
              {
                id: 37,
                title: 'Orange',
                label: 'Orange',
                color: 'orange'
              },
              {
                id: 38,
                title: 'Pineapple',
                label: 'Pineapl',
                color: 'yellow'
              },
              {
                id: 39,
                title: 'Tomato',
                label: 'Tomato',
                color: 'red'
              },
            ]
          },
        ]
      },
      {
        slug: 'hot-drinks',
        label: 'Hot drinks',
        categories: [
          {
            slug: 'tea',
            label: 'Tea',
            options: [
              {
                id: 40,
                title: 'English Breakfast',
                label: 'English',
                color: 'slate'
              },
              {
                id: 41,
                title: 'Earl Gray',
                label: 'Earl Gray',
                color: 'stone'
              },
              {
                id: 42,
                title: 'Jasmine',
                label: 'Jasmine',
                color: 'lime'
              },
            ]
          },
          {
            slug: 'coffee',
            label: 'Coffee',
            options: [
              {
                id: 43,
                title: 'Americano',
                label: 'Americano',
                color: 'stone'
              },
              {
                id: 44,
                title: 'Cappuccino',
                label: 'Cappuccino',
                color: 'white'
              },
              {
                id: 45,
                title: 'Espresso',
                label: 'Espresso',
                color: 'stone'
              },
              {
                id: 46,
                title: 'Latte',
                label: 'Latte',
                color: 'white'
              },
              {
                id: 47,
                title: 'Macchiato',
                label: 'Macchiato',
                color: 'white'
              },
            ]
          },
          {
            slug: 'hot-chocolate',
            label: 'Hot Chocolate',
            options: [
              {
                id: 48,
                title: 'Hot chocolate',
                label: 'Hot choco',
                color: 'white'
              },
            ]
          },
        ]
      }
    ],
    food: [
      {
        slug: 'lunch/dinner',
        label: 'Lunch/Dinner',
        acronym: 'LD',
        categories: [
          {
            slug: 'soup',
            label: 'Soup',
            options: [
              {
                id: 49,
                title: 'Soup of the day',
                label: 'Soup',
                color: 'lime',
                quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },              }
            ],
          },
          {
            slug: 'appetisers',
            label: 'Appetisers',
            options: [
              {
                id: 50,
                title: 'Classic Arabic mezzet',
                description: 'hummus, baba ghanoush and tabouleh served with Arabic bread',
                label: 'Mezze',
                color: 'emerald',
                quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },              },
              {
                id: 51,
                title: 'Lobster cocktail with marinated pan-fried jumbo prawn',
                description: 'pickled radish, compressed rock melon and tomato wedge',
                label: 'Prawn',
                color: 'sky',
                quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
              },
            ],
          },
          {
            slug: 'mains',
            label: 'Mains',
            options: [
              {
                id: 52,
                title: 'Lobster Thermidor',
                description: 'creamy herb fettuccine pasta and steamed seasonal vegetables',
                label: 'Lobster',
                color: 'rose',
                quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
              },
              {
                id: 53,
                title: "Za'atar lamb chops with red pepper sauce",
                description: 'halloumi Arabic rice and grilled vegetables',
                label: 'Lamb',
                color: 'red',
                quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
              },
              {
                id: 54,
                title: "Chicken roulade with spinach and smoked turkey stuffing",
                description: 'parsley mashed potato, seasonal garden vegetables and chicken jus',
                label: 'Chicken',
                color: 'yellow',
                quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
              },
              {
                id: 55,
                title: "Paneer pasanda with jeera rice",
                description: 'okra onion curry with dal makhani',
                label: 'Paneer',
                color: 'green',
                quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
              },
            ],
          },
          {
            slug: 'cheese',
            label: 'Cheese',
            options: [{ id: 56, title: 'Cheese plate', label: 'Cheese', color: 'yellow', quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 }, }],
          },
          {
            slug: 'desserts',
            label: 'Desserts',
            options: [
              {
                id: 57,
                title: 'Dulce ginger and orange cake',
                description: 'red berry sauce',
                label: 'Cake',
                color: 'orange',
                quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
              },
              { id: 58, title: 'Fresh berries with rose water syrup', label: 'Berries', color: 'blue', quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 }, },
              { id: 59, title: 'Gourmet ice cream selection', label: 'Ice cream', color: 'stone', quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 }, },
            ],
          },
        ]
      },
      {
        slug: 'light-options',
        label: 'Light options',
        acronym: 'LO',
        categories: [
          {
            slug: 'light-options',
            label: 'Light options',
            acronym: 'LO',
            options: [
              {
                id: 60,
                title: 'Detox rocket salad',
                description: 'mixed berries, pomegranate seeds and red radish',
                label: 'Salad',
                color: 'green',
                quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
              },
              {
                id: 61,
                title: 'North Indian achari chicken curry',
                description: 'tadka rice and papadum',
                label: 'Curry',
                color: 'yellow',
                quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
              },
              {
                id: 62,
                title: 'Afternoon tea',
                description: 'fresh finger sandwiches, warm scones, clotted cream and French pastries',
                label: 'Afternu',
                color: 'orange',
                quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
              },
              {
                id: 63,
                title: 'Hot pot pulled oxtail on toasted brioche',
                description: 'frisée salad and lemon dressing',
                label: 'brioche',
                color: 'yellow',
                quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
              },
            ],
          }
        ],
      },
      {
        slug: 'hot-breakfast',
        label: 'Hot Breakfast',
        acronym: 'HB',
        categories: [
          {
            slug: 'starters',
            label: 'Starters',
            options: [
              { id: 64, title: 'Platter of seasonal cut fruits', label: 'Fruit', color: 'rose', quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 }, },
              {
                id: 65,
                title: 'Greek yoghurt, passion fruit and mango coulis, toasted granola with nuts',
                label: 'Yoghurt',
                color: 'white',
                quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
              },
              {
                id: 66,
                title: 'Assiette of cold cuts',
                description: 'smoked balik salmon, smoked mackerel, caper berry, goat cheese and egg mimosa',
                label: 'CUTS',
                color: 'pink',
                quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
              },
            ],
          },
          {
            slug: 'mains',
            label: 'Mains',
            options: [
              {
                id: 67,
                title: 'Traditional Arabic breakfast',
                description: 'feta cheese, tomato, cucumber and olives served with fout medames and Arabic bread',
                label: 'ARABIC',
                color: 'teal',
                quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
              },
              {
                id: 68,
                title: 'Omelette with grilled veal sausage',
                description: 'roasted boby potato and creamy spinach',
                label: 'Omelette',
                color: 'orange',
                quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
              },
              {
                id: 69,
                title: 'Baked doughnut with Nutella',
                description: 'fresh berries, apple compote and crème Anglaise',
                label: 'DONUT',
                color: 'pink',
                quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
              },
              { id: 70, title: 'Steel-cut oats served with berries and cream', label: 'OATS', color: 'white', quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 }, },
            ]
          },
        ]
      },
    ]
  },
  economy: {
    drinks: [],
    food: [
      {
        slug: 'breakfast',
        acronym: 'HB',
        name: 'Hot Breakfast',
        options: [
          {
            id: 71,
            title: 'Scrambled eggs with breakfast sausage',
            description: 'potato wadges and herb tomato',
            label: 'Eggs',
            color: 'yellow',
            quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
          },
          {
            id: 72,
            title: 'Beef congee',
            description: 'fried ginger, shirtake and spring onions',
            label: 'Congee',
            color: 'blue',
            quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
          },
          {
            id: 73,
            title: 'Stir-fried egg noodles',
            label: 'Noodles',
            color: 'green',
            quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
          },
        ]
      },
      {
        slug: 'warm-sandwich',
        acronym: 'WS',
        name: 'Warm Sandwich',
        options: [
          {
            id: 74,
            title: 'Tuna sandwich',
            label: 'Tuna',
            color: 'pink',
            quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
          },
          {
            id: 75,
            title: 'Veggie sandwich',
            label: 'Veggie',
            color: 'green',
            quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
          },
        ]
      },
      {
        slug: 'lunch-dinner',
        acronym: 'LD',
        name: 'Lunch/Dinner',
        options: [
          {
            id: 76,
            title: 'Chicken kapsa',
            description: 'Tomato rice, fried onions and raisins',
            label: 'Chicken',
            color: 'yellow',
            quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
          },
          {
            id: 77,
            title: 'Braised beef with mushroom sauce',
            description: 'parsley mashed potato and vegetables',
            label: 'Beef',
            color: 'red',
            quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
          },
          {
            id: 78,
            title: 'Risotto with garden peas',
            description: 'mixed herbs and cheese',
            label: 'Pasta',
            color: 'green',
            quantity: { FWD: 0, MID: 0, AFT: 0, total: 0 },
          },
        ]
      },
    ]
  }
};

