"use client";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
const InterestaccruedonIndira = () => {
  const conponentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "InterestaccruedonIndira itaxeasy",
  });
  return (
    <>
      <div>
        <h5 className="text-center my-5">
          Interest Accruedon Indira Vikas patras(ivp)
        </h5>
        <button
          type="button"
          onClick={generatePDF}
          class="text-white  mx-2 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
        >
          Download
        </button>
        <table
          className="table border-collapse border border-gray-300 "
          ref={conponentPDF}
        >
          <thead>
            <tr className="bg-blue-300">
              <th className="border border-gray-300 p-2 font-semibold">
                Interest accrued at the end of:
              </th>
              <th className="border border-gray-300 p-2 font-semibold">
                Certificate purchased on or after 02-09-1993 but before
                01-01-1999
              </th>
              <th className="border border-gray-300 p-2 font-semibold">
                Certificate purchased on or after 01-01-1999
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">
                Compounded rate of interest
              </td>
              <td className="border border-gray-300 p-2">13.43% p.a.</td>
              <td className="border border-gray-300 p-2">12.25% p.a.</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2"></td>
              <td colSpan={2}>
                Taxable interest on certificate of Rs. 1,000/-
              </td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">1st Year</td>
              <td className="border border-gray-300 p-2">134.30</td>
              <td className="border border-gray-300 p-2">122.50</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2nd Year</td>
              <td className="border border-gray-300 p-2">152.33</td>
              <td className="border border-gray-300 p-2">137.51</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">3rd Year</td>
              <td className="border border-gray-300 p-2">172.80</td>
              <td className="border border-gray-300 p-2">154.35</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">4th Year</td>
              <td className="border border-gray-300 p-2">196.00</td>
              <td className="border border-gray-300 p-2">173.26</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">5th Year</td>
              <td className="border border-gray-300 p-2">222.32</td>
              <td className="border border-gray-300 p-2">194.48</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">5 ½ year</td>
              <td className="border border-gray-300 p-2">122.24</td>
              <td className="border border-gray-300 p-2">-</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">6th Year</td>
              <td className="border border-gray-300 p-2">-</td>
              <td className="border border-gray-300 p-2">217.90</td>
            </tr>
          </tbody>
        </table>
        <h6 className="text-secondary text-center my-3">
          [As amended by Finance Act, 2022]
        </h6>
      </div>
    </>
  );
};

export default InterestaccruedonIndira;
