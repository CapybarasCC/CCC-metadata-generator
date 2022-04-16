const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Capybaras Country Club";
const description = "A fully animated NFT collection living in the ETH network";
const baseUri = "ipfs://QmYuAkt7jR87ptAQoNtEsUoDrTedjGkJ2DEuAZxW4KyaZ6";

const solanaMetadata = {
  symbol: "CCC",
  external_url: "https://capybarascountryclub.com",
};

var natural_size = 6067
var slime_size = 538
var robot_size = 1085
var rick_size = 1
var evil_kermit_size = 1
var zuko_size = 1
var homer_size = 1
var nezuko_size = 1
var mecha_chaotic_size = 1
var link_size = 1
var saiyan_size = 1
var neo_size = 1
var gold_bot_size = 1
var slime_tribal_size = 1

const special_faces = [{ name: 'Patch' }, { name: 'Blindfold' }, { name: 'Thief' }, { name: 'Beauty Mask' }];
const special_eyes = [{ name: 'None' }, { name: 'None' }, { name: 'None' }, { name: 'Sleepy' }];

const conflict_face = [{ name: '3D Glasses' }, { name: 'Monocle' }, { name: 'Small Glasses' }, { name: 'Sun Glasses' }, { name: 'Thick Glasses' }];
const conflict_eye = [{ name: 'Laser' }];

