const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BranchVPN', {
    BranchID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BranchName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BranchIPAddress: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    BranchVPNGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BranchVPNDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BranchVPN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "BranchVPN$BranchVPNGuid",
        fields: [
          { name: "BranchVPNGuid" },
        ]
      },
      {
        name: "BranchVPN$CacheLookup",
        fields: [
          { name: "BranchVPNDateModified" },
          { name: "BranchVPNGuid" },
        ]
      },
      {
        name: "BranchVPN$PrimaryKey",
        unique: true,
        fields: [
          { name: "BranchID" },
        ]
      },
    ]
  });
};
