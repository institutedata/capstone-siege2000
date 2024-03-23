const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdditionalContactRelationShipType', {
    AdditionalContactRelationShipTypeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AdditionalContactRelationShipType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    acrDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    AdditionalContactRelationShipTYpeGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AdditionalContactRelationShipTypeDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    acrMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    AdditionalContactRelationShipCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AdditionalContactRelationShipType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AdditionalContactRelationShipType$AdditionalContactRelationShipTypeGuid",
        fields: [
          { name: "AdditionalContactRelationShipTYpeGuid" },
        ]
      },
      {
        name: "PK_AdditionalContactRelationShipType",
        unique: true,
        fields: [
          { name: "AdditionalContactRelationShipTypeID" },
        ]
      },
    ]
  });
};
