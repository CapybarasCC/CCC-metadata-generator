const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Capybaras Country Club";
const description = "A fully animated NFT collection living in the ETH network";
const baseUri = "ipfs://TO_UPDATE";

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

const special_faces = [{ name: 'Patch' }, { name: 'Blindfold' }];
const special_eyes = [{ name: 'None' }, { name: 'None' }];

const conflict_face = [{ name: '3D Glasses' }, { name: 'Monocle' }, { name: 'Small Glasses' }, { name: 'Sun Glasses' }];
const conflict_eye = [{ name: 'Laser' }];

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
          { name: 'None', weight: 100 },
          { name: 'Astronaut', weight: 100 },
          { name: 'Baggins', weight: 100 },
          { name: 'Bartender', weight: 100 },
          { name: 'Basket Shirt', weight: 100 },
          { name: 'Boxer', weight: 100 },
          { name: 'Hoodie', weight: 100 },
          { name: 'Mummy', weight: 100 },
        ],
      },
      {
        name: 'Face',
        elements: [
          { name: 'None', weight: 100 },
          { name: '3D Glasses', weight: 100 },
          { name: 'Band Aid', weight: 100 },
          { name: 'Monocle', weight: 100 },
          { name: 'Small Glasses', weight: 100 },
          { name: 'Stickers', weight: 100 },
          { name: 'Sun Glasses', weight: 100 },
          { name: 'X Scar', weight: 100 },
        ],
      },
      {
        name: 'Eyes',
        elements: [
          { name: 'None', weight: 100 },
          { name: 'Bruise', weight: 100 },
          { name: 'Drop Shape', weight: 100 },
          { name: 'Goat', weight: 100 },
          { name: 'Open', weight: 100 },
          { name: 'Simple', weight: 100 },
          { name: 'Sparkly', weight: 100 },
          { name: 'Stoned', weight: 100 },
          { name: 'Surprised', weight: 100 },
          { name: 'uwu', weight: 100 },
          { name: 'X', weight: 100 },
        ],
      },
      {
        name: 'Mouth',
        elements: [
          { name: 'None', weight: 100 },
          { name: 'Goldtooth', weight: 100 },
          { name: 'Pipe', weight: 100 },
          { name: 'Septum', weight: 100 },
          { name: 'Smile', weight: 100 },
          { name: 'Teeth', weight: 100 },
          { name: 'Toast', weight: 100 },
          { name: 'Tongue', weight: 100 },
        ],
      },
      {
        name: 'Head',
        elements: [
          { name: 'None', weight: 885 },
          { name: 'Airpods', weight: 557 },
          { name: 'Bald', weight: 408 },
          { name: 'Bandana', weight: 427 },
          { name: 'Bird', weight: 353 },
          { name: 'Cap', weight: 501 },
          { name: 'Crown', weight: 74 },
          { name: 'Halo', weight: 56 },
          { name: 'Manbun', weight: 371 },
          { name: 'Medusa', weight: 28 },
          { name: 'Mohawk', weight: 464 },
          { name: 'Orange', weight: 575 },
        ],
      },
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
