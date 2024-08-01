import express from 'express';
import dotenv from 'dotenv'

import {connection} from './database/db.js';

const app=express();

dotenv.config();

const userName=process.env.DB_USER
const password=process.env.DB_PASSWORD

connection(userName,password);


app.listen(8000,()=>{
    console.log("Server is started");
  })