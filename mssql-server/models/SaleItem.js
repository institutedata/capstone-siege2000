const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SaleItem', {
    SaleItemID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SaleID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Sales',
        key: 'SaleID'
      }
    },
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
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
    Description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Cost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Retail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Quantity: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    Tax: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    Discount: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
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
    SpecialItemType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ClubID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Club',
        key: 'ClubID'
      }
    },
    ClubPoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    SpecialID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Special',
        key: 'SpecialID'
      }
    },
    ActionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    siRealCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SaleItemGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    EPayFailed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    EpayType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    saSundryGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    siSpecialGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OriginalRetail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    siScriptAdditionalPaymentsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    sdOwingDispensedID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    siSpecialDiscount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    siMultiBuyDiscount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    siSaleItemIDRefunded: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'SaleItem',
        key: 'SaleItemID'
      }
    },
    siDeliveryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Delivery',
        key: 'DeliveryID'
      }
    },
    siForcedAccount: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SaleItemDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    siInvoiceItemID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    RRP: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    siDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    GeneratedDiscount: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    siBrokenStock: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    siScriptToPrivateInsuranceGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    siForiegnCurrencyRetail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    siTaxInCents: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    siLinkedSaleItemGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    siSentToXero: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    siXeroGUID: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SaleItem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SaleItem$ActionID",
        fields: [
          { name: "ActionID" },
        ]
      },
      {
        name: "SaleItem$ClubID",
        fields: [
          { name: "ClubID" },
        ]
      },
      {
        name: "SaleItem$Description",
        fields: [
          { name: "Description" },
        ]
      },
      {
        name: "SaleItem$EpayType",
        fields: [
          { name: "EpayType" },
        ]
      },
      {
        name: "SaleItem$PersonID",
        fields: [
          { name: "PersonID" },
        ]
      },
      {
        name: "SaleItem$PrimaryKey",
        unique: true,
        fields: [
          { name: "SaleItemID" },
        ]
      },
      {
        name: "SaleItem$SaleID",
        fields: [
          { name: "SaleID" },
        ]
      },
      {
        name: "SaleItem$SaleItemDateModified",
        fields: [
          { name: "SaleItemDateModified" },
        ]
      },
      {
        name: "SaleItem$SaleItemGuid",
        fields: [
          { name: "SaleItemGuid" },
        ]
      },
      {
        name: "SaleItem$saSundryGuid",
        fields: [
          { name: "saSundryGuid" },
        ]
      },
      {
        name: "SaleItem$ScriptID",
        fields: [
          { name: "ScriptID" },
        ]
      },
      {
        name: "SaleItem$siScriptAdditionalPaymentsGuid",
        fields: [
          { name: "siScriptAdditionalPaymentsGuid" },
        ]
      },
      {
        name: "SaleItem$SpecialID",
        fields: [
          { name: "SpecialID" },
        ]
      },
      {
        name: "SaleItem$SpecialItemType",
        fields: [
          { name: "SpecialItemType" },
        ]
      },
      {
        name: "SaleItem$StockID",
        fields: [
          { name: "StockID" },
        ]
      },
    ]
  });
};
