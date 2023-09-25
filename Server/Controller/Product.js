import express from "express";

import ProductSS from "../Model/ProductS.js";

const getAllProducts = async (req, res) => {
  const product = await ProductSS.find({}).then((data) => {
    return res.status(200).json({
      success: data ? true : false,
      product: data ? data : "cannot find product",
    });
  });
};
const getOne = async (req, res) => {
  try {
    const id = req.params;
    const product = await ProductSS.findById(id);
  } catch (error) {}
};

const getBrand = async (req, res) => {
  try {
    const { brandId } = req.params;
    const brandProduct = await ProductSS.find({});
  } catch (error) {}
};
export { getOne, getBrand, getAllProducts };
