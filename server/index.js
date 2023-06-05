const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const http = require('http');
const setupSocket = require('./socket');
const { deserializeUser } = require('./middlewares/auth');

const app = express();
const server = http.createServer(app);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('connected to db'))
  .catch((err) => console.log(err.message));

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(deserializeUser);
app.use('/api', router);

setupSocket(server);

app.use(errorHandler);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
