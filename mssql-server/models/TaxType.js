const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TaxType', {
    TaxTypeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AbbrDescription: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ttStateID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'StateName',
        key: 'StateID'
      }
    },
    ttCountryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TaxTypeGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    TaxTypeDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ttMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ttStatusFlag: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    XeroOutputCode: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    XeroInputCode: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DefaultRate: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    ttStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ttEndDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ttDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'TaxType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TaxType$AbbrDescription",
        unique: true,
        fields: [
          { name: "AbbrDescription" },
        ]
      },
      {
        name: "TaxType$CacheLookup",
        fields: [
          { name: "TaxTypeDateModified" },
          { name: "TaxTypeGuid" },
        ]
      },
      {
        name: "TaxType$PrimaryKey",
        unique: true,
        fields: [
          { name: "TaxTypeID" },
        ]
      },
      {
        name: "TaxType$TaxTypeGuid",
        fields: [
          { name: "TaxTypeGuid" },
        ]
      },
      {
        name: "TaxType$TaxTypeID",
        unique: true,
        fields: [
          { name: "TaxTypeID" },
        ]
      },
    ]
  });
};
