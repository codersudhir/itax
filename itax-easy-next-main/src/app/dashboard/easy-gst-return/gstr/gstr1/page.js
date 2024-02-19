"use client";
import { useState } from "react";
import GSTR_1_Add_Record_Details from "@/components/pagesComponents/dashboard/GSTR/GSTRPages/Gstr1/GSTR_1_Add_Record_Details";
import GSTR_1_Amend_record_details from "@/components/pagesComponents/dashboard/GSTR/GSTRPages/Gstr1/GSTR_1_Amend_record_details";
import GSTR_1_E_invoice_Download_History from "@/components/pagesComponents/dashboard/GSTR/GSTRPages/Gstr1/GSTR_1_E_invoice_Download_History";
function GSTRs() {
  const [activetav, setActiveTab] = useState(1);

  const handleTab = (e) => {
    setActiveTab(e);
  };

  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap-mb-px justify-center">
          <li className="me-2">
            <button
              className={
                activetav === 1
                  ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg  dark:text-blue-500 dark:border-blue-500"
                  : "inline-block p-4  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }
              onClick={(e) => handleTab(1)}
            >
              Add Record Details
            </button>
          </li>
          <li className="me-2">
            <button
              className={
                activetav === 2
                  ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg  dark:text-blue-500 dark:border-blue-500"
                  : "inline-block p-4  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }
              onClick={(e) => handleTab(2)}
            >
              Amend Record Details
            </button>
          </li>
          <li className="me-2">
            <button
              className={
                activetav === 3
                  ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg  dark:text-blue-500 dark:border-blue-500"
                  : "inline-block p-4  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }
              onClick={(e) => handleTab(3)}
            >
              E-Invoice Download History
            </button>
          </li>
        </ul>
      </div>

      {activetav === 1 && <GSTR_1_Add_Record_Details />}
      {activetav === 2 && <GSTR_1_Amend_record_details />}
      {activetav === 3 && <GSTR_1_E_invoice_Download_History />}
    </>
  );
}
export default function index() {
  return (
    <GSTRs />
    //   <GSTR_1_Add_Record_Details />
  );
}
