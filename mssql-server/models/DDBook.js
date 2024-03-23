const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DDBook', {
    DDBookID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ddbScriptID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Script',
        key: 'ScriptID'
      }
    },
    ddbOrderItemID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ddbShrinkageID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Shrinkage',
        key: 'ShrinkageID'
      }
    },
    ddbStaffID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    ddbTradeName: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    ddbDetails: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ""
    },
    AmountInInUnits: {
      type: DataTypes.REAL,
      allowNull: false,
      defaultValue: 0
    },
    AmountOutInUnits: {
      type: DataTypes.REAL,
      allowNull: false,
      defaultValue: 0
    },
    BalanceInUnits: {
      type: DataTypes.REAL,
      allowNull: false,
      defaultValue: 0
    },
    DDBookGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DDBookDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ddbSignOffStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    ddbOperationType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'DDBook',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DDBook$CacheLookup",
        fields: [
          { name: "DDBookDateModified" },
          { name: "DDBookGuid" },
        ]
      },
      {
        name: "PK_DDBook",
        unique: true,
        fields: [
          { name: "DDBookID" },
        ]
      },
    ]
  });
};
