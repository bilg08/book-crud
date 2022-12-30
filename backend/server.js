import express from 'express';
import dotenv from 'dotenv';
import bookRouter from './router/book.js';
import categoryRouter from "./router/category.js";
import connectToDb from './db.js'
import cors from 'cors';

dotenv.config({ path: './.env' });
const port = process.env.PORT;

connectToDb();
const app = express();
app.use(express.json());

// ************************************************************

app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Expose-Headers", "Content-Range",
  );
  res.setHeader("Content-Range","0-20/20");
  next()
});

//cors
app.use(
  cors({
    origin: "*",
  })
);
// ************************************************************

app.use('/book', bookRouter);
app.use("/category", categoryRouter);

app.listen(port, () => console.log(`listening in http://localhost:${port}`));
