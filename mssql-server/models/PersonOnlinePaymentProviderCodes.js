const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PersonOnlinePaymentProviderCodes', {
    PersonOnlinePaymentProviderCodesID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PersonOnlinePaymentProviderCodesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PersonOnlinePaymentProviderCodesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    popPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    popStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SystemCodeFor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PersonOnlinePaymentProviderCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PersonOnlinePaymentProviderCodes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PersonOnlinePaymentProviderCodes$PrimaryKey",
        unique: true,
        fields: [
          { name: "PersonOnlinePaymentProviderCodesID" },
        ]
      },
    ]
  });
};
