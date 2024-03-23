var DataTypes = require("sequelize").DataTypes;
var _Account = require("./Account");
var _AccountAudit = require("./AccountAudit");
var _AccountCategory = require("./AccountCategory");
var _AccountClass = require("./AccountClass");
var _Action = require("./Action");
var _ActionInstance = require("./ActionInstance");
var _AdditionalAddresses = require("./AdditionalAddresses");
var _AdditionalContact = require("./AdditionalContact");
var _AdditionalContactRelationShipType = require("./AdditionalContactRelationShipType");
var _AdditionalInvoiceChargeTypes = require("./AdditionalInvoiceChargeTypes");
var _AdditionalInvoiceCharges = require("./AdditionalInvoiceCharges");
var _AdditionalNames = require("./AdditionalNames");
var _AdditionalOrderInvoiceCharges = require("./AdditionalOrderInvoiceCharges");
var _AdditionalOrderInvoiceItemsCharges = require("./AdditionalOrderInvoiceItemsCharges");
var _AddressTypes = require("./AddressTypes");
var _Allergy = require("./Allergy");
var _AppointmentCategory = require("./AppointmentCategory");
var _AppointmentLabel = require("./AppointmentLabel");
var _AppointmentResource = require("./AppointmentResource");
var _AppointmentStatus = require("./AppointmentStatus");
var _Appointments = require("./Appointments");
var _ArchiveRXAudit = require("./ArchiveRXAudit");
var _ArchiveRXAuditReason = require("./ArchiveRXAuditReason");
var _ArchiveRxAuditComment = require("./ArchiveRxAuditComment");
var _ArchiveScriptTransmissionMessage = require("./ArchiveScriptTransmissionMessage");
var _AusOptions = require("./AusOptions");
var _Autonumber = require("./Autonumber");
var _AvaliableCurrency = require("./AvaliableCurrency");
var _Barcode = require("./Barcode");
var _Batches = require("./Batches");
var _BatchesAudit = require("./BatchesAudit");
var _BatchesAuditComment = require("./BatchesAuditComment");
var _Branch = require("./Branch");
var _BranchBanners = require("./BranchBanners");
var _BranchData = require("./BranchData");
var _BranchExportDate = require("./BranchExportDate");
var _BranchRegions = require("./BranchRegions");
var _BranchSalesData = require("./BranchSalesData");
var _BranchVPN = require("./BranchVPN");
var _Cards = require("./Cards");
var _Category = require("./Category");
var _ClaimResponseItem = require("./ClaimResponseItem");
var _ClaimToScriptAdditional = require("./ClaimToScriptAdditional");
var _Club = require("./Club");
var _ClubMember = require("./ClubMember");
var _ClubPointsAdjustment = require("./ClubPointsAdjustment");
var _ClubPointsAdjustmentReason = require("./ClubPointsAdjustmentReason");
var _ClubStock = require("./ClubStock");
var _CompanionSaleItem = require("./CompanionSaleItem");
var _CompanionSaleItemDetails = require("./CompanionSaleItemDetails");
var _CompanionSaleLinks = require("./CompanionSaleLinks");
var _CompanionSales = require("./CompanionSales");
var _CompanionScheme = require("./CompanionScheme");
var _CompoundPriceOptions = require("./CompoundPriceOptions");
var _CompoundSheetDetail = require("./CompoundSheetDetail");
var _CompoundStats = require("./CompoundStats");
var _CompoundedScriptIngredientBatches = require("./CompoundedScriptIngredientBatches");
var _Computer = require("./Computer");
var _ComputerOperations = require("./ComputerOperations");
var _ComputerScales = require("./ComputerScales");
var _Conditions = require("./Conditions");
var _ContactTypes = require("./ContactTypes");
var _Contract = require("./Contract");
var _ConvSOH = require("./ConvSOH");
var _CreditorFile = require("./CreditorFile");
var _CustomLabel = require("./CustomLabel");
var _DDBook = require("./DDBook");
var _DHBFiles = require("./DHBFiles");
var _DHBPriceOptions = require("./DHBPriceOptions");
var _Debit = require("./Debit");
var _Delivery = require("./Delivery");
var _DeliveryComment = require("./DeliveryComment");
var _DeliveryFees = require("./DeliveryFees");
var _DeliveryPackaging = require("./DeliveryPackaging");
var _DeliveryProvider = require("./DeliveryProvider");
var _DeliveryStatus = require("./DeliveryStatus");
var _DispExport = require("./DispExport");
var _Doctor = require("./Doctor");
var _DoctorAuditComment = require("./DoctorAuditComment");
var _DoctorAuditReason = require("./DoctorAuditReason");
var _DoctorTypes = require("./DoctorTypes");
var _DoseFrequency = require("./DoseFrequency");
var _Drug = require("./Drug");
var _DrugUpdateIDS = require("./DrugUpdateIDS");
var _EftposUnits = require("./EftposUnits");
var _EmailTemplate = require("./EmailTemplate");
var _Emails = require("./Emails");
var _EndOfDay = require("./EndOfDay");
var _EndOfDayCurrency = require("./EndOfDayCurrency");
var _Epay = require("./Epay");
var _Equivalent = require("./Equivalent");
var _EthnicGroup = require("./EthnicGroup");
var _EventStatus = require("./EventStatus");
var _ExternalSNetDetails = require("./ExternalSNetDetails");
var _ExtraPaymentType = require("./ExtraPaymentType");
var _EziblistAdherance = require("./EziblistAdherance");
var _EziblistDevices = require("./EziblistDevices");
var _Failed = require("./Failed");
var _Film = require("./Film");
var _FilmDetails = require("./FilmDetails");
var _FilmProcess = require("./FilmProcess");
var _FilmService = require("./FilmService");
var _Foil = require("./Foil");
var _FoilPack = require("./FoilPack");
var _FoilPackNo = require("./FoilPackNo");
var _ForiegnExchange = require("./ForiegnExchange");
var _Formulation = require("./Formulation");
var _FormulationAudit = require("./FormulationAudit");
var _FormulationAuditComment = require("./FormulationAuditComment");
var _FormulationAuditReason = require("./FormulationAuditReason");
var _FormulationComment = require("./FormulationComment");
var _FormulationIngredient = require("./FormulationIngredient");
var _FormulationPrice = require("./FormulationPrice");
var _FormulationProcedureName = require("./FormulationProcedureName");
var _FormulationProcedureSteps = require("./FormulationProcedureSteps");
var _FormulationProcedures = require("./FormulationProcedures");
var _FormulationToInternetTags = require("./FormulationToInternetTags");
var _FormulationToSOP = require("./FormulationToSOP");
var _GlobalToTaxType = require("./GlobalToTaxType");
var _HIPAnswerToPersonAudit = require("./HIPAnswerToPersonAudit");
var _HIPForm = require("./HIPForm");
var _HIPSession = require("./HIPSession");
var _HIPStatusAnswer = require("./HIPStatusAnswer");
var _HIPStatusQuestion = require("./HIPStatusQuestion");
var _HLInMessages = require("./HLInMessages");
var _HLOutMessages = require("./HLOutMessages");
var _HOClubSale = require("./HOClubSale");
var _HOSettings = require("./HOSettings");
var _HOStockIDS = require("./HOStockIDS");
var _HOStockRetail = require("./HOStockRetail");
var _HeadOfficeGroups = require("./HeadOfficeGroups");
var _Hints = require("./Hints");
var _History = require("./History");
var _IntCondition = require("./IntCondition");
var _InternetSchemes = require("./InternetSchemes");
var _InternetTag = require("./InternetTag");
var _Intervention = require("./Intervention");
var _InterventionNew = require("./InterventionNew");
var _Invoice = require("./Invoice");
var _KioskScriptBasket = require("./KioskScriptBasket");
var _KioskScripts = require("./KioskScripts");
var _LOTSColor = require("./LOTSColor");
var _LOTSDrug = require("./LOTSDrug");
var _LTCAssessments = require("./LTCAssessments");
var _LabelsQue = require("./LabelsQue");
var _LocalHealthFacilities = require("./LocalHealthFacilities");
var _LookupAddress = require("./LookupAddress");
var _MMS = require("./MMS");
var _MMSGroup = require("./MMSGroup");
var _ManagementPlans = require("./ManagementPlans");
var _MenuUsage = require("./MenuUsage");
var _Mixture = require("./Mixture");
var _MultiDrug = require("./MultiDrug");
var _MultiHeaderCode = require("./MultiHeaderCode");
var _MultiHistory = require("./MultiHistory");
var _MultiSpecReg = require("./MultiSpecReg");
var _MultiStock = require("./MultiStock");
var _MultiStoreRego = require("./MultiStoreRego");
var _NRTNum = require("./NRTNum");
var _NewCompanionSales = require("./NewCompanionSales");
var _NewFoil = require("./NewFoil");
var _NewFoilFreq = require("./NewFoilFreq");
var _NewFoilPack = require("./NewFoilPack");
var _Notes = require("./Notes");
var _OldCategory = require("./OldCategory");
var _OpeningHour = require("./OpeningHour");
var _Operations = require("./Operations");
var _Options = require("./Options");
var _OrderInvoice = require("./OrderInvoice");
var _OrderItemBatch = require("./OrderItemBatch");
var _OrderItemToScript = require("./OrderItemToScript");
var _OrderItems = require("./OrderItems");
var _OrderItemsHistory = require("./OrderItemsHistory");
var _OrderMessage = require("./OrderMessage");
var _OrderNote = require("./OrderNote");
var _Orders = require("./Orders");
var _OwingDispensed = require("./OwingDispensed");
var _POSComments = require("./POSComments");
var _POSExport = require("./POSExport");
var _PatientAuditComment = require("./PatientAuditComment");
var _PatientComment = require("./PatientComment");
var _Person = require("./Person");
var _PersonActionlevel = require("./PersonActionlevel");
var _PersonAudit = require("./PersonAudit");
var _PersonAuditReason = require("./PersonAuditReason");
var _PersonEthnicGroups = require("./PersonEthnicGroups");
var _PersonFiles = require("./PersonFiles");
var _PersonInternetSchemes = require("./PersonInternetSchemes");
var _PersonLTCStatus = require("./PersonLTCStatus");
var _PersonLoyaltyCards = require("./PersonLoyaltyCards");
var _PersonManagementPlanActions = require("./PersonManagementPlanActions");
var _PersonManagementPlanComments = require("./PersonManagementPlanComments");
var _PersonManagementPlanFactors = require("./PersonManagementPlanFactors");
var _PersonOnlinePaymentProviderCodes = require("./PersonOnlinePaymentProviderCodes");
var _PersonPromotionalConsent = require("./PersonPromotionalConsent");
var _PersonRegistrations = require("./PersonRegistrations");
var _PersonType = require("./PersonType");
var _PharmacyDepots = require("./PharmacyDepots");
var _PortalName = require("./PortalName");
var _PostCodes = require("./PostCodes");
var _PriceOptions = require("./PriceOptions");
var _PrintJobs = require("./PrintJobs");
var _PrintStickersLabels = require("./PrintStickersLabels");
var _ProductClass = require("./ProductClass");
var _ProductGroup = require("./ProductGroup");
var _ProgramLog = require("./ProgramLog");
var _PromotionalConsentTypes = require("./PromotionalConsentTypes");
var _Purpose = require("./Purpose");
var _RXAudit = require("./RXAudit");
var _RXAuditReason = require("./RXAuditReason");
var _ReposMsg = require("./ReposMsg");
var _RestHome = require("./RestHome");
var _ResthomeInternetSchemes = require("./ResthomeInternetSchemes");
var _Robot = require("./Robot");
var _Rounding = require("./Rounding");
var _RouteOfAdministration = require("./RouteOfAdministration");
var _RxAuditComment = require("./RxAuditComment");
var _SNOMEDReasonForPrescribing = require("./SNOMEDReasonForPrescribing");
var _SaleItem = require("./SaleItem");
var _SaleItemBatch = require("./SaleItemBatch");
var _SaleItemDeleted = require("./SaleItemDeleted");
var _SaleItemExtra = require("./SaleItemExtra");
var _SaleItemToTaxType = require("./SaleItemToTaxType");
var _SaleMessage = require("./SaleMessage");
var _SalePayment = require("./SalePayment");
var _SaleToOnlinePayment = require("./SaleToOnlinePayment");
var _SaleToTaxType = require("./SaleToTaxType");
var _Sales = require("./Sales");
var _SalesAudit = require("./SalesAudit");
var _SalesAuditComment = require("./SalesAuditComment");
var _SalesAuditReason = require("./SalesAuditReason");
var _Scale = require("./Scale");
var _Script = require("./Script");
var _ScriptClaimLine = require("./ScriptClaimLine");
var _ScriptComment = require("./ScriptComment");
var _ScriptContainerCount = require("./ScriptContainerCount");
var _ScriptExtra = require("./ScriptExtra");
var _ScriptHistory = require("./ScriptHistory");
var _ScriptPersonChanged = require("./ScriptPersonChanged");
var _ScriptToInternetTags = require("./ScriptToInternetTags");
var _ScriptToKioskScript = require("./ScriptToKioskScript");
var _ScriptToPrivateInsurance = require("./ScriptToPrivateInsurance");
var _ScriptToTaxType = require("./ScriptToTaxType");
var _ScriptTransmission = require("./ScriptTransmission");
var _ScriptTransmissionToTransmissionMessage = require("./ScriptTransmissionToTransmissionMessage");
var _ShelfLocation = require("./ShelfLocation");
var _SignalRMessage = require("./SignalRMessage");
var _SignalRSite = require("./SignalRSite");
var _Solvent = require("./Solvent");
var _SouthernCross = require("./SouthernCross");
var _Special = require("./Special");
var _SpecialHOGroups = require("./SpecialHOGroups");
var _SpecialItems = require("./SpecialItems");
var _SpecialStockIDS = require("./SpecialStockIDS");
var _Staff = require("./Staff");
var _StaffAudit = require("./StaffAudit");
var _StaffAuditComment = require("./StaffAuditComment");
var _StaffAuditReason = require("./StaffAuditReason");
var _StaffGroupToSOP = require("./StaffGroupToSOP");
var _StaffOptions = require("./StaffOptions");
var _StaffPasswordsUsed = require("./StaffPasswordsUsed");
var _StaffReadSOP = require("./StaffReadSOP");
var _StaffToStaffGroup = require("./StaffToStaffGroup");
var _StateName = require("./StateName");
var _Statement = require("./Statement");
var _StickersQue = require("./StickersQue");
var _Stock = require("./Stock");
var _StockAudit = require("./StockAudit");
var _StockAuditComment = require("./StockAuditComment");
var _StockAuditReason = require("./StockAuditReason");
var _StockBatch = require("./StockBatch");
var _StockClassificationType = require("./StockClassificationType");
var _StockClassificationTypeDetails = require("./StockClassificationTypeDetails");
var _StockForm = require("./StockForm");
var _StockIngredient = require("./StockIngredient");
var _StockLocation = require("./StockLocation");
var _StockShelfLocation = require("./StockShelfLocation");
var _StockTake = require("./StockTake");
var _StockTakeItems = require("./StockTakeItems");
var _StockToInternetTag = require("./StockToInternetTag");
var _StockToRobot = require("./StockToRobot");
var _StockToSOP = require("./StockToSOP");
var _StockToTaxType = require("./StockToTaxType");
var _Stockandhistory = require("./Stockandhistory");
var _StoreRego = require("./StoreRego");
var _Sundries = require("./Sundries");
var _SuperSIG = require("./SuperSIG");
var _SuppUD = require("./SuppUD");
var _Supplier = require("./Supplier");
var _SupplierComment = require("./SupplierComment");
var _SupplierSettings = require("./SupplierSettings");
var _Surcharge = require("./Surcharge");
var _SystemOptions = require("./SystemOptions");
var _TaxType = require("./TaxType");
var _TempDrug = require("./TempDrug");
var _TextMessageTemplate = require("./TextMessageTemplate");
var _TextMessages = require("./TextMessages");
var _TherapGroupToCondition = require("./TherapGroupToCondition");
var _Title = require("./Title");
var _TrackingFieldChange = require("./TrackingFieldChange");
var _TransitionPayment = require("./TransitionPayment");
var _TransitionPaymentType = require("./TransitionPaymentType");
var _TransmissionsForNoneScript = require("./TransmissionsForNoneScript");
var _URLS = require("./URLS");
var _VaccinationEncounter = require("./VaccinationEncounter");
var _VaccinationInfo = require("./VaccinationInfo");
var _VariableRepeats = require("./VariableRepeats");
var _Version = require("./Version");
var _VirtualPillBox = require("./VirtualPillBox");
var _VoucherType = require("./VoucherType");
var _WebLoginByPerson = require("./WebLoginByPerson");
var _XeroAccounts = require("./XeroAccounts");
var ___RefactorLog = require("./__RefactorLog");
var _ePayTracks = require("./ePayTracks");
var _eScriptCDA = require("./eScriptCDA");

