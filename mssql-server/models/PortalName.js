const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PortalName', {
    PortalNameID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PortalName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    PortalNameGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PortalNameDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PortalName',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PortalName$CacheLookup",
        fields: [
          { name: "PortalNameDateModified" },
          { name: "PortalNameGuid" },
        ]
      },
      {
        name: "PortalName$PortalNameGuid",
        fields: [
          { name: "PortalNameGuid" },
        ]
      },
      {
        name: "PortalName$PrimaryKey",
        unique: true,
        fields: [
          { name: "PortalNameID" },
        ]
      },
    ]
  });
};
