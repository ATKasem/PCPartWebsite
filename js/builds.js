const builds = [
  {
    name: 'build-1',
    CPU: 4,
    RAM: 4,
    Storage: 100,
    GPU: 1,
    price: 100,
    FPS: 60,
    games: {
      'Apex Legends': {
        settings: 'low',
        performance: { '1080p': 60, '1440p': 45, '4K': 30 }
      },
      'Battlefield 6': {
        settings: 'low',
        performance: { '1080p': 60, '1440p': 45, '4K': 30 }
      },
      'Call of Duty: Warzone': {
        settings: 'low',
        performance: { '1080p': 60, '1440p': 45, '4K': 30 }
      }
    },
  },
  {
    name: 'build-2',
    CPU: 4,
    RAM: 8,
    Storage: 200,
    GPU: 2,
    price: 200,
    FPS: 120,
    games: {
      'Apex Legends': {
        settings: 'Medium',
        performance: { '1080p': 120, '1440p': 90, '4K': 60 }
      },
      'Battlefield 6': {
        settings: 'Medium',
        performance: { '1080p': 90, '1440p': 67, '4K': 45 }
      },
      'Call of Duty: Warzone': {
        settings: 'Medium',
        performance: { '1080p': 90, '1440p': 67, '4K': 45 }
      }
    }
  },
  {
    name: 'build-3',
    CPU: 8,
    RAM: 16,
    Storage: 500,
    GPU: 4,
    price: 400,
    FPS: 240,
    games: {
      'Apex Legends': {
        settings: 'High',
        performance: { '1080p': 240, '1440p': 180, '4K': 120 }
      },
      'Battlefield 6': {
        settings: 'High',
        performance: { '1080p': 180, '1440p': 135, '4K': 90 }
      },
      'Call of Duty: Warzone': {
        settings: 'High',
        performance: { '1080p': 180, '1440p': 135, '4K': 90 }
      }
    }
  }
];
