/**
 * Array of gaming PC builds ranging from budget to high-end
 * Each build includes hardware specs, pricing, and real game performance metrics
 * Use this data to help users find the right build for their budget and gaming needs
 */
const builds = [
  {
    // Budget-friendly entry-level gaming build
    // Good for casual gaming at 1080p with lower graphics settings
    name: 'build-1',
    CPU: 2,        // 2-core processor
    RAM: 4,        // 4 GB memory
    Storage: 100,  // 100 GB total drive space
    GPU: 1,        // 1 graphics card unit
    price: 100,    // Price in USD
    FPS: 60,       // Typical max framerate (60 FPS = smooth gameplay)
    games: [
        // Game performance on this build at Low graphics settings
        {title: 'Apex Legends', settings: 'Low', FPS: 100},
        {title: 'Battlefield 6', settings: 'Low', FPS: 60},
        {title: 'Call of Duty: Warzone', settings: 'Low', FPS: 60},
    ]
  },
  {
    // Balanced mid-range gaming build
    // Good for 1080p/1440p gaming with medium graphics settings
    // Best value for most gamers
    name: 'build-2',
    CPU: 4,        // 4-core processor
    RAM: 8,        // 8 GB memory
    Storage: 200,  // 200 GB total drive space
    GPU: 2,        // 2 graphics card units
    price: 200,    // Price in USD
    FPS: 120,      // Typical max framerate (120 FPS = very smooth)
    games: [
        // Game performance on this build at Medium graphics settings
        {title: 'Apex Legends', settings: 'Medium', FPS: 120},
        {title: 'Battlefield 6', settings: 'Medium', FPS: 90},
        {title: 'Call of Duty: Warzone', settings: 'Medium', FPS: 90},
    ]
  },
  {
    // Premium high-end gaming build
    // Excellent for 1440p/4K gaming with maximum graphics settings
    // Best performance for demanding games and future-proofing
    name: 'build-3',
    CPU: 8,        // 8-core processor
    RAM: 16,       // 16 GB memory
    Storage: 500,  // 500 GB total drive space
    GPU: 4,        // 4 graphics card units
    price: 400,    // Price in USD
    FPS: 240,      // Typical max framerate (240 FPS = ultra-smooth)
    games: [
        // Game performance on this build at High graphics settings
        {title: 'Apex Legends', settings: 'High', FPS: 240},
        {title: 'Battlefield 6', settings: 'High', FPS: 180},
        {title: 'Call of Duty: Warzone', settings: 'High', FPS: 180},
    ]
  },
];

/**
 * IMPORTANT NOTES FOR DEVELOPERS:
 * - Settings: Low/Medium/High refer to in-game graphics quality options
 * - FPS values are approximate and based on 1080p resolution
 * - Each build tier is designed for a specific audience and budget
 * - Games listed are current popular titles; consider updating as new games release
 * - All prices in USD - adjust for your market if needed
 */