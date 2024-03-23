const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PostCodes', {
    PostCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    'Suburb/State': {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    POSTCODESID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    POSTCODESGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    POSTCODESDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PostCodes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PostCodes",
        unique: true,
        fields: [
          { name: "POSTCODESID" },
        ]
      },
      {
        name: "POSTCODES$CacheLookup",
        fields: [
          { name: "POSTCODESDateModified" },
          { name: "POSTCODESGuid" },
        ]
      },
      {
        name: "PostCodes$PostCode",
        fields: [
          { name: "PostCode" },
        ]
      },
      {
        name: "POSTCODES$POSTCODESGuid",
        fields: [
          { name: "POSTCODESGuid" },
        ]
      },
      {
        name: "PostCodes$Suburb/State",
        fields: [
          { name: "Suburb/State" },
        ]
      },
    ]
  });
};
