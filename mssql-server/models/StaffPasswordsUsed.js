const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StaffPasswordsUsed', {
    StaffPasswordsUsedID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    StaffPasswordsUsedGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StaffPasswordsUsedDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DatePasswordWasReplaced: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DatePasswordWasSet: {
      type: DataTypes.DATE,
      allowNull: true
    },
    spuStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    StaffPasswordUsed: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    spuStaffPasswordSalt: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    spuStaffPasswordIterations: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'StaffPasswordsUsed',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "StaffPasswordsUsed$PrimaryKey",
        unique: true,
        fields: [
          { name: "StaffPasswordsUsedID" },
        ]
      },
    ]
  });
};
