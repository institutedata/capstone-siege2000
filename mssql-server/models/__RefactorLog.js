const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('__RefactorLog', {
    OperationKey: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: '__RefactorLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK____Refact__D3AEFFDB24A67D6F",
        unique: true,
        fields: [
          { name: "OperationKey" },
        ]
      },
    ]
  });
};
