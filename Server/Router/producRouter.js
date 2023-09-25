import express from "express";
import * as proCtrls from '../Controller/Product.js'
const productRouter = express.Router();
productRouter.get("/",proCtrls.getAllProducts);

export default productRouter;
