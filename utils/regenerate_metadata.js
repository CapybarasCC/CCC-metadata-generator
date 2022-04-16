"use strict";

const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const fs = require("fs");
const path = require("path");
const { special_eyes } = require("../src/config");
const jsonDir = `${basePath}/build/json`;
const metadataFilePath = `${basePath}/build/json/_metadata.json`;

const getIndividualJsonFiles = () => {
  return fs
    .readdirSync(jsonDir)
    .filter((item) => /^[0-9]{1,6}.json/g.test(item));
};

// Identify json files
const jsonFiles = getIndividualJsonFiles();
console.log(`Found ${jsonFiles.length} json files in "${jsonDir}" to process`);

// Iterate, open and put in metadata list
const metadata = jsonFiles
  .map((file) => {
    let rawdata = fs.readFileSync(`${jsonDir}/${file}`);
    let json_obj = JSON.parse(rawdata);
    let json_original = JSON.parse(rawdata);
    json_obj.attributes = json_obj.attributes.filter(v => v.value !== 'None');
    fs.writeFileSync(`${jsonDir}/${file}`, JSON.stringify(json_obj, null, 2));
    return json_original;
  })
  .sort((a, b) => parseInt(a.edition) - parseInt(b.edition));

console.log(
  `Extracted and sorted metadata files. Writing to file: ${metadataFilePath}`
);
fs.writeFileSync(metadataFilePath, JSON.stringify(metadata, null, 2));