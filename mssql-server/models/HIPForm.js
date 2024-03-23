const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HIPForm', {
    HIPFormID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    HIPFormName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    HIPFormGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    HIPFormDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hpfDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    hpfMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PreferredPrinter: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'HIPForm',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "HIPForm$CacheLookup",
        fields: [
          { name: "HIPFormDateModified" },
          { name: "HIPFormGuid" },
        ]
      },
      {
        name: "HIPForm$HIPFormGuid",
        fields: [
          { name: "HIPFormGuid" },
        ]
      },
      {
        name: "HIPForm$PrimaryKey",
        unique: true,
        fields: [
          { name: "HIPFormID" },
        ]
      },
    ]
  });
};
