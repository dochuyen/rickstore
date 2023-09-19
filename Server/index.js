import express from "express";
import { config } from "dotenv";
config();
import cors from "cors";
import initRout from "./Router/index.js";
import dbConnect from "./Configs/dbConnect.js";

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());
initRout(app);
dbConnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
