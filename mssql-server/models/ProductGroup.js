const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductGroup', {
    ProductGroupID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProductGroupName: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    GST: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    RegularDiscount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true,
      defaultValue: 0
    },
    ExtraDiscount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true,
      defaultValue: 0
    },
    Intensive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    pgDateModified: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    HOProductGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ProductGroupGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ParentProductGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    pgOtherDetails: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ProductGroup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ProductGroup$CacheLookup",
        fields: [
          { name: "pgDateModified" },
          { name: "ProductGroupGuid" },
        ]
      },
      {
        name: "ProductGroup$pgDateModified",
        fields: [
          { name: "pgDateModified" },
        ]
      },
      {
        name: "ProductGroup$PrimaryKey",
        unique: true,
        fields: [
          { name: "ProductGroupID" },
        ]
      },
      {
        name: "ProductGroup$ProductGroupGuid",
        fields: [
          { name: "ProductGroupGuid" },
        ]
      },
      {
        name: "ProductGroup$ProductGroupName",
        fields: [
          { name: "ProductGroupName" },
        ]
      },
    ]
  });
};
