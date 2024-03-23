const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SNOMEDReasonForPrescribing', {
    SNOMEDReasonForPrescribingID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    SNOMEDReasonForPrescribingTerm: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SNOMEDReasonForPrescribingCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SNOMEDReasonForPrescribingGUID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SNOMEDReasonForPrescribingDateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SNOMEDReasonForPrescribingDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SNOMEDReasonForPrescribing',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SNOMEDRe__1B356647A4444505",
        unique: true,
        fields: [
          { name: "SNOMEDReasonForPrescribingID" },
        ]
      },
    ]
  });
};
