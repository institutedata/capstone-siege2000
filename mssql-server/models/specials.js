const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Special extends Model {}

Special.init(
  {
    SpecialID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, // Assuming StockID is auto-incremented
    },
    SpecialName: {
      type: DataTypes.STRING(40), // Adjust the length as per your requirement
      allowNull: false,
      defaultValue: "New Card", // Default value as defined in your table
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(), // Default value as defined in your table
    },
    FinishDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(), // Default value as defined in your table
    },
    DateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(), // Default value as defined in your table
    },
    EveryDaySpecial: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false, // Default value as defined in your table
    },
    ActiveSpecial:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, // Default value as defined in your table
        },

    }
,
    {
        sequelize: sequelizeInstance,
        modelName: "Special",
        tableName: "Special", // Explicitly specifying the table name
        timestamps: false, // Assuming you are not using Sequelize's automatic timestamp columns
    }
    );
   
module.exports = Special;
