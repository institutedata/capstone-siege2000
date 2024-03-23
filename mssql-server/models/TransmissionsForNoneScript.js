const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TransmissionsForNoneScript', {
    TransmissionsForNoneScriptID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CodeToSend: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "0"
    },
    MessageType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tnsSystemToSendTo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TransmissionState: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TransmissionsForNoneScriptGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    TransmissionsForNoneScriptDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FailedAttempts: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tnsPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    AdditionalMessageDetails: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TransmissionsForNoneScript',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TransmissionsForNoneScript",
        unique: true,
        fields: [
          { name: "TransmissionsForNoneScriptID" },
        ]
      },
    ]
  });
};
