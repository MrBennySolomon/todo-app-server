import path              from 'path';
import express           from 'express';
import cors              from 'cors';
import dotenv            from 'dotenv';
import items             from './routes/itemsRoutes.js';
import auth              from './routes/authRoutes.js';
import users             from './routes/userRoutes.js';
import errorHandler      from './middleware/errorHandler.js';
import connectDB         from './config/db.js';
import { fileURLToPath } from 'url';
import fs                from 'fs';
import morgan            from 'morgan';
import logger            from './logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  logger.info('access server home page');
  res.json({
    message: 'TODO APP SERVER'
  });
});

app.use(morgan('dev'));

app.use('/items', items);
app.use('/auth',  auth);
app.use('/users', users);
app.use(errorHandler);

const PORT   = process.env.PORT || 5000;

const server = app.listen(PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));