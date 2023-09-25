import mongoose from "mongoose";

const BrandSchema1 = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("brandSchemaNew1", BrandSchema1);
