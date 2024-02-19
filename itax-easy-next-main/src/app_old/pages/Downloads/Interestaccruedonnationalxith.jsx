"use client";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
const Interestaccruedonnationalxith = () => {
  const conponentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Interestaccruedonnationalxith itaxeasy",
  });
  return (
    <>
      <div>
        <h5 className="text-center my-5">
          Interest Accrued on National Saving Certificates{" "}
        </h5>
        <button
          type="button"
          onClick={generatePDF}
          class="text-white mx-2  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
        >
          Download
        </button>
        <table
          className="table border-collapse border border-gray-300 "
          ref={conponentPDF}
        >
          <thead>
            <tr className="bg-blue-300">
              <th
                className="border border-gray-300 p-2 font-semibold"
                colSpan={4}
              >
                Amount of interest accruing on the certificate of Rs. 100
                denomination
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">
                Year for which interest accrues
              </td>
              <td colSpan={4} className="text-center">
                <table className="table table-bordered">
                  <thead>
                    <tr className="bg-blue-300">
                      <th
                        className="border border-gray-300 p-2 font-semibold"
                        colSpan={3}
                      >
                        When NSC was purchased
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="h-10 text-left">
                      <td className="border border-gray-300 p-2">
                        w.e.f. 01-12-2011 to 31-03-2012
                      </td>
                      <td className="border border-gray-300 p-2">
                        01-04-2012 to 31-03-2013
                      </td>
                      <td className="border border-gray-300 p-2">
                        on or after 01-04-2013*
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">First Year</td>
              <td className="border border-gray-300 p-2">8.89</td>
              <td className="border border-gray-300 p-2">9.10</td>
              <td className="border border-gray-300 p-2">8.99</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">Second Year</td>
              <td className="border border-gray-300 p-2">9.68</td>
              <td className="border border-gray-300 p-2">9.93</td>
              <td className="border border-gray-300 p-2">9.80</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">Third Year</td>
              <td className="border border-gray-300 p-2">10.54</td>
              <td className="border border-gray-300 p-2">10.83</td>
              <td className="border border-gray-300 p-2">10.68</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">Fourth Year</td>
              <td className="border border-gray-300 p-2">11.48</td>
              <td className="border border-gray-300 p-2">11.81</td>
              <td className="border border-gray-300 p-2">11.64</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">Fifth Year</td>
              <td className="border border-gray-300 p-2">12.50</td>
              <td className="border border-gray-300 p-2">12.89</td>
              <td className="border border-gray-300 p-2">12.69</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">Sixth Year</td>
              <td className="border border-gray-300 p-2">13.61</td>
              <td className="border border-gray-300 p-2">14.06</td>
              <td className="border border-gray-300 p-2">13.83</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">Seventh Year</td>
              <td className="border border-gray-300 p-2">14.82</td>
              <td className="border border-gray-300 p-2">15.34</td>
              <td className="border border-gray-300 p-2">15.08</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">Eighth Year</td>
              <td className="border border-gray-300 p-2">16.13</td>
              <td className="border border-gray-300 p-2">16.74</td>
              <td className="border border-gray-300 p-2">16.43</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">Ninth Year</td>
              <td className="border border-gray-300 p-2">17.57</td>
              <td className="border border-gray-300 p-2">18.26</td>
              <td className="border border-gray-300 p-2">17.91</td>
            </tr>
            <tr className="h-10 text-left">
              <td className="border border-gray-300 p-2">Tenth Year</td>
              <td className="border border-gray-300 p-2">19.13</td>
              <td className="border border-gray-300 p-2">19.92</td>
              <td className="border border-gray-300 p-2">19.52</td>
            </tr>
          </tbody>
        </table>
        <h6 className="text-info">
          {" "}
          * Discontinued with effect from December 20, 2015
        </h6>
        <span className="border">
          National Saving Certificates (IXth Issue):– These certificates are
          issued with effect from December 1, 2011. Maturity period of 10 years
          and interest is accrued at the rate of 8.7 percent (8.9 percent if
          investment made on or after April 1, 2012) and 8.8 per cent(if
          investment made on or after April 1, 2013) which is compounded half
          yearly. However, interest is taxable on yearly basis according to the
          rates given above.
        </span>
      </div>
      <h6 className="text-secondary text-center my-3">
        [As amended by Finance Act, 2022]
      </h6>
    </>
  );
};

export default Interestaccruedonnationalxith;