// If you have selected Solana then the collection starts from 0
// automatically
const layerConfigurations = [
  {
    growEditionSizeTo: natural_size,
    layersOrder: [
      {
        name: 'Background',
        options: { bypassDNA: true },
        elements: [
          { name: 'Blue', weight: 100 },
          { name: 'Green', weight: 100 },
          { name: 'Purple', weight: 100 },
          { name: 'Orange', weight: 100 },
          { name: 'Yellow', weight: 0 },
          { name: 'Pink', weight: 100 },
          { name: 'Sand', weight: 100 },
        ],
      },
      {
        name: 'Type',
        elements: [
          { name: 'Natural', weight: 100 },
        ],
      },
      {
        name: 'Body',
        elements: [
          { name: 'None', weight: 176 },
          { name: 'All We Need Is Love', weight: 380 },
          { name: 'Armor', weight: 121 },
          { name: 'Astronaut', weight: 37 },
          { name: 'Baggins', weight: 65 },
          { name: 'Banana', weight: 473 },
          { name: 'Bartender', weight: 241 },
          { name: 'Basket Shirt', weight: 455 },
          { name: 'Bathrobe', weight: 204 },
          { name: 'Batman', weight: 83 },
          { name: 'Boxer', weight: 176 },
          { name: 'Checkered Shirt', weight: 325 },
          { name: 'Chemise', weight: 353 },
          { name: 'Chemise Bordeaux', weight: 362 },
          { name: 'Doctor', weight: 445 },
          { name: 'Dress', weight: 130 },
          { name: 'Drip', weight: 436 },
          { name: 'Fancy', weight: 408 },
          { name: 'Fireman', weight: 232 },
          { name: 'General Uniform', weight: 186 },
          { name: 'Grey Shirt', weight: 492 },
          { name: 'Hoodie', weight: 464 },
          { name: 'Iron Man', weight: 74 },
          { name: 'Joker', weight: 93 },
          { name: 'Kimono', weight: 139 },
          { name: 'King', weight: 19 },
          { name: 'Leather Jacket', weight: 427 },
          { name: 'Liqui Liqui', weight: 213 },
          { name: 'Military Jacket', weight: 482 },
          { name: 'Mummy', weight: 148 },
          { name: 'Plumber', weight: 195 },
          { name: 'Prisoner', weight: 167 },
          { name: 'Suit', weight: 390 },
          { name: 'Tattoo Tank', weight: 417 },
          { name: 'The Sandbox Shirt', weight: 223 },
          { name: 'Turtle Neck', weight: 399 },
          { name: 'Vampire', weight: 111 },
          { name: 'Viking', weight: 158 },
          { name: 'Witcher', weight: 102 },
        ],
      },
      {
        name: 'Face',
        elements: [
          { name: 'None', weight: 3636 },
          { name: '3D Glasses', weight: 334 },
          { name: 'Anime Blush', weight: 445 },
          { name: 'Band Aid', weight: 427 },
          { name: 'Beauty Mask', weight: 390 },
          { name: 'Blindfold', weight: 111 },
          { name: 'Dirt', weight: 315 },
          { name: 'Drunk Tattoos', weight: 241 },
          { name: 'Eye Black', weight: 371 },
          { name: 'Freckles', weight: 501 },
          { name: 'Mike Tyson Tattoo', weight: 278 },
          { name: 'Monocle', weight: 74 },
          { name: 'Patch', weight: 204 },
          { name: 'Scar', weight: 482 },
          { name: 'Small Glasses', weight: 223 },
          { name: 'Stickers', weight: 0 },
          { name: 'Sticky Notes', weight: 353 },
          { name: 'Stubble', weight: 223 },
          { name: 'Sun Glasses', weight: 260 },
          { name: 'Sweat', weight: 167 },
          { name: 'Tattoos', weight: 148 },
          { name: 'Thief', weight: 130 },
          { name: 'Thick Glasses', weight: 160 },
          { name: 'X Scar', weight: 408 },
        ],
      },
      {
        name: 'Eyes',
        elements: [
          { name: 'None', weight: 0 },
          { name: 'Alien', weight: 241 },
          { name: 'Anime', weight: 492 },
          { name: 'Bored', weight: 519 },
          { name: 'Bruise', weight: 399 },
          { name: 'Drop Shape', weight: 659 },
          { name: 'Goat', weight: 223 },
          { name: 'Laser', weight: 37 },
          { name: 'Lashes', weight: 371 },
          { name: 'Open', weight: 686 },
          { name: 'Reptile', weight: 260 },
          { name: 'Scarred', weight: 278 },
          { name: 'Shoujo', weight: 334 },
          { name: 'Simple', weight: 1957 },
          { name: 'Sleepy', weight: 464 },
          { name: 'Sparkly', weight: 297 },
          { name: 'Stoned', weight: 547 },
          { name: 'Surprised', weight: 575 },
          { name: 'Teary', weight: 315 },
          { name: 'Tired', weight: 603 },
          { name: 'uwu', weight: 631 },
          { name: 'X', weight: 148 },
        ],
      },
      {
        name: 'Mouth',
        elements: [
          { name: 'None', weight: 2470 },
          { name: 'Aristocrat', weight: 111 },
          { name: 'Brackets', weight: 427 },
          { name: 'Cigar', weight: 0 },
          { name: 'Drool', weight: 399 },
          { name: 'Fangs', weight: 371 },
          { name: 'Goldtooth', weight: 343 },
          { name: 'Grills', weight: 315 },
          { name: 'Joint', weight: 538 },
          { name: 'Lipstick', weight: 74 },
          { name: 'Lollipop', weight: 455 },
          { name: 'Lumberjack', weight: 0 },
          { name: 'Party Whistle', weight: 204 },
          { name: 'Pipe', weight: 37 },
          { name: 'Popsicle', weight: 186 },
          { name: 'Septum', weight: 649 },
          { name: 'Sick', weight: 288 },
          { name: 'Smile', weight: 594 },
          { name: 'Teeth', weight: 482 },
          { name: 'Toast', weight: 566 },
          { name: 'Tongue', weight: 622 },
          { name: 'uwu', weight: 510 },
          { name: 'Wizard', weight: 148 },
        ],
      },
      {
        name: 'Head',
        elements: [
          { name: 'None', weight: 885 },
          { name: 'Airpods', weight: 557 },
          { name: 'Bald', weight: 408 },
          { name: 'Bandana', weight: 427 },
          { name: 'Bangs', weight: 148 },
          { name: 'Beanie', weight: 538 },
          { name: 'Beret', weight: 297 },
          { name: 'Bird', weight: 353 },
          { name: 'Brushed', weight: 519 },
          { name: 'Bunny', weight: 260 },
          { name: 'Cap', weight: 501 },
          { name: 'Cowboy', weight: 315 },
          { name: 'Cow Lick', weight: 445 },
          { name: 'Crown', weight: 74 },
          { name: 'Flower', weight: 223 },
          { name: 'Hairclips', weight: 241 },
          { name: 'Halo', weight: 56 },
          { name: 'Long Hair', weight: 186 },
          { name: 'Manbun', weight: 371 },
          { name: 'Medusa', weight: 28 },
          { name: 'Mohawk', weight: 464 },
          { name: 'Mouse', weight: 278 },
          { name: 'Orange', weight: 575 },
          { name: 'Pirate', weight: 167 },
          { name: 'Rasta', weight: 204 },
          { name: 'Sakkat', weight: 111 },
          { name: 'Small Afro', weight: 482 },
          { name: 'Sombrero', weight: 390 },
          { name: 'Tiara', weight: 130 },
          { name: 'Unicorn', weight: 93 },
          { name: 'Ushanka', weight: 148 },
          { name: 'Visor', weight: 334 },
        ],
      },
    ],
  },
  {
    growEditionSizeTo: natural_size + slime_size,
    layersOrder: [
      {
        name: 'Background',
        options: { bypassDNA: true },
        elements: [
          { name: 'Blue', weight: 100 },
          { name: 'Green', weight: 100 },
          { name: 'Purple', weight: 100 },
          { name: 'Orange', weight: 100 },
          { name: 'Yellow', weight: 0 },
          { name: 'Pink', weight: 100 },
          { name: 'Sand', weight: 100 },
        ],
      },
      {
        name: 'Type',
        elements: [
          { name: 'Slime', weight: 100 },
        ],
      },
      {
        name: 'Slime Head',
        elements: [
          { name: 'None', weight: 278 },
          { name: 'Brain', weight: 1874 },
          { name: 'Fish', weight: 853 },
          { name: 'Ocarina', weight: 1262 },
          { name: 'Orange', weight: 649 },
          { name: 'Peanut', weight: 1466 },
          { name: 'Pizza', weight: 1670 },
          { name: 'Pokeball', weight: 278 },
          { name: 'Tissues', weight: 1058 },
          { name: 'Diamond', weight: 501 },
        ],
      },
      {
        name: 'Slime Right Organ',
        elements: [
          { name: 'None', weight: 371 },
          { name: 'Arepa', weight: 538 },
          { name: 'Bomb', weight: 204 },
          { name: 'Clock', weight: 371 },
          { name: 'Game', weight: 1039 },
          { name: 'Heart', weight: 1206 },
          { name: 'Plant', weight: 872 },
          { name: 'Wrench', weight: 1373 },
          { name: 'Baseball', weight: 1540 },
          { name: 'Hardwallet', weight: 705 },
          { name: 'Heart Lock', weight: 1707 },
        ],
      },
      {
        name: 'Slime Left Organ',
        elements: [
          { name: 'None', weight: 501 },
          { name: 'Bitcoin', weight: 724 },
          { name: 'Chocolate', weight: 872 },
          { name: 'Empanada', weight: 575 },
          { name: 'ETH Cell', weight: 93 },
          { name: 'Fried Egg', weight: 1058 },
          { name: 'GlowStick', weight: 1020 },
          { name: 'Malta', weight: 427 },
          { name: 'Shuriken', weight: 260 },
          { name: 'Sushi', weight: 1503 },
          { name: 'Yoyo', weight: 1503 },
          { name: 'Key', weight: 1503 },
        ],
      },
    ],
  },
  {
    growEditionSizeTo: natural_size + slime_size + robot_size,
    layersOrder: [
      {
        name: 'Background',
        options: { bypassDNA: true },
        elements: [
          { name: 'Blue', weight: 100 },
          { name: 'Green', weight: 100 },
          { name: 'Purple', weight: 100 },
          { name: 'Orange', weight: 100 },
          { name: 'Yellow', weight: 0 },
          { name: 'Pink', weight: 100 },
          { name: 'Sand', weight: 100 },
        ],
      },
      {
        name: 'Type',
        elements: [
          { name: 'Robot', weight: 100 },
        ],
      },
      {
        name: 'Robot Back',
        elements: [
          { name: 'None', weight: 2811 },
          { name: 'Crane', weight: 1067 },
          { name: 'Exhaust', weight: 1206 },
          { name: 'Gas', weight: 232 },
          { name: 'Jetpack', weight: 510 },
          { name: 'Neon', weight: 788 },
          { name: 'Spider', weight: 93 },
          { name: 'Swiss Army', weight: 1345 },
          { name: 'Tank', weight: 649 },
          { name: 'Tentacles', weight: 371 },
          { name: 'Wires', weight: 928 },
        ],
      },
      {
        name: 'Robot Body',
        elements: [
          { name: 'None', weight: 640 },
          { name: 'Bomb', weight: 853 },
          { name: 'Capybara', weight: 501 },
          { name: 'Circuits', weight: 677 },
          { name: 'DO NOT PUSH', weight: 1382 },
          { name: 'FANCY DO NOT PUSH', weight: 93 },
          { name: 'OOF', weight: 1030 },
          { name: 'Fridge', weight: 325 },
          { name: 'Screen', weight: 1558 },
          { name: 'Valves', weight: 1735 },
          { name: 'Wrench', weight: 1206 },
        ],
      },
      {
        name: 'Robot Eyes',
        elements: [
          { name: 'Bolt', weight: 2347 },
          { name: 'LED', weight: 1531 },
          { name: 'Light Bulb', weight: 1948 },
          { name: 'Pilot', weight: 371 },
          { name: 'Webcam', weight: 603 },
          { name: 'Empty', weight: 1299 },
          { name: 'Rhombus', weight: 835 },
          { name: 'Speed Dial', weight: 1067 },
        ],
      },
      {
        name: 'Robot Head',
        elements: [
          { name: 'None', weight: 1929 },
          { name: 'Antenna', weight: 2041 },
          { name: 'Charger', weight: 649 },
          { name: 'Goggles', weight: 1113 },
          { name: 'Modem', weight: 1577 },
          { name: 'Oil', weight: 2505 },
          { name: 'Solar Panel', weight: 186 },
        ],
      },
    ],
  },
  {
    growEditionSizeTo: natural_size + slime_size + robot_size + rick_size,
    layersOrder: [
      {
        name: 'Type',
        elements: [
          { name: 'Rick', weight: 100 },
        ],
      }
    ],
  },
  {
    growEditionSizeTo: natural_size + slime_size + robot_size + rick_size + evil_kermit_size,
    layersOrder: [
      {
        name: 'Type',
        elements: [
          { name: 'Evil Kermit', weight: 100 },
        ],
      }
    ],
  },
  {
    growEditionSizeTo: natural_size + slime_size + robot_size + rick_size + evil_kermit_size + zuko_size,
    layersOrder: [
      {
        name: 'Type',
        elements: [
          { name: 'Zuko', weight: 100 },
        ],
      }
    ],
  },
  {
    growEditionSizeTo: natural_size + slime_size + robot_size + rick_size + evil_kermit_size + zuko_size + homer_size,
    layersOrder: [
      {
        name: 'Type',
        elements: [
          { name: 'Homer', weight: 100 },
        ],
      }
    ],
  },
  {
    growEditionSizeTo: natural_size + slime_size + robot_size + rick_size + evil_kermit_size + zuko_size + homer_size + nezuko_size,
    layersOrder: [
      {
        name: 'Type',
        elements: [
          { name: 'Nezuko', weight: 100 },
        ],
      }
    ],
  },
  {
    growEditionSizeTo: natural_size + slime_size + robot_size + rick_size + evil_kermit_size + zuko_size + homer_size + nezuko_size + link_size,
    layersOrder: [
      {
        name: 'Type',
        elements: [
          { name: 'Link', weight: 100 },
        ],
      }
    ],
  },
  {
    growEditionSizeTo: natural_size + slime_size + robot_size + rick_size + evil_kermit_size + zuko_size + homer_size + nezuko_size + link_size + saiyan_size,
    layersOrder: [
      {
        name: 'Type',
        elements: [
          { name: 'Saiyan', weight: 100 },
        ],
      }
    ],
  },
  {
    growEditionSizeTo: natural_size + slime_size + robot_size + rick_size + evil_kermit_size + zuko_size + homer_size + nezuko_size + link_size + saiyan_size + neo_size,
    layersOrder: [
      {
        name: 'Type',
        elements: [
          { name: 'Neo', weight: 100 },
        ],
      }
    ],
  },
  {
    growEditionSizeTo: natural_size + slime_size + robot_size + rick_size + evil_kermit_size + zuko_size + homer_size + nezuko_size + link_size + saiyan_size + neo_size + gold_bot_size,
    layersOrder: [
      {
        name: 'Type',
        elements: [
          { name: 'Gold Capybot', weight: 100 },
        ],
      }
    ],
  },
  {
    growEditionSizeTo: natural_size + slime_size + robot_size + rick_size + evil_kermit_size + zuko_size + homer_size + nezuko_size + link_size + saiyan_size + neo_size + gold_bot_size + slime_tribal_size,
    layersOrder: [
      {
        name: 'Type',
        elements: [
          { name: 'Slime Tribal', weight: 100 },
        ],
      }
    ],
  }
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: '#ffffff',
  size: 20,
  xGap: 40,
  yGap: 40,
  align: 'left',
  baseline: 'top',
  weight: 'regular',
  family: 'Courier',
  spacer: ' => ',
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: '80%',
  static: false,
  default: '#000000',
};

const extraMetadata = {};

const rarityDelimiter = '#';

const uniqueDnaTorrance = 50000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: 'preview.png',
};

const preview_gif = {
  numberOfImages: 5,
  order: 'ASC',  // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: 'preview.gif',
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  special_faces,
  special_eyes,
  conflict_eye,
  conflict_face
};
