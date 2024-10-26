const needle = require('needle');
const fs = require('fs');


const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib';

needle.get(url, (error, response) => {
  if (error) {
    console.log('Error:', error);
    console.log('Status code:', response && response.statusCode);
    return;
  }

  if (response.statusCode === 200) {
    fs.writeFile('./catBreedData.json', JSON.stringify(response.body, null, 2), (err) => {
      if (err) console.log('Write error:', err);
      else console.log('Successfully wrote to catBreedData.json');
    });
  }
});