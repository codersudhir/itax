"use client";
"use client";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Costinflationindex = () => {
  const conponentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Costinflationindex itaxeasy",
  });
  return (
    <div className="mx-10">
      <h5 className="text-center my-5">Cost Inflation Index</h5>
      <button
        type="button"
        onClick={generatePDF}
        class="text-white  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
      >
        Download
      </button>

      <div ref={conponentPDF}>
        <table className="table border-collapse border border-gray-300 ">
          <thead>
            <tr className="bg-blue-300">
              <th className="border border-gray-300 p-2 font-semibold">
                Financial Year
              </th>
              <th className="border border-gray-300 p-2 font-semibold">
                Cost Inflation Index (CII)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">
                2001-02 (Base year)
              </td>
              <td className="border border-gray-300 p-2">100</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2002-03</td>
              <td className="border border-gray-300 p-2">105</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2003-04</td>
              <td className="border border-gray-300 p-2">109</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2004-05</td>
              <td className="border border-gray-300 p-2">113</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2005-06</td>
              <td className="border border-gray-300 p-2">117</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2006-07</td>
              <td className="border border-gray-300 p-2">122</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2007-08</td>
              <td className="border border-gray-300 p-2">129</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2008-09</td>
              <td className="border border-gray-300 p-2">137</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2009-10</td>
              <td className="border border-gray-300 p-2">148</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2010-11</td>
              <td className="border border-gray-300 p-2">167</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2011-12</td>
              <td className="border border-gray-300 p-2">184</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2012-13</td>
              <td className="border border-gray-300 p-2">200</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2013-14</td>
              <td className="border border-gray-300 p-2">220</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2014-15</td>
              <td className="border border-gray-300 p-2">240</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2015-16</td>
              <td className="border border-gray-300 p-2">254</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2016-17</td>
              <td className="border border-gray-300 p-2">264</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2017-18</td>
              <td className="border border-gray-300 p-2">272</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2018-19</td>
              <td className="border border-gray-300 p-2">280</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2019-20</td>
              <td className="border border-gray-300 p-2">289</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2020-21</td>
              <td className="border border-gray-300 p-2">301</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2021-22</td>
              <td className="border border-gray-300 p-2">317</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">2022-23</td>
              <td className="border border-gray-300 p-2">331</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h6 className="text-secondary text-center">
        [As amended by Finance Act, 2022]
      </h6>
    </div>
  );
};

export default Costinflationindex;
