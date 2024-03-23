const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Category', {
    CategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CategoryName: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SNet: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Residual: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Sundries: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Disabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    EffectiveFromDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CategoryGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CategoryDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MinimumAge: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MaximumAge: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CategoryDescription: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    catMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    caApplyCopayDiscount: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    caCopayDiscountPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MaxCopayDiscount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    catCohort: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LongCategoryName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CategoryRules: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    catRxOneCategoryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    caChildCategoryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Category',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Category$CacheLookup",
        fields: [
          { name: "CategoryDateModified" },
          { name: "CategoryGuid" },
        ]
      },
      {
        name: "Category$CategoryGuid",
        fields: [
          { name: "CategoryGuid" },
        ]
      },
      {
        name: "Category$CategoryName",
        unique: true,
        fields: [
          { name: "CategoryName" },
        ]
      },
      {
        name: "Category$PrimaryKey",
        unique: true,
        fields: [
          { name: "CategoryID" },
        ]
      },
    ]
  });
};
