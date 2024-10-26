const needle = require('needle');
const fs = require('fs');

const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

needle.get(url, (error, response) => {
  if (error) {
    console.log('Error:', error);
    console.log('Status code:', response && response.statusCode);
    return;
  }

  if (response.statusCode === 200) {
    const data = response.body[0];

    if (data) {
      console.log(data.description);
      fs.writeFile('./catBreedData.json', JSON.stringify(response.body, null, 2), (err) => {
        if (err) console.log('Write error:', err);
        else console.log('Successfully wrote to catBreedData.json');
      });
    } else {
      console.log('Breed not found.');
    }
  }
});