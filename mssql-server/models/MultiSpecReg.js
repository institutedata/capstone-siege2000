const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MultiSpecReg', {
    MultiDrugID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      references: {
        model: 'MultiDrug',
        key: 'MultiDrugID'
      }
    },
    SpecRegID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    MultiSpecRegID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    MultiSpecRegGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MultiSpecRegDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    msrDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    msrMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MultiSpecReg',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "MultiSpecReg$CacheLookup",
        fields: [
          { name: "MultiSpecRegDateModified" },
          { name: "MultiSpecRegGuid" },
        ]
      },
      {
        name: "MultiSpecReg$MultiDrugID",
        fields: [
          { name: "MultiDrugID" },
        ]
      },
      {
        name: "MultiSpecReg$MultiDrugID_SpecRegID",
        unique: true,
        fields: [
          { name: "MultiDrugID" },
          { name: "SpecRegID" },
        ]
      },
      {
        name: "MultiSpecReg$MultiSpecRegGuid",
        fields: [
          { name: "MultiSpecRegGuid" },
        ]
      },
      {
        name: "MultiSpecReg$PrimaryKey",
        unique: true,
        fields: [
          { name: "MultiDrugID" },
          { name: "SpecRegID" },
        ]
      },
      {
        name: "MultiSpecReg$SpecRegID",
        fields: [
          { name: "SpecRegID" },
        ]
      },
    ]
  });
};
