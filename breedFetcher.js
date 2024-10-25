const needle = require('needle');
const fs = require('fs');


const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib';

needle.get(url, (error, response) => {
  if (error) {
    fs.writeFile('./catbreed.txt');
  }
});