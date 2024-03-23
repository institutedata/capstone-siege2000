const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomLabel', {
    CustomLabelID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CustomLabelName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CustomLabel: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CLMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CustomLabelGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CustomLabelDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    clPaperSize: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CustomLabelRules: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'CustomLabel',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "CustomLabel$CacheLookup",
        fields: [
          { name: "CustomLabelDateModified" },
          { name: "CustomLabelGuid" },
        ]
      },
      {
        name: "CustomLabel$CustomLabelGuid",
        fields: [
          { name: "CustomLabelGuid" },
        ]
      },
      {
        name: "PK_CustomLabel",
        unique: true,
        fields: [
          { name: "CustomLabelID" },
        ]
      },
    ]
  });
};
