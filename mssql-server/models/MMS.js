const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MMS', {
    MMSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    MMSDescription: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    DollarValue: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MMSGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MMSDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MMS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "MMS$CacheLookup",
        fields: [
          { name: "MMSDateModified" },
          { name: "MMSGuid" },
        ]
      },
      {
        name: "MMS$MMSGuid",
        fields: [
          { name: "MMSGuid" },
        ]
      },
      {
        name: "MMS$MMSID",
        fields: [
          { name: "MMSID" },
        ]
      },
      {
        name: "MMS$PrimaryKey",
        unique: true,
        fields: [
          { name: "MMSID" },
        ]
      },
    ]
  });
};
