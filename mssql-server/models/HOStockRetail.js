const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HOStockRetail', {
    HORetailID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hrStockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    hrBranchID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    hrMarkup: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    hrRetail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    HOStockRetailGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    HOStockRetailDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hrActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'HOStockRetail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "HOStockRetail$PrimaryKey",
        unique: true,
        fields: [
          { name: "HORetailID" },
        ]
      },
    ]
  });
};
