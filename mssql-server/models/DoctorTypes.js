const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DoctorTypes', {
    DoctorTypesID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DoctorTypes: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dtMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    DoctorTypeCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DoctorTypePreciberNoRegEx: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DoesntNeedPrescriberID: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    DoctorTypesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DoctorTypesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DoctorTypes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DoctorTypes$CacheLookup",
        fields: [
          { name: "DoctorTypesDateModified" },
          { name: "DoctorTypesGuid" },
        ]
      },
      {
        name: "DoctorTypes$DoctorTypes",
        unique: true,
        fields: [
          { name: "DoctorTypes" },
        ]
      },
      {
        name: "DoctorTypes$DoctorTypesGuid",
        fields: [
          { name: "DoctorTypesGuid" },
        ]
      },
      {
        name: "PK_DoctorTypes",
        unique: true,
        fields: [
          { name: "DoctorTypesID" },
        ]
      },
    ]
  });
};
