const needle = require('needle');
const fs = require('fs');


const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib';

needle.get(url, (error, response) => {
  if (error) {
    console.log('Error:', error);
    console.log('status code:', response && response.statusCode);
    return;
  }

  if (response.statusCode === 200) {
    fs.writeFile(JSON.stringify('./catBreedData.json'));
  }
});