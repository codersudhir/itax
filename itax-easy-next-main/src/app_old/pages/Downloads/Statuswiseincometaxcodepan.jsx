"use client";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
const Statuswiseincometaxcodepan = () => {
  const conponentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Statuswiseincometaxcodepan itaxeasy",
  });
  return (
    <>
      <h5 className="text-center my-5">
        Status wise Income Tax Code and PAN Code
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
            <th className="border border-gray-300 p-2 font-semibold">Status</th>

            <th className="border border-gray-300 p-2 font-semibold">
              Income Tax code
            </th>
            <th className="border border-gray-300 p-2 font-semibold">
              PAN Code( 4Th digit of PAN )
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-10 text-left">
            <td className="border border-gray-300 p-2"> Individual</td>
            <td className="border border-gray-300 p-2">01</td>
            <td className="border border-gray-300 p-2">P</td>
          </tr>
          <tr className="h-10 text-left">
            <td className="border border-gray-300 p-2">HUF</td>
            <td className="border border-gray-300 p-2">03 </td>
            <td className="border border-gray-300 p-2">H</td>
          </tr>

          <tr className="h-10 text-left">
            <td className="border border-gray-300 p-2">Firm</td>
            <td className="border border-gray-300 p-2"> 05</td>
            <td className="border border-gray-300 p-2">F</td>
          </tr>
          <tr className="h-10 text-left">
            <td className="border border-gray-300 p-2">A.O.P.</td>
            <td className="border border-gray-300 p-2"> 07</td>
            <td className="border border-gray-300 p-2">A</td>
          </tr>
          <tr className="h-10 text-left">
            <td className="border border-gray-300 p-2">A.O.P. Trust</td>
            <td className="border border-gray-300 p-2"> 08</td>
            <td className="border border-gray-300 p-2"> T</td>
          </tr>
          <tr className="h-10 text-left">
            <td className="border border-gray-300 p-2">Body of Individuals</td>
            <td className="border border-gray-300 p-2"> 09</td>
            <td className="border border-gray-300 p-2">B</td>
          </tr>
          <tr className="h-10 text-left">
            <td className="border border-gray-300 p-2">Artificial Juridical</td>
            <td className="border border-gray-300 p-2"> 10</td>
            <td className="border border-gray-300 p-2">J</td>
          </tr>
          {/* <tr className="h-10 text-left">
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2"></td>
                     

                    </tr> */}
          <tr className="h-10 text-left">
            <td className="border border-gray-300 p-2">Cooperative Society</td>
            <td className="border border-gray-300 p-2"> 11</td>
            <td className="border border-gray-300 p-2">A</td>
          </tr>
          <tr className="h-10 text-left">
            <td className="border border-gray-300 p-2">Company ( Govt. )</td>
            <td className="border border-gray-300 p-2">12 </td>
            <td className="border border-gray-300 p-2">C</td>
          </tr>
          <tr className="h-10 text-left">
            <td className="border border-gray-300 p-2">Company (Public )</td>
            <td className="border border-gray-300 p-2"> 12</td>
            <td className="border border-gray-300 p-2">C</td>
          </tr>
          <tr className="h-10 text-left">
            <td className="border border-gray-300 p-2">Company (Private )</td>
            <td className="border border-gray-300 p-2"> 13</td>
            <td className="border border-gray-300 p-2">C</td>
          </tr>
          <tr className="h-10 text-left">
            <td className="border border-gray-300 p-2">Local Authority</td>
            <td className="border border-gray-300 p-2">16 </td>
            <td className="border border-gray-300 p-2">L</td>
          </tr>
          <tr className="h-10 text-left">
            <td className="border border-gray-300 p-2">Govt. Agency</td>
            <td className="border border-gray-300 p-2"> </td>
            <td className="border border-gray-300 p-2">G</td>
          </tr>
        </tbody>
      </table>

      <h6 className="text-secondary text-center">
        [As amended by Finance Act, 2022]
      </h6>
    </>
  );
};

export default Statuswiseincometaxcodepan;
