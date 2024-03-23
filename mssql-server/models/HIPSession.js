const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HIPSession', {
    HIPSessionID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    HIPSPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    HIPSDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HIPSBranchID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Branch',
        key: 'BranchID'
      }
    },
    HIPSessionGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    HIPSessionDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HIPSessionDateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SentToServer: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    HIPSStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    HIPSAFormID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'HIPForm',
        key: 'HIPFormID'
      }
    },
    HIPSessionIDThisSessionWasCopiedFrom: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'HIPSession',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "HIPSession$CacheLookup",
        fields: [
          { name: "HIPSessionDateModified" },
          { name: "HIPSessionGuid" },
        ]
      },
      {
        name: "HIPSession$HIPSessionGuid",
        fields: [
          { name: "HIPSessionGuid" },
        ]
      },
      {
        name: "HIPSession$PrimaryKey",
        unique: true,
        fields: [
          { name: "HIPSessionID" },
        ]
      },
    ]
  });
};
