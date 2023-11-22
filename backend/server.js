import express from 'express';
import cors from 'cors';
import router from './routes/countryRoutes.js';


const app = express();

app.use(express.json());
app.use(cors(
  {
    origin:["https://bounce-react-assignment-2d8o.vercel.app/"],
    methods:["POST","GET"],
    credentials:true

}
));

app.use('/', router);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
  
  
   


