#!/bin/bash

node index.js && node utils/regenerate_metadata.js && cp ./build/json/_metadata.json ../chiguires_nft/metadata