function initModels(sequelize) {
  var Account = _Account(sequelize, DataTypes);
  var AccountAudit = _AccountAudit(sequelize, DataTypes);
  var AccountCategory = _AccountCategory(sequelize, DataTypes);
  var AccountClass = _AccountClass(sequelize, DataTypes);
  var Action = _Action(sequelize, DataTypes);
  var ActionInstance = _ActionInstance(sequelize, DataTypes);
  var AdditionalAddresses = _AdditionalAddresses(sequelize, DataTypes);
  var AdditionalContact = _AdditionalContact(sequelize, DataTypes);
  var AdditionalContactRelationShipType = _AdditionalContactRelationShipType(sequelize, DataTypes);
  var AdditionalInvoiceChargeTypes = _AdditionalInvoiceChargeTypes(sequelize, DataTypes);
  var AdditionalInvoiceCharges = _AdditionalInvoiceCharges(sequelize, DataTypes);
  var AdditionalNames = _AdditionalNames(sequelize, DataTypes);
  var AdditionalOrderInvoiceCharges = _AdditionalOrderInvoiceCharges(sequelize, DataTypes);
  var AdditionalOrderInvoiceItemsCharges = _AdditionalOrderInvoiceItemsCharges(sequelize, DataTypes);
  var AddressTypes = _AddressTypes(sequelize, DataTypes);
  var Allergy = _Allergy(sequelize, DataTypes);
  var AppointmentCategory = _AppointmentCategory(sequelize, DataTypes);
  var AppointmentLabel = _AppointmentLabel(sequelize, DataTypes);
  var AppointmentResource = _AppointmentResource(sequelize, DataTypes);
  var AppointmentStatus = _AppointmentStatus(sequelize, DataTypes);
  var Appointments = _Appointments(sequelize, DataTypes);
  var ArchiveRXAudit = _ArchiveRXAudit(sequelize, DataTypes);
  var ArchiveRXAuditReason = _ArchiveRXAuditReason(sequelize, DataTypes);
  var ArchiveRxAuditComment = _ArchiveRxAuditComment(sequelize, DataTypes);
  var ArchiveScriptTransmissionMessage = _ArchiveScriptTransmissionMessage(sequelize, DataTypes);
  var AusOptions = _AusOptions(sequelize, DataTypes);
  var Autonumber = _Autonumber(sequelize, DataTypes);
  var AvaliableCurrency = _AvaliableCurrency(sequelize, DataTypes);
  var Barcode = _Barcode(sequelize, DataTypes);
  var Batches = _Batches(sequelize, DataTypes);
  var BatchesAudit = _BatchesAudit(sequelize, DataTypes);
  var BatchesAuditComment = _BatchesAuditComment(sequelize, DataTypes);
  var Branch = _Branch(sequelize, DataTypes);
  var BranchBanners = _BranchBanners(sequelize, DataTypes);
  var BranchData = _BranchData(sequelize, DataTypes);
  var BranchExportDate = _BranchExportDate(sequelize, DataTypes);
  var BranchRegions = _BranchRegions(sequelize, DataTypes);
  var BranchSalesData = _BranchSalesData(sequelize, DataTypes);
  var BranchVPN = _BranchVPN(sequelize, DataTypes);
  var Cards = _Cards(sequelize, DataTypes);
  var Category = _Category(sequelize, DataTypes);
  var ClaimResponseItem = _ClaimResponseItem(sequelize, DataTypes);
  var ClaimToScriptAdditional = _ClaimToScriptAdditional(sequelize, DataTypes);
  var Club = _Club(sequelize, DataTypes);
  var ClubMember = _ClubMember(sequelize, DataTypes);
  var ClubPointsAdjustment = _ClubPointsAdjustment(sequelize, DataTypes);
  var ClubPointsAdjustmentReason = _ClubPointsAdjustmentReason(sequelize, DataTypes);
  var ClubStock = _ClubStock(sequelize, DataTypes);
  var CompanionSaleItem = _CompanionSaleItem(sequelize, DataTypes);
  var CompanionSaleItemDetails = _CompanionSaleItemDetails(sequelize, DataTypes);
  var CompanionSaleLinks = _CompanionSaleLinks(sequelize, DataTypes);
  var CompanionSales = _CompanionSales(sequelize, DataTypes);
  var CompanionScheme = _CompanionScheme(sequelize, DataTypes);
  var CompoundPriceOptions = _CompoundPriceOptions(sequelize, DataTypes);
  var CompoundSheetDetail = _CompoundSheetDetail(sequelize, DataTypes);
  var CompoundStats = _CompoundStats(sequelize, DataTypes);
  var CompoundedScriptIngredientBatches = _CompoundedScriptIngredientBatches(sequelize, DataTypes);
  var Computer = _Computer(sequelize, DataTypes);
  var ComputerOperations = _ComputerOperations(sequelize, DataTypes);
  var ComputerScales = _ComputerScales(sequelize, DataTypes);
  var Conditions = _Conditions(sequelize, DataTypes);
  var ContactTypes = _ContactTypes(sequelize, DataTypes);
  var Contract = _Contract(sequelize, DataTypes);
  var ConvSOH = _ConvSOH(sequelize, DataTypes);
  var CreditorFile = _CreditorFile(sequelize, DataTypes);
  var CustomLabel = _CustomLabel(sequelize, DataTypes);
  var DDBook = _DDBook(sequelize, DataTypes);
  var DHBFiles = _DHBFiles(sequelize, DataTypes);
  var DHBPriceOptions = _DHBPriceOptions(sequelize, DataTypes);
  var Debit = _Debit(sequelize, DataTypes);
  var Delivery = _Delivery(sequelize, DataTypes);
  var DeliveryComment = _DeliveryComment(sequelize, DataTypes);
  var DeliveryFees = _DeliveryFees(sequelize, DataTypes);
  var DeliveryPackaging = _DeliveryPackaging(sequelize, DataTypes);
  var DeliveryProvider = _DeliveryProvider(sequelize, DataTypes);
  var DeliveryStatus = _DeliveryStatus(sequelize, DataTypes);
  var DispExport = _DispExport(sequelize, DataTypes);
  var Doctor = _Doctor(sequelize, DataTypes);
  var DoctorAuditComment = _DoctorAuditComment(sequelize, DataTypes);
  var DoctorAuditReason = _DoctorAuditReason(sequelize, DataTypes);
  var DoctorTypes = _DoctorTypes(sequelize, DataTypes);
  var DoseFrequency = _DoseFrequency(sequelize, DataTypes);
  var Drug = _Drug(sequelize, DataTypes);
  var DrugUpdateIDS = _DrugUpdateIDS(sequelize, DataTypes);
  var EftposUnits = _EftposUnits(sequelize, DataTypes);
  var EmailTemplate = _EmailTemplate(sequelize, DataTypes);
  var Emails = _Emails(sequelize, DataTypes);
  var EndOfDay = _EndOfDay(sequelize, DataTypes);
  var EndOfDayCurrency = _EndOfDayCurrency(sequelize, DataTypes);
  var Epay = _Epay(sequelize, DataTypes);
  var Equivalent = _Equivalent(sequelize, DataTypes);
  var EthnicGroup = _EthnicGroup(sequelize, DataTypes);
  var EventStatus = _EventStatus(sequelize, DataTypes);
  var ExternalSNetDetails = _ExternalSNetDetails(sequelize, DataTypes);
  var ExtraPaymentType = _ExtraPaymentType(sequelize, DataTypes);
  var EziblistAdherance = _EziblistAdherance(sequelize, DataTypes);
  var EziblistDevices = _EziblistDevices(sequelize, DataTypes);
  var Failed = _Failed(sequelize, DataTypes);
  var Film = _Film(sequelize, DataTypes);
  var FilmDetails = _FilmDetails(sequelize, DataTypes);
  var FilmProcess = _FilmProcess(sequelize, DataTypes);
  var FilmService = _FilmService(sequelize, DataTypes);
  var Foil = _Foil(sequelize, DataTypes);
  var FoilPack = _FoilPack(sequelize, DataTypes);
  var FoilPackNo = _FoilPackNo(sequelize, DataTypes);
  var ForiegnExchange = _ForiegnExchange(sequelize, DataTypes);
  var Formulation = _Formulation(sequelize, DataTypes);
  var FormulationAudit = _FormulationAudit(sequelize, DataTypes);
  var FormulationAuditComment = _FormulationAuditComment(sequelize, DataTypes);
  var FormulationAuditReason = _FormulationAuditReason(sequelize, DataTypes);
  var FormulationComment = _FormulationComment(sequelize, DataTypes);
  var FormulationIngredient = _FormulationIngredient(sequelize, DataTypes);
  var FormulationPrice = _FormulationPrice(sequelize, DataTypes);
  var FormulationProcedureName = _FormulationProcedureName(sequelize, DataTypes);
  var FormulationProcedureSteps = _FormulationProcedureSteps(sequelize, DataTypes);
  var FormulationProcedures = _FormulationProcedures(sequelize, DataTypes);
  var FormulationToInternetTags = _FormulationToInternetTags(sequelize, DataTypes);
  var FormulationToSOP = _FormulationToSOP(sequelize, DataTypes);
  var GlobalToTaxType = _GlobalToTaxType(sequelize, DataTypes);
  var HIPAnswerToPersonAudit = _HIPAnswerToPersonAudit(sequelize, DataTypes);
  var HIPForm = _HIPForm(sequelize, DataTypes);
  var HIPSession = _HIPSession(sequelize, DataTypes);
  var HIPStatusAnswer = _HIPStatusAnswer(sequelize, DataTypes);
  var HIPStatusQuestion = _HIPStatusQuestion(sequelize, DataTypes);
  var HLInMessages = _HLInMessages(sequelize, DataTypes);
  var HLOutMessages = _HLOutMessages(sequelize, DataTypes);
  var HOClubSale = _HOClubSale(sequelize, DataTypes);
  var HOSettings = _HOSettings(sequelize, DataTypes);
  var HOStockIDS = _HOStockIDS(sequelize, DataTypes);
  var HOStockRetail = _HOStockRetail(sequelize, DataTypes);
  var HeadOfficeGroups = _HeadOfficeGroups(sequelize, DataTypes);
  var Hints = _Hints(sequelize, DataTypes);
  var History = _History(sequelize, DataTypes);
  var IntCondition = _IntCondition(sequelize, DataTypes);
  var InternetSchemes = _InternetSchemes(sequelize, DataTypes);
  var InternetTag = _InternetTag(sequelize, DataTypes);
  var Intervention = _Intervention(sequelize, DataTypes);
  var InterventionNew = _InterventionNew(sequelize, DataTypes);
  var Invoice = _Invoice(sequelize, DataTypes);
  var KioskScriptBasket = _KioskScriptBasket(sequelize, DataTypes);
  var KioskScripts = _KioskScripts(sequelize, DataTypes);
  var LOTSColor = _LOTSColor(sequelize, DataTypes);
  var LOTSDrug = _LOTSDrug(sequelize, DataTypes);
  var LTCAssessments = _LTCAssessments(sequelize, DataTypes);
  var LabelsQue = _LabelsQue(sequelize, DataTypes);
  var LocalHealthFacilities = _LocalHealthFacilities(sequelize, DataTypes);
  var LookupAddress = _LookupAddress(sequelize, DataTypes);
  var MMS = _MMS(sequelize, DataTypes);
  var MMSGroup = _MMSGroup(sequelize, DataTypes);
  var ManagementPlans = _ManagementPlans(sequelize, DataTypes);
  var MenuUsage = _MenuUsage(sequelize, DataTypes);
  var Mixture = _Mixture(sequelize, DataTypes);
  var MultiDrug = _MultiDrug(sequelize, DataTypes);
  var MultiHeaderCode = _MultiHeaderCode(sequelize, DataTypes);
  var MultiHistory = _MultiHistory(sequelize, DataTypes);
  var MultiSpecReg = _MultiSpecReg(sequelize, DataTypes);
  var MultiStock = _MultiStock(sequelize, DataTypes);
  var MultiStoreRego = _MultiStoreRego(sequelize, DataTypes);
  var NRTNum = _NRTNum(sequelize, DataTypes);
  var NewCompanionSales = _NewCompanionSales(sequelize, DataTypes);
  var NewFoil = _NewFoil(sequelize, DataTypes);
  var NewFoilFreq = _NewFoilFreq(sequelize, DataTypes);
  var NewFoilPack = _NewFoilPack(sequelize, DataTypes);
  var Notes = _Notes(sequelize, DataTypes);
  var OldCategory = _OldCategory(sequelize, DataTypes);
  var OpeningHour = _OpeningHour(sequelize, DataTypes);
  var Operations = _Operations(sequelize, DataTypes);
  var Options = _Options(sequelize, DataTypes);
  var OrderInvoice = _OrderInvoice(sequelize, DataTypes);
  var OrderItemBatch = _OrderItemBatch(sequelize, DataTypes);
  var OrderItemToScript = _OrderItemToScript(sequelize, DataTypes);
  var OrderItems = _OrderItems(sequelize, DataTypes);
  var OrderItemsHistory = _OrderItemsHistory(sequelize, DataTypes);
  var OrderMessage = _OrderMessage(sequelize, DataTypes);
  var OrderNote = _OrderNote(sequelize, DataTypes);
  var Orders = _Orders(sequelize, DataTypes);
  var OwingDispensed = _OwingDispensed(sequelize, DataTypes);
  var POSComments = _POSComments(sequelize, DataTypes);
  var POSExport = _POSExport(sequelize, DataTypes);
  var PatientAuditComment = _PatientAuditComment(sequelize, DataTypes);
  var PatientComment = _PatientComment(sequelize, DataTypes);
  var Person = _Person(sequelize, DataTypes);
  var PersonActionlevel = _PersonActionlevel(sequelize, DataTypes);
  var PersonAudit = _PersonAudit(sequelize, DataTypes);
  var PersonAuditReason = _PersonAuditReason(sequelize, DataTypes);
  var PersonEthnicGroups = _PersonEthnicGroups(sequelize, DataTypes);
  var PersonFiles = _PersonFiles(sequelize, DataTypes);
  var PersonInternetSchemes = _PersonInternetSchemes(sequelize, DataTypes);
  var PersonLTCStatus = _PersonLTCStatus(sequelize, DataTypes);
  var PersonLoyaltyCards = _PersonLoyaltyCards(sequelize, DataTypes);
  var PersonManagementPlanActions = _PersonManagementPlanActions(sequelize, DataTypes);
  var PersonManagementPlanComments = _PersonManagementPlanComments(sequelize, DataTypes);
  var PersonManagementPlanFactors = _PersonManagementPlanFactors(sequelize, DataTypes);
  var PersonOnlinePaymentProviderCodes = _PersonOnlinePaymentProviderCodes(sequelize, DataTypes);
  var PersonPromotionalConsent = _PersonPromotionalConsent(sequelize, DataTypes);
  var PersonRegistrations = _PersonRegistrations(sequelize, DataTypes);
  var PersonType = _PersonType(sequelize, DataTypes);
  var PharmacyDepots = _PharmacyDepots(sequelize, DataTypes);
  var PortalName = _PortalName(sequelize, DataTypes);
  var PostCodes = _PostCodes(sequelize, DataTypes);
  var PriceOptions = _PriceOptions(sequelize, DataTypes);
  var PrintJobs = _PrintJobs(sequelize, DataTypes);
  var PrintStickersLabels = _PrintStickersLabels(sequelize, DataTypes);
  var ProductClass = _ProductClass(sequelize, DataTypes);
  var ProductGroup = _ProductGroup(sequelize, DataTypes);
  var ProgramLog = _ProgramLog(sequelize, DataTypes);
  var PromotionalConsentTypes = _PromotionalConsentTypes(sequelize, DataTypes);
  var Purpose = _Purpose(sequelize, DataTypes);
  var RXAudit = _RXAudit(sequelize, DataTypes);
  var RXAuditReason = _RXAuditReason(sequelize, DataTypes);
  var ReposMsg = _ReposMsg(sequelize, DataTypes);
  var RestHome = _RestHome(sequelize, DataTypes);
  var ResthomeInternetSchemes = _ResthomeInternetSchemes(sequelize, DataTypes);
  var Robot = _Robot(sequelize, DataTypes);
  var Rounding = _Rounding(sequelize, DataTypes);
  var RouteOfAdministration = _RouteOfAdministration(sequelize, DataTypes);
  var RxAuditComment = _RxAuditComment(sequelize, DataTypes);
  var SNOMEDReasonForPrescribing = _SNOMEDReasonForPrescribing(sequelize, DataTypes);
  var SaleItem = _SaleItem(sequelize, DataTypes);
  var SaleItemBatch = _SaleItemBatch(sequelize, DataTypes);
  var SaleItemDeleted = _SaleItemDeleted(sequelize, DataTypes);
  var SaleItemExtra = _SaleItemExtra(sequelize, DataTypes);
  var SaleItemToTaxType = _SaleItemToTaxType(sequelize, DataTypes);
  var SaleMessage = _SaleMessage(sequelize, DataTypes);
  var SalePayment = _SalePayment(sequelize, DataTypes);
  var SaleToOnlinePayment = _SaleToOnlinePayment(sequelize, DataTypes);
  var SaleToTaxType = _SaleToTaxType(sequelize, DataTypes);
  var Sales = _Sales(sequelize, DataTypes);
  var SalesAudit = _SalesAudit(sequelize, DataTypes);
  var SalesAuditComment = _SalesAuditComment(sequelize, DataTypes);
  var SalesAuditReason = _SalesAuditReason(sequelize, DataTypes);
  var Scale = _Scale(sequelize, DataTypes);
  var Script = _Script(sequelize, DataTypes);
  var ScriptClaimLine = _ScriptClaimLine(sequelize, DataTypes);
  var ScriptComment = _ScriptComment(sequelize, DataTypes);
  var ScriptContainerCount = _ScriptContainerCount(sequelize, DataTypes);
  var ScriptExtra = _ScriptExtra(sequelize, DataTypes);
  var ScriptHistory = _ScriptHistory(sequelize, DataTypes);
  var ScriptPersonChanged = _ScriptPersonChanged(sequelize, DataTypes);
  var ScriptToInternetTags = _ScriptToInternetTags(sequelize, DataTypes);
  var ScriptToKioskScript = _ScriptToKioskScript(sequelize, DataTypes);
  var ScriptToPrivateInsurance = _ScriptToPrivateInsurance(sequelize, DataTypes);
  var ScriptToTaxType = _ScriptToTaxType(sequelize, DataTypes);
  var ScriptTransmission = _ScriptTransmission(sequelize, DataTypes);
  var ScriptTransmissionToTransmissionMessage = _ScriptTransmissionToTransmissionMessage(sequelize, DataTypes);
  var ShelfLocation = _ShelfLocation(sequelize, DataTypes);
  var SignalRMessage = _SignalRMessage(sequelize, DataTypes);
  var SignalRSite = _SignalRSite(sequelize, DataTypes);
  var Solvent = _Solvent(sequelize, DataTypes);
  var SouthernCross = _SouthernCross(sequelize, DataTypes);
  var Special = _Special(sequelize, DataTypes);
  var SpecialHOGroups = _SpecialHOGroups(sequelize, DataTypes);
  var SpecialItems = _SpecialItems(sequelize, DataTypes);
  var SpecialStockIDS = _SpecialStockIDS(sequelize, DataTypes);
  var Staff = _Staff(sequelize, DataTypes);
  var StaffAudit = _StaffAudit(sequelize, DataTypes);
  var StaffAuditComment = _StaffAuditComment(sequelize, DataTypes);
  var StaffAuditReason = _StaffAuditReason(sequelize, DataTypes);
  var StaffGroupToSOP = _StaffGroupToSOP(sequelize, DataTypes);
  var StaffOptions = _StaffOptions(sequelize, DataTypes);
  var StaffPasswordsUsed = _StaffPasswordsUsed(sequelize, DataTypes);
  var StaffReadSOP = _StaffReadSOP(sequelize, DataTypes);
  var StaffToStaffGroup = _StaffToStaffGroup(sequelize, DataTypes);
  var StateName = _StateName(sequelize, DataTypes);
  var Statement = _Statement(sequelize, DataTypes);
  var StickersQue = _StickersQue(sequelize, DataTypes);
  var Stock = _Stock(sequelize, DataTypes);
  var StockAudit = _StockAudit(sequelize, DataTypes);
  var StockAuditComment = _StockAuditComment(sequelize, DataTypes);
  var StockAuditReason = _StockAuditReason(sequelize, DataTypes);
  var StockBatch = _StockBatch(sequelize, DataTypes);
  var StockClassificationType = _StockClassificationType(sequelize, DataTypes);
  var StockClassificationTypeDetails = _StockClassificationTypeDetails(sequelize, DataTypes);
  var StockForm = _StockForm(sequelize, DataTypes);
  var StockIngredient = _StockIngredient(sequelize, DataTypes);
  var StockLocation = _StockLocation(sequelize, DataTypes);
  var StockShelfLocation = _StockShelfLocation(sequelize, DataTypes);
  var StockTake = _StockTake(sequelize, DataTypes);
  var StockTakeItems = _StockTakeItems(sequelize, DataTypes);
  var StockToInternetTag = _StockToInternetTag(sequelize, DataTypes);
  var StockToRobot = _StockToRobot(sequelize, DataTypes);
  var StockToSOP = _StockToSOP(sequelize, DataTypes);
  var StockToTaxType = _StockToTaxType(sequelize, DataTypes);
  var Stockandhistory = _Stockandhistory(sequelize, DataTypes);
  var StoreRego = _StoreRego(sequelize, DataTypes);
  var Sundries = _Sundries(sequelize, DataTypes);
  var SuperSIG = _SuperSIG(sequelize, DataTypes);
  var SuppUD = _SuppUD(sequelize, DataTypes);
  var Supplier = _Supplier(sequelize, DataTypes);
  var SupplierComment = _SupplierComment(sequelize, DataTypes);
  var SupplierSettings = _SupplierSettings(sequelize, DataTypes);
  var Surcharge = _Surcharge(sequelize, DataTypes);
  var SystemOptions = _SystemOptions(sequelize, DataTypes);
  var TaxType = _TaxType(sequelize, DataTypes);
  var TempDrug = _TempDrug(sequelize, DataTypes);
  var TextMessageTemplate = _TextMessageTemplate(sequelize, DataTypes);
  var TextMessages = _TextMessages(sequelize, DataTypes);
  var TherapGroupToCondition = _TherapGroupToCondition(sequelize, DataTypes);
  var Title = _Title(sequelize, DataTypes);
  var TrackingFieldChange = _TrackingFieldChange(sequelize, DataTypes);
  var TransitionPayment = _TransitionPayment(sequelize, DataTypes);
  var TransitionPaymentType = _TransitionPaymentType(sequelize, DataTypes);
  var TransmissionsForNoneScript = _TransmissionsForNoneScript(sequelize, DataTypes);
  var URLS = _URLS(sequelize, DataTypes);
  var VaccinationEncounter = _VaccinationEncounter(sequelize, DataTypes);
  var VaccinationInfo = _VaccinationInfo(sequelize, DataTypes);
  var VariableRepeats = _VariableRepeats(sequelize, DataTypes);
  var Version = _Version(sequelize, DataTypes);
  var VirtualPillBox = _VirtualPillBox(sequelize, DataTypes);
  var VoucherType = _VoucherType(sequelize, DataTypes);
  var WebLoginByPerson = _WebLoginByPerson(sequelize, DataTypes);
  var XeroAccounts = _XeroAccounts(sequelize, DataTypes);
  var __RefactorLog = ___RefactorLog(sequelize, DataTypes);
  var ePayTracks = _ePayTracks(sequelize, DataTypes);
  var eScriptCDA = _eScriptCDA(sequelize, DataTypes);

  InternetSchemes.belongsToMany(RestHome, { as: 'risResthomeID_RestHomes', through: ResthomeInternetSchemes, foreignKey: "risInternetSchemeID", otherKey: "risResthomeID" });
  RestHome.belongsToMany(InternetSchemes, { as: 'risInternetSchemeID_InternetSchemes', through: ResthomeInternetSchemes, foreignKey: "risResthomeID", otherKey: "risInternetSchemeID" });
  SOPS.belongsToMany(Staff, { as: 'srsStaffID_Staffs', through: StaffReadSOP, foreignKey: "srsSOPID", otherKey: "srsStaffID" });
  Script.belongsToMany(Stock, { as: 'StockID_Stock_PermAllStockCardsForScripts', through: PermAllStockCardsForScript, foreignKey: "ScriptID", otherKey: "StockID" });
  Special.belongsToMany(Stock, { as: 'StockID_Stock_SpecialItems', through: SpecialItems, foreignKey: "SpecialID", otherKey: "StockID" });
  Staff.belongsToMany(SOPS, { as: 'srsSOPID_SOPs', through: StaffReadSOP, foreignKey: "srsStaffID", otherKey: "srsSOPID" });
  Stock.belongsToMany(Script, { as: 'ScriptID_Scripts', through: PermAllStockCardsForScript, foreignKey: "StockID", otherKey: "ScriptID" });
  Stock.belongsToMany(Special, { as: 'SpecialID_Specials', through: SpecialItems, foreignKey: "StockID", otherKey: "SpecialID" });
  Stock.belongsToMany(Supplier, { as: 'SupplierID_Suppliers', through: Partcode, foreignKey: "StockID", otherKey: "SupplierID" });
  Supplier.belongsToMany(Stock, { as: 'StockID_Stocks', through: Partcode, foreignKey: "SupplierID", otherKey: "StockID" });
  AdditionalAddresses.belongsTo(Account, { as: "aaAccount", foreignKey: "aaAccountID"});
  Account.hasMany(AdditionalAddresses, { as: "AdditionalAddresses", foreignKey: "aaAccountID"});
  AdditionalContact.belongsTo(Account, { as: "apAccount", foreignKey: "apAccountID"});
  Account.hasMany(AdditionalContact, { as: "AdditionalContacts", foreignKey: "apAccountID"});
  Emails.belongsTo(Account, { as: "emAccount", foreignKey: "emAccountID"});
  Account.hasMany(Emails, { as: "Emails", foreignKey: "emAccountID"});
  Person.belongsTo(Account, { as: "Account_Account", foreignKey: "AccountID"});
  Account.hasMany(Person, { as: "People", foreignKey: "AccountID"});
  PharmacyDepots.belongsTo(Account, { as: "pdAccount", foreignKey: "pdAccountID"});
  Account.hasMany(PharmacyDepots, { as: "PharmacyDepots", foreignKey: "pdAccountID"});
  RestHome.belongsTo(Account, { as: "Account", foreignKey: "AccountID"});
  Account.hasMany(RestHome, { as: "RestHomes", foreignKey: "AccountID"});
  Script.belongsTo(Account, { as: "scrAccount", foreignKey: "scrAccountID"});
  Account.hasMany(Script, { as: "Scripts", foreignKey: "scrAccountID"});
  ScriptAdditionalPayments.belongsTo(Account, { as: "sapAccount", foreignKey: "sapAccountID"});
  Account.hasMany(ScriptAdditionalPayments, { as: "ScriptAdditionalPayments", foreignKey: "sapAccountID"});
  ScriptSundries.belongsTo(Account, { as: "scsAccount", foreignKey: "scsAccountID"});
  Account.hasMany(ScriptSundries, { as: "ScriptSundries", foreignKey: "scsAccountID"});
  ScriptToPrivateInsurance.belongsTo(Account, { as: "stpAccountToChargeTo", foreignKey: "stpAccountToChargeToID"});
  Account.hasMany(ScriptToPrivateInsurance, { as: "ScriptToPrivateInsurances", foreignKey: "stpAccountToChargeToID"});
  Statement.belongsTo(Account, { as: "Account", foreignKey: "AccountID"});
  Account.hasMany(Statement, { as: "Statements", foreignKey: "AccountID"});
  Sundries.belongsTo(Account, { as: "sunAccount", foreignKey: "sunAccountID"});
  Account.hasMany(Sundries, { as: "Sundries", foreignKey: "sunAccountID"});
  Supplier.belongsTo(Account, { as: "supAccount", foreignKey: "supAccountID"});
  Account.hasMany(Supplier, { as: "Suppliers", foreignKey: "supAccountID"});
  TextMessages.belongsTo(Account, { as: "tmAccount", foreignKey: "tmAccountID"});
  Account.hasMany(TextMessages, { as: "TextMessages", foreignKey: "tmAccountID"});
  Account.belongsTo(AccountCategory, { as: "AccountCategory", foreignKey: "AccountCategoryID"});
  AccountCategory.hasMany(Account, { as: "Accounts", foreignKey: "AccountCategoryID"});
  Account.belongsTo(AccountClass, { as: "AccountClass", foreignKey: "AccountClassID"});
  AccountClass.hasMany(Account, { as: "Accounts", foreignKey: "AccountClassID"});
  Delivery.belongsTo(AdditionalAddresses, { as: "dsAdditionalAddress", foreignKey: "dsAdditionalAddressID"});
  AdditionalAddresses.hasMany(Delivery, { as: "Deliveries", foreignKey: "dsAdditionalAddressID"});
  KioskScripts.belongsTo(AdditionalAddresses, { as: "ksAdditionalAddress", foreignKey: "ksAdditionalAddressID"});
  AdditionalAddresses.hasMany(KioskScripts, { as: "KioskScripts", foreignKey: "ksAdditionalAddressID"});
  Script.belongsTo(AdditionalAddresses, { as: "scrAdditionalAddress", foreignKey: "scrAdditionalAddressID"});
  AdditionalAddresses.hasMany(Script, { as: "Scripts", foreignKey: "scrAdditionalAddressID"});
  AdditionalAddresses.belongsTo(AdditionalContact, { as: "aaAdditionalContact", foreignKey: "aaAdditionalContactID"});
  AdditionalContact.hasMany(AdditionalAddresses, { as: "AdditionalAddresses", foreignKey: "aaAdditionalContactID"});
  PersonToPortalLogin.belongsTo(AdditionalContact, { as: "plgAdditionalContact", foreignKey: "plgAdditionalContactID"});
  AdditionalContact.hasMany(PersonToPortalLogin, { as: "PersonToPortalLogins", foreignKey: "plgAdditionalContactID"});
  Script.belongsTo(AdditionalContact, { as: "scrAdditionalContact", foreignKey: "scrAdditionalContactID"});
  AdditionalContact.hasMany(Script, { as: "Scripts", foreignKey: "scrAdditionalContactID"});
  Script.belongsTo(AdditionalContact, { as: "scrEmailContact", foreignKey: "scrEmailContactID"});
  AdditionalContact.hasMany(Script, { as: "scrEmailContact_Scripts", foreignKey: "scrEmailContactID"});
  Script.belongsTo(AdditionalContact, { as: "scrMobileContact", foreignKey: "scrMobileContactID"});
  AdditionalContact.hasMany(Script, { as: "scrMobileContact_Scripts", foreignKey: "scrMobileContactID"});
  AdditionalContact.belongsTo(AdditionalContactRelationShipType, { as: "acRelationShipType", foreignKey: "acRelationShipTypeID"});
  AdditionalContactRelationShipType.hasMany(AdditionalContact, { as: "AdditionalContacts", foreignKey: "acRelationShipTypeID"});
  AdditionalAddresses.belongsTo(AddressTypes, { as: "aaAddressesType", foreignKey: "aaAddressesTypesID"});
  AddressTypes.hasMany(AdditionalAddresses, { as: "AdditionalAddresses", foreignKey: "aaAddressesTypesID"});
  Person.belongsTo(AddressTypes, { as: "perAddressType_AddressType", foreignKey: "perAddressType"});
  AddressTypes.hasMany(Person, { as: "People", foreignKey: "perAddressType"});
  BranchData.belongsTo(Branch, { as: "Branch", foreignKey: "BranchID"});
  Branch.hasMany(BranchData, { as: "BranchData", foreignKey: "BranchID"});
  HIPSession.belongsTo(Branch, { as: "HIPSBranch", foreignKey: "HIPSBranchID"});
  Branch.hasMany(HIPSession, { as: "HIPSessions", foreignKey: "HIPSBranchID"});
  Branch.belongsTo(BranchBanners, { as: "Banner", foreignKey: "BannerID"});
  BranchBanners.hasMany(Branch, { as: "Branches", foreignKey: "BannerID"});
  BranchData.belongsTo(BranchExportDate, { as: "BranchExportDate", foreignKey: "BranchExportDateID"});
  BranchExportDate.hasMany(BranchData, { as: "BranchData", foreignKey: "BranchExportDateID"});
  Branch.belongsTo(BranchRegions, { as: "Region", foreignKey: "RegionID"});
  BranchRegions.hasMany(Branch, { as: "Branches", foreignKey: "RegionID"});
  Supplier.belongsTo(BranchVPN, { as: "supBranchVPN", foreignKey: "supBranchVPNID"});
  BranchVPN.hasMany(Supplier, { as: "Suppliers", foreignKey: "supBranchVPNID"});
  Person.belongsTo(Category, { as: "Category", foreignKey: "CategoryID"});
  Category.hasMany(Person, { as: "People", foreignKey: "CategoryID"});
  Script.belongsTo(Category, { as: "PatientCategory", foreignKey: "PatientCategoryID"});
  Category.hasMany(Script, { as: "Scripts", foreignKey: "PatientCategoryID"});
  Script.belongsTo(ChemNum, { as: "ChemNum", foreignKey: "ChemNumID"});
  ChemNum.hasMany(Script, { as: "Scripts", foreignKey: "ChemNumID"});
  ScriptToPrivateInsurance.belongsTo(ChemNum, { as: "stpChemNumber", foreignKey: "stpChemNumberID"});
  ChemNum.hasMany(ScriptToPrivateInsurance, { as: "ScriptToPrivateInsurances", foreignKey: "stpChemNumberID"});
  ClaimResponse.belongsTo(Claim, { as: "crClaim", foreignKey: "crClaimID"});
  Claim.hasMany(ClaimResponse, { as: "ClaimResponses", foreignKey: "crClaimID"});
  ClaimToScriptAdditional.belongsTo(Claim, { as: "csaClaim", foreignKey: "csaClaimID"});
  Claim.hasMany(ClaimToScriptAdditional, { as: "ClaimToScriptAdditionals", foreignKey: "csaClaimID"});
  Failed.belongsTo(Claim, { as: "Claim", foreignKey: "ClaimID"});
  Claim.hasMany(Failed, { as: "Faileds", foreignKey: "ClaimID"});
  OwingDispensed.belongsTo(Claim, { as: "odClaim", foreignKey: "odClaimID"});
  Claim.hasMany(OwingDispensed, { as: "OwingDispenseds", foreignKey: "odClaimID"});
  Script.belongsTo(Claim, { as: "Claim", foreignKey: "ClaimID"});
  Claim.hasMany(Script, { as: "Scripts", foreignKey: "ClaimID"});
  Script.belongsTo(Claim, { as: "OriginalClaim", foreignKey: "OriginalClaimID"});
  Claim.hasMany(Script, { as: "OriginalClaim_Scripts", foreignKey: "OriginalClaimID"});
  ScriptAdditionalPayments.belongsTo(Claim, { as: "sapClaim", foreignKey: "sapClaimID"});
  Claim.hasMany(ScriptAdditionalPayments, { as: "ScriptAdditionalPayments", foreignKey: "sapClaimID"});
  ScriptClaimLine.belongsTo(Claim, { as: "sclClaim", foreignKey: "sclClaimID"});
  Claim.hasMany(ScriptClaimLine, { as: "ScriptClaimLines", foreignKey: "sclClaimID"});
  Action.belongsTo(Club, { as: "Club", foreignKey: "ClubID"});
  Club.hasMany(Action, { as: "Actions", foreignKey: "ClubID"});
  ActionInstance.belongsTo(Club, { as: "Club", foreignKey: "ClubID"});
  Club.hasMany(ActionInstance, { as: "ActionInstances", foreignKey: "ClubID"});
  ClubPointsAdjustment.belongsTo(Club, { as: "cpaClub", foreignKey: "cpaClubId"});
  Club.hasMany(ClubPointsAdjustment, { as: "ClubPointsAdjustments", foreignKey: "cpaClubId"});
  HOClubSale.belongsTo(Club, { as: "Club", foreignKey: "ClubID"});
  Club.hasMany(HOClubSale, { as: "HOClubSales", foreignKey: "ClubID"});
  SaleItem.belongsTo(Club, { as: "Club", foreignKey: "ClubID"});
  Club.hasMany(SaleItem, { as: "SaleItems", foreignKey: "ClubID"});
  SalesLoyaltyCard.belongsTo(Club, { as: "Club", foreignKey: "ClubID"});
  Club.hasMany(SalesLoyaltyCard, { as: "SalesLoyaltyCards", foreignKey: "ClubID"});
  SpecialItems.belongsTo(Club, { as: "siClub", foreignKey: "siClubID"});
  Club.hasMany(SpecialItems, { as: "SpecialItems", foreignKey: "siClubID"});
  Stock.belongsTo(Club, { as: "Club", foreignKey: "ClubID"});
  Club.hasMany(Stock, { as: "Stocks", foreignKey: "ClubID"});
  SuppUD.belongsTo(Club, { as: "DefaultClub", foreignKey: "DefaultClubID"});
  Club.hasMany(SuppUD, { as: "SuppUDs", foreignKey: "DefaultClubID"});
  ClubPointsAdjustment.belongsTo(ClubPointsAdjustmentReason, { as: "cpaClubPointsAdjustmentReason", foreignKey: "cpaClubPointsAdjustmentReasonID"});
  ClubPointsAdjustmentReason.hasMany(ClubPointsAdjustment, { as: "ClubPointsAdjustments", foreignKey: "cpaClubPointsAdjustmentReasonID"});
  CompoundedScriptIngredient.belongsTo(CompoundPriceOptions, { as: "PriceOption", foreignKey: "PriceOptionID"});
  CompoundPriceOptions.hasMany(CompoundedScriptIngredient, { as: "CompoundedScriptIngredients", foreignKey: "PriceOptionID"});
  Formulation.belongsTo(CompoundPriceOptions, { as: "DefaultPriceOption", foreignKey: "DefaultPriceOptionID"});
  CompoundPriceOptions.hasMany(Formulation, { as: "Formulations", foreignKey: "DefaultPriceOptionID"});
  Script.belongsTo(CompoundPriceOptions, { as: "scrCompoundingPriceOption", foreignKey: "scrCompoundingPriceOptionID"});
  CompoundPriceOptions.hasMany(Script, { as: "Scripts", foreignKey: "scrCompoundingPriceOptionID"});
  CompoundedScriptIngredientBatches.belongsTo(CompoundedScriptIngredient, { as: "csiCompoundedScriptIngredient", foreignKey: "csiCompoundedScriptIngredientID"});
  CompoundedScriptIngredient.hasMany(CompoundedScriptIngredientBatches, { as: "CompoundedScriptIngredientBatches", foreignKey: "csiCompoundedScriptIngredientID"});
  ScriptClaimLine.belongsTo(CompoundedScriptIngredient, { as: "sclCompoundedScriptIngredient", foreignKey: "sclCompoundedScriptIngredientID"});
  CompoundedScriptIngredient.hasMany(ScriptClaimLine, { as: "ScriptClaimLines", foreignKey: "sclCompoundedScriptIngredientID"});
  Batches.belongsTo(Computer, { as: "batUnit", foreignKey: "batUnitID"});
  Computer.hasMany(Batches, { as: "Batches", foreignKey: "batUnitID"});
  ComputerOperations.belongsTo(Computer, { as: "rcComputer", foreignKey: "rcComputerID"});
  Computer.hasMany(ComputerOperations, { as: "ComputerOperations", foreignKey: "rcComputerID"});
  ComputerScales.belongsTo(Computer, { as: "csComputer", foreignKey: "csComputerID"});
  Computer.hasMany(ComputerScales, { as: "ComputerScales", foreignKey: "csComputerID"});
  EndOfDay.belongsTo(Computer, { as: "Unit", foreignKey: "UnitID"});
  Computer.hasMany(EndOfDay, { as: "EndOfDays", foreignKey: "UnitID"});
  PharmacyDepots.belongsTo(Computer, { as: "pdPrimaryDispensaryComputer", foreignKey: "pdPrimaryDispensaryComputerID"});
  Computer.hasMany(PharmacyDepots, { as: "PharmacyDepots", foreignKey: "pdPrimaryDispensaryComputerID"});
  ProgramLog.belongsTo(Computer, { as: "plUnit", foreignKey: "plUnitID"});
  Computer.hasMany(ProgramLog, { as: "ProgramLogs", foreignKey: "plUnitID"});
  Scale.belongsTo(Computer, { as: "scComputerConnectedTo", foreignKey: "scComputerConnectedToID"});
  Computer.hasMany(Scale, { as: "Scales", foreignKey: "scComputerConnectedToID"});
  Script.belongsTo(Computer, { as: "scrUnit", foreignKey: "scrUnitID"});
  Computer.hasMany(Script, { as: "Scripts", foreignKey: "scrUnitID"});
  SignalRMessage.belongsTo(Computer, { as: "srmUnitProcessing", foreignKey: "srmUnitProcessingID"});
  Computer.hasMany(SignalRMessage, { as: "SignalRMessages", foreignKey: "srmUnitProcessingID"});
  StickersQue.belongsTo(Computer, { as: "sqUnit", foreignKey: "sqUnitID"});
  Computer.hasMany(StickersQue, { as: "StickersQues", foreignKey: "sqUnitID"});
  HIPStatusQuestion.belongsTo(Conditions, { as: "HIPQCondition", foreignKey: "HIPQConditionID"});
  Conditions.hasMany(HIPStatusQuestion, { as: "HIPStatusQuestions", foreignKey: "HIPQConditionID"});
  IntCondition.belongsTo(Conditions, { as: "Condition", foreignKey: "ConditionID"});
  Conditions.hasMany(IntCondition, { as: "IntConditions", foreignKey: "ConditionID"});
  Purpose.belongsTo(Conditions, { as: "purCondition", foreignKey: "purConditionID"});
  Conditions.hasMany(Purpose, { as: "Purposes", foreignKey: "purConditionID"});
  TherapGroupToCondition.belongsTo(Conditions, { as: "tgcCondition", foreignKey: "tgcConditionID"});
  Conditions.hasMany(TherapGroupToCondition, { as: "TherapGroupToConditions", foreignKey: "tgcConditionID"});
  AdditionalContact.belongsTo(ContactTypes, { as: "apContactType", foreignKey: "apContactTypesID"});
  ContactTypes.hasMany(AdditionalContact, { as: "AdditionalContacts", foreignKey: "apContactTypesID"});
  Claim.belongsTo(Contract, { as: "clContract", foreignKey: "clContractID"});
  Contract.hasMany(Claim, { as: "Claims", foreignKey: "clContractID"});
  Computer.belongsTo(Contract, { as: "Computer_Contract", foreignKey: "Computer_ContractID"});
  Contract.hasMany(Computer, { as: "Computers", foreignKey: "Computer_ContractID"});
  Person.belongsTo(Contract, { as: "perContract", foreignKey: "perContractID"});
  Contract.hasMany(Person, { as: "People", foreignKey: "perContractID"});
  RestHome.belongsTo(Contract, { as: "rhContract", foreignKey: "rhContractID"});
  Contract.hasMany(RestHome, { as: "RestHomes", foreignKey: "rhContractID"});
  Script.belongsTo(Contract, { as: "scContract", foreignKey: "scContractID"});
  Contract.hasMany(Script, { as: "Scripts", foreignKey: "scContractID"});
  MultiDrug.belongsTo(CustomLabel, { as: "mdCustomLabel", foreignKey: "mdCustomLabelID"});
  CustomLabel.hasMany(MultiDrug, { as: "MultiDrugs", foreignKey: "mdCustomLabelID"});
  MultiDrug.belongsTo(CustomLabel, { as: "mdUserCustomLabel", foreignKey: "mdUserCustomLabelID"});
  CustomLabel.hasMany(MultiDrug, { as: "mdUserCustomLabel_MultiDrugs", foreignKey: "mdUserCustomLabelID"});
  SaleItem.belongsTo(Delivery, { as: "siDelivery", foreignKey: "siDeliveryID"});
  Delivery.hasMany(SaleItem, { as: "SaleItems", foreignKey: "siDeliveryID"});
  Delivery.belongsTo(DeliveryComment, { as: "dsDeliveryComment", foreignKey: "dsDeliveryCommentID"});
  DeliveryComment.hasMany(Delivery, { as: "Deliveries", foreignKey: "dsDeliveryCommentID"});
  Person.belongsTo(DeliveryComment, { as: "perDefaultDeliveryComment", foreignKey: "perDefaultDeliveryCommentID"});
  DeliveryComment.hasMany(Person, { as: "People", foreignKey: "perDefaultDeliveryCommentID"});
  Delivery.belongsTo(DeliveryPackaging, { as: "dsDeliveryPackaging", foreignKey: "dsDeliveryPackagingID"});
  DeliveryPackaging.hasMany(Delivery, { as: "Deliveries", foreignKey: "dsDeliveryPackagingID"});
  DeliveryFees.belongsTo(DeliveryPackaging, { as: "dfDeliveryPackaging", foreignKey: "dfDeliveryPackagingID"});
  DeliveryPackaging.hasMany(DeliveryFees, { as: "DeliveryFees", foreignKey: "dfDeliveryPackagingID"});
  Person.belongsTo(DeliveryPackaging, { as: "perPreferredDeliveryPackaging", foreignKey: "perPreferredDeliveryPackagingID"});
  DeliveryPackaging.hasMany(Person, { as: "People", foreignKey: "perPreferredDeliveryPackagingID"});
  RestHome.belongsTo(DeliveryPackaging, { as: "rhPreferredDeliveryPackaging", foreignKey: "rhPreferredDeliveryPackagingID"});
  DeliveryPackaging.hasMany(RestHome, { as: "RestHomes", foreignKey: "rhPreferredDeliveryPackagingID"});
  Delivery.belongsTo(DeliveryProvider, { as: "dsDeliveryProvider", foreignKey: "dsDeliveryProviderID"});
  DeliveryProvider.hasMany(Delivery, { as: "Deliveries", foreignKey: "dsDeliveryProviderID"});
  DeliveryFees.belongsTo(DeliveryProvider, { as: "dfDeliveryProvider", foreignKey: "dfDeliveryProviderID"});
  DeliveryProvider.hasMany(DeliveryFees, { as: "DeliveryFees", foreignKey: "dfDeliveryProviderID"});
  DeliveryPackaging.belongsTo(DeliveryProvider, { as: "dpDeliveryProvider", foreignKey: "dpDeliveryProviderID"});
  DeliveryProvider.hasMany(DeliveryPackaging, { as: "DeliveryPackagings", foreignKey: "dpDeliveryProviderID"});
  Person.belongsTo(DeliveryProvider, { as: "perPreferredDeliveryProvider", foreignKey: "perPreferredDeliveryProviderID"});
  DeliveryProvider.hasMany(Person, { as: "People", foreignKey: "perPreferredDeliveryProviderID"});
  PharmacyDepots.belongsTo(DeliveryProvider, { as: "pdDeliveryProvider", foreignKey: "pdDeliveryProviderID"});
  DeliveryProvider.hasMany(PharmacyDepots, { as: "PharmacyDepots", foreignKey: "pdDeliveryProviderID"});
  RestHome.belongsTo(DeliveryProvider, { as: "rhPreferredDeliveryProvider", foreignKey: "rhPreferredDeliveryProviderID"});
  DeliveryProvider.hasMany(RestHome, { as: "RestHomes", foreignKey: "rhPreferredDeliveryProviderID"});
  Delivery.belongsTo(DeliveryStatus, { as: "dsDeliveryStatus", foreignKey: "dsDeliveryStatusID"});
  DeliveryStatus.hasMany(Delivery, { as: "Deliveries", foreignKey: "dsDeliveryStatusID"});
  AdditionalAddresses.belongsTo(Doctor, { as: "aaDoctor", foreignKey: "aaDoctorID"});
  Doctor.hasMany(AdditionalAddresses, { as: "AdditionalAddresses", foreignKey: "aaDoctorID"});
  AdditionalContact.belongsTo(Doctor, { as: "apDoctor", foreignKey: "apDoctorID"});
  Doctor.hasMany(AdditionalContact, { as: "AdditionalContacts", foreignKey: "apDoctorID"});
  AdditionalNames.belongsTo(Doctor, { as: "anDoctor", foreignKey: "anDoctorID"});
  Doctor.hasMany(AdditionalNames, { as: "AdditionalNames", foreignKey: "anDoctorID"});
  DoctorAudit.belongsTo(Doctor, { as: "daDoctor", foreignKey: "daDoctorID"});
  Doctor.hasMany(DoctorAudit, { as: "DoctorAudits", foreignKey: "daDoctorID"});
  Emails.belongsTo(Doctor, { as: "emDoctor", foreignKey: "emDoctorID"});
  Doctor.hasMany(Emails, { as: "Emails", foreignKey: "emDoctorID"});
  HLInMessages.belongsTo(Doctor, { as: "HLIDoctor", foreignKey: "HLIDoctorID"});
  Doctor.hasMany(HLInMessages, { as: "HLInMessages", foreignKey: "HLIDoctorID"});
  HLOutMessages.belongsTo(Doctor, { as: "HLODoctor", foreignKey: "HLODoctorID"});
  Doctor.hasMany(HLOutMessages, { as: "HLOutMessages", foreignKey: "HLODoctorID"});
  InterventionNew.belongsTo(Doctor, { as: "itDoctor", foreignKey: "itDoctorID"});
  Doctor.hasMany(InterventionNew, { as: "InterventionNews", foreignKey: "itDoctorID"});
  KioskScripts.belongsTo(Doctor, { as: "KioskScriptDoctor", foreignKey: "KioskScriptDoctorID"});
  Doctor.hasMany(KioskScripts, { as: "KioskScripts", foreignKey: "KioskScriptDoctorID"});
  PersonAudit.belongsTo(Doctor, { as: "paDoctor", foreignKey: "paDoctorID"});
  Doctor.hasMany(PersonAudit, { as: "PersonAudits", foreignKey: "paDoctorID"});
  Script.belongsTo(Doctor, { as: "Doctor", foreignKey: "DoctorID"});
  Doctor.hasMany(Script, { as: "Scripts", foreignKey: "DoctorID"});
  Script.belongsTo(Doctor, { as: "Specialist", foreignKey: "SpecialistID"});
  Doctor.hasMany(Script, { as: "Specialist_Scripts", foreignKey: "SpecialistID"});
  ScriptHistory.belongsTo(Doctor, { as: "Doctor", foreignKey: "DoctorID"});
  Doctor.hasMany(ScriptHistory, { as: "ScriptHistories", foreignKey: "DoctorID"});
  TextMessages.belongsTo(Doctor, { as: "tmDoctor", foreignKey: "tmDoctorID"});
  Doctor.hasMany(TextMessages, { as: "TextMessages", foreignKey: "tmDoctorID"});
  DoctorAudit.belongsTo(DoctorAuditComment, { as: "daDoctorAuditComment", foreignKey: "daDoctorAuditCommentID"});
  DoctorAuditComment.hasMany(DoctorAudit, { as: "DoctorAudits", foreignKey: "daDoctorAuditCommentID"});
  DoctorAudit.belongsTo(DoctorAuditReason, { as: "daReason", foreignKey: "daReasonID"});
  DoctorAuditReason.hasMany(DoctorAudit, { as: "DoctorAudits", foreignKey: "daReasonID"});
  MultiDrug.belongsTo(DrugCategory, { as: "NHSCat", foreignKey: "NHSCatID"});
  DrugCategory.hasMany(MultiDrug, { as: "MultiDrugs", foreignKey: "NHSCatID"});
  Emails.belongsTo(EmailTemplate, { as: "emEmailTemplate", foreignKey: "emEmailTemplateID"});
  EmailTemplate.hasMany(Emails, { as: "Emails", foreignKey: "emEmailTemplateID"});
  FormulationAudit.belongsTo(Emails, { as: "faEmail", foreignKey: "faEmailID"});
  Emails.hasMany(FormulationAudit, { as: "FormulationAudits", foreignKey: "faEmailID"});
  PersonAudit.belongsTo(Emails, { as: "paEmail", foreignKey: "paEmailID"});
  Emails.hasMany(PersonAudit, { as: "PersonAudits", foreignKey: "paEmailID"});
  ScriptTransmission.belongsTo(Emails, { as: "stEmail", foreignKey: "stEmailID"});
  Emails.hasMany(ScriptTransmission, { as: "ScriptTransmissions", foreignKey: "stEmailID"});
  Stock.belongsTo(Epay, { as: "EpayType_Epay", foreignKey: "EpayType"});
  Epay.hasMany(Stock, { as: "Stocks", foreignKey: "EpayType"});
  ePayTracks.belongsTo(Epay, { as: "ePay", foreignKey: "ePayID"});
  Epay.hasMany(ePayTracks, { as: "ePayTracks", foreignKey: "ePayID"});
  Person.belongsTo(EthnicGroup, { as: "peEthnicGroup", foreignKey: "peEthnicGroupID"});
  EthnicGroup.hasMany(Person, { as: "People", foreignKey: "peEthnicGroupID"});
  PersonEthnicGroups.belongsTo(EthnicGroup, { as: "PersonEthnicGroups_EthinicGroup", foreignKey: "PersonEthnicGroups_EthinicGroupID"});
  EthnicGroup.hasMany(PersonEthnicGroups, { as: "PersonEthnicGroups", foreignKey: "PersonEthnicGroups_EthinicGroupID"});
  DoctorAudit.belongsTo(EventStatus, { as: "daEventStatus", foreignKey: "daEventStatusID"});
  EventStatus.hasMany(DoctorAudit, { as: "DoctorAudits", foreignKey: "daEventStatusID"});
  FormulationAudit.belongsTo(EventStatus, { as: "faEventStatus", foreignKey: "faEventStatusID"});
  EventStatus.hasMany(FormulationAudit, { as: "FormulationAudits", foreignKey: "faEventStatusID"});
  PersonAudit.belongsTo(EventStatus, { as: "paEventStatus", foreignKey: "paEventStatusID"});
  EventStatus.hasMany(PersonAudit, { as: "PersonAudits", foreignKey: "paEventStatusID"});
  RXAudit.belongsTo(EventStatus, { as: "raEventStatus", foreignKey: "raEventStatusID"});
  EventStatus.hasMany(RXAudit, { as: "RXAudits", foreignKey: "raEventStatusID"});
  SalesAudit.belongsTo(EventStatus, { as: "saEventStatus", foreignKey: "saEventStatusID"});
  EventStatus.hasMany(SalesAudit, { as: "SalesAudits", foreignKey: "saEventStatusID"});
  StaffAudit.belongsTo(EventStatus, { as: "saEventStatus", foreignKey: "saEventStatusID"});
  EventStatus.hasMany(StaffAudit, { as: "StaffAudits", foreignKey: "saEventStatusID"});
  StockAudit.belongsTo(EventStatus, { as: "saEventStatus", foreignKey: "saEventStatusID"});
  EventStatus.hasMany(StockAudit, { as: "StockAudits", foreignKey: "saEventStatusID"});
  EziblistAdherance.belongsTo(EziblistDevices, { as: "eaEziblistDevice", foreignKey: "eaEziblistDevicesID"});
  EziblistDevices.hasMany(EziblistAdherance, { as: "EziblistAdherances", foreignKey: "eaEziblistDevicesID"});
  Film.belongsTo(FilmDetails, { as: "Detail", foreignKey: "DetailsID"});
  FilmDetails.hasMany(Film, { as: "Films", foreignKey: "DetailsID"});
  Film.belongsTo(FilmProcess, { as: "Process", foreignKey: "ProcessID"});
  FilmProcess.hasMany(Film, { as: "Films", foreignKey: "ProcessID"});
  Film.belongsTo(FilmService, { as: "Service", foreignKey: "ServiceID"});
  FilmService.hasMany(Film, { as: "Films", foreignKey: "ServiceID"});
  Account.belongsTo(ForiegnExchange, { as: "acForiegnCurrencyToUse", foreignKey: "acForiegnCurrencyToUseID"});
  ForiegnExchange.hasMany(Account, { as: "Accounts", foreignKey: "acForiegnCurrencyToUseID"});
  Person.belongsTo(ForiegnExchange, { as: "perForiegnCurrencyToUse", foreignKey: "perForiegnCurrencyToUseID"});
  ForiegnExchange.hasMany(Person, { as: "People", foreignKey: "perForiegnCurrencyToUseID"});
  Supplier.belongsTo(ForiegnExchange, { as: "supForiegnCurrencyToUse", foreignKey: "supForiegnCurrencyToUseID"});
  ForiegnExchange.hasMany(Supplier, { as: "Suppliers", foreignKey: "supForiegnCurrencyToUseID"});
  Drug.belongsTo(Formulation, { as: "DrugFormulation", foreignKey: "DrugFormulationID"});
  Formulation.hasMany(Drug, { as: "Drugs", foreignKey: "DrugFormulationID"});
  FormulationAudit.belongsTo(Formulation, { as: "faFormulation", foreignKey: "faFormulationID"});
  Formulation.hasMany(FormulationAudit, { as: "FormulationAudits", foreignKey: "faFormulationID"});
  FormulationIngredient.belongsTo(Formulation, { as: "Formulation", foreignKey: "FormulationID"});
  Formulation.hasMany(FormulationIngredient, { as: "FormulationIngredients", foreignKey: "FormulationID"});
  FormulationPrice.belongsTo(Formulation, { as: "Formulation", foreignKey: "FormulationID"});
  Formulation.hasMany(FormulationPrice, { as: "FormulationPrices", foreignKey: "FormulationID"});
  FormulationToInternetTags.belongsTo(Formulation, { as: "fitFormulation", foreignKey: "fitFormulationID"});
  Formulation.hasMany(FormulationToInternetTags, { as: "FormulationToInternetTags", foreignKey: "fitFormulationID"});
  KioskScripts.belongsTo(Formulation, { as: "ksFormulation", foreignKey: "ksFormulationID"});
  Formulation.hasMany(KioskScripts, { as: "KioskScripts", foreignKey: "ksFormulationID"});
  Script.belongsTo(Formulation, { as: "Formulation", foreignKey: "FormulationID"});
  Formulation.hasMany(Script, { as: "Scripts", foreignKey: "FormulationID"});
  FormulationAudit.belongsTo(FormulationAuditComment, { as: "faComment", foreignKey: "faCommentID"});
  FormulationAuditComment.hasMany(FormulationAudit, { as: "FormulationAudits", foreignKey: "faCommentID"});
  FormulationAudit.belongsTo(FormulationAuditReason, { as: "faReason", foreignKey: "faReasonID"});
  FormulationAuditReason.hasMany(FormulationAudit, { as: "FormulationAudits", foreignKey: "faReasonID"});
  Formulation.belongsTo(FormulationComment, { as: "foFormaulationComment", foreignKey: "foFormaulationCommentID"});
  FormulationComment.hasMany(Formulation, { as: "Formulations", foreignKey: "foFormaulationCommentID"});
  HIPSession.belongsTo(HIPForm, { as: "HIPSAForm", foreignKey: "HIPSAFormID"});
  HIPForm.hasMany(HIPSession, { as: "HIPSessions", foreignKey: "HIPSAFormID"});
  HIPStatusQuestion.belongsTo(HIPForm, { as: "hsqHIPForm", foreignKey: "hsqHIPFormID"});
  HIPForm.hasMany(HIPStatusQuestion, { as: "HIPStatusQuestions", foreignKey: "hsqHIPFormID"});
  HIPStatusAnswer.belongsTo(HIPSession, { as: "HIPSASession", foreignKey: "HIPSASessionID"});
  HIPSession.hasMany(HIPStatusAnswer, { as: "HIPStatusAnswers", foreignKey: "HIPSASessionID"});
  PersonAudit.belongsTo(HIPSession, { as: "paHIPSession", foreignKey: "paHIPSessionID"});
  HIPSession.hasMany(PersonAudit, { as: "PersonAudits", foreignKey: "paHIPSessionID"});
  HIPAnswerToPersonAudit.belongsTo(HIPStatusAnswer, { as: "HIPAPHipAnswer", foreignKey: "HIPAPHipAnswerID"});
  HIPStatusAnswer.hasMany(HIPAnswerToPersonAudit, { as: "HIPAnswerToPersonAudits", foreignKey: "HIPAPHipAnswerID"});
  HIPStatusAnswer.belongsTo(HIPStatusQuestion, { as: "HIPSAQuestion", foreignKey: "HIPSAQuestionID"});
  HIPStatusQuestion.hasMany(HIPStatusAnswer, { as: "HIPStatusAnswers", foreignKey: "HIPSAQuestionID"});
  HIPStatusQuestion.belongsTo(HIPStatusQuestion, { as: "HIPParentQuestion", foreignKey: "HIPParentQuestionID"});
  HIPStatusQuestion.hasMany(HIPStatusQuestion, { as: "HIPStatusQuestions", foreignKey: "HIPParentQuestionID"});
  SpecialHOGroups.belongsTo(HeadOfficeGroups, { as: "sgHOGroup", foreignKey: "sgHOGroupID"});
  HeadOfficeGroups.hasMany(SpecialHOGroups, { as: "SpecialHOGroups", foreignKey: "sgHOGroupID"});
  PersonInternetSchemes.belongsTo(InternetSchemes, { as: "PersonInternetSchemes_InternetScheme", foreignKey: "PersonInternetSchemes_InternetSchemesID"});
  InternetSchemes.hasMany(PersonInternetSchemes, { as: "PersonInternetSchemes", foreignKey: "PersonInternetSchemes_InternetSchemesID"});
  ResthomeInternetSchemes.belongsTo(InternetSchemes, { as: "risInternetScheme", foreignKey: "risInternetSchemeID"});
  InternetSchemes.hasMany(ResthomeInternetSchemes, { as: "ResthomeInternetSchemes", foreignKey: "risInternetSchemeID"});
  FormulationToInternetTags.belongsTo(InternetTag, { as: "fitInternetTag", foreignKey: "fitInternetTagID"});
  InternetTag.hasMany(FormulationToInternetTags, { as: "FormulationToInternetTags", foreignKey: "fitInternetTagID"});
  StockToInternetTag.belongsTo(InternetTag, { as: "stiInternetTag", foreignKey: "stiInternetTagID"});
  InternetTag.hasMany(StockToInternetTag, { as: "StockToInternetTags", foreignKey: "stiInternetTagID"});
  VoucherReceived.belongsTo(IssuedVoucher, { as: "vrVoucher", foreignKey: "vrVoucherID"});
  IssuedVoucher.hasMany(VoucherReceived, { as: "VoucherReceiveds", foreignKey: "vrVoucherID"});
  KioskScripts.belongsTo(KioskScriptBasket, { as: "KioskScriptBasket", foreignKey: "KioskScriptBasketID"});
  KioskScriptBasket.hasMany(KioskScripts, { as: "KioskScripts", foreignKey: "KioskScriptBasketID"});
  Script.belongsTo(KioskScriptBasket, { as: "scrKioskScriptBasket", foreignKey: "scrKioskScriptBasketID"});
  KioskScriptBasket.hasMany(Script, { as: "Scripts", foreignKey: "scrKioskScriptBasketID"});
  ScriptToKioskScript.belongsTo(KioskScriptBasket, { as: "stkKioskScriptBasket", foreignKey: "stkKioskScriptBasketID"});
  KioskScriptBasket.hasMany(ScriptToKioskScript, { as: "ScriptToKioskScripts", foreignKey: "stkKioskScriptBasketID"});
  HLInMessages.belongsTo(KioskScripts, { as: "hlKioskScript", foreignKey: "hlKioskScriptID"});
  KioskScripts.hasMany(HLInMessages, { as: "HLInMessages", foreignKey: "hlKioskScriptID"});
  Script.belongsTo(KioskScripts, { as: "scrKioskScript", foreignKey: "scrKioskScriptID"});
  KioskScripts.hasMany(Script, { as: "Scripts", foreignKey: "scrKioskScriptID"});
  ScriptToKioskScript.belongsTo(KioskScripts, { as: "stkKioskScript", foreignKey: "stkKioskScriptID"});
  KioskScripts.hasMany(ScriptToKioskScript, { as: "ScriptToKioskScripts", foreignKey: "stkKioskScriptID"});
  PersonManagementPlanActions.belongsTo(ManagementPlans, { as: "pmpManagmentPlan", foreignKey: "pmpManagmentPlanID"});
  ManagementPlans.hasMany(PersonManagementPlanActions, { as: "PersonManagementPlanActions", foreignKey: "pmpManagmentPlanID"});
  PersonManagementPlanFactors.belongsTo(ManagementPlans, { as: "pmfManagmentPlan", foreignKey: "pmfManagmentPlanID"});
  ManagementPlans.hasMany(PersonManagementPlanFactors, { as: "PersonManagementPlanFactors", foreignKey: "pmfManagmentPlanID"});
  ChemNum.belongsTo(MultiDrug, { as: "MultiDrug", foreignKey: "MultiDrugID"});
  MultiDrug.hasMany(ChemNum, { as: "ChemNums", foreignKey: "MultiDrugID"});
  MultiSpecReg.belongsTo(MultiDrug, { as: "MultiDrug", foreignKey: "MultiDrugID"});
  MultiDrug.hasMany(MultiSpecReg, { as: "MultiSpecRegs", foreignKey: "MultiDrugID"});
  Script.belongsTo(MultiDrug, { as: "MultiDrug", foreignKey: "MultiDrugID"});
  MultiDrug.hasMany(Script, { as: "Scripts", foreignKey: "MultiDrugID"});
  ScriptHistory.belongsTo(MultiDrug, { as: "MultiDrug", foreignKey: "MultiDrugID"});
  MultiDrug.hasMany(ScriptHistory, { as: "ScriptHistories", foreignKey: "MultiDrugID"});
  NewFoil.belongsTo(NewFoilPack, { as: "FoilPack", foreignKey: "FoilPackID"});
  NewFoilPack.hasMany(NewFoil, { as: "NewFoils", foreignKey: "FoilPackID"});
  ComputerOperations.belongsTo(Operations, { as: "rcOperation", foreignKey: "rcOperationID"});
  Operations.hasMany(ComputerOperations, { as: "ComputerOperations", foreignKey: "rcOperationID"});
  OrderItemToScript.belongsTo(OrderItems, { as: "oisOrderItem", foreignKey: "oisOrderItemID"});
  OrderItems.hasMany(OrderItemToScript, { as: "OrderItemToScripts", foreignKey: "oisOrderItemID"});
  CreditorFile.belongsTo(Orders, { as: "Order", foreignKey: "OrderID"});
  Orders.hasMany(CreditorFile, { as: "CreditorFiles", foreignKey: "OrderID"});
  OrderInvoice.belongsTo(Orders, { as: "Order", foreignKey: "OrderID"});
  Orders.hasMany(OrderInvoice, { as: "OrderInvoices", foreignKey: "OrderID"});
  OrderItems.belongsTo(Orders, { as: "Order", foreignKey: "OrderID"});
  Orders.hasMany(OrderItems, { as: "OrderItems", foreignKey: "OrderID"});
  ScriptTransmission.belongsTo(OwingDispensed, { as: "stOwingDispense", foreignKey: "stOwingDispenseID"});
  OwingDispensed.hasMany(ScriptTransmission, { as: "ScriptTransmissions", foreignKey: "stOwingDispenseID"});
  Person.belongsTo(POSComments, { as: "POSComment", foreignKey: "POSCommentID"});
  POSComments.hasMany(Person, { as: "People", foreignKey: "POSCommentID"});
  PersonAudit.belongsTo(PatientAuditComment, { as: "paComment", foreignKey: "paCommentID"});
  PatientAuditComment.hasMany(PersonAudit, { as: "PersonAudits", foreignKey: "paCommentID"});
  Allergy.belongsTo(PatientComment, { as: "allPersonComment", foreignKey: "allPersonCommentID"});
  PatientComment.hasMany(Allergy, { as: "Allergies", foreignKey: "allPersonCommentID"});
  Person.belongsTo(PatientComment, { as: "PatientComment", foreignKey: "PatientCommentID"});
  PatientComment.hasMany(Person, { as: "People", foreignKey: "PatientCommentID"});
  Account.belongsTo(Person, { as: "acAccountOwnerPerson", foreignKey: "acAccountOwnerPersonID"});
  Person.hasMany(Account, { as: "Accounts", foreignKey: "acAccountOwnerPersonID"});
  ActionInstance.belongsTo(Person, { as: "Person", foreignKey: "PersonID"});
  Person.hasMany(ActionInstance, { as: "ActionInstances", foreignKey: "PersonID"});
  AdditionalAddresses.belongsTo(Person, { as: "aaPerson", foreignKey: "aaPersonID"});
  Person.hasMany(AdditionalAddresses, { as: "AdditionalAddresses", foreignKey: "aaPersonID"});
  AdditionalContact.belongsTo(Person, { as: "apLinkedPerson", foreignKey: "apLinkedPersonID"});
  Person.hasMany(AdditionalContact, { as: "AdditionalContacts", foreignKey: "apLinkedPersonID"});
  AdditionalContact.belongsTo(Person, { as: "apPerson", foreignKey: "apPersonID"});
  Person.hasMany(AdditionalContact, { as: "apPerson_AdditionalContacts", foreignKey: "apPersonID"});
  AdditionalNames.belongsTo(Person, { as: "anPerson", foreignKey: "anPersonID"});
  Person.hasMany(AdditionalNames, { as: "AdditionalNames", foreignKey: "anPersonID"});
  Allergy.belongsTo(Person, { as: "Person", foreignKey: "PersonID"});
  Person.hasMany(Allergy, { as: "Allergies", foreignKey: "PersonID"});
  ChemNum.belongsTo(Person, { as: "Person", foreignKey: "PersonID"});
  Person.hasMany(ChemNum, { as: "ChemNums", foreignKey: "PersonID"});
  ClaimLTCResponse.belongsTo(Person, { as: "clrPerson", foreignKey: "clrPersonID"});
  Person.hasMany(ClaimLTCResponse, { as: "ClaimLTCResponses", foreignKey: "clrPersonID"});
  ClubPointsAdjustment.belongsTo(Person, { as: "cpaPerson", foreignKey: "cpaPersonId"});
  Person.hasMany(ClubPointsAdjustment, { as: "ClubPointsAdjustments", foreignKey: "cpaPersonId"});
  DHBFiles.belongsTo(Person, { as: "Person", foreignKey: "PersonID"});
  Person.hasMany(DHBFiles, { as: "DHBFiles", foreignKey: "PersonID"});
  Delivery.belongsTo(Person, { as: "dsDeliveryPerson", foreignKey: "dsDeliveryPersonID"});
  Person.hasMany(Delivery, { as: "Deliveries", foreignKey: "dsDeliveryPersonID"});
  Emails.belongsTo(Person, { as: "emPerson", foreignKey: "emPersonID"});
  Person.hasMany(Emails, { as: "Emails", foreignKey: "emPersonID"});
  ExternalSNetDetails.belongsTo(Person, { as: "ExtPerson", foreignKey: "ExtPersonID"});
  Person.hasMany(ExternalSNetDetails, { as: "ExternalSNetDetails", foreignKey: "ExtPersonID"});
  EziblistAdherance.belongsTo(Person, { as: "edPerson", foreignKey: "edPersonID"});
  Person.hasMany(EziblistAdherance, { as: "EziblistAdherances", foreignKey: "edPersonID"});
  Film.belongsTo(Person, { as: "Person", foreignKey: "PersonID"});
  Person.hasMany(Film, { as: "Films", foreignKey: "PersonID"});
  HIPSession.belongsTo(Person, { as: "HIPSPerson", foreignKey: "HIPSPersonID"});
  Person.hasMany(HIPSession, { as: "HIPSessions", foreignKey: "HIPSPersonID"});
  HLInMessages.belongsTo(Person, { as: "HLIPerson", foreignKey: "HLIPersonID"});
  Person.hasMany(HLInMessages, { as: "HLInMessages", foreignKey: "HLIPersonID"});
  HLOutMessages.belongsTo(Person, { as: "HLOPerson", foreignKey: "HLOPersonID"});
  Person.hasMany(HLOutMessages, { as: "HLOutMessages", foreignKey: "HLOPersonID"});
  IntCondition.belongsTo(Person, { as: "Person", foreignKey: "PersonID"});
  Person.hasMany(IntCondition, { as: "IntConditions", foreignKey: "PersonID"});
  InterventionNew.belongsTo(Person, { as: "itPerson", foreignKey: "itPersonID"});
  Person.hasMany(InterventionNew, { as: "InterventionNews", foreignKey: "itPersonID"});
  IssuedVoucher.belongsTo(Person, { as: "ivPerson", foreignKey: "ivPersonID"});
  Person.hasMany(IssuedVoucher, { as: "IssuedVouchers", foreignKey: "ivPersonID"});
  KioskScripts.belongsTo(Person, { as: "KioskScriptPerson", foreignKey: "KioskScriptPersonID"});
  Person.hasMany(KioskScripts, { as: "KioskScripts", foreignKey: "KioskScriptPersonID"});
  LTCAssessments.belongsTo(Person, { as: "LTCPerson", foreignKey: "LTCPersonID"});
  Person.hasMany(LTCAssessments, { as: "LTCAssessments", foreignKey: "LTCPersonID"});
  ManagementPlans.belongsTo(Person, { as: "mpPerson", foreignKey: "mpPersonID"});
  Person.hasMany(ManagementPlans, { as: "ManagementPlans", foreignKey: "mpPersonID"});
  NRTNum.belongsTo(Person, { as: "Person", foreignKey: "PersonID"});
  Person.hasMany(NRTNum, { as: "NRTNums", foreignKey: "PersonID"});
  PersonAudit.belongsTo(Person, { as: "paPerson", foreignKey: "paPersonID"});
  Person.hasMany(PersonAudit, { as: "PersonAudits", foreignKey: "paPersonID"});
  PersonEthnicGroups.belongsTo(Person, { as: "PersonEthnicGroups_Person", foreignKey: "PersonEthnicGroups_PersonID"});
  Person.hasMany(PersonEthnicGroups, { as: "PersonEthnicGroups", foreignKey: "PersonEthnicGroups_PersonID"});
  PersonFiles.belongsTo(Person, { as: "Person", foreignKey: "PersonID"});
  Person.hasMany(PersonFiles, { as: "PersonFiles", foreignKey: "PersonID"});
  PersonInternetSchemes.belongsTo(Person, { as: "PersonInternetSchemes_Person", foreignKey: "PersonInternetSchemes_PersonID"});
  Person.hasMany(PersonInternetSchemes, { as: "PersonInternetSchemes", foreignKey: "PersonInternetSchemes_PersonID"});
  PersonLoyaltyCards.belongsTo(Person, { as: "PersonLoyaltyCards_Person", foreignKey: "PersonLoyaltyCards_PersonID"});
  Person.hasMany(PersonLoyaltyCards, { as: "PersonLoyaltyCards", foreignKey: "PersonLoyaltyCards_PersonID"});
  PersonManagementPlanComments.belongsTo(Person, { as: "pmcPerson", foreignKey: "pmcPersonID"});
  Person.hasMany(PersonManagementPlanComments, { as: "PersonManagementPlanComments", foreignKey: "pmcPersonID"});
  PersonPromotionalConsent.belongsTo(Person, { as: "ppcPerson", foreignKey: "ppcPersonID"});
  Person.hasMany(PersonPromotionalConsent, { as: "PersonPromotionalConsents", foreignKey: "ppcPersonID"});
  PersonRegistrations.belongsTo(Person, { as: "prPerson", foreignKey: "prPersonID"});
  Person.hasMany(PersonRegistrations, { as: "PersonRegistrations", foreignKey: "prPersonID"});
  PersonToPersonFamily.belongsTo(Person, { as: "ppfPerson", foreignKey: "ppfPersonID"});
  Person.hasMany(PersonToPersonFamily, { as: "PersonToPersonFamilies", foreignKey: "ppfPersonID"});
  PersonToPortalLogin.belongsTo(Person, { as: "plgPerson", foreignKey: "plgPersonID"});
  Person.hasMany(PersonToPortalLogin, { as: "PersonToPortalLogins", foreignKey: "plgPersonID"});
  PersonTransmission.belongsTo(Person, { as: "ptPerson", foreignKey: "ptPersonID"});
  Person.hasMany(PersonTransmission, { as: "PersonTransmissions", foreignKey: "ptPersonID"});
  SaleItem.belongsTo(Person, { as: "Person", foreignKey: "PersonID"});
  Person.hasMany(SaleItem, { as: "SaleItems", foreignKey: "PersonID"});
  SalesLoyaltyCard.belongsTo(Person, { as: "slcPerson", foreignKey: "slcPersonID"});
  Person.hasMany(SalesLoyaltyCard, { as: "SalesLoyaltyCards", foreignKey: "slcPersonID"});
  Script.belongsTo(Person, { as: "Person", foreignKey: "PersonID"});
  Person.hasMany(Script, { as: "Scripts", foreignKey: "PersonID"});
  ScriptAdditionalPayments.belongsTo(Person, { as: "sapPerson", foreignKey: "sapPersonID"});
  Person.hasMany(ScriptAdditionalPayments, { as: "ScriptAdditionalPayments", foreignKey: "sapPersonID"});
  ScriptHistory.belongsTo(Person, { as: "Person", foreignKey: "PersonID"});
  Person.hasMany(ScriptHistory, { as: "ScriptHistories", foreignKey: "PersonID"});
  TextMessages.belongsTo(Person, { as: "tmPerson", foreignKey: "tmPersonID"});
  Person.hasMany(TextMessages, { as: "TextMessages", foreignKey: "tmPersonID"});
  TransmissionsForNoneScript.belongsTo(Person, { as: "tnsPerson", foreignKey: "tnsPersonID"});
  Person.hasMany(TransmissionsForNoneScript, { as: "TransmissionsForNoneScripts", foreignKey: "tnsPersonID"});
  DHBFiles.belongsTo(PersonAudit, { as: "dhbPersonAudit", foreignKey: "dhbPersonAuditID"});
  PersonAudit.hasMany(DHBFiles, { as: "DHBFiles", foreignKey: "dhbPersonAuditID"});
  HIPAnswerToPersonAudit.belongsTo(PersonAudit, { as: "HIPAPPersonAudit", foreignKey: "HIPAPPersonAuditID"});
  PersonAudit.hasMany(HIPAnswerToPersonAudit, { as: "HIPAnswerToPersonAudits", foreignKey: "HIPAPPersonAuditID"});
  HIPStatusAnswer.belongsTo(PersonAudit, { as: "HIPSAPersonAudit", foreignKey: "HIPSAPersonAuditID"});
  PersonAudit.hasMany(HIPStatusAnswer, { as: "HIPStatusAnswers", foreignKey: "HIPSAPersonAuditID"});
  PersonFiles.belongsTo(PersonAudit, { as: "pfPersonAudit", foreignKey: "pfPersonAuditID"});
  PersonAudit.hasMany(PersonFiles, { as: "PersonFiles", foreignKey: "pfPersonAuditID"});
  HIPStatusQuestion.belongsTo(PersonAuditReason, { as: "HIPPersonAuditReason", foreignKey: "HIPPersonAuditReasonID"});
  PersonAuditReason.hasMany(HIPStatusQuestion, { as: "HIPStatusQuestions", foreignKey: "HIPPersonAuditReasonID"});
  HIPStatusQuestion.belongsTo(PersonAuditReason, { as: "HIPPersonAuditReasonID2_PersonAuditReason", foreignKey: "HIPPersonAuditReasonID2"});
  PersonAuditReason.hasMany(HIPStatusQuestion, { as: "HIPPersonAuditReasonID2_HIPStatusQuestions", foreignKey: "HIPPersonAuditReasonID2"});
  PersonAudit.belongsTo(PersonAuditReason, { as: "paReason", foreignKey: "paReasonID"});
  PersonAuditReason.hasMany(PersonAudit, { as: "PersonAudits", foreignKey: "paReasonID"});
  PersonToPersonFamily.belongsTo(PersonFamily, { as: "ppfPersonFamily", foreignKey: "ppfPersonFamilyID"});
  PersonFamily.hasMany(PersonToPersonFamily, { as: "PersonToPersonFamilies", foreignKey: "ppfPersonFamilyID"});
  PersonTransmissionToTransmissionMessage.belongsTo(PersonTransmission, { as: "ptmPersonTransmission", foreignKey: "ptmPersonTransmissionID"});
  PersonTransmission.hasMany(PersonTransmissionToTransmissionMessage, { as: "PersonTransmissionToTransmissionMessages", foreignKey: "ptmPersonTransmissionID"});
  Person.belongsTo(PersonType, { as: "perPersonType", foreignKey: "perPersonTypeID"});
  PersonType.hasMany(Person, { as: "People", foreignKey: "perPersonTypeID"});
  PersonRegistrations.belongsTo(PersonType, { as: "prPersonType_PersonType", foreignKey: "prPersonType"});
  PersonType.hasMany(PersonRegistrations, { as: "PersonRegistrations", foreignKey: "prPersonType"});
  RestHome.belongsTo(PersonType, { as: "rhPersonType", foreignKey: "rhPersonTypeID"});
  PersonType.hasMany(RestHome, { as: "RestHomes", foreignKey: "rhPersonTypeID"});
  KioskScripts.belongsTo(PharmacyDepots, { as: "ksPharmacyDepot", foreignKey: "ksPharmacyDepotID"});
  PharmacyDepots.hasMany(KioskScripts, { as: "KioskScripts", foreignKey: "ksPharmacyDepotID"});
  Person.belongsTo(PharmacyDepots, { as: "perPreferredDepot", foreignKey: "perPreferredDepotID"});
  PharmacyDepots.hasMany(Person, { as: "People", foreignKey: "perPreferredDepotID"});
  PersonToPortalLogin.belongsTo(PortalName, { as: "plgPortalName", foreignKey: "plgPortalNameID"});
  PortalName.hasMany(PersonToPortalLogin, { as: "PersonToPortalLogins", foreignKey: "plgPortalNameID"});
  Batches.belongsTo(ProductClass, { as: "ProductClass", foreignKey: "ProductClassID"});
  ProductClass.hasMany(Batches, { as: "Batches", foreignKey: "ProductClassID"});
  Stock.belongsTo(ProductClass, { as: "ProductClass", foreignKey: "ProductClassID"});
  ProductClass.hasMany(Stock, { as: "Stocks", foreignKey: "ProductClassID"});
  SuppUD.belongsTo(ProductClass, { as: "DefaultProductClass", foreignKey: "DefaultProductClassID"});
  ProductClass.hasMany(SuppUD, { as: "SuppUDs", foreignKey: "DefaultProductClassID"});
  Batches.belongsTo(ProductGroup, { as: "ProductGroup", foreignKey: "ProductGroupID"});
  ProductGroup.hasMany(Batches, { as: "Batches", foreignKey: "ProductGroupID"});
  ProductGroupToTaxType.belongsTo(ProductGroup, { as: "pttProductGroup", foreignKey: "pttProductGroupID"});
  ProductGroup.hasMany(ProductGroupToTaxType, { as: "ProductGroupToTaxTypes", foreignKey: "pttProductGroupID"});
  Stock.belongsTo(ProductGroup, { as: "ProductGroup", foreignKey: "ProductGroupID"});
  ProductGroup.hasMany(Stock, { as: "Stocks", foreignKey: "ProductGroupID"});
  SuppUD.belongsTo(ProductGroup, { as: "DefaultProductGroup", foreignKey: "DefaultProductGroupID"});
  ProductGroup.hasMany(SuppUD, { as: "SuppUDs", foreignKey: "DefaultProductGroupID"});
  Person.belongsTo(PromotionalConsentTypes, { as: "pePromotionalConsentType", foreignKey: "pePromotionalConsentTypeID"});
  PromotionalConsentTypes.hasMany(Person, { as: "People", foreignKey: "pePromotionalConsentTypeID"});
  Script.belongsTo(Purpose, { as: "Purpose", foreignKey: "PurposeID"});
  Purpose.hasMany(Script, { as: "Scripts", foreignKey: "PurposeID"});
  RXAudit.belongsTo(RXAuditReason, { as: "raReason", foreignKey: "raReasonID"});
  RXAuditReason.hasMany(RXAudit, { as: "RXAudits", foreignKey: "raReasonID"});
  AdditionalAddresses.belongsTo(RestHome, { as: "aaRestHome", foreignKey: "aaRestHomeID"});
  RestHome.hasMany(AdditionalAddresses, { as: "AdditionalAddresses", foreignKey: "aaRestHomeID"});
  AdditionalContact.belongsTo(RestHome, { as: "apRestHome", foreignKey: "apRestHomeID"});
  RestHome.hasMany(AdditionalContact, { as: "AdditionalContacts", foreignKey: "apRestHomeID"});
  Person.belongsTo(RestHome, { as: "RestHome", foreignKey: "RestHomeID"});
  RestHome.hasMany(Person, { as: "People", foreignKey: "RestHomeID"});
  PersonToPortalLogin.belongsTo(RestHome, { as: "plgResthome", foreignKey: "plgResthomeID"});
  RestHome.hasMany(PersonToPortalLogin, { as: "PersonToPortalLogins", foreignKey: "plgResthomeID"});
  ResthomeInternetSchemes.belongsTo(RestHome, { as: "risResthome", foreignKey: "risResthomeID"});
  RestHome.hasMany(ResthomeInternetSchemes, { as: "ResthomeInternetSchemes", foreignKey: "risResthomeID"});
  Computer.belongsTo(Robot, { as: "Computer_FoilRobot", foreignKey: "Computer_FoilRobotID"});
  Robot.hasMany(Computer, { as: "Computers", foreignKey: "Computer_FoilRobotID"});
  Computer.belongsTo(Robot, { as: "Computer_Robot", foreignKey: "Computer_RobotID"});
  Robot.hasMany(Computer, { as: "Computer_Robot_Computers", foreignKey: "Computer_RobotID"});
  MultiStock.belongsTo(Robot, { as: "msRobot", foreignKey: "msRobotID"});
  Robot.hasMany(MultiStock, { as: "MultiStocks", foreignKey: "msRobotID"});
  RestHome.belongsTo(Robot, { as: "rhDispensingRobot", foreignKey: "rhDispensingRobotID"});
  Robot.hasMany(RestHome, { as: "RestHomes", foreignKey: "rhDispensingRobotID"});
  RestHome.belongsTo(Robot, { as: "rhFoilRobot", foreignKey: "rhFoilRobotID"});
  Robot.hasMany(RestHome, { as: "rhFoilRobot_RestHomes", foreignKey: "rhFoilRobotID"});
  Script.belongsTo(Robot, { as: "scrRobot", foreignKey: "scrRobotID"});
  Robot.hasMany(Script, { as: "Scripts", foreignKey: "scrRobotID"});
  ScriptTransmission.belongsTo(Robot, { as: "stRobot", foreignKey: "stRobotID"});
  Robot.hasMany(ScriptTransmission, { as: "ScriptTransmissions", foreignKey: "stRobotID"});
  Stock.belongsTo(Robot, { as: "stRobot", foreignKey: "stRobotID"});
  Robot.hasMany(Stock, { as: "Stocks", foreignKey: "stRobotID"});
  StockToRobot.belongsTo(Robot, { as: "strRobot", foreignKey: "strRobotID"});
  Robot.hasMany(StockToRobot, { as: "StockToRobots", foreignKey: "strRobotID"});
  Script.belongsTo(RouteOfAdministration, { as: "scRouteOfAdministration", foreignKey: "scRouteOfAdministrationID"});
  RouteOfAdministration.hasMany(Script, { as: "Scripts", foreignKey: "scRouteOfAdministrationID"});
  RXAudit.belongsTo(RxAuditComment, { as: "raRxAuditComment", foreignKey: "raRxAuditCommentID"});
  RxAuditComment.hasMany(RXAudit, { as: "RXAudits", foreignKey: "raRxAuditCommentID"});
  StaffGroupToSOP.belongsTo(SOPS, { as: "stsSOP", foreignKey: "stsSOPID"});
  SOPS.hasMany(StaffGroupToSOP, { as: "StaffGroupToSOPs", foreignKey: "stsSOPID"});
  StaffReadSOP.belongsTo(SOPS, { as: "srsSOP", foreignKey: "srsSOPID"});
  SOPS.hasMany(StaffReadSOP, { as: "StaffReadSOPs", foreignKey: "srsSOPID"});
  StockToSOP.belongsTo(SOPS, { as: "stsSOP", foreignKey: "stsSOPID"});
  SOPS.hasMany(StockToSOP, { as: "StockToSOPs", foreignKey: "stsSOPID"});
  Eftpos.belongsTo(SaleItem, { as: "eftSaleItem", foreignKey: "eftSaleItemID"});
  SaleItem.hasMany(Eftpos, { as: "Eftpos", foreignKey: "eftSaleItemID"});
  IssuedVoucher.belongsTo(SaleItem, { as: "ivSaleItem", foreignKey: "ivSaleItemID"});
  SaleItem.hasMany(IssuedVoucher, { as: "IssuedVouchers", foreignKey: "ivSaleItemID"});
  SaleItem.belongsTo(SaleItem, { as: "siSaleItemIDRefunded_SaleItem", foreignKey: "siSaleItemIDRefunded"});
  SaleItem.hasMany(SaleItem, { as: "SaleItems", foreignKey: "siSaleItemIDRefunded"});
  SaleItemBatch.belongsTo(SaleItem, { as: "sibSaleItem", foreignKey: "sibSaleItemID"});
  SaleItem.hasMany(SaleItemBatch, { as: "SaleItemBatches", foreignKey: "sibSaleItemID"});
  SaleItemToTaxType.belongsTo(SaleItem, { as: "sittSaleItem", foreignKey: "sittSaleItemID"});
  SaleItem.hasMany(SaleItemToTaxType, { as: "SaleItemToTaxTypes", foreignKey: "sittSaleItemID"});
  ScriptAdditionalPayments.belongsTo(SaleItem, { as: "sapSaleItem", foreignKey: "sapSaleItemID"});
  SaleItem.hasMany(ScriptAdditionalPayments, { as: "ScriptAdditionalPayments", foreignKey: "sapSaleItemID"});
  ScriptToPrivateInsurance.belongsTo(SaleItem, { as: "stpSaleItem", foreignKey: "stpSaleItemID"});
  SaleItem.hasMany(ScriptToPrivateInsurance, { as: "ScriptToPrivateInsurances", foreignKey: "stpSaleItemID"});
  Eftpos.belongsTo(SalePayment, { as: "SalePayment", foreignKey: "SalePaymentID"});
  SalePayment.hasMany(Eftpos, { as: "Eftpos", foreignKey: "SalePaymentID"});
  IssuedVoucher.belongsTo(SalePayment, { as: "ivSalePayment", foreignKey: "ivSalePaymentID"});
  SalePayment.hasMany(IssuedVoucher, { as: "IssuedVouchers", foreignKey: "ivSalePaymentID"});
  ScriptToPrivateInsurance.belongsTo(SalePayment, { as: "stpSalePayment", foreignKey: "stpSalePaymentID"});
  SalePayment.hasMany(ScriptToPrivateInsurance, { as: "ScriptToPrivateInsurances", foreignKey: "stpSalePaymentID"});
  VoucherReceived.belongsTo(SalePayment, { as: "vrPayment", foreignKey: "vrPaymentID"});
  SalePayment.hasMany(VoucherReceived, { as: "VoucherReceiveds", foreignKey: "vrPaymentID"});
  Computer.belongsTo(SaleType, { as: "DefaultSaleType_SaleType", foreignKey: "DefaultSaleType"});
  SaleType.hasMany(Computer, { as: "Computers", foreignKey: "DefaultSaleType"});
  EndOfDay.belongsTo(SaleType, { as: "EODSaleType", foreignKey: "EODSaleTypeID"});
  SaleType.hasMany(EndOfDay, { as: "EndOfDays", foreignKey: "EODSaleTypeID"});
  SpecialItems.belongsTo(SaleType, { as: "siSaleType", foreignKey: "siSaleTypeID"});
  SaleType.hasMany(SpecialItems, { as: "SpecialItems", foreignKey: "siSaleTypeID"});
  Eftpos.belongsTo(Sales, { as: "eftSale", foreignKey: "eftSaleID"});
  Sales.hasMany(Eftpos, { as: "Eftpos", foreignKey: "eftSaleID"});
  Emails.belongsTo(Sales, { as: "emSale", foreignKey: "emSaleID"});
  Sales.hasMany(Emails, { as: "Emails", foreignKey: "emSaleID"});
  OwingDispensed.belongsTo(Sales, { as: "odSale", foreignKey: "odSaleID"});
  Sales.hasMany(OwingDispensed, { as: "OwingDispenseds", foreignKey: "odSaleID"});
  SaleItem.belongsTo(Sales, { as: "Sale", foreignKey: "SaleID"});
  Sales.hasMany(SaleItem, { as: "SaleItems", foreignKey: "SaleID"});
  SaleMessage.belongsTo(Sales, { as: "smSale", foreignKey: "smSaleID"});
  Sales.hasMany(SaleMessage, { as: "SaleMessages", foreignKey: "smSaleID"});
  SaleToOnlinePayment.belongsTo(Sales, { as: "sopSale", foreignKey: "sopSaleID"});
  Sales.hasMany(SaleToOnlinePayment, { as: "SaleToOnlinePayments", foreignKey: "sopSaleID"});
  SaleToTaxType.belongsTo(Sales, { as: "sttSale", foreignKey: "sttSaleID"});
  Sales.hasMany(SaleToTaxType, { as: "SaleToTaxTypes", foreignKey: "sttSaleID"});
  SalesAudit.belongsTo(Sales, { as: "saSale", foreignKey: "saSaleID"});
  Sales.hasMany(SalesAudit, { as: "SalesAudits", foreignKey: "saSaleID"});
  SalesLoyaltyCard.belongsTo(Sales, { as: "Sale", foreignKey: "SaleID"});
  Sales.hasMany(SalesLoyaltyCard, { as: "SalesLoyaltyCards", foreignKey: "SaleID"});
  Script.belongsTo(Sales, { as: "Sale", foreignKey: "SaleID"});
  Sales.hasMany(Script, { as: "Scripts", foreignKey: "SaleID"});
  ScriptSundries.belongsTo(Sales, { as: "sunSale", foreignKey: "sunSaleID"});
  Sales.hasMany(ScriptSundries, { as: "ScriptSundries", foreignKey: "sunSaleID"});
  SalesAudit.belongsTo(SalesAuditComment, { as: "saSalesAuditComment", foreignKey: "saSalesAuditCommentID"});
  SalesAuditComment.hasMany(SalesAudit, { as: "SalesAudits", foreignKey: "saSalesAuditCommentID"});
  SalesAudit.belongsTo(SalesAuditReason, { as: "saReason", foreignKey: "saReasonID"});
  SalesAuditReason.hasMany(SalesAudit, { as: "SalesAudits", foreignKey: "saReasonID"});
  CompoundedScriptIngredient.belongsTo(Scale, { as: "csiScale", foreignKey: "csiScaleID"});
  Scale.hasMany(CompoundedScriptIngredient, { as: "CompoundedScriptIngredients", foreignKey: "csiScaleID"});
  ComputerScales.belongsTo(Scale, { as: "csScale", foreignKey: "csScaleID"});
  Scale.hasMany(ComputerScales, { as: "ComputerScales", foreignKey: "csScaleID"});
  CompoundedScriptIngredient.belongsTo(Script, { as: "Script", foreignKey: "ScriptID"});
  Script.hasMany(CompoundedScriptIngredient, { as: "CompoundedScriptIngredients", foreignKey: "ScriptID"});
  DDBook.belongsTo(Script, { as: "ddbScript", foreignKey: "ddbScriptID"});
  Script.hasMany(DDBook, { as: "DDBooks", foreignKey: "ddbScriptID"});
  Failed.belongsTo(Script, { as: "Script", foreignKey: "ScriptID"});
  Script.hasMany(Failed, { as: "Faileds", foreignKey: "ScriptID"});
  Intervention.belongsTo(Script, { as: "Script", foreignKey: "ScriptID"});
  Script.hasMany(Intervention, { as: "Interventions", foreignKey: "ScriptID"});
  InterventionNew.belongsTo(Script, { as: "itScript", foreignKey: "itScriptID"});
  Script.hasMany(InterventionNew, { as: "InterventionNews", foreignKey: "itScriptID"});
  KioskScripts.belongsTo(Script, { as: "ksScript", foreignKey: "ksScriptID"});
  Script.hasMany(KioskScripts, { as: "KioskScripts", foreignKey: "ksScriptID"});
  OrderItemToScript.belongsTo(Script, { as: "oisScript", foreignKey: "oisScriptID"});
  Script.hasMany(OrderItemToScript, { as: "OrderItemToScripts", foreignKey: "oisScriptID"});
  OwingDispensed.belongsTo(Script, { as: "odScript", foreignKey: "odScriptID"});
  Script.hasMany(OwingDispensed, { as: "OwingDispenseds", foreignKey: "odScriptID"});
  PermAllStockCardsForScript.belongsTo(Script, { as: "Script", foreignKey: "ScriptID"});
  Script.hasMany(PermAllStockCardsForScript, { as: "PermAllStockCardsForScripts", foreignKey: "ScriptID"});
  RXAudit.belongsTo(Script, { as: "raScript", foreignKey: "raScriptID"});
  Script.hasMany(RXAudit, { as: "RXAudits", foreignKey: "raScriptID"});
  SaleItem.belongsTo(Script, { as: "Script", foreignKey: "ScriptID"});
  Script.hasMany(SaleItem, { as: "SaleItems", foreignKey: "ScriptID"});
  Script.belongsTo(Script, { as: "MasterScript", foreignKey: "MasterScriptID"});
  Script.hasMany(Script, { as: "Scripts", foreignKey: "MasterScriptID"});
  ScriptBatch.belongsTo(Script, { as: "scbScript", foreignKey: "scbScriptID"});
  Script.hasMany(ScriptBatch, { as: "ScriptBatches", foreignKey: "scbScriptID"});
  ScriptClaimLine.belongsTo(Script, { as: "sclScript", foreignKey: "sclScriptID"});
  Script.hasMany(ScriptClaimLine, { as: "ScriptClaimLines", foreignKey: "sclScriptID"});
  ScriptContainerCount.belongsTo(Script, { as: "sccScript", foreignKey: "sccScriptID"});
  Script.hasMany(ScriptContainerCount, { as: "ScriptContainerCounts", foreignKey: "sccScriptID"});
  ScriptHistory.belongsTo(Script, { as: "Script", foreignKey: "ScriptID"});
  Script.hasMany(ScriptHistory, { as: "ScriptHistories", foreignKey: "ScriptID"});
  ScriptSundries.belongsTo(Script, { as: "Script", foreignKey: "ScriptID"});
  Script.hasMany(ScriptSundries, { as: "ScriptSundries", foreignKey: "ScriptID"});
  ScriptToAdditionalPayment.belongsTo(Script, { as: "staScript", foreignKey: "staScriptID"});
  Script.hasMany(ScriptToAdditionalPayment, { as: "ScriptToAdditionalPayments", foreignKey: "staScriptID"});
  ScriptToKioskScript.belongsTo(Script, { as: "stkScript", foreignKey: "stkScriptID"});
  Script.hasMany(ScriptToKioskScript, { as: "ScriptToKioskScripts", foreignKey: "stkScriptID"});
  ScriptToPrivateInsurance.belongsTo(Script, { as: "stpScript", foreignKey: "stpScriptID"});
  Script.hasMany(ScriptToPrivateInsurance, { as: "ScriptToPrivateInsurances", foreignKey: "stpScriptID"});
  ScriptToTaxType.belongsTo(Script, { as: "scttScript", foreignKey: "scttScriptID"});
  Script.hasMany(ScriptToTaxType, { as: "ScriptToTaxTypes", foreignKey: "scttScriptID"});
  ScriptTransmission.belongsTo(Script, { as: "stScript", foreignKey: "stScriptID"});
  Script.hasMany(ScriptTransmission, { as: "ScriptTransmissions", foreignKey: "stScriptID"});
  StockBatch.belongsTo(Script, { as: "sbScript", foreignKey: "sbScriptID"});
  Script.hasMany(StockBatch, { as: "StockBatches", foreignKey: "sbScriptID"});
  VaccinationInfo.belongsTo(Script, { as: "viScript", foreignKey: "viScriptID"});
  Script.hasMany(VaccinationInfo, { as: "VaccinationInfos", foreignKey: "viScriptID"});
  ClaimLTCResponse.belongsTo(ScriptAdditionalPayments, { as: "clrScriptAdditionalPayment", foreignKey: "clrScriptAdditionalPaymentsID"});
  ScriptAdditionalPayments.hasMany(ClaimLTCResponse, { as: "ClaimLTCResponses", foreignKey: "clrScriptAdditionalPaymentsID"});
  ClaimToScriptAdditional.belongsTo(ScriptAdditionalPayments, { as: "csaScriptAdditionalPayment", foreignKey: "csaScriptAdditionalPaymentID"});
  ScriptAdditionalPayments.hasMany(ClaimToScriptAdditional, { as: "ClaimToScriptAdditionals", foreignKey: "csaScriptAdditionalPaymentID"});
  ScriptToAdditionalPayment.belongsTo(ScriptAdditionalPayments, { as: "staScriptAdditionalPayment", foreignKey: "staScriptAdditionalPaymentID"});
  ScriptAdditionalPayments.hasMany(ScriptToAdditionalPayment, { as: "ScriptToAdditionalPayments", foreignKey: "staScriptAdditionalPaymentID"});
  Script.belongsTo(ScriptComment, { as: "DoctorNote", foreignKey: "DoctorNoteID"});
  ScriptComment.hasMany(Script, { as: "Scripts", foreignKey: "DoctorNoteID"});
  Script.belongsTo(ScriptComment, { as: "NoteToDoctor", foreignKey: "NoteToDoctorID"});
  ScriptComment.hasMany(Script, { as: "NoteToDoctor_Scripts", foreignKey: "NoteToDoctorID"});
  Script.belongsTo(ScriptComment, { as: "ReferalReason", foreignKey: "ReferalReasonID"});
  ScriptComment.hasMany(Script, { as: "ReferalReason_Scripts", foreignKey: "ReferalReasonID"});
  Script.belongsTo(ScriptComment, { as: "ScriptComment", foreignKey: "ScriptCommentID"});
  ScriptComment.hasMany(Script, { as: "ScriptComment_Scripts", foreignKey: "ScriptCommentID"});
  Script.belongsTo(ScriptExtra, { as: "Script_ScriptExtra", foreignKey: "ScriptID"});
  ScriptExtra.hasOne(Script, { as: "Script", foreignKey: "ScriptID"});
  StockShelfLocation.belongsTo(ShelfLocation, { as: "sslShelfLocation", foreignKey: "sslShelfLocationID"});
  ShelfLocation.hasMany(StockShelfLocation, { as: "StockShelfLocations", foreignKey: "sslShelfLocationID"});
  DDBook.belongsTo(Shrinkage, { as: "ddbShrinkage", foreignKey: "ddbShrinkageID"});
  Shrinkage.hasMany(DDBook, { as: "DDBooks", foreignKey: "ddbShrinkageID"});
  Shrinkage.belongsTo(ShrinkageReason, { as: "Reason", foreignKey: "ReasonID"});
  ShrinkageReason.hasMany(Shrinkage, { as: "Shrinkages", foreignKey: "ReasonID"});
  KioskScripts.belongsTo(SignalRMessage, { as: "ksSignalRMessage", foreignKey: "ksSignalRMessageID"});
  SignalRMessage.hasMany(KioskScripts, { as: "KioskScripts", foreignKey: "ksSignalRMessageID"});
  PersonAudit.belongsTo(SignalRMessage, { as: "paSignalRMessage", foreignKey: "paSignalRMessageID"});
  SignalRMessage.hasMany(PersonAudit, { as: "PersonAudits", foreignKey: "paSignalRMessageID"});
  TextMessages.belongsTo(SignalRMessage, { as: "tmReplySignalRMessage", foreignKey: "tmReplySignalRMessageID"});
  SignalRMessage.hasMany(TextMessages, { as: "TextMessages", foreignKey: "tmReplySignalRMessageID"});
  PersonToPortalLogin.belongsTo(SignalRSite, { as: "plgSignalRSite", foreignKey: "plgSignalRSiteID"});
  SignalRSite.hasMany(PersonToPortalLogin, { as: "PersonToPortalLogins", foreignKey: "plgSignalRSiteID"});
  Robot.belongsTo(SignalRSite, { as: "robSignalRSite", foreignKey: "robSignalRSiteID"});
  SignalRSite.hasMany(Robot, { as: "Robots", foreignKey: "robSignalRSiteID"});
  SignalRMessage.belongsTo(SignalRSite, { as: "srmSignalRSite", foreignKey: "srmSignalRSiteID"});
  SignalRSite.hasMany(SignalRMessage, { as: "SignalRMessages", foreignKey: "srmSignalRSiteID"});
  MultiDrug.belongsTo(Solvent, { as: "Solvent", foreignKey: "SolventID"});
  Solvent.hasMany(MultiDrug, { as: "MultiDrugs", foreignKey: "SolventID"});
  ScriptToPrivateInsurance.belongsTo(SouthernCross, { as: "stpSouthernCross", foreignKey: "stpSouthernCrossID"});
  SouthernCross.hasMany(ScriptToPrivateInsurance, { as: "ScriptToPrivateInsurances", foreignKey: "stpSouthernCrossID"});
  SaleItem.belongsTo(Special, { as: "Special", foreignKey: "SpecialID"});
  Special.hasMany(SaleItem, { as: "SaleItems", foreignKey: "SpecialID"});
  SpecialHOGroups.belongsTo(Special, { as: "sgSpecial", foreignKey: "sgSpecialID"});
  Special.hasMany(SpecialHOGroups, { as: "SpecialHOGroups", foreignKey: "sgSpecialID"});
  SpecialItems.belongsTo(Special, { as: "Special", foreignKey: "SpecialID"});
  Special.hasMany(SpecialItems, { as: "SpecialItems", foreignKey: "SpecialID"});
  AdditionalAddresses.belongsTo(Staff, { as: "aaStaff", foreignKey: "aaStaffID"});
  Staff.hasMany(AdditionalAddresses, { as: "AdditionalAddresses", foreignKey: "aaStaffID"});
  AdditionalContact.belongsTo(Staff, { as: "apStaff", foreignKey: "apStaffID"});
  Staff.hasMany(AdditionalContact, { as: "AdditionalContacts", foreignKey: "apStaffID"});
  ClubPointsAdjustment.belongsTo(Staff, { as: "cpaStaff", foreignKey: "cpaStaffID"});
  Staff.hasMany(ClubPointsAdjustment, { as: "ClubPointsAdjustments", foreignKey: "cpaStaffID"});
  CompoundedScriptIngredient.belongsTo(Staff, { as: "csiCheckingStaff", foreignKey: "csiCheckingStaffID"});
  Staff.hasMany(CompoundedScriptIngredient, { as: "CompoundedScriptIngredients", foreignKey: "csiCheckingStaffID"});
  CompoundedScriptIngredient.belongsTo(Staff, { as: "csiWeighingStaff", foreignKey: "csiWeighingStaffID"});
  Staff.hasMany(CompoundedScriptIngredient, { as: "csiWeighingStaff_CompoundedScriptIngredients", foreignKey: "csiWeighingStaffID"});
  DDBook.belongsTo(Staff, { as: "ddbSignOffStaff", foreignKey: "ddbSignOffStaffID"});
  Staff.hasMany(DDBook, { as: "DDBooks", foreignKey: "ddbSignOffStaffID"});
  DDBook.belongsTo(Staff, { as: "ddbStaff", foreignKey: "ddbStaffID"});
  Staff.hasMany(DDBook, { as: "ddbStaff_DDBooks", foreignKey: "ddbStaffID"});
  Delivery.belongsTo(Staff, { as: "dsStaff", foreignKey: "dsStaffID"});
  Staff.hasMany(Delivery, { as: "Deliveries", foreignKey: "dsStaffID"});
  DoctorAudit.belongsTo(Staff, { as: "daStaff", foreignKey: "daStaffID"});
  Staff.hasMany(DoctorAudit, { as: "DoctorAudits", foreignKey: "daStaffID"});
  Emails.belongsTo(Staff, { as: "emStaff", foreignKey: "emStaffID"});
  Staff.hasMany(Emails, { as: "Emails", foreignKey: "emStaffID"});
  Film.belongsTo(Staff, { as: "Staff", foreignKey: "StaffID"});
  Staff.hasMany(Film, { as: "Films", foreignKey: "StaffID"});
  Formulation.belongsTo(Staff, { as: "foCheckerStaff", foreignKey: "foCheckerStaffID"});
  Staff.hasMany(Formulation, { as: "Formulations", foreignKey: "foCheckerStaffID"});
  Formulation.belongsTo(Staff, { as: "foCreaterStaff", foreignKey: "foCreaterStaffID"});
  Staff.hasMany(Formulation, { as: "foCreaterStaff_Formulations", foreignKey: "foCreaterStaffID"});
  FormulationAudit.belongsTo(Staff, { as: "faStaff", foreignKey: "faStaffID"});
  Staff.hasMany(FormulationAudit, { as: "FormulationAudits", foreignKey: "faStaffID"});
  FormulationIngredient.belongsTo(Staff, { as: "fiStaff", foreignKey: "fiStaffID"});
  Staff.hasMany(FormulationIngredient, { as: "FormulationIngredients", foreignKey: "fiStaffID"});
  HIPSession.belongsTo(Staff, { as: "HIPSStaff", foreignKey: "HIPSStaffID"});
  Staff.hasMany(HIPSession, { as: "HIPSessions", foreignKey: "HIPSStaffID"});
  HLOutMessages.belongsTo(Staff, { as: "HLOStaff", foreignKey: "HLOStaffID"});
  Staff.hasMany(HLOutMessages, { as: "HLOutMessages", foreignKey: "HLOStaffID"});
  Notes.belongsTo(Staff, { as: "Staff", foreignKey: "StaffID"});
  Staff.hasMany(Notes, { as: "Notes", foreignKey: "StaffID"});
  OrderInvoice.belongsTo(Staff, { as: "DeliveredStaff", foreignKey: "DeliveredStaffID"});
  Staff.hasMany(OrderInvoice, { as: "OrderInvoices", foreignKey: "DeliveredStaffID"});
  OrderInvoice.belongsTo(Staff, { as: "Staff", foreignKey: "StaffID"});
  Staff.hasMany(OrderInvoice, { as: "Staff_OrderInvoices", foreignKey: "StaffID"});
  OwingDispensed.belongsTo(Staff, { as: "odStaff", foreignKey: "odStaffID"});
  Staff.hasMany(OwingDispensed, { as: "OwingDispenseds", foreignKey: "odStaffID"});
  PersonAudit.belongsTo(Staff, { as: "paStaffAffected", foreignKey: "paStaffAffectedID"});
  Staff.hasMany(PersonAudit, { as: "PersonAudits", foreignKey: "paStaffAffectedID"});
  PersonAudit.belongsTo(Staff, { as: "paStaff", foreignKey: "paStaffID"});
  Staff.hasMany(PersonAudit, { as: "paStaff_PersonAudits", foreignKey: "paStaffID"});
  RXAudit.belongsTo(Staff, { as: "raStaff", foreignKey: "raStaffID"});
  Staff.hasMany(RXAudit, { as: "RXAudits", foreignKey: "raStaffID"});
  SaleToOnlinePayment.belongsTo(Staff, { as: "sopStaff", foreignKey: "sopStaffID"});
  Staff.hasMany(SaleToOnlinePayment, { as: "SaleToOnlinePayments", foreignKey: "sopStaffID"});
  SalesAudit.belongsTo(Staff, { as: "saStaff", foreignKey: "saStaffID"});
  Staff.hasMany(SalesAudit, { as: "SalesAudits", foreignKey: "saStaffID"});
  Script.belongsTo(Staff, { as: "scrCheckingStaff", foreignKey: "scrCheckingStaffID"});
  Staff.hasMany(Script, { as: "Scripts", foreignKey: "scrCheckingStaffID"});
  Script.belongsTo(Staff, { as: "scrOriginalPharmacist", foreignKey: "scrOriginalPharmacistID"});
  Staff.hasMany(Script, { as: "scrOriginalPharmacist_Scripts", foreignKey: "scrOriginalPharmacistID"});
  Script.belongsTo(Staff, { as: "scrPackingStaff", foreignKey: "scrPackingStaffID"});
  Staff.hasMany(Script, { as: "scrPackingStaff_Scripts", foreignKey: "scrPackingStaffID"});
  Script.belongsTo(Staff, { as: "scrSignOffStaff", foreignKey: "scrSignOffStaffID"});
  Staff.hasMany(Script, { as: "scrSignOffStaff_Scripts", foreignKey: "scrSignOffStaffID"});
  Script.belongsTo(Staff, { as: "scrWeighingStaff", foreignKey: "scrWeighingStaffID"});
  Staff.hasMany(Script, { as: "scrWeighingStaff_Scripts", foreignKey: "scrWeighingStaffID"});
  Script.belongsTo(Staff, { as: "Staff", foreignKey: "StaffID"});
  Staff.hasMany(Script, { as: "Staff_Scripts", foreignKey: "StaffID"});
  ScriptHistory.belongsTo(Staff, { as: "Staff", foreignKey: "StaffID"});
  Staff.hasMany(ScriptHistory, { as: "ScriptHistories", foreignKey: "StaffID"});
  Shrinkage.belongsTo(Staff, { as: "Staff", foreignKey: "StaffID"});
  Staff.hasMany(Shrinkage, { as: "Shrinkages", foreignKey: "StaffID"});
  SignalRMessage.belongsTo(Staff, { as: "srmStaff", foreignKey: "srmStaffID"});
  Staff.hasMany(SignalRMessage, { as: "SignalRMessages", foreignKey: "srmStaffID"});
  StaffAudit.belongsTo(Staff, { as: "saStaffMakingChange", foreignKey: "saStaffMakingChangeID"});
  Staff.hasMany(StaffAudit, { as: "StaffAudits", foreignKey: "saStaffMakingChangeID"});
  StaffAudit.belongsTo(Staff, { as: "saStaffMemberAffected", foreignKey: "saStaffMemberAffectedID"});
  Staff.hasMany(StaffAudit, { as: "saStaffMemberAffected_StaffAudits", foreignKey: "saStaffMemberAffectedID"});
  StaffReadSOP.belongsTo(Staff, { as: "srsStaff", foreignKey: "srsStaffID"});
  Staff.hasMany(StaffReadSOP, { as: "StaffReadSOPs", foreignKey: "srsStaffID"});
  StaffToStaffGroup.belongsTo(Staff, { as: "stgStaff", foreignKey: "stgStaffID"});
  Staff.hasMany(StaffToStaffGroup, { as: "StaffToStaffGroups", foreignKey: "stgStaffID"});
  StockAudit.belongsTo(Staff, { as: "saStaff", foreignKey: "saStaffID"});
  Staff.hasMany(StockAudit, { as: "StockAudits", foreignKey: "saStaffID"});
  StockBatch.belongsTo(Staff, { as: "Staff", foreignKey: "StaffID"});
  Staff.hasMany(StockBatch, { as: "StockBatches", foreignKey: "StaffID"});
  TextMessages.belongsTo(Staff, { as: "tmStaff", foreignKey: "tmStaffID"});
  Staff.hasMany(TextMessages, { as: "TextMessages", foreignKey: "tmStaffID"});
  StaffAudit.belongsTo(StaffAuditComment, { as: "saStaffAuditComment", foreignKey: "saStaffAuditCommentID"});
  StaffAuditComment.hasMany(StaffAudit, { as: "StaffAudits", foreignKey: "saStaffAuditCommentID"});
  StaffAudit.belongsTo(StaffAuditReason, { as: "saReason", foreignKey: "saReasonID"});
  StaffAuditReason.hasMany(StaffAudit, { as: "StaffAudits", foreignKey: "saReasonID"});
  DoctorAudit.belongsTo(StaffGroup, { as: "daEventStaffGroup", foreignKey: "daEventStaffGroupID"});
  StaffGroup.hasMany(DoctorAudit, { as: "DoctorAudits", foreignKey: "daEventStaffGroupID"});
  FormulationAudit.belongsTo(StaffGroup, { as: "faEventStaffGroup", foreignKey: "faEventStaffGroupID"});
  StaffGroup.hasMany(FormulationAudit, { as: "FormulationAudits", foreignKey: "faEventStaffGroupID"});
  PersonAudit.belongsTo(StaffGroup, { as: "paEventStaffGroup", foreignKey: "paEventStaffGroupID"});
  StaffGroup.hasMany(PersonAudit, { as: "PersonAudits", foreignKey: "paEventStaffGroupID"});
  RXAudit.belongsTo(StaffGroup, { as: "raEventStaffGroup", foreignKey: "raEventStaffGroupID"});
  StaffGroup.hasMany(RXAudit, { as: "RXAudits", foreignKey: "raEventStaffGroupID"});
  SalesAudit.belongsTo(StaffGroup, { as: "saEventStaffGroup", foreignKey: "saEventStaffGroupID"});
  StaffGroup.hasMany(SalesAudit, { as: "SalesAudits", foreignKey: "saEventStaffGroupID"});
  StaffAudit.belongsTo(StaffGroup, { as: "saEventStaffGroup", foreignKey: "saEventStaffGroupID"});
  StaffGroup.hasMany(StaffAudit, { as: "StaffAudits", foreignKey: "saEventStaffGroupID"});
  StaffGroupMenuItems.belongsTo(StaffGroup, { as: "sgmStaffGroup", foreignKey: "sgmStaffGroupID"});
  StaffGroup.hasMany(StaffGroupMenuItems, { as: "StaffGroupMenuItems", foreignKey: "sgmStaffGroupID"});
  StaffGroupToSOP.belongsTo(StaffGroup, { as: "stsStaffGroup", foreignKey: "stsStaffGroupID"});
  StaffGroup.hasMany(StaffGroupToSOP, { as: "StaffGroupToSOPs", foreignKey: "stsStaffGroupID"});
  StaffToStaffGroup.belongsTo(StaffGroup, { as: "stgStaffGroup", foreignKey: "stgStaffGroupID"});
  StaffGroup.hasMany(StaffToStaffGroup, { as: "StaffToStaffGroups", foreignKey: "stgStaffGroupID"});
  StockAudit.belongsTo(StaffGroup, { as: "saEventStaffGroup", foreignKey: "saEventStaffGroupID"});
  StaffGroup.hasMany(StockAudit, { as: "StockAudits", foreignKey: "saEventStaffGroupID"});
  TaxType.belongsTo(StateName, { as: "ttState", foreignKey: "ttStateID"});
  StateName.hasMany(TaxType, { as: "TaxTypes", foreignKey: "ttStateID"});
  Action.belongsTo(Stock, { as: "Stock", foreignKey: "StockID"});
  Stock.hasMany(Action, { as: "Actions", foreignKey: "StockID"});
  AdditionalInvoiceChargeTypes.belongsTo(Stock, { as: "aictStock", foreignKey: "aictStockID"});
  Stock.hasMany(AdditionalInvoiceChargeTypes, { as: "AdditionalInvoiceChargeTypes", foreignKey: "aictStockID"});
  Barcode.belongsTo(Stock, { as: "Stock", foreignKey: "StockID"});
  Stock.hasMany(Barcode, { as: "Barcodes", foreignKey: "StockID"});
  BranchData.belongsTo(Stock, { as: "Stock", foreignKey: "StockID"});
  Stock.hasMany(BranchData, { as: "BranchData", foreignKey: "StockID"});
  ChemNum.belongsTo(Stock, { as: "Drug", foreignKey: "DrugID"});
  Stock.hasMany(ChemNum, { as: "ChemNums", foreignKey: "DrugID"});
  CompoundedScriptIngredient.belongsTo(Stock, { as: "Stock", foreignKey: "StockID"});
  Stock.hasMany(CompoundedScriptIngredient, { as: "CompoundedScriptIngredients", foreignKey: "StockID"});
  FormulationIngredient.belongsTo(Stock, { as: "Stock", foreignKey: "StockID"});
  Stock.hasMany(FormulationIngredient, { as: "FormulationIngredients", foreignKey: "StockID"});
  History.belongsTo(Stock, { as: "Stock", foreignKey: "StockID"});
  Stock.hasMany(History, { as: "Histories", foreignKey: "StockID"});
  MultiHistory.belongsTo(Stock, { as: "Stock", foreignKey: "StockID"});
  Stock.hasMany(MultiHistory, { as: "MultiHistories", foreignKey: "StockID"});
  MultiStock.belongsTo(Stock, { as: "msStock", foreignKey: "msStockID"});
  Stock.hasMany(MultiStock, { as: "MultiStocks", foreignKey: "msStockID"});
  OrderItems.belongsTo(Stock, { as: "Stock", foreignKey: "StockID"});
  Stock.hasMany(OrderItems, { as: "OrderItems", foreignKey: "StockID"});
  Partcode.belongsTo(Stock, { as: "Stock", foreignKey: "StockID"});
  Stock.hasMany(Partcode, { as: "Partcodes", foreignKey: "StockID"});
  PermAllStockCardsForScript.belongsTo(Stock, { as: "Stock", foreignKey: "StockID"});
  Stock.hasMany(PermAllStockCardsForScript, { as: "PermAllStockCardsForScripts", foreignKey: "StockID"});
  PrintStickersLabels.belongsTo(Stock, { as: "Stock", foreignKey: "StockID"});
  Stock.hasMany(PrintStickersLabels, { as: "PrintStickersLabels", foreignKey: "StockID"});
  SaleItem.belongsTo(Stock, { as: "Stock", foreignKey: "StockID"});
  Stock.hasMany(SaleItem, { as: "SaleItems", foreignKey: "StockID"});
  ScriptHistory.belongsTo(Stock, { as: "Drug", foreignKey: "DrugID"});
  Stock.hasMany(ScriptHistory, { as: "ScriptHistories", foreignKey: "DrugID"});
  Shrinkage.belongsTo(Stock, { as: "Stock", foreignKey: "StockId"});
  Stock.hasMany(Shrinkage, { as: "Shrinkages", foreignKey: "StockId"});
  SpecialItems.belongsTo(Stock, { as: "GiftStock", foreignKey: "GiftStockID"});
  Stock.hasMany(SpecialItems, { as: "SpecialItems", foreignKey: "GiftStockID"});
  SpecialItems.belongsTo(Stock, { as: "Stock", foreignKey: "StockID"});
  Stock.hasMany(SpecialItems, { as: "Stock_SpecialItems", foreignKey: "StockID"});
  StickersQue.belongsTo(Stock, { as: "Stock", foreignKey: "StockID"});
  Stock.hasMany(StickersQue, { as: "StickersQues", foreignKey: "StockID"});
  StockAudit.belongsTo(Stock, { as: "saStock", foreignKey: "saStockID"});
  Stock.hasMany(StockAudit, { as: "StockAudits", foreignKey: "saStockID"});
  StockBatch.belongsTo(Stock, { as: "Stock", foreignKey: "StockID"});
  Stock.hasMany(StockBatch, { as: "StockBatches", foreignKey: "StockID"});
  StockClassificationTypeDetails.belongsTo(Stock, { as: "sdStock", foreignKey: "sdStockID"});
  Stock.hasMany(StockClassificationTypeDetails, { as: "StockClassificationTypeDetails", foreignKey: "sdStockID"});
  StockForm.belongsTo(Stock, { as: "Base", foreignKey: "BaseID"});
  Stock.hasMany(StockForm, { as: "StockForms", foreignKey: "BaseID"});
  StockForm.belongsTo(Stock, { as: "Device", foreignKey: "DeviceID"});
  Stock.hasMany(StockForm, { as: "Device_StockForms", foreignKey: "DeviceID"});
  StockImage.belongsTo(Stock, { as: "imgStock", foreignKey: "imgStockID"});
  Stock.hasMany(StockImage, { as: "StockImages", foreignKey: "imgStockID"});
  StockInteract.belongsTo(Stock, { as: "Stock", foreignKey: "StockID"});
  Stock.hasMany(StockInteract, { as: "StockInteracts", foreignKey: "StockID"});
  StockInternet.belongsTo(Stock, { as: "siStock", foreignKey: "siStockID"});
  Stock.hasOne(StockInternet, { as: "StockInternet", foreignKey: "siStockID"});
  StockShelfLocation.belongsTo(Stock, { as: "sslStock", foreignKey: "sslStockID"});
  Stock.hasMany(StockShelfLocation, { as: "StockShelfLocations", foreignKey: "sslStockID"});
  StockTakeItems.belongsTo(Stock, { as: "Stock", foreignKey: "StockID"});
  Stock.hasMany(StockTakeItems, { as: "StockTakeItems", foreignKey: "StockID"});
  StockToInternetTag.belongsTo(Stock, { as: "stiStock", foreignKey: "stiStockID"});
  Stock.hasMany(StockToInternetTag, { as: "StockToInternetTags", foreignKey: "stiStockID"});
  StockToRobot.belongsTo(Stock, { as: "strStock", foreignKey: "strStockID"});
  Stock.hasMany(StockToRobot, { as: "StockToRobots", foreignKey: "strStockID"});
  StockToSOP.belongsTo(Stock, { as: "stsStock", foreignKey: "stsStockID"});
  Stock.hasMany(StockToSOP, { as: "StockToSOPs", foreignKey: "stsStockID"});
  StockToTaxType.belongsTo(Stock, { as: "sttStock", foreignKey: "sttStockID"});
  Stock.hasMany(StockToTaxType, { as: "StockToTaxTypes", foreignKey: "sttStockID"});
  StockAudit.belongsTo(StockAuditComment, { as: "saStockAuditComment", foreignKey: "saStockAuditCommentID"});
  StockAuditComment.hasMany(StockAudit, { as: "StockAudits", foreignKey: "saStockAuditCommentID"});
  StockAudit.belongsTo(StockAuditReason, { as: "saReason", foreignKey: "saReasonID"});
  StockAuditReason.hasMany(StockAudit, { as: "StockAudits", foreignKey: "saReasonID"});
  SaleItemBatch.belongsTo(StockBatch, { as: "sibStockBatch", foreignKey: "sibStockBatchID"});
  StockBatch.hasMany(SaleItemBatch, { as: "SaleItemBatches", foreignKey: "sibStockBatchID"});
  Shrinkage.belongsTo(StockBatch, { as: "shStockBatch", foreignKey: "shStockBatchID"});
  StockBatch.hasMany(Shrinkage, { as: "Shrinkages", foreignKey: "shStockBatchID"});
  StockClassificationTypeDetails.belongsTo(StockClassificationType, { as: "sdStockClassificationType", foreignKey: "sdStockClassificationTypeID"});
  StockClassificationType.hasMany(StockClassificationTypeDetails, { as: "StockClassificationTypeDetails", foreignKey: "sdStockClassificationTypeID"});
  Stock.belongsTo(StockComment, { as: "StockComment", foreignKey: "StockCommentID"});
  StockComment.hasMany(Stock, { as: "Stocks", foreignKey: "StockCommentID"});
  Drug.belongsTo(StockForm, { as: "drCompoundForm", foreignKey: "drCompoundFormID"});
  StockForm.hasMany(Drug, { as: "Drugs", foreignKey: "drCompoundFormID"});
  Formulation.belongsTo(StockForm, { as: "CompoundForm", foreignKey: "CompoundFormID"});
  StockForm.hasMany(Formulation, { as: "Formulations", foreignKey: "CompoundFormID"});
  StockTakeItems.belongsTo(StockTake, { as: "StockTake", foreignKey: "StockTakeID"});
  StockTake.hasMany(StockTakeItems, { as: "StockTakeItems", foreignKey: "StockTakeID"});
  AdditionalAddresses.belongsTo(Supplier, { as: "aaSupplier", foreignKey: "aaSupplierID"});
  Supplier.hasMany(AdditionalAddresses, { as: "AdditionalAddresses", foreignKey: "aaSupplierID"});
  AdditionalContact.belongsTo(Supplier, { as: "apSupplier", foreignKey: "apSupplierID"});
  Supplier.hasMany(AdditionalContact, { as: "AdditionalContacts", foreignKey: "apSupplierID"});
  Batches.belongsTo(Supplier, { as: "Supplier", foreignKey: "SupplierID"});
  Supplier.hasMany(Batches, { as: "Batches", foreignKey: "SupplierID"});
  CreditorFile.belongsTo(Supplier, { as: "Supplier", foreignKey: "SupplierID"});
  Supplier.hasMany(CreditorFile, { as: "CreditorFiles", foreignKey: "SupplierID"});
  HeadOfficeGroups.belongsTo(Supplier, { as: "GroupSupplier", foreignKey: "GroupSupplierID"});
  Supplier.hasMany(HeadOfficeGroups, { as: "HeadOfficeGroups", foreignKey: "GroupSupplierID"});
  MultiHeaderCode.belongsTo(Supplier, { as: "mhSupplier", foreignKey: "mhSupplierID"});
  Supplier.hasMany(MultiHeaderCode, { as: "MultiHeaderCodes", foreignKey: "mhSupplierID"});
  OrderInvoice.belongsTo(Supplier, { as: "Supplier", foreignKey: "SupplierID"});
  Supplier.hasMany(OrderInvoice, { as: "OrderInvoices", foreignKey: "SupplierID"});
  Partcode.belongsTo(Supplier, { as: "Supplier", foreignKey: "SupplierID"});
  Supplier.hasMany(Partcode, { as: "Partcodes", foreignKey: "SupplierID"});
  Stock.belongsTo(Supplier, { as: "PriceBySupplier_Supplier", foreignKey: "PriceBySupplier"});
  Supplier.hasMany(Stock, { as: "Stocks", foreignKey: "PriceBySupplier"});
  StockBatch.belongsTo(Supplier, { as: "Supplier", foreignKey: "SupplierID"});
  Supplier.hasMany(StockBatch, { as: "StockBatches", foreignKey: "SupplierID"});
  SuppUD.belongsTo(Supplier, { as: "Supplier", foreignKey: "SupplierID"});
  Supplier.hasMany(SuppUD, { as: "SuppUDs", foreignKey: "SupplierID"});
  Supplier.belongsTo(SupplierComment, { as: "supSupplierComment", foreignKey: "supSupplierCommentID"});
  SupplierComment.hasMany(Supplier, { as: "Suppliers", foreignKey: "supSupplierCommentID"});
  TextMessages.belongsTo(TextMessageTemplate, { as: "tmTextMessageTemplate", foreignKey: "tmTextMessageTemplateID"});
  TextMessageTemplate.hasMany(TextMessages, { as: "TextMessages", foreignKey: "tmTextMessageTemplateID"});
  PersonAudit.belongsTo(TextMessages, { as: "paTextMessage", foreignKey: "paTextMessageID"});
  TextMessages.hasMany(PersonAudit, { as: "PersonAudits", foreignKey: "paTextMessageID"});
  ScriptTransmission.belongsTo(TextMessages, { as: "stTextMessage", foreignKey: "stTextMessageID"});
  TextMessages.hasMany(ScriptTransmission, { as: "ScriptTransmissions", foreignKey: "stTextMessageID"});
  SignalRMessage.belongsTo(TextMessages, { as: "srmTextMessage", foreignKey: "srmTextMessageID"});
  TextMessages.hasMany(SignalRMessage, { as: "SignalRMessages", foreignKey: "srmTextMessageID"});
  AdditionalNames.belongsTo(Title, { as: "anTitle", foreignKey: "anTitleID"});
  Title.hasMany(AdditionalNames, { as: "AdditionalNames", foreignKey: "anTitleID"});
  Doctor.belongsTo(Title, { as: "Title", foreignKey: "TitleID"});
  Title.hasMany(Doctor, { as: "Doctors", foreignKey: "TitleID"});
  Person.belongsTo(Title, { as: "Title", foreignKey: "TitleID"});
  Title.hasMany(Person, { as: "People", foreignKey: "TitleID"});
  Staff.belongsTo(Title, { as: "stTitle", foreignKey: "stTitleID"});
  Title.hasMany(Staff, { as: "Staffs", foreignKey: "stTitleID"});
  VaccinationInfo.belongsTo(VaccinationEncounter, { as: "viVaccinationEncounter", foreignKey: "viVaccinationEncounterID"});
  VaccinationEncounter.hasMany(VaccinationInfo, { as: "VaccinationInfos", foreignKey: "viVaccinationEncounterID"});
  ExtraPaymentType.belongsTo(VoucherType, { as: "eptVoucherType", foreignKey: "eptVoucherTypeID"});
  VoucherType.hasMany(ExtraPaymentType, { as: "ExtraPaymentTypes", foreignKey: "eptVoucherTypeID"});
  IssuedVoucher.belongsTo(VoucherType, { as: "ivVoucherType", foreignKey: "ivVoucherTypeID"});
  VoucherType.hasMany(IssuedVoucher, { as: "IssuedVouchers", foreignKey: "ivVoucherTypeID"});
  Stock.belongsTo(VoucherType, { as: "skVoucherType", foreignKey: "skVoucherTypeID"});
  VoucherType.hasMany(Stock, { as: "Stocks", foreignKey: "skVoucherTypeID"});

  return {
    Account,
    AccountAudit,
    AccountCategory,
    AccountClass,
    Action,
    ActionInstance,
    AdditionalAddresses,
    AdditionalContact,
    AdditionalContactRelationShipType,
    AdditionalInvoiceChargeTypes,
    AdditionalInvoiceCharges,
    AdditionalNames,
    AdditionalOrderInvoiceCharges,
    AdditionalOrderInvoiceItemsCharges,
    AddressTypes,
    Allergy,
    AppointmentCategory,
    AppointmentLabel,
    AppointmentResource,
    AppointmentStatus,
    Appointments,
    ArchiveRXAudit,
    ArchiveRXAuditReason,
    ArchiveRxAuditComment,
    ArchiveScriptTransmissionMessage,
    AusOptions,
    Autonumber,
    AvaliableCurrency,
    Barcode,
    Batches,
    BatchesAudit,
    BatchesAuditComment,
    Branch,
    BranchBanners,
    BranchData,
    BranchExportDate,
    BranchRegions,
    BranchSalesData,
    BranchVPN,
    Cards,
    Category,
    ClaimResponseItem,
    ClaimToScriptAdditional,
    Club,
    ClubMember,
    ClubPointsAdjustment,
    ClubPointsAdjustmentReason,
    ClubStock,
    CompanionSaleItem,
    CompanionSaleItemDetails,
    CompanionSaleLinks,
    CompanionSales,
    CompanionScheme,
    CompoundPriceOptions,
    CompoundSheetDetail,
    CompoundStats,
    CompoundedScriptIngredientBatches,
    Computer,
    ComputerOperations,
    ComputerScales,
    Conditions,
    ContactTypes,
    Contract,
    ConvSOH,
    CreditorFile,
    CustomLabel,
    DDBook,
    DHBFiles,
    DHBPriceOptions,
    Debit,
    Delivery,
    DeliveryComment,
    DeliveryFees,
    DeliveryPackaging,
    DeliveryProvider,
    DeliveryStatus,
    DispExport,
    Doctor,
    DoctorAuditComment,
    DoctorAuditReason,
    DoctorTypes,
    DoseFrequency,
    Drug,
    DrugUpdateIDS,
    EftposUnits,
    EmailTemplate,
    Emails,
    EndOfDay,
    EndOfDayCurrency,
    Epay,
    Equivalent,
    EthnicGroup,
    EventStatus,
    ExternalSNetDetails,
    ExtraPaymentType,
    EziblistAdherance,
    EziblistDevices,
    Failed,
    Film,
    FilmDetails,
    FilmProcess,
    FilmService,
    Foil,
    FoilPack,
    FoilPackNo,
    ForiegnExchange,
    Formulation,
    FormulationAudit,
    FormulationAuditComment,
    FormulationAuditReason,
    FormulationComment,
    FormulationIngredient,
    FormulationPrice,
    FormulationProcedureName,
    FormulationProcedureSteps,
    FormulationProcedures,
    FormulationToInternetTags,
    FormulationToSOP,
    GlobalToTaxType,
    HIPAnswerToPersonAudit,
    HIPForm,
    HIPSession,
    HIPStatusAnswer,
    HIPStatusQuestion,
    HLInMessages,
    HLOutMessages,
    HOClubSale,
    HOSettings,
    HOStockIDS,
    HOStockRetail,
    HeadOfficeGroups,
    Hints,
    History,
    IntCondition,
    InternetSchemes,
    InternetTag,
    Intervention,
    InterventionNew,
    Invoice,
    KioskScriptBasket,
    KioskScripts,
    LOTSColor,
    LOTSDrug,
    LTCAssessments,
    LabelsQue,
    LocalHealthFacilities,
    LookupAddress,
    MMS,
    MMSGroup,
    ManagementPlans,
    MenuUsage,
    Mixture,
    MultiDrug,
    MultiHeaderCode,
    MultiHistory,
    MultiSpecReg,
    MultiStock,
    MultiStoreRego,
    NRTNum,
    NewCompanionSales,
    NewFoil,
    NewFoilFreq,
    NewFoilPack,
    Notes,
    OldCategory,
    OpeningHour,
    Operations,
    Options,
    OrderInvoice,
    OrderItemBatch,
    OrderItemToScript,
    OrderItems,
    OrderItemsHistory,
    OrderMessage,
    OrderNote,
    Orders,
    OwingDispensed,
    POSComments,
    POSExport,
    PatientAuditComment,
    PatientComment,
    Person,
    PersonActionlevel,
    PersonAudit,
    PersonAuditReason,
    PersonEthnicGroups,
    PersonFiles,
    PersonInternetSchemes,
    PersonLTCStatus,
    PersonLoyaltyCards,
    PersonManagementPlanActions,
    PersonManagementPlanComments,
    PersonManagementPlanFactors,
    PersonOnlinePaymentProviderCodes,
    PersonPromotionalConsent,
    PersonRegistrations,
    PersonType,
    PharmacyDepots,
    PortalName,
    PostCodes,
    PriceOptions,
    PrintJobs,
    PrintStickersLabels,
    ProductClass,
    ProductGroup,
    ProgramLog,
    PromotionalConsentTypes,
    Purpose,
    RXAudit,
    RXAuditReason,
    ReposMsg,
    RestHome,
    ResthomeInternetSchemes,
    Robot,
    Rounding,
    RouteOfAdministration,
    RxAuditComment,
    SNOMEDReasonForPrescribing,
    SaleItem,
    SaleItemBatch,
    SaleItemDeleted,
    SaleItemExtra,
    SaleItemToTaxType,
    SaleMessage,
    SalePayment,
    SaleToOnlinePayment,
    SaleToTaxType,
    Sales,
    SalesAudit,
    SalesAuditComment,
    SalesAuditReason,
    Scale,
    Script,
    ScriptClaimLine,
    ScriptComment,
    ScriptContainerCount,
    ScriptExtra,
    ScriptHistory,
    ScriptPersonChanged,
    ScriptToInternetTags,
    ScriptToKioskScript,
    ScriptToPrivateInsurance,
    ScriptToTaxType,
    ScriptTransmission,
    ScriptTransmissionToTransmissionMessage,
    ShelfLocation,
    SignalRMessage,
    SignalRSite,
    Solvent,
    SouthernCross,
    Special,
    SpecialHOGroups,
    SpecialItems,
    SpecialStockIDS,
    Staff,
    StaffAudit,
    StaffAuditComment,
    StaffAuditReason,
    StaffGroupToSOP,
    StaffOptions,
    StaffPasswordsUsed,
    StaffReadSOP,
    StaffToStaffGroup,
    StateName,
    Statement,
    StickersQue,
    Stock,
    StockAudit,
    StockAuditComment,
    StockAuditReason,
    StockBatch,
    StockClassificationType,
    StockClassificationTypeDetails,
    StockForm,
    StockIngredient,
    StockLocation,
    StockShelfLocation,
    StockTake,
    StockTakeItems,
    StockToInternetTag,
    StockToRobot,
    StockToSOP,
    StockToTaxType,
    Stockandhistory,
    StoreRego,
    Sundries,
    SuperSIG,
    SuppUD,
    Supplier,
    SupplierComment,
    SupplierSettings,
    Surcharge,
    SystemOptions,
    TaxType,
    TempDrug,
    TextMessageTemplate,
    TextMessages,
    TherapGroupToCondition,
    Title,
    TrackingFieldChange,
    TransitionPayment,
    TransitionPaymentType,
    TransmissionsForNoneScript,
    URLS,
    VaccinationEncounter,
    VaccinationInfo,
    VariableRepeats,
    Version,
    VirtualPillBox,
    VoucherType,
    WebLoginByPerson,
    XeroAccounts,
    __RefactorLog,
    ePayTracks,
    eScriptCDA,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
