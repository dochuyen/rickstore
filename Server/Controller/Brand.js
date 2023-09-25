import BrandS from "../Model/BrandS.js";

const getOne = async (req, res) => {
  try {
    const brandId = req.params;
    const brand = await BrandS.findById(brandId);
  } catch (error) {}
};
export { getOne };
