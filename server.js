import express from 'express';
import cors from 'cors';
import todoRoutes from './routes/todo.routes.js';

const app = express();
const port = 3001;

//middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/', todoRoutes);


//start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});