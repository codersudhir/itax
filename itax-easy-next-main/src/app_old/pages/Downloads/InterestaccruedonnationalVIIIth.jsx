"use client";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
const InterestaccruedonnationalVIIIth = () => {
  const conponentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "InterestaccruedonnationalVIIIth itaxeasy",
  });
  return (
    <>
      <div>
        <h5 className="my-5 text-center">
          {" "}
          Interest Accruedon National VIIIth
        </h5>
        <button
          type="button"
          onClick={generatePDF}
          class="text-white mx-2 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
        >
          Download
        </button>
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table
                  className="table border-collapse border border-gray-300 "
                  ref={conponentPDF}
                >
                  <thead>
                    <tr className="bg-blue-300">
                      <th
                        className="border border-gray-300 p-2 font-semibold"
                        colSpan={18}
                      >
                        Amount of interest accruing on the certificate of Rs.
                        100 denomination
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="h-10 text-left">
                      <th
                        className="border border-gray-300 p-2 font-semibold"
                        rowSpan={2}
                      >
                        Year for which interest accrues
                      </th>
                      <td className="border border-gray-300 p-2" colSpan={17}>
                        When NSC was purchased
                      </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        Purchased before 01-01-1999
                      </td>
                      <td className="border border-gray-300 p-2">
                        01-01-1999 to 14-01-2000
                      </td>
                      <td className="border border-gray-300 p-2">
                        15-01-2000 to 28-02-2001
                      </td>
                      <td className="border border-gray-300 p-2">
                        01-03-2001 to 28-02-2002
                      </td>
                      <td className="border border-gray-300 p-2">
                        01-03-2002 to 28-02-2003
                      </td>
                      <td className="border border-gray-300 p-2">
                        01-03-2003 to 30-11-2011
                      </td>
                      <td className="border border-gray-300 p-2">
                        01-12-2011 to 31-03-2012
                      </td>
                      <td className="border border-gray-300 p-2">
                        01-04-2012 to 31-03-2013
                      </td>
                      <td className="border border-gray-300 p-2">
                        01-04-2013 To 31-03-2016
                      </td>
                      <td className="border border-gray-300 p-2">
                        01-04-2016 to 30-09-2016
                      </td>
                      <td className="border border-gray-300 p-2">
                        01-10-2016 to 31-03-2017
                      </td>
                      <td className="border border-gray-300 p-2">
                        01-04-2017 to 31-06-2017
                      </td>
                      <td className="border border-gray-300 p-2">
                        01-07-2017 to 31-12-2017{" "}
                      </td>
                      <td className="border border-gray-300 p-2">
                        01-01-2018 to 30-09-2018
                      </td>
                      <td className="border border-gray-300 p-2">
                        01-10-2018 to 30-06-2019
                      </td>
                      <td className="border border-gray-300 p-2">
                        01-07-2019 to 31-03-2020
                      </td>
                      <td className="border border-gray-300 p-2">
                        01-04-2020 to 31-03-2021{" "}
                      </td>
                    </tr>
                    <tr className="h-10 text-left">
                      <th className="border border-gray-300 p-2 font-semibold">
                        First Year
                      </th>
                      <td className="border border-gray-300 p-2">12.40</td>
                      <td className="border border-gray-300 p-2">11.83</td>
                      <td className="border border-gray-300 p-2">11.30</td>
                      <td className="border border-gray-300 p-2">9.72</td>
                      <td className="border border-gray-300 p-2">9.20</td>
                      <td className="border border-gray-300 p-2">8.16</td>
                      <td className="border border-gray-300 p-2">8.58</td>
                      <td className="border border-gray-300 p-2">8.78</td>
                      <td className="border border-gray-300 p-2">8.68</td>
                      <td className="border border-gray-300 p-2">8.10</td>
                      <td className="border border-gray-300 p-2">8.00</td>
                      <td className="border border-gray-300 p-2">7.9</td>
                      <td className="border border-gray-300 p-2">7.8</td>
                      <td className="border border-gray-300 p-2">7.6</td>
                      <td className="border border-gray-300 p-2">8</td>
                      <td className="border border-gray-300 p-2">7.9</td>
                      <td className="border border-gray-300 p-2">6.8</td>
                    </tr>
                    <tr className="h-10 text-left">
                      <th>Second Year</th>
                      <td className="border border-gray-300 p-2">13.90</td>
                      <td className="border border-gray-300 p-2">13.23</td>
                      <td className="border border-gray-300 p-2">12.58</td>
                      <td className="border border-gray-300 p-2">10.67</td>
                      <td className="border border-gray-300 p-2">10.05</td>
                      <td className="border border-gray-300 p-2">8.83</td>
                      <td className="border border-gray-300 p-2">9.31</td>
                      <td className="border border-gray-300 p-2">9.56</td>
                      <td className="border border-gray-300 p-2">9.43</td>
                      <td className="border border-gray-300 p-2">8.76</td>
                      <td className="border border-gray-300 p-2">8.64</td>
                      <td className="border border-gray-300 p-2">8.52</td>
                      <td className="border border-gray-300 p-2">8.41</td>
                      <td className="border border-gray-300 p-2">8.18</td>
                      <td className="border border-gray-300 p-2">8.64</td>
                      <td className="border border-gray-300 p-2">8.52</td>
                      <td className="border border-gray-300 p-2">7.26</td>
                    </tr>
                    <tr className="h-10 text-left">
                      <th className="border border-gray-300 p-2 font-semibold">
                        Third Year
                      </th>
                      <td className="border border-gray-300 p-2">15.60</td>
                      <td className="border border-gray-300 p-2">14.80</td>
                      <td className="border border-gray-300 p-2">14.00</td>
                      <td className="border border-gray-300 p-2">11.71</td>
                      <td className="border border-gray-300 p-2">10.97</td>
                      <td className="border border-gray-300 p-2">9.55</td>
                      <td className="border border-gray-300 p-2">10.11</td>
                      <td className="border border-gray-300 p-2">10.40</td>
                      <td className="border border-gray-300 p-2">10.25</td>
                      <td className="border border-gray-300 p-2">9.46</td>
                      <td className="border border-gray-300 p-2">9.33</td>
                      <td className="border border-gray-300 p-2">9.2</td>
                      <td className="border border-gray-300 p-2">9.06</td>
                      <td className="border border-gray-300 p-2">8.8</td>
                      <td className="border border-gray-300 p-2">9.33</td>
                      <td className="border border-gray-300 p-2">9.2</td>
                      <td className="border border-gray-300 p-2">7.76</td>
                    </tr>
                    <tr className="h-10 text-left">
                      <th>Fourth Year</th>
                      <td className="border border-gray-300 p-2">17.50</td>
                      <td className="border border-gray-300 p-2">16.54</td>
                      <td className="border border-gray-300 p-2">15.58</td>
                      <td className="border border-gray-300 p-2">12.85</td>
                      <td className="border border-gray-300 p-2">11.98</td>
                      <td className="border border-gray-300 p-2">10.33</td>
                      <td className="border border-gray-300 p-2">10.98</td>
                      <td className="border border-gray-300 p-2">11.31</td>
                      <td className="border border-gray-300 p-2">11.14</td>
                      <td className="border border-gray-300 p-2">10.23</td>
                      <td className="border border-gray-300 p-2">10.08</td>
                      <td className="border border-gray-300 p-2">9.92</td>
                      <td className="border border-gray-300 p-2">9.77</td>
                      <td className="border border-gray-300 p-2">9.47</td>
                      <td className="border border-gray-300 p-2">10.08</td>
                      <td className="border border-gray-300 p-2">9.92</td>
                      <td className="border border-gray-300 p-2">8.28</td>
                    </tr>
                    <tr className="h-10 text-left">
                      <th className="border border-gray-300 p-2 font-semibold">
                        Fifth Year
                      </th>
                      <td className="border border-gray-300 p-2">19.70</td>
                      <td className="border border-gray-300 p-2">18.51</td>
                      <td className="border border-gray-300 p-2">17.35</td>
                      <td className="border border-gray-300 p-2">14.10</td>
                      <td className="border border-gray-300 p-2">13.09</td>
                      <td className="border border-gray-300 p-2">11.17</td>
                      <td className="border border-gray-300 p-2">11.92</td>
                      <td className="border border-gray-300 p-2">12.30</td>
                      <td className="border border-gray-300 p-2">12.11</td>
                      <td className="border border-gray-300 p-2">11.06</td>
                      <td className="border border-gray-300 p-2">10.88</td>
                      <td className="border border-gray-300 p-2">10.71</td>
                      <td className="border border-gray-300 p-2">10.53</td>
                      <td className="border border-gray-300 p-2">10.19</td>
                      <td className="border border-gray-300 p-2">10.88</td>
                      <td className="border border-gray-300 p-2">10.71</td>
                      <td className="border border-gray-300 p-2">8.85</td>
                    </tr>
                    <tr className="h-10 text-left">
                      <th>Sixth Year</th>
                      <td className="border border-gray-300 p-2">22.40</td>
                      <td className="border border-gray-300 p-2">20.69</td>
                      <td className="border border-gray-300 p-2">19.31</td>
                      <td className="border border-gray-300 p-2">15.47</td>
                      <td className="border border-gray-300 p-2">14.29</td>
                      <td className="border border-gray-300 p-2">12.08</td>
                      <td className="border border-gray-300 p-2">N.A.*</td>
                      <td className="border border-gray-300 p-2">N.A.*</td>
                      <td className="border border-gray-300 p-2">N.A.*</td>
                      <td className="border border-gray-300 p-2">N.A.*</td>
                      <td className="border border-gray-300 p-2"></td>
                      <td className="border border-gray-300 p-2">N.A.*</td>
                      <td className="border border-gray-300 p-2">N.A.*</td>
                      <td className="border border-gray-300 p-2">N.A.*</td>
                      <td className="border border-gray-300 p-2">N.A.*</td>
                      <td className="border border-gray-300 p-2">N.A.*</td>
                      <td className="border border-gray-300 p-2">N.A.*</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <h6 className="text-info">* Maturity period 5 years</h6>
        <span>
          Note: 1. Deduction u/s 80L is available on the accrued interest up to
          A.Y. 2005-06. From A.Y. 2006-07 section 80L has been deleted.
          <br />
          2. Accrued interest qualifies for rebate u/s 88 except for the
          maturing year up to A.Y. 2005-06. From A.Y. 2006-07, the accrued
          interest is deductible u/s 80C except for the maturing year.
        </span>
      </div>
      <h6 className="text-secondary text-center my-3">
        [As amended by Finance Act, 2022]
      </h6>
    </>
  );
};

export default InterestaccruedonnationalVIIIth;
