"use client";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
const Wordkvp = () => {
  const conponentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "kvp itaxeasy",
  });

  return (
    <>
      <div>
        <h5 className="text-center my-5">Interest on Kisan Vikas Patra</h5>

        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <button
                  type="button"
                  onClick={generatePDF}
                  class="text-white mx-2 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
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
                        <p>&nbsp;</p>
                        <p>
                          Period&nbsp;from&nbsp;the
                          date&nbsp;of&nbsp;certificate
                        </p>
                        <p>&nbsp;</p>
                        <p>to&nbsp;the&nbsp;date&nbsp;of&nbsp;its encashment</p>
                      </th>
                      <th
                        className="border border-gray-300 p-2 font-semibold"
                        colspan="2"
                      >
                        <p>&nbsp;</p>
                        <p>Purchased from</p>
                        <p>&nbsp;</p>
                        <p>2.9.1993&nbsp;to</p>
                        <p>31.12.1998</p>
                      </th>
                      <th className="border border-gray-300 p-2 font-semibold">
                        <p>&nbsp;</p>
                        <p>Purchased from</p>
                        <p>1.1.1999&nbsp;to</p>
                        <p>14.1.2000</p>
                      </th>
                      <th className="border border-gray-300 p-2 font-semibold">
                        <p>&nbsp;</p>
                        <p>Purchased from</p>
                        <p>15.1.2000 to</p>
                        <p>28.2.2001</p>
                      </th>
                      <th className="border border-gray-300 p-2 font-semibold">
                        <p>&nbsp;</p>
                        <p>Purchased from</p>
                        <p>1.3.2001&nbsp;to</p>
                        <p>28.2.2002</p>
                      </th>
                      <th className="border border-gray-300 p-2 font-semibold">
                        <p>&nbsp;</p>
                        <p>Purchased from</p>
                        <p>1.3.2002&nbsp;to</p>
                        <p>28.2.2003</p>
                      </th>
                      <th className="border border-gray-300 p-2 font-semibold">
                        <p>&nbsp;</p>
                        <p>Purchased from</p>
                        <p>1.3.2003</p>
                      </th>
                      <th className="border border-gray-300 p-2 font-semibold">
                        <p>&nbsp;</p>
                        <p>Purchased</p>
                        <p>&nbsp;from</p>
                        <p>18.11.2014</p>
                      </th>
                      <th className="border border-gray-300 p-2 font-semibold">
                        <p>&nbsp;</p>
                        <p>Purchased from</p>
                        <p>01.04.2016</p>
                      </th>
                      <th className="border border-gray-300 p-2 font-semibold">
                        <p>&nbsp;</p>
                        <p>Purchased from</p>
                        <p>01.10.2016</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        <p>&nbsp;</p>
                        <p>1&nbsp;Year</p>
                        <p>&nbsp;</p>
                        <p>2&nbsp;Years</p>
                        <p>&nbsp;</p>
                        <p>2&nbsp;Years and 6 Months</p>
                        <p>&nbsp;</p>
                        <p>3&nbsp;Years</p>
                        <p>&nbsp;</p>
                        <p>3&nbsp;Years and 6 Months</p>
                        <p>&nbsp;</p>
                        <p>4&nbsp;Years</p>
                        <p>&nbsp;</p>
                        <p>4&nbsp;Years and 6 Months</p>
                        <p>&nbsp;</p>
                        <p>5&nbsp;Years</p>
                        <p>&nbsp;</p>
                        <p>5&nbsp;Years and 6 Months</p>
                        <p>&nbsp;</p>
                        <p>6&nbsp;Years</p>
                        <p>&nbsp;</p>
                        <p>6&nbsp;Years and 6 Months</p>
                        <p>&nbsp;</p>
                        <p>7&nbsp;Years</p>
                        <p>&nbsp;</p>
                        <p>7&nbsp;Years and 3 Months</p>
                        <p>&nbsp;</p>
                        <p>7&nbsp;Years and 6 Months</p>
                        <p>&nbsp;</p>
                        <p>7&nbsp;Years and 8 Months</p>
                        <p>&nbsp;</p>
                        <p>8&nbsp;Years</p>
                        <p>&nbsp;</p>
                        <p>8&nbsp;Years and 4 months</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>8&nbsp;Years and 6 months</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>8&nbsp;Years and 7 months</p>
                        <p>&nbsp;</p>
                        <p>9 Years</p>
                        <p>&nbsp;</p>
                        <p>9 Years and 2 Months</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>9 Years and 4 Months</p>
                        <p>&nbsp;</p>
                      </td>
                      <td>
                        <p>&nbsp;</p>
                        <p>11</p>
                        <p>&nbsp;</p>
                        <p>11</p>
                        <p>&nbsp;</p>
                        <p>11</p>
                        <p>&nbsp;</p>
                        <p>12</p>
                        <p>&nbsp;</p>
                        <p>12</p>
                        <p>&nbsp;</p>
                        <p>12.5</p>
                        <p>&nbsp;</p>
                        <p>12.5</p>
                        <p>&nbsp;</p>
                        <p>12.75</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                      </td>
                      <td>
                        <p>&nbsp;</p>
                        <p>1110</p>
                        <p>&nbsp;</p>
                        <p>1240</p>
                        <p>&nbsp;</p>
                        <p>1310</p>
                        <p>&nbsp;</p>
                        <p>1420</p>
                        <p>&nbsp;</p>
                        <p>1500</p>
                        <p>&nbsp;</p>
                        <p>1620</p>
                        <p>&nbsp;</p>
                        <p>1730</p>
                        <p>&nbsp;</p>
                        <p>1860</p>
                        <p>&nbsp;</p>
                        <p>2000</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp;-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                      </td>
                      <td>
                        <p>N.A. N.A.</p>
                        <p>1280</p>
                        <p>&nbsp;</p>
                        <p>1380</p>
                        <p>&nbsp;</p>
                        <p>1450</p>
                        <p>&nbsp;</p>
                        <p>1560</p>
                        <p>&nbsp;</p>
                        <p>1650</p>
                        <p>&nbsp;</p>
                        <p>1770</p>
                        <p>&nbsp;</p>
                        <p>1870</p>
                        <p>&nbsp;</p>
                        <p>2000</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                      </td>
                      <td>
                        <p>N.A. N.A.</p>
                        <p>1246</p>
                        <p>&nbsp;</p>
                        <p>1302</p>
                        <p>&nbsp;</p>
                        <p>1407</p>
                        <p>&nbsp;</p>
                        <p>1478</p>
                        <p>&nbsp;</p>
                        <p>1585</p>
                        <p>&nbsp;</p>
                        <p>1668</p>
                        <p>&nbsp;</p>
                        <p>1779</p>
                        <p>&nbsp;</p>
                        <p>1874</p>
                        <p>&nbsp;</p>
                        <p>2000</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                      </td>
                      <td>
                        <p>N.A. N.A.</p>
                        <p>1209</p>
                        <p>&nbsp;</p>
                        <p>1274</p>
                        <p>&nbsp;</p>
                        <p>1327</p>
                        <p>&nbsp;</p>
                        <p>1409</p>
                        <p>&nbsp;</p>
                        <p>1470</p>
                        <p>&nbsp;</p>
                        <p>1572</p>
                        <p>&nbsp;</p>
                        <p>1644</p>
                        <p>&nbsp;</p>
                        <p>1770</p>
                        <p>&nbsp;</p>
                        <p>1857</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>2000</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                      </td>
                      <td>
                        <p>N.A. N.A.</p>
                        <p>1195</p>
                        <p>&nbsp;</p>
                        <p>1256</p>
                        <p>&nbsp;</p>
                        <p>1305</p>
                        <p>&nbsp;</p>
                        <p>1382</p>
                        <p>&nbsp;</p>
                        <p>1439</p>
                        <p>&nbsp;</p>
                        <p>1534</p>
                        <p>&nbsp;</p>
                        <p>1602</p>
                        <p>&nbsp;</p>
                        <p>1672</p>
                        <p>&nbsp;</p>
                        <p>1800</p>
                        <p>&nbsp;</p>
                        <p>1883</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>2000</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                      </td>
                      <td>
                        <p>N.A. N.A.</p>
                        <p>1170.51</p>
                        <p>&nbsp;</p>
                        <p>1207.95</p>
                        <p>&nbsp;</p>
                        <p>1267.19</p>
                        <p>&nbsp;</p>
                        <p>1310.8</p>
                        <p>&nbsp;</p>
                        <p>1355.9</p>
                        <p>&nbsp;</p>
                        <p>1435.63</p>
                        <p>&nbsp;</p>
                        <p>1488.49</p>
                        <p>&nbsp;</p>
                        <p>1543.3</p>
                        <p>&nbsp;</p>
                        <p>1649.13</p>
                        <p>&nbsp;</p>
                        <p>1713.82</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>1781.06</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>1850.93</p>
                        <p>&nbsp;</p>
                        <p>&nbsp; &nbsp; &nbsp;</p>
                        <p>
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                          &nbsp;-
                        </p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>2000</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                      </td>
                      <td>
                        <p>&nbsp;</p>
                        <p>1076</p>
                        <p>&nbsp;</p>
                        <p>1158</p>
                        <p>&nbsp;</p>
                        <p>1201</p>
                        <p>&nbsp;</p>
                        <p>1246</p>
                        <p>&nbsp;</p>
                        <p>1293</p>
                        <p>&nbsp;</p>
                        <p>1341</p>
                        <p>&nbsp;</p>
                        <p>1391</p>
                        <p>&nbsp;</p>
                        <p>1443</p>
                        <p>&nbsp;</p>
                        <p>1497</p>
                        <p>&nbsp;</p>
                        <p>1553</p>
                        <p>&nbsp;</p>
                        <p>1611</p>
                        <p>&nbsp;</p>
                        <p>1671</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>1733</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>1798</p>
                        <p>&nbsp;</p>
                        <p>2000</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp; &nbsp; -</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                      </td>
                      <td>
                        <p>&nbsp;</p>
                        <p>1068</p>
                        <p>&nbsp;</p>
                        <p>1142</p>
                        <p>&nbsp;</p>
                        <p>1180</p>
                        <p>&nbsp;</p>
                        <p>1220</p>
                        <p>&nbsp;</p>
                        <p>1261</p>
                        <p>&nbsp;</p>
                        <p>1303</p>
                        <p>&nbsp;</p>
                        <p>1347</p>
                        <p>&nbsp;</p>
                        <p>1392</p>
                        <p>&nbsp;</p>
                        <p>1439</p>
                        <p>&nbsp;</p>
                        <p>1487</p>
                        <p>&nbsp;</p>
                        <p>1537</p>
                        <p>&nbsp;</p>
                        <p>1589</p>
                        <p>&nbsp;</p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-</p>
                        <p>&nbsp;</p>
                        <p>1643</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>1698</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>1755</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>1814</p>
                        <p>&nbsp;</p>
                        <p>2000</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                      </td>
                      <td>
                        <p>&nbsp;</p>
                        <p>1067</p>
                        <p>&nbsp;</p>
                        <p>1138</p>
                        <p>&nbsp;</p>
                        <p>1176</p>
                        <p>&nbsp;</p>
                        <p>1215</p>
                        <p>&nbsp;</p>
                        <p>1255</p>
                        <p>&nbsp;</p>
                        <p>1296</p>
                        <p>&nbsp;</p>
                        <p>1339</p>
                        <p>&nbsp;</p>
                        <p>1383</p>
                        <p>&nbsp;</p>
                        <p>1429</p>
                        <p>&nbsp;</p>
                        <p>1476</p>
                        <p>&nbsp;</p>
                        <p>1524</p>
                        <p>&nbsp;</p>
                        <p>1575</p>
                        <p>&nbsp;</p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-</p>
                        <p>&nbsp;</p>
                        <p>1626</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>1680</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>1735</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>1793</p>
                        <p>&nbsp;</p>
                        <p>-</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>2000</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <h6 className="text-secondary text-center">
          [As amended by Finance Act, 2022]
        </h6>
      </div>
    </>
  );
};

export default Wordkvp;
