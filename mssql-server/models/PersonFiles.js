const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PersonFiles', {
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
    PersonFilesID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PersonFilesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PersonFilesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PersonFilesPicture: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    pfPersonAuditID: {
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
    tableName: 'PersonFiles',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PersonFiles$CacheLookup",
        fields: [
          { name: "PersonFilesDateModified" },
          { name: "PersonFilesGuid" },
        ]
      },
      {
        name: "PersonFiles$PersonFilesGuid",
        fields: [
          { name: "PersonFilesGuid" },
        ]
      },
      {
        name: "PersonFiles$PersonID",
        fields: [
          { name: "PersonID" },
        ]
      },
      {
        name: "PersonFiles$ReceiptID",
        fields: [
          { name: "ReceiptID" },
        ]
      },
      {
        name: "PK_PersonFiles",
        unique: true,
        fields: [
          { name: "PersonFilesID" },
        ]
      },
    ]
  });
};
