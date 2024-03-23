const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BranchExportDate', {
    BranchExportDateID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    BranchExportDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BranchExportDateGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BranchExportDateDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BranchExportDateStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'BranchExportDate',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "BranchExportDate$BranchExportDateGuid",
        fields: [
          { name: "BranchExportDateGuid" },
        ]
      },
      {
        name: "BranchExportDate$CacheLookup",
        fields: [
          { name: "BranchExportDateDateModified" },
          { name: "BranchExportDateGuid" },
        ]
      },
      {
        name: "BranchExportDate$ExportDateID",
        fields: [
          { name: "BranchExportDateID" },
        ]
      },
      {
        name: "BranchExportDate$PrimaryKey",
        unique: true,
        fields: [
          { name: "BranchExportDateID" },
        ]
      },
    ]
  });
};
