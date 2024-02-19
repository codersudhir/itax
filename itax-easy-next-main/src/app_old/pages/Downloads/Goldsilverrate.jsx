"use client";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Goldsilverrate = () => {
  const conponentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Gold_silver_rate itaxeasy",
  });

  return (
    <>
      <div className=" m-5">
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <button
                type="button"
                onClick={generatePDF}
                class="text-white  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
              >
                Download
              </button>

              <div class="overflow-hidden" ref={conponentPDF}>
                <table className="table border-collapse border border-gray-300 ">
                  <thead>
                    <tr className="bg-blue-300">
                      <th className="border border-gray-300 p-2 font-semibold">
                        Assessment year/ valuation date{" "}
                      </th>
                      <th className="border border-gray-300 p-2 font-semibold">
                        Standard Gold 24 Carats Rate for 10 grams Rs.
                      </th>
                      <th className="border border-gray-300 p-2 font-semibold">
                        Silver 999 touch Rate of 1 Kg. Rs.
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        01.04.1981{" "}
                      </td>
                      <td className="border border-gray-300 p-2">1670 </td>
                      <td className="border border-gray-300 p-2">2715 </td>
                    </tr>

                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.1982{" "}
                      </td>
                      <td className="border border-gray-300 p-2">1645 </td>
                      <td className="border border-gray-300 p-2">1645 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.1983{" "}
                      </td>
                      <td className="border border-gray-300 p-2">1800 </td>
                      <td className="border border-gray-300 p-2">3105 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.1984{" "}
                      </td>
                      <td className="border border-gray-300 p-2">1975 </td>
                      <td className="border border-gray-300 p-2">3570 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.1985{" "}
                      </td>
                      <td className="border border-gray-300 p-2">2130 </td>
                      <td className="border border-gray-300 p-2">3955 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.1986{" "}
                      </td>
                      <td className="border border-gray-300 p-2">2140 </td>
                      <td className="border border-gray-300 p-2">4015 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.1987{" "}
                      </td>
                      <td className="border border-gray-300 p-2">2570 </td>
                      <td className="border border-gray-300 p-2">4794 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.1988{" "}
                      </td>
                      <td className="border border-gray-300 p-2">3130 </td>
                      <td className="border border-gray-300 p-2">6066 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.1989{" "}
                      </td>
                      <td className="border border-gray-300 p-2">3140 </td>
                      <td className="border border-gray-300 p-2">6755 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.1990{" "}
                      </td>
                      <td className="border border-gray-300 p-2">3200 </td>
                      <td className="border border-gray-300 p-2">6463 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.1991{" "}
                      </td>
                      <td className="border border-gray-300 p-2">3466 </td>
                      <td className="border border-gray-300 p-2">6646 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.1992{" "}
                      </td>
                      <td className="border border-gray-300 p-2">4334 </td>
                      <td className="border border-gray-300 p-2"> 8040 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        {" "}
                        31.03.1992{" "}
                      </td>
                      <td className="border border-gray-300 p-2">4334 </td>
                      <td className="border border-gray-300 p-2">8040 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.1993{" "}
                      </td>
                      <td className="border border-gray-300 p-2">4140 </td>
                      <td className="border border-gray-300 p-2">5489 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.1994{" "}
                      </td>
                      <td className="border border-gray-300 p-2">4598 </td>
                      <td className="border border-gray-300 p-2">7142 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.1995{" "}
                      </td>
                      <td className="border border-gray-300 p-2"> 4680 </td>
                      <td className="border border-gray-300 p-2"> 4680 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.1996{" "}
                      </td>
                      <td className="border border-gray-300 p-2">5160 </td>
                      <td className="border border-gray-300 p-2">7346 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.1997{" "}
                      </td>
                      <td className="border border-gray-300 p-2"> 4725 </td>
                      <td className="border border-gray-300 p-2">7345 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.1998{" "}
                      </td>
                      <td className="border border-gray-300 p-2"> 4045 </td>
                      <td className="border border-gray-300 p-2">8560 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        {" "}
                        31.03.1999{" "}
                      </td>
                      <td className="border border-gray-300 p-2">4235 </td>
                      <td className="border border-gray-300 p-2"> 7615 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.2000{" "}
                      </td>
                      <td className="border border-gray-300 p-2">4380 </td>
                      <td className="border border-gray-300 p-2"> 7900 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        {" "}
                        31.03.2001{" "}
                      </td>
                      <td className="border border-gray-300 p-2">4190 </td>
                      <td className="border border-gray-300 p-2"> 7215 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.2002{" "}
                      </td>
                      <td className="border border-gray-300 p-2"> 5010 </td>
                      <td className="border border-gray-300 p-2">7875 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.2003{" "}
                      </td>
                      <td className="border border-gray-300 p-2">5310 </td>
                      <td className="border border-gray-300 p-2">7695 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.2004{" "}
                      </td>
                      <td className="border border-gray-300 p-2">6065 </td>
                      <td className="border border-gray-300 p-2">11770 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.2005{" "}
                      </td>
                      <td className="border border-gray-300 p-2"> 6180 </td>
                      <td className="border border-gray-300 p-2">10675 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.2006{" "}
                      </td>
                      <td className="border border-gray-300 p-2"> 8490 </td>
                      <td className="border border-gray-300 p-2">17405 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.2007{" "}
                      </td>
                      <td className="border border-gray-300 p-2">9395 </td>
                      <td className="border border-gray-300 p-2"> 19520 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.2008{" "}
                      </td>
                      <td className="border border-gray-300 p-2">12125 </td>
                      <td className="border border-gray-300 p-2">23625 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.2009{" "}
                      </td>
                      <td className="border border-gray-300 p-2">15105 </td>
                      <td className="border border-gray-300 p-2">22165 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.2010{" "}
                      </td>
                      <td className="border border-gray-300 p-2">16320 </td>
                      <td className="border border-gray-300 p-2"> 27255 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.2011{" "}
                      </td>
                      <td className="border border-gray-300 p-2"> 20775 </td>
                      <td className="border border-gray-300 p-2">56900 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        {" "}
                        31.03.2012
                      </td>
                      <td className="border border-gray-300 p-2">28040 </td>
                      <td className="border border-gray-300 p-2">56290 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.2013{" "}
                      </td>
                      <td className="border border-gray-300 p-2">29610 </td>
                      <td className="border border-gray-300 p-2"> 54030</td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        {" "}
                        31.03.2014
                      </td>
                      <td className="border border-gray-300 p-2">28470 </td>
                      <td className="border border-gray-300 p-2">43070 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.2015{" "}
                      </td>
                      <td className="border border-gray-300 p-2">26245 </td>
                      <td className="border border-gray-300 p-2">26245 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.2016{" "}
                      </td>
                      <td className="border border-gray-300 p-2">28340</td>
                      <td className="border border-gray-300 p-2">36990 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.2017{" "}
                      </td>
                      <td className="border border-gray-300 p-2">28950 </td>
                      <td className="border border-gray-300 p-2">42000 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        {" "}
                        31.03.2018
                      </td>
                      <td className="border border-gray-300 p-2"> 30680</td>
                      <td className="border border-gray-300 p-2"> 38355</td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.2019{" "}
                      </td>
                      <td className="border border-gray-300 p-2">35220 </td>
                      <td className="border border-gray-300 p-2">40600 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.2020{" "}
                      </td>
                      <td className="border border-gray-300 p-2">48651 </td>
                      <td className="border border-gray-300 p-2">40500 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.2021{" "}
                      </td>
                      <td className="border border-gray-300 p-2">48720 </td>
                      <td className="border border-gray-300 p-2">65400 </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        31.03.2022{" "}
                      </td>
                      <td className="border border-gray-300 p-2">51484 </td>
                      <td className="border border-gray-300 p-2">66990 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h6 className="my-5">
            Notes :
            <p>
              1. Value of gold contained in gold ornaments should be reduced by
              14 to 20 per cent of ruling rates of standard gold, as per the
              practice prevalent in the bullion market and the amount of
              reduction has to be worked out in the following manner :
            </p>
          </h6>
        </div>

        <table>
          <thead>
            <tr className="bg-blue-300">
              <th
                className="border border-gray-300 p-2 font-semibold"
                scope="col"
              ></th>
              <th
                className="border border-gray-300 p-2 font-semibold"
                scope="col"
              >
                Plain gold bangles and ornaments made of solid gold
              </th>
              <th scope="col">Other gold ornaments</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">
                Difference in value between 24 carats of standard gold and 22
                carats of gold ornaments (gold ornaments are generally made of
                22 carats of gold)
              </td>
              <td className="border border-gray-300 p-2">8.33%</td>
              <td className="border border-gray-300 p-2">8.33%</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">
                Soldering made of copper, silver, etc., used in making ornaments
              </td>
              <td className="border border-gray-300 p-2">2.5% to 5%</td>
              <td className="border border-gray-300 p-2">8.33%</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">
                Shortage of gold in melting, mint charges payable to Government,
                expenditure on freight, insurance, etc., of sending gold
                ornaments to approved mint for conversion into standard gold
                bars
              </td>
              <td className="border border-gray-300 p-2">1.25%</td>
              <td className="border border-gray-300 p-2">1.25%</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">
                Margin of profit of the dealer when ornaments are sold in market
              </td>
              <td className="border border-gray-300 p-2">2%</td>
              <td className="border border-gray-300 p-2">2%</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">Total reduction</td>
              <td className="border border-gray-300 p-2">14.08% to 16.58%</td>
              <td className="border border-gray-300 p-2">19.91%</td>
            </tr>
          </tbody>
        </table>
        <h6 className="my-5">
          2. Silverwares, utensils, etc., is liable for wealth-tax.
          <br />
          3. Conversion table:
        </h6>

        <table>
          <tbody>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">10 grams</td>
              <td className="border border-gray-300 p-2">=</td>
              <td className="border border-gray-300 p-2">0.857 tola</td>
              <td className="border border-gray-300 p-2">1 tola</td>
              <td className="border border-gray-300 p-2">=</td>
              <td className="border border-gray-300 p-2">11.664 grams</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">1 kilogram</td>
              <td className="border border-gray-300 p-2">=</td>
              <td className="border border-gray-300 p-2">85.734 tolas</td>
              <td className="border border-gray-300 p-2">10 tola</td>
              <td className="border border-gray-300 p-2">=</td>
              <td className="border border-gray-300 p-2">116.638 grams</td>
            </tr>
          </tbody>
        </table>
        <h6 className="text-secondary mt-5 text-center">
          [As amended by Finance Act, 2022]
        </h6>
      </div>
    </>
  );
};

export default Goldsilverrate;
