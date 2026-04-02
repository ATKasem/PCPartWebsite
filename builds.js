const builds = [
  {
    name: 'build-1',
    CPU: 2,
    RAM: 4,
    Storage: 100,
    GPU: 1,
    price: 100,
    FPS: 60,
    games: [
        {title: 'Apex Legends', settings: 'Low', FPS: 100},
        {title: 'Battlefield 6', settings: 'Low', FPS: 60},
        {title: 'Call of Duty: Warzone', settings: 'Low', FPS: 60},
    ]
  },
  {
    name: 'build-2',
    CPU: 4,
    RAM: 8,
    Storage: 200,
    GPU: 2,
    price: 200,
    FPS: 120,
    games: [
        {title: 'Apex Legends', settings: 'Medium', FPS: 120},
        {title: 'Battlefield 6', settings: 'Medium', FPS: 90},
        {title: 'Call of Duty: Warzone', settings: 'Medium', FPS: 90},
    ]
  },
  {
    name: 'build-3',
    CPU: 8,
    RAM: 16,
    Storage: 500,
    GPU: 4,
    price: 400,
    FPS: 240,
    games: [
        {title: 'Apex Legends', settings: 'High', FPS: 240},
        {title: 'Battlefield 6', settings: 'High', FPS: 180},
        {title: 'Call of Duty: Warzone', settings: 'High', FPS: 180},
    ]
  },
];