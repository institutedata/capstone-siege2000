const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NewFoilPack', {
    FoilPackID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Monthly: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    NoOfWeeks: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    OriginalFoilPackID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    StartDay: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Periods: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    StartDates: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FoilCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    FoilComment: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FoilPackGUID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    fpFoilFee: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: -1
    },
    PackExpiryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExpiryDateMessage: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PackExpiryDays: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FoilFontSize: {
      type: DataTypes.REAL,
      allowNull: true
    },
    NewFoilPackGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    NewFoilPackDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fpPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NewFoilPack',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "NewFoilPack$CacheLookup",
        fields: [
          { name: "NewFoilPackDateModified" },
          { name: "NewFoilPackGuid" },
        ]
      },
      {
        name: "NewFoilPack$FoilPackGUID",
        fields: [
          { name: "FoilPackGUID" },
        ]
      },
      {
        name: "NewFoilPack$FoilPackID",
        fields: [
          { name: "FoilPackID" },
        ]
      },
      {
        name: "NewFoilPack$NewFoilPackGuid",
        fields: [
          { name: "NewFoilPackGuid" },
        ]
      },
      {
        name: "NewFoilPack$OriginalFoilPackID",
        fields: [
          { name: "OriginalFoilPackID" },
        ]
      },
      {
        name: "NewFoilPack$PrimaryKey",
        unique: true,
        fields: [
          { name: "FoilPackID" },
        ]
      },
    ]
  });
};
