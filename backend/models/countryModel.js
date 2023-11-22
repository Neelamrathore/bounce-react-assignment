// models/countryModel.js
const axios = require('axios');

const getCountryInfo = async (country) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
    return response.data[0];
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

module.exports = {
  getCountryInfo,
};
