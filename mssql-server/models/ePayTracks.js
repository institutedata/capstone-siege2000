const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ePayTracks', {
    ePayTrackID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ePayID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Epay',
        key: 'EpayID'
      }
    },
    ePayTrack: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EPaytracksGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    EPaytracksDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ePayTracks',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EPaytracks$CacheLookup",
        fields: [
          { name: "EPaytracksDateModified" },
          { name: "EPaytracksGuid" },
        ]
      },
      {
        name: "ePayTracks$ePayID",
        fields: [
          { name: "ePayID" },
        ]
      },
      {
        name: "ePayTracks$ePayTrackID",
        fields: [
          { name: "ePayTrackID" },
        ]
      },
      {
        name: "EPaytracks$EPaytracksGuid",
        fields: [
          { name: "EPaytracksGuid" },
        ]
      },
      {
        name: "ePayTracks$PrimaryKey",
        unique: true,
        fields: [
          { name: "ePayTrackID" },
        ]
      },
    ]
  });
};
