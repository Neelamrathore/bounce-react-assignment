import axios from 'axios';

export const getCountryInfo = async (req, res) => {
  const { country } = req.body;
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
    const countryInfo = response.data[0];
    res.json(countryInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
