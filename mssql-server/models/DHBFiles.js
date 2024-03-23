const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DHBFiles', {
    PersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    ReceiptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    FileName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FileDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DHBFilesID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DHBFilesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DHBFilesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DHBFilesPicture: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    dhbPersonAuditID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'PersonAudit',
        key: 'PersonAuditID'
      }
    }
  }, {
    sequelize,
    tableName: 'DHBFiles',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DHBFiles$CacheLookup",
        fields: [
          { name: "DHBFilesDateModified" },
          { name: "DHBFilesGuid" },
        ]
      },
      {
        name: "DHBFiles$DHBFilesGuid",
        fields: [
          { name: "DHBFilesGuid" },
        ]
      },
      {
        name: "DHBFiles$PersonID",
        fields: [
          { name: "PersonID" },
        ]
      },
      {
        name: "DHBFiles$ReceiptID",
        fields: [
          { name: "ReceiptID" },
        ]
      },
      {
        name: "PK_DHBFiles",
        unique: true,
        fields: [
          { name: "DHBFilesID" },
        ]
      },
    ]
  });
};
