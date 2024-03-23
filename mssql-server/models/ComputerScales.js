const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ComputerScales', {
    ComputerScalesID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    csScaleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Scale',
        key: 'ScaleID'
      }
    },
    csComputerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Computer',
        key: 'UnitID'
      }
    },
    ComputerScalesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ComputerScalesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ComputerScales',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ComputerScales$CacheLookup",
        fields: [
          { name: "ComputerScalesDateModified" },
          { name: "ComputerScalesGuid" },
        ]
      },
      {
        name: "ComputerScales$ComputerScalesGuid",
        fields: [
          { name: "ComputerScalesGuid" },
        ]
      },
      {
        name: "PK_ComputerScales",
        unique: true,
        fields: [
          { name: "ComputerScalesID" },
        ]
      },
    ]
  });
};
