const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('URLS', {
    URLID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TheURL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    URLDescription: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    URLSGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    URLSDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    urlMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    urlDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'URLS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_URLS",
        unique: true,
        fields: [
          { name: "URLID" },
        ]
      },
      {
        name: "URLS$CacheLookup",
        fields: [
          { name: "URLSDateModified" },
          { name: "URLSGuid" },
        ]
      },
      {
        name: "URLS$URLSGuid",
        fields: [
          { name: "URLSGuid" },
        ]
      },
    ]
  });
};
