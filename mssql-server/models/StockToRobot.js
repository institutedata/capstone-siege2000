const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StockToRobot', {
    StockToRobotID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    strStockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
    },
    strRobotID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Robot',
        key: 'RobotID'
      }
    },
    StockToRobotGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StockToRobotDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    strRobotTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'StockToRobot',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_StockToRobot",
        unique: true,
        fields: [
          { name: "StockToRobotID" },
        ]
      },
      {
        name: "StockToRobot$CacheLookup",
        fields: [
          { name: "StockToRobotDateModified" },
          { name: "StockToRobotGuid" },
        ]
      },
      {
        name: "StockToRobot$StockToRobotGuid",
        fields: [
          { name: "StockToRobotGuid" },
        ]
      },
      {
        name: "StockToRobot$StockToRobotID",
        unique: true,
        fields: [
          { name: "StockToRobotID" },
        ]
      },
    ]
  });
};
