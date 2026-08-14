import express from 'express';

const route = express.Router();

route.get("/",(req, res) => {
  res.send('Todo API is running');
 });

 export default route;