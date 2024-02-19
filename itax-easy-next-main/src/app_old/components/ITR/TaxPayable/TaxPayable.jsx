import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../../store/store-context";
import {
  Image,
  Document,
  PDFDownloadLink,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const TaxPayable = () => {
  const [state, dispatch] = useContext(StoreContext);
  const navigate = useNavigate();

  const incomeChargeableUnderTheHeadSalaries =
    state.itr.incomeSources.salary.salaryInformation
      .incomeChargeableUnderTheHeadSalaries;
  const incomeFromOtherSources =
    state.itr.incomeSources.otherIncome.totalOfAllOtherIncome;
  const headhouseProperty =
    state.itr.incomeSources.houseProperty
      .incomeChargeableUnderTheHeadHouseProperty || 0;

  const section80cDeduction =
    state.itr.deductions.section80Deductions.totalDeduction;
  const section80dDeduction =
    state.itr.deductions.moreDeductions.amountOfTotalMoreDeductions;
  const section80ddDeduction =
    state.itr.deductions.otherDeductions.amountOfTotalOtherDeductions;

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

  // const isForm_16 = state.itr_type.form16_type;
  // if (isForm_16) {
  //   taxPayable = calculateTax(taxableIncome);
  // }

  const totalDeduction = () => {
    return (
      Number(section80cDeduction) +
      Number(section80dDeduction) +
      Number(section80ddDeduction)
    );
  };
  const totalGrossIncome = () => {
    return (
      Number(incomeChargeableUnderTheHeadSalaries) +
      Number(incomeFromOtherSources) +
      Number(headhouseProperty)
    );
  };

  const totalIncome = () => {
    return Number(totalGrossIncome()) - Number(totalDeduction());
  };

  const taxAbleIncome = totalIncome();
  const calculateTax = (income) => {
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
    tax = tax + CESS * tax;
    return tax;
  };

  return (
    <div>
      <div>
        <div
          className={`
            mx-auto
             sm:max-w-xl
             md:max-w-2xl
             lg:max-w-3xl
            sm:px-8
            px-4
            md:text-base
            text-sm

            [&_div]:flex
            [&_div]:px-3
            [&_div]:justify-between
            [&_div]:my-4
        `}
        >
          <h2 className="text-3xl mb-8 text-center font-bold text-primary">
            Tax Payable
          </h2>
          <div className="rounded-md font-bold bg-primary text-white py-3">
            <span>Gross Total Income</span>
            <span>{"Amount"}</span>
          </div>
          <div>
            <span>
              {" "}
              (1) Income Chargable Under the Head &quot;Salaries&quot;
            </span>
            <span>{incomeChargeableUnderTheHeadSalaries.toLocaleString()}</span>
          </div>
          <div>
            <span> (2) Income Chargable Under the Head House Property</span>
            <span>{headhouseProperty.toLocaleString()}</span>
          </div>
          <div>
            <span> (3) Income From Other Sources</span>
            <span>{incomeFromOtherSources.toLocaleString()}</span>
          </div>
          <div className="font-bold">
            <span>(A) Gross Total Income (1+2+3)</span>
            <span>
              {totalGrossIncome().toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
          <div className="font-bold bg-primary py-3 text-white rounded-md">
            <span>Deductions And Taxable Income</span>
            <span>Amount</span>
          </div>
          <div>
            <span>Section 80C and others..</span>
            <span>{section80cDeduction.toLocaleString()}</span>
          </div>
          <div>
            <span>Section 80D and others..</span>
            <span>{section80dDeduction.toLocaleString()}</span>
          </div>
          <div>
            <span>Section 80DD and others..</span>
            <span>{section80ddDeduction.toLocaleString()}</span>
          </div>
          <div className="font-bold">
            <span>(B) Total Deductions:</span>
            <span>{totalDeduction().toLocaleString()}</span>
          </div>
          <div className="font-bold">
            <span>Total Income (A) - (B) :</span>
            <span>
              {totalIncome().toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
          <div className="font-bold">
            <span>Total Tax Liability (including cess):</span>
            <span>
              {calculateTax(taxAbleIncome).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-3 justify-center">
        <button
          className="bg-primary px-8 py-3 text-white rounded-md font-semibold text-sm cursor-pointer"
          onClick={() => navigate("/itr-filling/taxes-paid")}
        >
          Submit
        </button>
        <PDFDownloadLink
          document={<ITR1PDF />}
          fileName="itr-1"
          className="bg-primary w-max px-8 py-3 text-white rounded-md font-semibold text-sm cursor-pointer"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download PDF"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

const ITR1PDF = () => {
  const styles = StyleSheet.create({
    viewer: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    page: {
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      padding: "20px",
    },
    img: {
      objectFit: "cover",
    },
  });

  return (
    <Document>
      <Page>
        <View>
          <Text>www.itaxeasy.com</Text>
          <Text>Email : info@itaxeasy.com</Text>
        </View>
      </Page>
    </Document>
  );
};

export default TaxPayable;
