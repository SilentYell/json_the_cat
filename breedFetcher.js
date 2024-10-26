const needle = require('needle');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  needle.get(url, (error, response) => {
    if (error) {
      callback(`Failed to get breed description: ${error}`, null);
      return;
    }
    
    if (response.statusCode === 200) {
      const data = response.body[0];
      
      if (data) {
        callback(null, data.description);
      } else {
        callback('Breed not found', null);
      }
    } else {
      callback(`Failed with status code: ${response.statusCode}`, null);
    }
  });
};

module.exports = {fetchBreedDescription};