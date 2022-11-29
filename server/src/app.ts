import * as dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

app.use(express.json());

const port = "3000";
app.listen(port, async () => {
  console.log(`Listening on port ${port}.`);
});
