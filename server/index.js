import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

//connect with database: mongodb
const CONNECTION_URL = 'mongodb+srv://nodeconnect:nodeconnect1234@cluster0.l32ar1t.mongodb.net/';
const PORT = process.env.PORT || 5000;

mongoose.connect( CONNECTION_URL, {useNewUrlParser: true, useNewUrlParser: true})
          .then(() =>app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`)))
          .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);




