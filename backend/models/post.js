const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../config/dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      required: true,
      defaultValue: DataTypes.NOW,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts",
    // uselowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Post;
