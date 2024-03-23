const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SpecialItems', {
    SpecialID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      references: {
        model: 'Special',
        key: 'SpecialID'
      }
    },
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
    },
    ActualRetail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ActualCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SpecialRetail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Discount: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    QtyLeft: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    QtyAvaliable: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    GroupID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MultiQty: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    GiftStockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
    },
    GetLowestFree: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    MultiBuyType: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    MultiRetail: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MultiBuyText: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POSNote: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Flybuys: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    AARewardsID: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AARewards: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DollarDiscount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AdditionalCriteria: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    siDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SPECIALITEMSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    SPECIALITEMSGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SPECIALITEMSDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    siSaleTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'SaleType',
        key: 'SaleTypeID'
      }
    },
    siClubID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Club',
        key: 'ClubID'
      }
    },
    SecondaryGroupID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SpecialItemAdditionalDetails: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SpecialItems',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SPECIALITEMS$CacheLookup",
        fields: [
          { name: "SPECIALITEMSDateModified" },
          { name: "SPECIALITEMSGuid" },
        ]
      },
      {
        name: "SpecialItems$GroupID",
        fields: [
          { name: "GroupID" },
        ]
      },
      {
        name: "SpecialItems$PrimaryKey",
        unique: true,
        fields: [
          { name: "SpecialID" },
          { name: "StockID" },
        ]
      },
      {
        name: "SpecialItems$SpecialID",
        fields: [
          { name: "SpecialID" },
        ]
      },
      {
        name: "SPECIALITEMS$SPECIALITEMSGuid",
        fields: [
          { name: "SPECIALITEMSGuid" },
        ]
      },
      {
        name: "SpecialItems$StockID",
        fields: [
          { name: "StockID" },
        ]
      },
    ]
  });
};
