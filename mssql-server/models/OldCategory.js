const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OldCategory', {
    CategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CategoryName: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    EffectiveFromDate: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    EffectiveToDate: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
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
      allowNull: true
    },
    catReasonForChange: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OldCategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    OldcategoryGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    OldcategoryDateModified: {
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
    MaxCopayDiscount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'OldCategory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Oldcategory$CacheLookup",
        fields: [
          { name: "OldcategoryDateModified" },
          { name: "OldcategoryGuid" },
        ]
      },
      {
        name: "Oldcategory$OldcategoryGuid",
        fields: [
          { name: "OldcategoryGuid" },
        ]
      },
      {
        name: "OldCategory$PrimaryKey",
        unique: true,
        fields: [
          { name: "CategoryID" },
          { name: "EffectiveFromDate" },
          { name: "EffectiveToDate" },
        ]
      },
    ]
  });
};
