import express from 'express';
import { getCountryInfo } from '../controller/countryController.js'

const router = express.Router();

router.post('/getCountryInfo', getCountryInfo);

export default router;
