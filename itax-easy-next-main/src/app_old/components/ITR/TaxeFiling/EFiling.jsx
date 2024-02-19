import { useContext } from "react";
import { StoreContext } from "../../../store/store-context";
import { itr1 as itrObj } from "../../../../ITR_Template";

export default function EFiling() {
  const [state, dispatch] = useContext(StoreContext);
  const personalInfo = state.itr.personalInfo.personalInfo;
  const assesseeName = `${state.itr.personalInfo.personalInfo.firstName} ${state.itr.personalInfo.personalInfo.middleName} ${state.itr.personalInfo.personalInfo.lastName}`;

  const calculateTax = (income) => {
    const RATE_1 = 0.0;
    const RATE_2 = 0.05;
    const RATE_3 = 0.1;
    const RATE_4 = 0.15;
    const RATE_5 = 0.2;
    const RATE_6 = 0.25;
    const RATE_7 = 0.3;
    const CESS = 0.04;

    const LIMIT_1 = 250000;
    const LIMIT_2 = 500000;
    const LIMIT_3 = 750000;
    const LIMIT_4 = 1000000;
    const LIMIT_5 = 1250000;
    const LIMIT_6 = 1500000;

    let tax = 0;
    if (income <= LIMIT_1) {
      tax = RATE_1 * income;
    } else if (income <= LIMIT_2) {
      tax = RATE_2 * (income - LIMIT_1);
    } else if (income <= LIMIT_3) {
      tax = RATE_3 * (income - LIMIT_2) + calculateTax(LIMIT_2);
    } else if (income <= LIMIT_4) {
      tax = RATE_4 * (income - LIMIT_3) + calculateTax(LIMIT_3);
    } else if (income <= LIMIT_5) {
      tax = RATE_5 * (income - LIMIT_4) + calculateTax(LIMIT_4);
    } else if (income <= LIMIT_6) {
      tax = RATE_6 * (income - LIMIT_5) + calculateTax(LIMIT_5);
    } else {
      tax = RATE_7 * (income - LIMIT_6) + calculateTax(LIMIT_6);
    }
    tax + CESS * tax;
    return tax;
  };

  const form16_type = state.itr_type.form_type;

  // three types of income (limited values)
  const incomeChargeableUnderTheHeadSalaries =
    state.itr.incomeSources.salary.salaryInformation
      .incomeChargeableUnderTheHeadSalaries;
  const incomeFromOtherSources =
    state.itr.incomeSources.otherIncome.totalOfAllOtherIncome;
  const headhouseProperty =
    state.itr.incomeSources.houseProperty
      .incomeChargeableUnderTheHeadHouseProperty;
  const totalSalary =
    Number(incomeChargeableUnderTheHeadSalaries) +
    Number(incomeFromOtherSources) +
    Number(headhouseProperty);

  // values from from-16

  const FORM_16_salary = Number(
    state.itr.form16.formData.salaryAsPerSection17_1.salary
  );
  const FORM_16_valueOfPrequisites = Number(
    state.itr.form16.formData.valueOfPerquisitesUnderSection17_2
  );
  const FORM_16_profitsInSalary = Number(
    state.itr.form16.formData.profitsInLieuOfSalaryUnderSection17_3
  );
  const FORM_16_grossSalary = Number(state.itr.form16.formData.grossSalary);
  const FORM_16_exemptAllowance = Number(
    state.itr.form16.formData.exemptAllowancesUnderSection10
  );
  const FORM_16_netSalary = Number(state.itr.form16.formData.netSalary);
  const FORM_16_entertainmentAllowance = Number(
    state.itr.form16.formData.entertainmentAllowanceUnderSection16ii
  );
  const FORM_16_professionalTax = Number(
    state.itr.form16.formData.professionalTaxUnderSection16iii
  );
  const FORM_16_totalIncome = Number(state.itr.form16.formData.totalIncome);

  // three type of deductions (limited values)
  const deduction1 = state.itr.deductions.section80Deductions.totalDeduction;
  const deduction2 =
    state.itr.deductions.moreDeductions.amountOfTotalMoreDeductions;
  const deduction3 =
    state.itr.deductions.otherDeductions.amountOfTotalOtherDeductions;

  const totalGrossIncome =
    form16_type === "form-16" ? FORM_16_totalIncome : totalSalary;
  const totalDeduction =
    Number(deduction1) + Number(deduction2) + Number(deduction3);
  const taxableIncome = totalGrossIncome - totalDeduction;

  const rebateLimit_1 = 500000;
  const rebateLimit_2 = 700000;

  const rebate =
    taxableIncome > 250000
      ? taxableIncome <= rebateLimit_1
        ? 12500
        : taxableIncome <= rebateLimit_2
        ? 25000
        : 0
      : 0;

  const tds = Number(state.itr.taxesPaid.tds.nonSalaryTDS.totalTaxDeducted);
  const tcs = Number(
    state.itr.taxesPaid.tds.taxCollectedAtSource.totalTaxCollected
  );
  const selftax = Number(state.itr.taxesPaid.selfTaxPayments.amountPaid);

  const tax = calculateTax(taxableIncome);
  const totalTaxPaid = (tds + tcs + selftax).toFixed(2);
  const balanceTaxPayable = (tax - totalTaxPaid).toFixed(2);

  const parentFlag =
    state.itr.deductions.moreDeductions.section80DDeductionsForMedicalInsurance.forParents.substring(
      0,
      1
    );
  const forParents =
    state.itr.deductions.moreDeductions.section80DDeductionsForMedicalInsurance
      .forParents;

  // user_input deductions page no.(2) without limits
  const user_medicalInsurancePremiumSelf = Number(
    state.itr.deductions.moreDeductions.section80DDeductionsForMedicalInsurance
      .medicalInsurancePremium_forSelfAndFamily
  );
  const user_medicalInsurancePremiumParents = Number(
    state.itr.deductions.moreDeductions.section80DDeductionsForMedicalInsurance
      .medicalInsurancePremium_forParents
  );
  const user_HealthCheckUpFeesSelf = Number(
    state.itr.deductions.moreDeductions.section80DDeductionsForMedicalInsurance
      .preventiveHealthCheckUpFees_forSelfAndFamily
  );
  const user_HealthCheckUpFeesParents = Number(
    state.itr.deductions.moreDeductions.section80DDeductionsForMedicalInsurance
      .preventiveHealthCheckUpFees_forParents
  );
  const user_section80E = Number(
    state.itr.deductions.moreDeductions
      .section80EEducationLoanOnHigherStudiesGraduateOrPostGraduate
      .interestOnHigherEducationLoanPaidThisYear
  );
  const user_section80Ccc = Number(
    state.itr.deductions.moreDeductions
      .section80CccContributionToPensionPlanAnnuityFund
      .contributionAmountToPensionPlanAnnuityFundForSection80Ccc
  );
  const user_section80Ccd1And1B = Number(
    state.itr.deductions.moreDeductions
      .section80Ccd1And1BEmployeeContributionToNewPensionSchemeNps
      .contributionTowardsSection80Ccd1
  );
  const user_section80Ccd2 = Number(
    state.itr.deductions.moreDeductions.section80Ccd2EmployerContributionInNps
      .employersContributionTowardsNpsUpto10OfSalary
  );
  const user_section80Gg = Number(
    state.itr.deductions.moreDeductions
      .section80GgDeductionForHouseRentSelfEmployedOrSalaryWithNoHra
      .amountOfRentPaid
  );
  const user_section80Ddb = Number(
    state.itr.deductions.moreDeductions
      .section80DdbDeductionsForTreatmentOfSpecifiedDiseasesAndAilments
      .medicalTreatmentCostsForSpecifiedDiseasesUnderSection80Ddb
  );
  const user_section80Ee = Number(
    state.itr.deductions.moreDeductions.section80EeInterestOnHomeLoan
      .deductionsUnderSection80Ee
  );
  const user_section80Rrb = Number(
    state.itr.deductions.moreDeductions.section80RrbIncomeOnPatentsInventions
      .deductionAmount
  );
  const user_section80Ggc = Number(
    state.itr.deductions.moreDeductions.section80GgcContributionToPoliticalParty
      .contributionOrDonationsToPoliticalParty
  );
  const user_section80Jja = Number(
    state.itr.deductions.moreDeductions.section80Jja
      .deductionExemptingProfitsFromBioDegradableWasteBusiness
  );
  const user_section80Gga =
    Number(
      state.itr.deductions.moreDeductions
        .section80GgaDonationsForScientificResearchOrRuralDevelopment
        .detailsOfDonee.donationAmountCash
    ) +
    Number(
      state.itr.deductions.moreDeductions
        .section80GgaDonationsForScientificResearchOrRuralDevelopment
        .detailsOfDonee.donationAmountOtherModesLikeEPayChequeDdEtc
    );
  // const user_section80Qqb = state.itr.deductions.moreDeductions.section80QqbRoyaltyReceivedOnBooks.deductionAmount;
  // const user_section80Ccg = state.itr.deductions.moreDeductions.section80CcgRajivGandhiEquitySavingScheme.investmentMadeUnderRajivGandhiEquitySavingScheme;

  // limited value deductions from deduction page no.(2)
  const {
    medicalInsurancePremiumSelf,
    medicalInsurancePremiumParents,
    HealthCheckUpFeesSelf,
    HealthCheckUpFeesParents,
    section80E,
    section80Ccc,
    section80Ccd1And1B,
    section80Ccd2,
    section80Ccg,
    section80Gg,
    section80Ddb,
    section80Ee,
    section80Qqb,
    section80Rrb,
    section80Ggc,
    section80Jja,
    section80Gga,
  } = state.itr.deductions.moreDeductions.allowedVal;

  // used in deduction page 1 and 3 returns limited and not limited values in an object
  const section80CDeduction = () => {
    const SECTION_80_LIMIT = 150000;
    const section80 =
      state.itr.deductions.section80Deductions.investmentsUnderSection80C;
    const {
      insurance,
      ulip,
      pf,
      mutualFund,
      gpf,
      ppf,
      houseRepayment,
      childrenEducation,
    } = section80;

    let total =
      Number(insurance) +
      Number(ulip) +
      Number(pf) +
      Number(mutualFund) +
      Number(gpf) +
      Number(ppf) +
      Number(houseRepayment) +
      Number(childrenEducation);

    let allowedTotal =
      total > SECTION_80_LIMIT ? Number(SECTION_80_LIMIT) : total;

    if (total >= SECTION_80_LIMIT) {
      total = Number(SECTION_80_LIMIT);
    }

    return { total, allowedTotal };
  };

  const section80GDeduction = () => {
    const qualifyingPercentage =
      state.itr.deductions.section80Deductions
        .section80GDonationsToCharitableOrganizations.detailsOfDonee
        .qualifyingPercentage;
    const total =
      Number(
        state.itr.deductions.section80Deductions
          .section80GDonationsToCharitableOrganizations.amountOfDonation
          .donationAmountCash
      ) +
      Number(
        state.itr.deductions.section80Deductions
          .section80GDonationsToCharitableOrganizations.amountOfDonation
          .donationAmountOther
      );
    const allowedTotal =
      qualifyingPercentage === "50%" ? Number(total / 2) : total;
    return { total, allowedTotal };
  };

  const section80DD_80UDeductions = () => {
    const LIMIT_1 = 75000;
    const LIMIT_2 = 125000;
    let section80U = 0;
    let section80DD = 0;

    const disabilityUnderSection80U =
      state.itr.deductions.otherDeductions.section80DdDisabledDependentDeduction
        .typeofDisability;
    const disabilityUnderSection80DD =
      state.itr.deductions.otherDeductions.section80UDisability
        .typeofDisability;

    disabilityUnderSection80U === "DisabilityUnderSection80U_40"
      ? (section80U = LIMIT_1)
      : null;
    disabilityUnderSection80U === "DisabilityUnderSection80U_Severe"
      ? (section80U = LIMIT_2)
      : null;
    disabilityUnderSection80DD === "DisabilityUnderSection80DD_40"
      ? (section80DD = LIMIT_1)
      : null;
    disabilityUnderSection80DD === "DisabilityUnderSection80DD_Severe"
      ? (section80DD = LIMIT_2)
      : null;

    return { section80U, section80DD };
  };

  const section80G = section80GDeduction();
  const section80C = section80CDeduction();
  const section80DD_80U = section80DD_80UDeductions();

  const totalUser_deduction_2 =
    Number(user_medicalInsurancePremiumSelf) +
    Number(user_medicalInsurancePremiumParents) +
    Number(user_HealthCheckUpFeesSelf) +
    Number(user_HealthCheckUpFeesParents) +
    Number(user_section80E) +
    Number(user_section80Ccc) +
    Number(user_section80Ccd1And1B) +
    Number(user_section80Ccd2) +
    Number(user_section80Gg) +
    Number(user_section80Ddb) +
    Number(user_section80Ee) +
    Number(user_section80Rrb) +
    Number(user_section80Ggc) +
    Number(user_section80Jja) +
    Number(user_section80Gga) +
    Number(section80C.total) +
    Number(section80DD_80U.section80DD) +
    Number(section80G.total);

  const section80dAllowedTotal =
    Number(medicalInsurancePremiumSelf) +
    Number(medicalInsurancePremiumParents) +
    Number(HealthCheckUpFeesSelf) +
    Number(HealthCheckUpFeesParents);

  // 1. personal info -
  itrObj.PersonalInfo.AssesseeName.FirstName =
    state.itr.personalInfo.personalInfo.firstName;
  itrObj.PersonalInfo.AssesseeName.MiddleName =
    state.itr.personalInfo.personalInfo.middleName;
  itrObj.PersonalInfo.AssesseeName.SurNameOrOrgName =
    state.itr.personalInfo.personalInfo.lastName;
  itrObj.PersonalInfo.PAN;
  itrObj.PersonalInfo.Address.ResidenceNo = state.itr.personalInfo.address.flat;
  itrObj.PersonalInfo.Address.ResidenceName =
    state.itr.personalInfo.address.premiseName;
  itrObj.PersonalInfo.Address.RoadOrStreet =
    state.itr.personalInfo.address.road;
  itrObj.PersonalInfo.Address.LocalityOrArea =
    state.itr.personalInfo.address.area;
  itrObj.PersonalInfo.Address.CityOrTownOrDistrict =
    state.itr.personalInfo.address.city;
  itrObj.PersonalInfo.Address.StateCode = state.itr.personalInfo.address.state;
  itrObj.PersonalInfo.Address.CountryCode =
    state.itr.personalInfo.address.country;
  itrObj.PersonalInfo.Address.PinCode = state.itr.personalInfo.address.pincode;
  itrObj.PersonalInfo.Address.CountryCodeMobile =
    state.itr.personalInfo.address.country;
  itrObj.PersonalInfo.Address.MobileNo = state.itr.personalInfo.address.mobile;
  itrObj.PersonalInfo.Address.EmailAddress =
    state.itr.personalInfo.address.email;
  itrObj.PersonalInfo.DOB = state.itr.personalInfo.personalInfo.dob;
  itrObj.PersonalInfo.EmployerCategory =
    state.itr.incomeSources.salary.employerDetails.employerType;
  itrObj.PersonalInfo.AadhaarCardNo =
    state.itr.personalInfo.personalInfo.aadhaarCardNumber;

  //2. income and deductions -
  itrObj.ITR1_IncomeDeductions.GrossSalary =
    form16_type === "form-16"
      ? FORM_16_grossSalary
      : state.itr.incomeSources.salary.salaryInformation
          .salaryAsPerSection17_1 +
        state.itr.incomeSources.salary
          .salaryInformationprofitsInLieuOfSalaryUnderSection17_3;

  itrObj.ITR1_IncomeDeductions.Salary =
    form16_type === "form-16"
      ? FORM_16_salary
      : state.itr.incomeSources.salary.salaryInformation.balance;

  itrObj.ITR1_IncomeDeductions.PerquisitesValue =
    form16_type === "form-16"
      ? FORM_16_valueOfPrequisites
      : state.itr.incomeSources.salary.salaryInformation
          .valueOfPerquisitesUnderSection17_2;

  itrObj.ITR1_IncomeDeductions.AllwncExemptUs10.TotalAllwncExemptUs10 =
    form16_type === "form-16"
      ? FORM_16_exemptAllowance
      : state.itr.incomeSources.salary.salaryInformation
          .exemptAllowancesUnderSection10;

  itrObj.ITR1_IncomeDeductions.NetSalary =
    form16_type === "form-16"
      ? FORM_16_totalIncome
      : incomeChargeableUnderTheHeadSalaries;

  itrObj.ITR1_IncomeDeductions.DeductionUs16 =
    form16_type === "form-16"
      ? Number(FORM_16_entertainmentAllowance) + Number(FORM_16_professionalTax)
      : Number(
          state.itr.incomeSources.salary.salaryInformation
            .standardDeductionUnderSection16ia
        ) +
        Number(
          state.itr.incomeSources.salary.salaryInformation
            .professionalTaxUnderSection16iii
        );

  itrObj.ITR1_IncomeDeductions.DeductionUs16ia =
    form16_type === "form-16"
      ? 0
      : state.itr.incomeSources.salary.salaryInformation
          .standardDeductionUnderSection16ia;

  // itrObj.ITR1_IncomeDeductions.EntertainmentAlw16ii
  itrObj.ITR1_IncomeDeductions.ProfessionalTaxUs16iii =
    form16_type === "form-16"
      ? FORM_16_professionalTax
      : state.itr.incomeSources.salary.salaryInformation
          .professionalTaxUnderSection16iii;

  itrObj.ITR1_IncomeDeductions.IncomeFromSal =
    form16_type === "form-16"
      ? FORM_16_totalIncome
      : incomeChargeableUnderTheHeadSalaries;

  itrObj.ITR1_IncomeDeductions.GrossRentReceived =
    form16_type === "form-16"
      ? 0
      : state.itr.incomeSources.houseProperty
          .estimatedIncomeFromTheHouseProperty.estimatedAnnualRentReceivable;
  itrObj.ITR1_IncomeDeductions.TaxPaidlocalAuth =
    form16_type === "form-16"
      ? 0
      : state.itr.incomeSources.houseProperty
          .estimatedIncomeFromTheHouseProperty.houseTaxPaidByYou;
  itrObj.ITR1_IncomeDeductions.AnnualValue =
    form16_type === "form-16"
      ? 0
      : state.itr.incomeSources.houseProperty
          .estimatedIncomeFromTheHouseProperty.estimatedAnnualRentReceivable;
  // itrObj.ITR1_IncomeDeductions.StandardDeduction
  itrObj.ITR1_IncomeDeductions.InterestPayable =
    form16_type === "form-16"
      ? 0
      : state.itr.incomeSources.houseProperty
          .interestPaidOnHousingLoanForThisHouseProperty
          .interestPaidOnLoanForThisHouseProperty;
  // itrObj.ITR1_IncomeDeductions.ArrearsUnrealizedRentRcvd
  itrObj.ITR1_IncomeDeductions.TotalIncomeOfHP =
    form16_type === "form-16" ? 0 : headhouseProperty;
  itrObj.ITR1_IncomeDeductions.IncomeOthSrc =
    form16_type === "form-16"
      ? 0
      : state.itr.incomeSources.otherIncome.totalOfAllOtherIncome;
  itrObj.ITR1_IncomeDeductions.OthersInc.OthersIncDtlsOthSrc.OthSrcOthAmount =
    form16_type === "form-16"
      ? 0
      : state.itr.incomeSources.otherIncome.totalOfAllOtherIncome;
  // itrObj.ITR1_IncomeDeductions.DeductionUs57iia;
  itrObj.ITR1_IncomeDeductions.GrossTotIncome = totalGrossIncome;
  itrObj.ITR1_IncomeDeductions.UsrDeductUndChapVIA.Section80C = Number(
    section80C.total
  );
  itrObj.ITR1_IncomeDeductions.UsrDeductUndChapVIA.Section80CCC =
    Number(user_section80Ccc);
  // itrObj.ITR1_IncomeDeductions.UsrDeductUndChapVIA.Section80CCDEmployeeOrSE = 0
  itrObj.ITR1_IncomeDeductions.UsrDeductUndChapVIA.Section80CCD1B = Number(
    user_section80Ccd1And1B
  );
  itrObj.ITR1_IncomeDeductions.UsrDeductUndChapVIA.Section80CCDEmployer =
    Number(user_section80Ccd2);
  itrObj.ITR1_IncomeDeductions.UsrDeductUndChapVIA.Section80D =
    user_medicalInsurancePremiumSelf +
    user_medicalInsurancePremiumParents +
    user_HealthCheckUpFeesSelf +
    user_HealthCheckUpFeesParents;
  itrObj.ITR1_IncomeDeductions.UsrDeductUndChapVIA.Section80DD = Number(
    section80DD_80U.section80DD
  );
  itrObj.ITR1_IncomeDeductions.UsrDeductUndChapVIA.Section80DDB =
    Number(user_section80Ddb);
  itrObj.ITR1_IncomeDeductions.UsrDeductUndChapVIA.Section80E =
    Number(user_section80E);
  itrObj.ITR1_IncomeDeductions.UsrDeductUndChapVIA.Section80EE =
    Number(user_section80Ee);
  // itrObj.ITR1_IncomeDeductions.UsrDeductUndChapVIA.Section80EEA = 0
  // itrObj.ITR1_IncomeDeductions.UsrDeductUndChapVIA.Section80EEB = 0
  itrObj.ITR1_IncomeDeductions.UsrDeductUndChapVIA.Section80G = Number(
    section80G.total
  );
  itrObj.ITR1_IncomeDeductions.UsrDeductUndChapVIA.Section80GG =
    Number(user_section80Gg);
  itrObj.ITR1_IncomeDeductions.UsrDeductUndChapVIA.Section80GGA =
    Number(user_section80Gga);
  itrObj.ITR1_IncomeDeductions.UsrDeductUndChapVIA.Section80GGC =
    Number(user_section80Ggc);
  itrObj.ITR1_IncomeDeductions.UsrDeductUndChapVIA.Section80U = Number(
    section80DD_80U.section80U
  );
  itrObj.ITR1_IncomeDeductions.UsrDeductUndChapVIA.Section80TTA = Number(
    state.itr.deductions.section80Deductions.section80tta
      .interestEarnedOnSavingsAccount
  );
  // itrObj.ITR1_IncomeDeductions.UsrDeductUndChapVIA.Section80TTB = 0
  itrObj.ITR1_IncomeDeductions.UsrDeductUndChapVIA.TotalChapVIADeductions =
    Number(totalUser_deduction_2);
  itrObj.ITR1_IncomeDeductions.DeductUndChapVIA.Section80C = Number(
    section80C.allowedTotal
  );
  itrObj.ITR1_IncomeDeductions.DeductUndChapVIA.Section80CCC =
    Number(section80Ccc);
  // itrObj.ITR1_IncomeDeductions.DeductUndChapVIA.Section80CCDEmployeeOrSE = 0
  itrObj.ITR1_IncomeDeductions.DeductUndChapVIA.Section80CCD1B =
    Number(section80Ccd1And1B);
  itrObj.ITR1_IncomeDeductions.DeductUndChapVIA.Section80CCDEmployer =
    Number(section80Ccd2);
  itrObj.ITR1_IncomeDeductions.DeductUndChapVIA.Section80D = Number(
    section80dAllowedTotal
  );
  itrObj.ITR1_IncomeDeductions.DeductUndChapVIA.Section80DD = Number(
    section80DD_80U.section80DD
  );
  itrObj.ITR1_IncomeDeductions.DeductUndChapVIA.Section80DDB =
    Number(section80Ddb);
  itrObj.ITR1_IncomeDeductions.DeductUndChapVIA.Section80E = Number(section80E);
  itrObj.ITR1_IncomeDeductions.DeductUndChapVIA.Section80EE =
    Number(section80Ee);
  // itrObj.ITR1_IncomeDeductions.DeductUndChapVIA.Section80EEA = 0
  // itrObj.ITR1_IncomeDeductions.DeductUndChapVIA.Section80EEB = 0
  itrObj.ITR1_IncomeDeductions.DeductUndChapVIA.Section80G = Number(
    section80G.allowedTotal
  );
  itrObj.ITR1_IncomeDeductions.DeductUndChapVIA.Section80GG =
    Number(section80Gg);
  itrObj.ITR1_IncomeDeductions.DeductUndChapVIA.Section80GGA =
    Number(section80Gga);
  itrObj.ITR1_IncomeDeductions.DeductUndChapVIA.Section80GGC =
    Number(section80Ggc);
  itrObj.ITR1_IncomeDeductions.DeductUndChapVIA.Section80U = Number(
    section80DD_80U.section80U
  );
  itrObj.ITR1_IncomeDeductions.DeductUndChapVIA.Section80TTA = Number(
    state.itr.deductions.section80Deductions.section80tta
      .interestEarnedOnSavingsAccount
  );
  // itrObj.ITR1_IncomeDeductions.DeductUndChapVIA.Section80TTB = 0
  itrObj.ITR1_IncomeDeductions.DeductUndChapVIA.TotalChapVIADeductions =
    totalDeduction;
  itrObj.ITR1_IncomeDeductions.TotalIncome = totalGrossIncome - totalDeduction;

  // tax-calculation -
  itrObj.ITR1_TaxComputation.TotalTaxPayable = Number(
    (tax - 0.4 * tax).toFixed(2)
  );
  itrObj.ITR1_TaxComputation.Rebate87A = rebate;
  // itrObj.ITR1_TaxComputation.TaxPayableOnRebate = 0;
  // itrObj.ITR1_TaxComputation.EducationCess = 0.4;
  itrObj.ITR1_TaxComputation.GrossTaxLiability = Number(
    (tax - rebate).toFixed(2)
  );
  // itrObj.ITR1_TaxComputation.Section89 = 0;
  itrObj.ITR1_TaxComputation.NetTaxLiability = Number(
    (tax - rebate).toFixed(2)
  );
  // itrObj.ITR1_TaxComputation.TotalIntrstPay = 0;

  // tax-paid -
  // itrObj.TaxPaid.TaxesPaid.AdvanceTax =  0
  itrObj.TaxPaid.TaxesPaid.TDS = Number(tds);
  itrObj.TaxPaid.TaxesPaid.TCS = Number(tcs);
  itrObj.TaxPaid.TaxesPaid.SelfAssessmentTax = Number(selftax);
  itrObj.TaxPaid.TaxesPaid.TotalTaxesPaid = Number(totalTaxPaid);
  itrObj.TaxPaid.BalTaxPayable = Number(balanceTaxPayable);

  itrObj.Refund.BankAccountDtls.AddtnlBankDetails =
    state.itr.personalInfo.bankInfo.allOtherBankAccounts;

  itrObj.Schedule80G.TotalDonationsUs80GCash = Number(
    state.itr.deductions.section80Deductions
      .section80GDonationsToCharitableOrganizations.amountOfDonation
      .donationAmountCash
  );
  itrObj.Schedule80G.TotalDonationsUs80GOtherMode = Number(
    state.itr.deductions.section80Deductions
      .section80GDonationsToCharitableOrganizations.amountOfDonation
      .donationAmountOther
  );
  itrObj.Schedule80G.TotalDonationsUs80G =
    Number(
      state.itr.deductions.section80Deductions
        .section80GDonationsToCharitableOrganizations.amountOfDonation
        .donationAmountCash
    ) +
    Number(
      state.itr.deductions.section80Deductions
        .section80GDonationsToCharitableOrganizations.amountOfDonation
        .donationAmountOther
    );
  itrObj.Schedule80G.TotalEligibleDonationsUs80G = Number(
    state.itr.deductions.section80Deductions
      .section80GDonationsToCharitableOrganizations.amountOfDonation
      .totalAllowedDonation
  );
  itrObj.Schedule80D.Sec80DSelfFamSrCtznHealth.HealthInsPremSlfFam = Number(
    medicalInsurancePremiumSelf
  );
  itrObj.Schedule80D.Sec80DSelfFamSrCtznHealth.PrevHlthChckUpSlfFam = Number(
    HealthCheckUpFeesSelf
  );
  itrObj.Schedule80D.Sec80DSelfFamSrCtznHealth.HlthInsPremParents =
    forParents === "Non-Senior Citizen"
      ? Number(medicalInsurancePremiumParents)
      : 0;
  itrObj.Schedule80D.Sec80DSelfFamSrCtznHealth.PrevHlthChckUpParents =
    forParents === "Non-Senior Citizen" ? Number(HealthCheckUpFeesParents) : 0;
  itrObj.Schedule80D.Sec80DSelfFamSrCtznHealth.HlthInsPremParentsSrCtzn =
    forParents === "Senior Citizen"
      ? Number(medicalInsurancePremiumParents)
      : 0;
  itrObj.Schedule80D.Sec80DSelfFamSrCtznHealth.PrevHlthChckUpParentsSrCtzn =
    forParents === "Senior Citizen" ? Number(HealthCheckUpFeesParents) : 0;
  itrObj.Schedule80D.Sec80DSelfFamSrCtznHealth.EligibleAmountOfDedn =
    section80dAllowedTotal;
  itrObj.ScheduleTCS.TotalSchTCS =
    state.itr.taxesPaid.tds.taxCollectedAtSource.totalTaxCollected;

  itrObj.TDSonOthThanSals.TotalTDSonOthThanSals = tds;

  itrObj.Verification.Declaration.AssesseeVerName = assesseeName;
  itrObj.Verification.Declaration.FatherName =
    state.itr.personalInfo.personalInfo.fathersName;
  itrObj.Verification.Declaration.AssesseeVerPAN =
    state.itr.personalInfo.personalInfo.panNumber;
  itrObj.Verification.Place = state.itr.personalInfo.address.city;

  const downloadJSON = () => {
    const fileData = JSON.stringify(itrObj);
    const blob = new Blob([fileData], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "ITR.json";
    link.href = url;
    link.click();
  };

  return (
    <div className="[&_div]:flex [&_div]:flex-col flex flex-col justify-center items-center mx-auto max-w-4xl w-full px-8 md:px-0">
      <h3 className="border-b font-semibold mb-5">
        Summary of your ITR filing.
      </h3>
      <div className="md:w-[45rem]">
        <h5 className="font-semibold mt-8">Personal Information</h5>
        <div>
          {personalInfo?.firstName && (
            <p className="flex items-center justify-between py-2">
              <span>Name</span>
              <span>{`${personalInfo.firstName} ${personalInfo.middleName} ${personalInfo.lastName}`}</span>
            </p>
          )}
          {personalInfo?.fathersName && (
            <p className="flex items-center justify-between py-2">
              <span>Father&apos;s Name</span>
              <span>{personalInfo?.fathersName}</span>
            </p>
          )}
          {personalInfo?.panNumber && (
            <p className="flex items-center justify-between py-2">
              <span>Pan Number</span>
              <span>{personalInfo.panNumber}</span>
            </p>
          )}
          {personalInfo?.gender && (
            <p className="flex items-center justify-between py-2">
              <span>Gender</span>
              <span className="capitalize">{personalInfo.gender}</span>
            </p>
          )}
          {personalInfo?.dob && (
            <p className="flex items-center justify-between py-2">
              <span>Date of Birth</span>
              <span>
                {new Date(personalInfo.dob).toLocaleDateString("en-GB")}
              </span>
            </p>
          )}
          {personalInfo?.maritalStatus && (
            <p className="flex items-center justify-between py-2">
              <span>Marital Status</span>
              <span>{personalInfo.maritalStatus}</span>
            </p>
          )}
        </div>
        <h5 className="font-semibold mt-8">
          Summary of Income, Deductions and Taxes (ITR1)
        </h5>
        <p className="flex items-center justify-between py-2">
          <span>Total income</span>
          {/* <span>{totalIncome()}</span> */}
        </p>
        {/* <p className="flex items-center justify-between py-2">
                    <span>Exempt income</span>
                    <span>{exemptIncome()}</span>
                </p> */}
        <p className="flex items-center justify-between py-2">
          <span>Section 80C Deduction</span>
          {/* <span>{deductions.section80C()}</span> */}
        </p>
        <p className="flex items-center justify-between py-2">
          <span>Section 80D Deduction</span>
          {/* <span>{deductions.section80C()}</span> */}
        </p>

        <button
          onClick={() => {
            downloadJSON();
          }}
          className="bg-primary px-8 py-3 my-6 text-white rounded-md font-semibold text-sm cursor-pointer col-span-2 mx-auto"
        >
          Download JSON
        </button>
      </div>
    </div>
  );
}
