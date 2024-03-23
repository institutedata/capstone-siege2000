const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RestHome', {
    RestHomeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RestHomeName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    Address: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RHCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FoilFee: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: -1
    },
    DefaultPeriod: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    DefaultDay: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AccountID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Account',
        key: 'AccountID'
      }
    },
    FoilSS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FoilPRNSS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FoilType: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    rhARRC: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    RestHomeGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    RestHomeDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rhFacilityTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ProviderNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    rhCRRC: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    rhPersonTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'PersonType',
        key: 'PersonTypeID'
      }
    },
    DefaultPeriods: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FoilRobot: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    MaintainSOH: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    rhStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    HealthFacilityID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    rhFoilRobotID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Robot',
        key: 'RobotID'
      }
    },
    rhDispensingRobotID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Robot',
        key: 'RobotID'
      }
    },
    rhFoilStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    rhContractID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Contract',
        key: 'ContractID'
      }
    },
    FoilDontMaintainSOH: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DontMaintainSOH: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    RHRobotOutputLocation: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rhOnlineChartingSystemID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    rhRobotCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ResthomeSuburb: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ResthomeCity: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ResthomePostCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ResthomeUnitNumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ResthomeStreetNumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ResthomePhoneNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ResthomeFaxNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ResthomeEmailAddress: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ResthomeMobileNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    rhStateID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    rhPreferredDeliveryProviderID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'DeliveryProvider',
        key: 'DeliveryProviderID'
      }
    },
    rhPreferredDeliveryPackagingID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'DeliveryPackaging',
        key: 'DeliveryPackagingID'
      }
    },
    IsCarerForMembers: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    rhMedChartType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    rhDeliverAllSales: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    rhHealthFacilityID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'RestHome',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "RestHome$AccountID",
        fields: [
          { name: "AccountID" },
        ]
      },
      {
        name: "RestHome$CacheLookup",
        fields: [
          { name: "RestHomeDateModified" },
          { name: "RestHomeGuid" },
        ]
      },
      {
        name: "RestHome$PrimaryKey",
        unique: true,
        fields: [
          { name: "RestHomeID" },
        ]
      },
      {
        name: "RestHome$RestHomeGuid",
        fields: [
          { name: "RestHomeGuid" },
        ]
      },
      {
        name: "RestHome$RestHomeID",
        fields: [
          { name: "RestHomeID" },
        ]
      },
      {
        name: "RestHome$RestHomeName",
        fields: [
          { name: "RestHomeName" },
        ]
      },
    ]
  });
};
