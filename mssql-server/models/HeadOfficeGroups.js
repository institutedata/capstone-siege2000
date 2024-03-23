const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HeadOfficeGroups', {
    GroupID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GroupName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    GroupEmail: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GroupFields: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GroupLocation: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    GroupDrugFields: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GroupMultiFields: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GroupSupplierID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Supplier',
        key: 'SupplierID'
      }
    },
    GroupFTP: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    SpecialIDsToExport: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    HeadOfficeGroupsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    HeadOfficeGroupsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'HeadOfficeGroups',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "HeadOfficeGroups$CacheLookup",
        fields: [
          { name: "HeadOfficeGroupsDateModified" },
          { name: "HeadOfficeGroupsGuid" },
        ]
      },
      {
        name: "HeadOfficeGroups$HeadOfficeGroupsGuid",
        fields: [
          { name: "HeadOfficeGroupsGuid" },
        ]
      },
      {
        name: "HeadOfficeGroups$PrimaryKey",
        unique: true,
        fields: [
          { name: "GroupID" },
        ]
      },
    ]
  });
};
