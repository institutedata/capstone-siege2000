const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ScriptHistory', {
    ScriptHistoryID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Script',
        key: 'ScriptID'
      }
    },
    ScriptNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DoctorID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Doctor',
        key: 'DoctorID'
      }
    },
    PersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    StaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    PatientCategoryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DrugID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
    },
    MultiDrugID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'MultiDrug',
        key: 'MultiDrugID'
      }
    },
    Quantity: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    Instructions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DateDispensed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ScriptHistoryGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ScriptHistoryDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PatientPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ScriptHistory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ScriptHistory",
        unique: true,
        fields: [
          { name: "ScriptHistoryID" },
        ]
      },
    ]
  });
};
