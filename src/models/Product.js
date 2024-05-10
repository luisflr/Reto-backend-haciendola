import { DataTypes as dt} from "sequelize";

const ProductModel = (sequelize) => {
  const Product = sequelize.define("product", {
    handle: {
      type: dt.STRING,
      allowNull: false,
      unique: true
    },
    title: {
      type: dt.STRING,
      allowNull: false
    },
    description: {
      type: dt.STRING,
      allowNull: false
    },
    sku: {
      type: dt.INTEGER,
      allowNull: false
    },
    grams: {
      type: dt.STRING,
      allowNull: false
    },
    stock: {
      type: dt.INTEGER,
      allowNull: false
    },
    price: {
      type: dt.INTEGER,
      allowNull: false
    },
    compare_price: {
      type: dt.INTEGER,
      allowNull: false
    },
    barcode: {
      type: dt.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false
  });
  return Product;
}

export default ProductModel;