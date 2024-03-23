const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SupplierSettings', {
    SupplierSettingsID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    ssSupplierID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Section: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    TheValue: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SupplierSettingsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SupplierSettingsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SupplierSettings',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SupplierSettings",
        unique: true,
        fields: [
          { name: "ssSupplierID" },
          { name: "Section" },
        ]
      },
      {
        name: "SupplierSettings$CacheLookup",
        fields: [
          { name: "SupplierSettingsDateModified" },
          { name: "SupplierSettingsGuid" },
        ]
      },
      {
        name: "SupplierSettings$SupplierSettingsGuid",
        fields: [
          { name: "SupplierSettingsGuid" },
        ]
      },
    ]
  });
};
