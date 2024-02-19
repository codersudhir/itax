"use client";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
const Countrycode = () => {
  const conponentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Countrycode itaxeasy",
  });

  return (
    <>
      <div className="mx-10">
        <div>
          <div>
            <div>
              <h5 className="text-center my-5">
                Approved DIT Country codes (From Ass. Year 2013-14)
              </h5>
              <button
                type="button"
                onClick={generatePDF}
                class="text-white  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
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
                      Country code
                    </th>
                    <th className="border border-gray-300 p-2 font-semibold">
                      Country Name{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1</td>
                    <td className="border border-gray-300 p-2">CANADA </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">2</td>
                    <td className="border border-gray-300 p-2">
                      UNITED STATES OF AMERICA
                    </td>
                  </tr>

                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">5</td>
                    <td className="border border-gray-300 p-2">ITALY </td>
                  </tr>

                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">7</td>
                    <td className="border border-gray-300 p-2">KAZAKHSTAN </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">8</td>
                    <td className="border border-gray-300 p-2">
                      RUSSIAN FEDERATION{" "}
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">14</td>
                    <td className="border border-gray-300 p-2">PORTUGAL </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">20</td>
                    <td className="border border-gray-300 p-2">EGYPT</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">28</td>
                    <td className="border border-gray-300 p-2">
                      SOUTH AFRICA{" "}
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">30</td>
                    <td className="border border-gray-300 p-2">GREECE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">31</td>
                    <td className="border border-gray-300 p-2">NETHERLANDS </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">32</td>
                    <td className="border border-gray-300 p-2">BELGIUM</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">33</td>
                    <td className="border border-gray-300 p-2">FRANCE </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">35</td>
                    <td className="border border-gray-300 p-2">SPAIN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">36</td>
                    <td className="border border-gray-300 p-2">HUNGARY </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">40</td>
                    <td className="border border-gray-300 p-2">ROMANIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">41</td>
                    <td className="border border-gray-300 p-2">SWITZERLAND </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">43</td>
                    <td className="border border-gray-300 p-2">AUSTRIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">44</td>
                    <td className="border border-gray-300 p-2">
                      UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND{" "}
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">45</td>
                    <td className="border border-gray-300 p-2">DENMARK</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">46</td>
                    <td className="border border-gray-300 p-2">SWEDEN </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">47</td>
                    <td className="border border-gray-300 p-2">NORWAY</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">48</td>
                    <td className="border border-gray-300 p-2">POLAND </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">49</td>
                    <td className="border border-gray-300 p-2">GERMANY</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">51</td>
                    <td className="border border-gray-300 p-2">PERU </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">52</td>
                    <td className="border border-gray-300 p-2">MEXICO</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">53</td>
                    <td className="border border-gray-300 p-2">CUBA </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">54</td>
                    <td className="border border-gray-300 p-2">ARGENTINA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">55</td>
                    <td className="border border-gray-300 p-2">BRAZIL </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">56</td>
                    <td className="border border-gray-300 p-2">CHILE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">54</td>
                    <td className="border border-gray-300 p-2">ARGENTINA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">57</td>
                    <td className="border border-gray-300 p-2">COLOMBIA </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">58</td>
                    <td className="border border-gray-300 p-2">
                      VENEZUELA, BOLIVARIAN REPUBLIC OF...
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">60</td>
                    <td className="border border-gray-300 p-2">MALAYSIA </td>
                  </tr>

                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">61</td>
                    <td className="border border-gray-300 p-2">AUSTRALIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">62</td>
                    <td className="border border-gray-300 p-2">INDONESIA </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">63</td>
                    <td className="border border-gray-300 p-2">PHILIPPINES</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">64</td>
                    <td className="border border-gray-300 p-2">NEW ZEALAND</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">65</td>
                    <td className="border border-gray-300 p-2">SINGAPORE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">66</td>
                    <td className="border border-gray-300 p-2">THAILAND </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">81</td>
                    <td className="border border-gray-300 p-2">JAPAN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">82</td>
                    <td className="border border-gray-300 p-2">
                      REPUBLIC OF KOREA (SOUTH KOREA){" "}
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">84</td>
                    <td className="border border-gray-300 p-2">VIETNAM</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">86</td>
                    <td className="border border-gray-300 p-2">CHINA </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">90</td>
                    <td className="border border-gray-300 p-2">TURKEY</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">91</td>
                    <td className="border border-gray-300 p-2"> INDIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">92</td>
                    <td className="border border-gray-300 p-2">PAKISTAN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">93</td>
                    <td className="border border-gray-300 p-2"> AFGHANISTAN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">94</td>
                    <td className="border border-gray-300 p-2">SRI LANKA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">95</td>
                    <td className="border border-gray-300 p-2">MYANMAR </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">98</td>
                    <td className="border border-gray-300 p-2">IRAN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">211</td>
                    <td className="border border-gray-300 p-2">SOUTH SUDAN </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">212</td>
                    <td className="border border-gray-300 p-2">MOROCCO</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">213</td>
                    <td className="border border-gray-300 p-2">ALGERIA </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">216</td>
                    <td className="border border-gray-300 p-2">TUNISIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">218</td>
                    <td className="border border-gray-300 p-2">LIBYA </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">220</td>
                    <td className="border border-gray-300 p-2">GAMBIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">221</td>
                    <td className="border border-gray-300 p-2">SENEGAL </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">222</td>
                    <td className="border border-gray-300 p-2">MAURITANIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">223</td>
                    <td className="border border-gray-300 p-2">MALI </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">224</td>
                    <td className="border border-gray-300 p-2">GUINEA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">225</td>
                    <td className="border border-gray-300 p-2">
                      CÔTE D&apos;IVOIRE (IVORY COAST){" "}
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">226</td>
                    <td className="border border-gray-300 p-2">BURKINA FASO</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">227</td>
                    <td className="border border-gray-300 p-2">NIGER </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">228</td>
                    <td className="border border-gray-300 p-2">TOGO</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">229</td>
                    <td className="border border-gray-300 p-2">BENIN </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">230</td>
                    <td className="border border-gray-300 p-2">MAURITIUS</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">231</td>
                    <td className="border border-gray-300 p-2">LIBERIA </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">232</td>
                    <td className="border border-gray-300 p-2">SIERRA LEONE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">233</td>
                    <td className="border border-gray-300 p-2"> GHANA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">234</td>
                    <td className="border border-gray-300 p-2">NIGERIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">235</td>
                    <td className="border border-gray-300 p-2">CHAD </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">236</td>
                    <td className="border border-gray-300 p-2">
                      CENTRAL AFRICAN REPUBLIC
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">237</td>
                    <td className="border border-gray-300 p-2">CAMEROON </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">238</td>
                    <td className="border border-gray-300 p-2">CAPE VERDE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">239</td>
                    <td className="border border-gray-300 p-2">
                      {" "}
                      SAO TOME AND PRINCIPE
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">240</td>
                    <td className="border border-gray-300 p-2">
                      EQUATORIAL GUINEA
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">241</td>
                    <td className="border border-gray-300 p-2">GABON </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">242</td>
                    <td className="border border-gray-300 p-2">
                      CONGO, REPUBLIC OF THE...
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">243</td>
                    <td className="border border-gray-300 p-2">
                      DEMOCRATIC REPUBLIC OF THE CONGO{" "}
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">244</td>
                    <td className="border border-gray-300 p-2">ANGOLA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">245</td>
                    <td className="border border-gray-300 p-2"> GUINEA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">248</td>
                    <td className="border border-gray-300 p-2">SEYCHELLES</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">249</td>
                    <td className="border border-gray-300 p-2">SUDAN </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">250</td>
                    <td className="border border-gray-300 p-2">RWANDA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">251</td>
                    <td className="border border-gray-300 p-2"> ETHIOPIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">252</td>
                    <td className="border border-gray-300 p-2">SOMALIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">253</td>
                    <td className="border border-gray-300 p-2"> DJIBOUTI</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">254</td>
                    <td className="border border-gray-300 p-2">KENYA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">255</td>
                    <td className="border border-gray-300 p-2">
                      UNITED REPUBLIC OF TANZANIA{" "}
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">256</td>
                    <td className="border border-gray-300 p-2">UGANDA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">257</td>
                    <td className="border border-gray-300 p-2">BURUNDI </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">258</td>
                    <td className="border border-gray-300 p-2">MOZAMBIQUE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">260</td>
                    <td className="border border-gray-300 p-2">ZAMBIA </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">261</td>
                    <td className="border border-gray-300 p-2">MADAGASCAR</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">263</td>
                    <td className="border border-gray-300 p-2">ZIMBABWE </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">264</td>
                    <td className="border border-gray-300 p-2">NAMIBIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">265</td>
                    <td className="border border-gray-300 p-2">MALAWI </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">266</td>
                    <td className="border border-gray-300 p-2">LESOTHO</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">267</td>
                    <td className="border border-gray-300 p-2">BOTSWANA </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">268</td>
                    <td className="border border-gray-300 p-2">SWAZILAND</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">270</td>
                    <td className="border border-gray-300 p-2">COMOROS </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">291</td>
                    <td className="border border-gray-300 p-2">ERITREA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">352</td>
                    <td className="border border-gray-300 p-2">LUXEMBOURG </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">353</td>
                    <td className="border border-gray-300 p-2">IRELAND</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">354</td>
                    <td className="border border-gray-300 p-2"> ICELAND</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">355</td>
                    <td className="border border-gray-300 p-2">ALBANIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">356</td>
                    <td className="border border-gray-300 p-2">MALTA </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">357</td>
                    <td className="border border-gray-300 p-2">MALTA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">358</td>
                    <td className="border border-gray-300 p-2">FINLAND </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">359</td>
                    <td className="border border-gray-300 p-2">BULGARIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">370</td>
                    <td className="border border-gray-300 p-2"> LITHUANIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">371</td>
                    <td className="border border-gray-300 p-2">LATVIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">372</td>
                    <td className="border border-gray-300 p-2">ESTONIA </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">373</td>
                    <td className="border border-gray-300 p-2">
                      REPUBLIC OF MOLDOVA
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">374</td>
                    <td className="border border-gray-300 p-2">ARMENIA </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">375</td>
                    <td className="border border-gray-300 p-2">BELARUS</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">376</td>
                    <td className="border border-gray-300 p-2">ANDORRA </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">377</td>
                    <td className="border border-gray-300 p-2">MONACO</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">378</td>
                    <td className="border border-gray-300 p-2">SAN MARINO </td>
                  </tr>

                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">380</td>
                    <td className="border border-gray-300 p-2">UKRAINE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">381</td>
                    <td className="border border-gray-300 p-2"> SERBIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">382</td>
                    <td className="border border-gray-300 p-2">MONTENEGRO</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">385</td>
                    <td className="border border-gray-300 p-2">CROATIA </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">386</td>
                    <td className="border border-gray-300 p-2">SLOVENIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">387</td>
                    <td className="border border-gray-300 p-2">
                      BOSNIA AND HERZEGOVINA{" "}
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">389</td>
                    <td className="border border-gray-300 p-2">MACEDONIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">420</td>
                    <td className="border border-gray-300 p-2">
                      CZECH REPUBLIC{" "}
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">421</td>
                    <td className="border border-gray-300 p-2">SLOVAKIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">423</td>
                    <td className="border border-gray-300 p-2">
                      LIECHTENSTEIN{" "}
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">501</td>
                    <td className="border border-gray-300 p-2">BELIZE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">502</td>
                    <td className="border border-gray-300 p-2">GUATEMALA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">503</td>
                    <td className="border border-gray-300 p-2">EL SALVADOR</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">504</td>
                    <td className="border border-gray-300 p-2">HONDURAS </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">505</td>
                    <td className="border border-gray-300 p-2">NICARAGUA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">506</td>
                    <td className="border border-gray-300 p-2"> COSTA RICA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">507</td>
                    <td className="border border-gray-300 p-2">PANAMA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">509</td>
                    <td className="border border-gray-300 p-2">HAITI </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">591</td>
                    <td className="border border-gray-300 p-2">BOLIVIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">592</td>
                    <td className="border border-gray-300 p-2"> GUYANA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">593</td>
                    <td className="border border-gray-300 p-2">ECUADOR</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">595</td>
                    <td className="border border-gray-300 p-2"> PARAGUAY</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">597</td>
                    <td className="border border-gray-300 p-2">SURINAME</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">598</td>
                    <td className="border border-gray-300 p-2">URUGUAY </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">670</td>
                    <td className="border border-gray-300 p-2">TIMOR</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">673</td>
                    <td className="border border-gray-300 p-2">
                      BRUNEI DARUSSALAM{" "}
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">674</td>
                    <td className="border border-gray-300 p-2">NAURU</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">675</td>
                    <td className="border border-gray-300 p-2">
                      PAPUA NEW GUINEA{" "}
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">676</td>
                    <td className="border border-gray-300 p-2">TONGA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">677</td>
                    <td className="border border-gray-300 p-2">
                      SOLOMON ISLANDS{" "}
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">678</td>
                    <td className="border border-gray-300 p-2">VANUATU</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">679</td>
                    <td className="border border-gray-300 p-2">FIJI ISLANDS</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">680</td>
                    <td className="border border-gray-300 p-2">PALAU</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">685</td>
                    <td className="border border-gray-300 p-2">SAMOA </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">686</td>
                    <td className="border border-gray-300 p-2">KIRIBATI</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">688</td>
                    <td className="border border-gray-300 p-2"> TUVALU</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">691</td>
                    <td className="border border-gray-300 p-2">
                      MICRONESIA, FEDERATED STATES OF...
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">692</td>
                    <td className="border border-gray-300 p-2">
                      MARSHALL ISLANDS{" "}
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">850</td>
                    <td className="border border-gray-300 p-2">
                      DEMOCRATIC PEOPLE&apos;S REPUBLIC OF KOREA (NORTH KOREA)
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">855</td>
                    <td className="border border-gray-300 p-2">CAMBODIA </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">856</td>
                    <td className="border border-gray-300 p-2">
                      LAO PEOPLE&apos;S DEMOCRATIC REPUBLIC
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">880</td>
                    <td className="border border-gray-300 p-2">BANGLADESH </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">960</td>
                    <td className="border border-gray-300 p-2">MALDIVES</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">961</td>
                    <td className="border border-gray-300 p-2">LEBANON </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">962</td>
                    <td className="border border-gray-300 p-2">JORDAN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">963</td>
                    <td className="border border-gray-300 p-2">
                      SYRIAN ARAB REPUBLIC{" "}
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">964</td>
                    <td className="border border-gray-300 p-2">IRAQ</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">965</td>
                    <td className="border border-gray-300 p-2">KUWAIT </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">966</td>
                    <td className="border border-gray-300 p-2">SAUDI ARABIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">967</td>
                    <td className="border border-gray-300 p-2">YEMEN </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">968</td>
                    <td className="border border-gray-300 p-2">OMAN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">971</td>
                    <td className="border border-gray-300 p-2">
                      UNITED ARAB EMIRATES{" "}
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">972</td>
                    <td className="border border-gray-300 p-2">ISRAEL</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">973</td>
                    <td className="border border-gray-300 p-2">BAHRAIN </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">974</td>
                    <td className="border border-gray-300 p-2">QATAR</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">975</td>
                    <td className="border border-gray-300 p-2">BHUTAN </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">976</td>
                    <td className="border border-gray-300 p-2">MONGOLIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">977</td>
                    <td className="border border-gray-300 p-2">NEPAL </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">992</td>
                    <td className="border border-gray-300 p-2">TAJIKISTAN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">993</td>
                    <td className="border border-gray-300 p-2">
                      TURKMENISTAN{" "}
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">994</td>
                    <td className="border border-gray-300 p-2">AZERBAIJAN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">995</td>
                    <td className="border border-gray-300 p-2">GEORGIA </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">996</td>
                    <td className="border border-gray-300 p-2">KYRGYZSTAN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">998</td>
                    <td className="border border-gray-300 p-2">UZBEKISTAN </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1242</td>
                    <td className="border border-gray-300 p-2">BAHAMAS</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1246</td>
                    <td className="border border-gray-300 p-2">BARBADOS </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1268</td>
                    <td className="border border-gray-300 p-2">
                      ANTIGUA AND BARBUDA
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1473</td>
                    <td className="border border-gray-300 p-2">GRENADA </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1758</td>
                    <td className="border border-gray-300 p-2">SAINT LUCIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1767</td>
                    <td className="border border-gray-300 p-2"> DOMINICA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1784</td>
                    <td className="border border-gray-300 p-2">
                      SAINT VINCENT AND THE GRENADINES
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1809</td>
                    <td className="border border-gray-300 p-2">
                      DOMINICAN REPUBLIC{" "}
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1868</td>
                    <td className="border border-gray-300 p-2">
                      TRINIDAD AND TOBAGO
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1869</td>
                    <td className="border border-gray-300 p-2">
                      SAINT KITTS AND NEVIS{" "}
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1876</td>
                    <td className="border border-gray-300 p-2">JAMAICA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">9999</td>
                    <td className="border border-gray-300 p-2">OTHERS</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col">
              <h5 className="text-center my-5">List Upto Ass. Year 2012-13</h5>
              <table className="table table-bordered border-secondary">
                <thead>
                  <tr className="h-10 text-left">
                    <th>
                      <strong>CountryCode</strong>
                    </th>
                    <th>
                      <strong>CountryName</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">93</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;AFGHANISTAN
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1907</td>
                    <td className="border border-gray-300 p-2">ALASKA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">355</td>
                    <td className="border border-gray-300 p-2">ALBANIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">213</td>
                    <td className="border border-gray-300 p-2">ALGERIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">376</td>
                    <td className="border border-gray-300 p-2">ANDORRA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">244</td>
                    <td className="border border-gray-300 p-2">&nbsp;ANGOLA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1264</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;ANGUILLA
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1268</td>
                    <td className="border border-gray-300 p-2">ANTIGUA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">54</td>
                    <td className="border border-gray-300 p-2">ARGENTINA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">374</td>
                    <td className="border border-gray-300 p-2">ARMENIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">297</td>
                    <td className="border border-gray-300 p-2">ARUBA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">247</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;ASCENSION
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">61</td>
                    <td className="border border-gray-300 p-2">AUSTRALIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">43</td>
                    <td className="border border-gray-300 p-2">AUSTRIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">994</td>
                    <td className="border border-gray-300 p-2">
                      AZERBAIJAN REPUBLIC
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">351</td>
                    <td className="border border-gray-300 p-2">&nbsp;AZORES</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1242</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;BAHAMAS
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">973</td>
                    <td className="border border-gray-300 p-2">BAHARIN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">880</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;BANGLADESH
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1246</td>
                    <td className="border border-gray-300 p-2">BARBADOS</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">375</td>
                    <td className="border border-gray-300 p-2">BELARUS</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">32</td>
                    <td className="border border-gray-300 p-2">BELGIUM</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">501</td>
                    <td className="border border-gray-300 p-2">&nbsp;BELIZE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">229</td>
                    <td className="border border-gray-300 p-2">BENIN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">975</td>
                    <td className="border border-gray-300 p-2">BHUTAN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">591</td>
                    <td className="border border-gray-300 p-2">BOLIVIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">387</td>
                    <td className="border border-gray-300 p-2">
                      BOSNIA And HERZEGOVINA
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">267</td>
                    <td className="border border-gray-300 p-2">
                      BOTSWANA, REPUBLIC OF
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">55</td>
                    <td className="border border-gray-300 p-2">&nbsp;BRAZIL</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">673</td>
                    <td className="border border-gray-300 p-2">BRUNEI</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">359</td>
                    <td className="border border-gray-300 p-2">BULGARIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">226</td>
                    <td className="border border-gray-300 p-2">
                      BURKINA FASSO
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">257</td>
                    <td className="border border-gray-300 p-2">BURUNDI</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1</td>
                    <td className="border border-gray-300 p-2">CANADA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">34</td>
                    <td className="border border-gray-300 p-2">
                      CANARY ISLAND
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">238</td>
                    <td className="border border-gray-300 p-2">CAPE VERDE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1345</td>
                    <td className="border border-gray-300 p-2">
                      CAYMAN ISLAND
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">236</td>
                    <td className="border border-gray-300 p-2">
                      CENTRAL AFRICAN REPUBLIC
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">56</td>
                    <td className="border border-gray-300 p-2">CHILE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">86</td>
                    <td className="border border-gray-300 p-2">&nbsp;CHINA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">61</td>
                    <td className="border border-gray-300 p-2">
                      CHRISTMAS ISLAND
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">27</td>
                    <td className="border border-gray-300 p-2">CISKEI</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">672</td>
                    <td className="border border-gray-300 p-2">
                      COCOSKEELING ISLAND
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">57</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;COLOMBIA
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">682</td>
                    <td className="border border-gray-300 p-2">COOK ISLAND</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">506</td>
                    <td className="border border-gray-300 p-2">COSTA RICA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">385</td>
                    <td className="border border-gray-300 p-2">CROATIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">53</td>
                    <td className="border border-gray-300 p-2">CUBA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">357</td>
                    <td className="border border-gray-300 p-2">CYPRUS</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">420</td>
                    <td className="border border-gray-300 p-2">
                      CZECH REPUBLIC
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">246</td>
                    <td className="border border-gray-300 p-2">DIEGO GARCIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">253</td>
                    <td className="border border-gray-300 p-2">DJIBOUTI</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1809</td>
                    <td className="border border-gray-300 p-2">
                      DOMANICCAN REPUBLIC
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1767</td>
                    <td className="border border-gray-300 p-2">
                      DOMINICA ISLAND
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">670</td>
                    <td className="border border-gray-300 p-2">EAST TIMOR</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">20</td>
                    <td className="border border-gray-300 p-2">&nbsp;EGYPT</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">503</td>
                    <td className="border border-gray-300 p-2">EL SALVADOR</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">240</td>
                    <td className="border border-gray-300 p-2">
                      EQUATORIAL GUINEA
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">291</td>
                    <td className="border border-gray-300 p-2">ERITREA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">372</td>
                    <td className="border border-gray-300 p-2">ESTONIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">251</td>
                    <td className="border border-gray-300 p-2">ETHIOPIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">500</td>
                    <td className="border border-gray-300 p-2">
                      FALKLAND ISLAND
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">298</td>
                    <td className="border border-gray-300 p-2">FAROE ISLAND</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">679</td>
                    <td className="border border-gray-300 p-2">
                      FIJI REPUBLIC
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">358</td>
                    <td className="border border-gray-300 p-2">FINLAND</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">689</td>
                    <td className="border border-gray-300 p-2">FR POLYNESIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">33</td>
                    <td className="border border-gray-300 p-2">&nbsp;FRANCE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">594</td>
                    <td className="border border-gray-300 p-2">
                      FRENCH GUIANA
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">241</td>
                    <td className="border border-gray-300 p-2">
                      GABONESE REPUBLIC
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">220</td>
                    <td className="border border-gray-300 p-2">GAMBIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">995</td>
                    <td className="border border-gray-300 p-2">GEORGIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">350</td>
                    <td className="border border-gray-300 p-2">GIBRALTOR</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">299</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;GREENLAND
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">590</td>
                    <td className="border border-gray-300 p-2">GUADELOPE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">502</td>
                    <td className="border border-gray-300 p-2">GUATEMALA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">245</td>
                    <td className="border border-gray-300 p-2">
                      GUINEA BISSAU
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">224</td>
                    <td className="border border-gray-300 p-2">
                      GUINEA REPUBLIC
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">592</td>
                    <td className="border border-gray-300 p-2">
                      GUYANA REPUBLIC
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">509</td>
                    <td className="border border-gray-300 p-2">
                      HAITI REPUBLIC
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1808</td>
                    <td className="border border-gray-300 p-2">HAWAII</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">36</td>
                    <td className="border border-gray-300 p-2">HUNGARY</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">354</td>
                    <td className="border border-gray-300 p-2">ICELAND</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">62</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;INDONESIA
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">98</td>
                    <td className="border border-gray-300 p-2">IRAN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">964</td>
                    <td className="border border-gray-300 p-2">IRAQ</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">353</td>
                    <td className="border border-gray-300 p-2">IRELAND</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">972</td>
                    <td className="border border-gray-300 p-2">ISRAEL</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">39</td>
                    <td className="border border-gray-300 p-2">&nbsp;ITALY</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">225</td>
                    <td className="border border-gray-300 p-2">
                      IVORY COAST (COTE D IVORIE)
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1876</td>
                    <td className="border border-gray-300 p-2">JAMAICA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">81</td>
                    <td className="border border-gray-300 p-2">JAPAN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">962</td>
                    <td className="border border-gray-300 p-2">JORDAN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">855</td>
                    <td className="border border-gray-300 p-2">
                      KAMPUCHEA (CAMBODIA)
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">7</td>
                    <td className="border border-gray-300 p-2">KAZAKISTAN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">254</td>
                    <td className="border border-gray-300 p-2">KENYA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">996</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;KIRGHISTAN
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">686</td>
                    <td className="border border-gray-300 p-2">KIRIBATI</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">965</td>
                    <td className="border border-gray-300 p-2">KUWAIT</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">856</td>
                    <td className="border border-gray-300 p-2">LAOS</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">371</td>
                    <td className="border border-gray-300 p-2">&nbsp;LATVIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">961</td>
                    <td className="border border-gray-300 p-2">LEBANON</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">266</td>
                    <td className="border border-gray-300 p-2">LESOTHO</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">231</td>
                    <td className="border border-gray-300 p-2">LIBERIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">218</td>
                    <td className="border border-gray-300 p-2">LIBYA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">423</td>
                    <td className="border border-gray-300 p-2">
                      LIECHTENSTEIN
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">370</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;LITHVANIA
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">389</td>
                    <td className="border border-gray-300 p-2">MACEDONIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">351</td>
                    <td className="border border-gray-300 p-2">
                      MADEIRA ISLAND
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">265</td>
                    <td className="border border-gray-300 p-2">MALAWI</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">60</td>
                    <td className="border border-gray-300 p-2">MALAYSIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">960</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;MALDIVES
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">223</td>
                    <td className="border border-gray-300 p-2">MALI</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">356</td>
                    <td className="border border-gray-300 p-2">MALTA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">976</td>
                    <td className="border border-gray-300 p-2">MANGOLIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1670</td>
                    <td className="border border-gray-300 p-2">
                      MARIANA ISLAND
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">692</td>
                    <td className="border border-gray-300 p-2">
                      MARSHALL ISLAND
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">596</td>
                    <td className="border border-gray-300 p-2">MARTINIQUE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">222</td>
                    <td className="border border-gray-300 p-2">MAURITANIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">230</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;MAURITIUS
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">269</td>
                    <td className="border border-gray-300 p-2">MAYOTTE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">52</td>
                    <td className="border border-gray-300 p-2">&nbsp;MEXICO</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">691</td>
                    <td className="border border-gray-300 p-2">MICRONESIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1664</td>
                    <td className="border border-gray-300 p-2">MONTSERRAT</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">258</td>
                    <td className="border border-gray-300 p-2">MOZAMBIQUE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">264</td>
                    <td className="border border-gray-300 p-2">NAMIBIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">977</td>
                    <td className="border border-gray-300 p-2">NEPAL</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">31</td>
                    <td className="border border-gray-300 p-2">NETHERLANDS</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">599</td>
                    <td className="border border-gray-300 p-2">
                      NETHERLANDS ANTHILLES
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">687</td>
                    <td className="border border-gray-300 p-2">
                      NEW CALEDONIA
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">64</td>
                    <td className="border border-gray-300 p-2">NEW ZEALAND</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">505</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;NICARAGUA
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">227</td>
                    <td className="border border-gray-300 p-2">NIGER</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">234</td>
                    <td className="border border-gray-300 p-2">NIGERIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">683</td>
                    <td className="border border-gray-300 p-2">NIUE ISLAND</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">672</td>
                    <td className="border border-gray-300 p-2">
                      NORFORK ISLAND
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">850</td>
                    <td className="border border-gray-300 p-2">NORTH KOREA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">92</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;PAKISTAN
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">680</td>
                    <td className="border border-gray-300 p-2">PALAU</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">970</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;PALESTINE
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">507</td>
                    <td className="border border-gray-300 p-2">PANAMA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">675</td>
                    <td className="border border-gray-300 p-2">
                      PAPUA NEW GUINEA
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">595</td>
                    <td className="border border-gray-300 p-2">PARAGUAY</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">51</td>
                    <td className="border border-gray-300 p-2">PERU</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">63</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;PHILIPPINES
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">48</td>
                    <td className="border border-gray-300 p-2">POLAND</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">351</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;PORTUGAL
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1787</td>
                    <td className="border border-gray-300 p-2">PUERTO RICO</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">974</td>
                    <td className="border border-gray-300 p-2">QATAR</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">262</td>
                    <td className="border border-gray-300 p-2">REUNION</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">230</td>
                    <td className="border border-gray-300 p-2">
                      RODRIGUES ISLAND
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">40</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;ROMANIA
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">7</td>
                    <td className="border border-gray-300 p-2">&nbsp;RUSSIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">250</td>
                    <td className="border border-gray-300 p-2">
                      RWANDESE REPUBLIC
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">684</td>
                    <td className="border border-gray-300 p-2">
                      SAMOA AMERICAN
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">685</td>
                    <td className="border border-gray-300 p-2">
                      SAMOA WESTERN
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">378</td>
                    <td className="border border-gray-300 p-2">SAN MARINO</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">966</td>
                    <td className="border border-gray-300 p-2">SAUDI ARABIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">221</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;SENEGAL
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">248</td>
                    <td className="border border-gray-300 p-2">SEYCHELLES</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">232</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;SIERRALEONE
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">65</td>
                    <td className="border border-gray-300 p-2">SINGAPORE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">421</td>
                    <td className="border border-gray-300 p-2">
                      SLOVAK REPUBLIC
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">386</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;SLOVENIA
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">677</td>
                    <td className="border border-gray-300 p-2">
                      SOLOMAN ISLAND
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">252</td>
                    <td className="border border-gray-300 p-2">
                      SOMALIA DEMOCRATIC REPUBLIC
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">27</td>
                    <td className="border border-gray-300 p-2">SOUTH AFRICA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">82</td>
                    <td className="border border-gray-300 p-2">SOUTH KOREA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">34</td>
                    <td className="border border-gray-300 p-2">SPAIN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">94</td>
                    <td className="border border-gray-300 p-2">SRILANKA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">290</td>
                    <td className="border border-gray-300 p-2">ST. HELENA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1869</td>
                    <td className="border border-gray-300 p-2">
                      ST. KITTS/NAVIS ISLAND
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1758</td>
                    <td className="border border-gray-300 p-2">ST. LUCIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">508</td>
                    <td className="border border-gray-300 p-2">
                      ST. PIERRE &amp; MIQUELIOM
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">239</td>
                    <td className="border border-gray-300 p-2">
                      ST. TOME &amp; PRINCEP
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1784</td>
                    <td className="border border-gray-300 p-2">
                      ST. VINCENT &amp; THE GRENADIAN
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">249</td>
                    <td className="border border-gray-300 p-2">SUDAN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">597</td>
                    <td className="border border-gray-300 p-2">SURINAM</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">268</td>
                    <td className="border border-gray-300 p-2">SWAZILAND</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">41</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;SWITZERLAND
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">963</td>
                    <td className="border border-gray-300 p-2">SYRIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">886</td>
                    <td className="border border-gray-300 p-2">&nbsp;TAIWAN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">255</td>
                    <td className="border border-gray-300 p-2">TANZANIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">992</td>
                    <td className="border border-gray-300 p-2">TAZAKISTAN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">66</td>
                    <td className="border border-gray-300 p-2">THAILAND</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">228</td>
                    <td className="border border-gray-300 p-2">
                      TOGOLESE REPUBLIC
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">690</td>
                    <td className="border border-gray-300 p-2">
                      TOKELAU ISLAND
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">27</td>
                    <td className="border border-gray-300 p-2">TRANSKEI</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1868</td>
                    <td className="border border-gray-300 p-2">
                      TRINIDAD &amp; TOBAGO
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">216</td>
                    <td className="border border-gray-300 p-2">TUNISIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">90</td>
                    <td className="border border-gray-300 p-2">TURKEY</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">993</td>
                    <td className="border border-gray-300 p-2">TURKMENISTAN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1649</td>
                    <td className="border border-gray-300 p-2">
                      TURKS &amp; CAICOS ISLANDS
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">688</td>
                    <td className="border border-gray-300 p-2">TUVALU</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">971</td>
                    <td className="border border-gray-300 p-2">&nbsp;UAE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">44</td>
                    <td className="border border-gray-300 p-2">&nbsp;UK</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">380</td>
                    <td className="border border-gray-300 p-2">UKRAINE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1</td>
                    <td className="border border-gray-300 p-2">&nbsp;USA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">998</td>
                    <td className="border border-gray-300 p-2">UZBEKISTAN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">678</td>
                    <td className="border border-gray-300 p-2">VANAUTU</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">39</td>
                    <td className="border border-gray-300 p-2">VATICAN CITY</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">27</td>
                    <td className="border border-gray-300 p-2">VENDA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">58</td>
                    <td className="border border-gray-300 p-2">
                      &nbsp;VENEZUELA
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">84</td>
                    <td className="border border-gray-300 p-2">VIETNAM</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1284</td>
                    <td className="border border-gray-300 p-2">
                      VIRGIN ISLAND (BRI)
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1340</td>
                    <td className="border border-gray-300 p-2">
                      VIRGIN ISLAND (USA)
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">681</td>
                    <td className="border border-gray-300 p-2">
                      WALLIS And FUTUNA ISLAND
                    </td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">381</td>
                    <td className="border border-gray-300 p-2">YUGOSLAVIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">243</td>
                    <td className="border border-gray-300 p-2">ZAIRE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">260</td>
                    <td className="border border-gray-300 p-2">ZAMBIA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">263</td>
                    <td className="border border-gray-300 p-2">ZIMBABWE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1441</td>
                    <td className="border border-gray-300 p-2">BERMUDA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">27</td>
                    <td className="border border-gray-300 p-2">BOPUPATSWANA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">237</td>
                    <td className="border border-gray-300 p-2">CAMEROON</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">235</td>
                    <td className="border border-gray-300 p-2">CHAD</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">269</td>
                    <td className="border border-gray-300 p-2">COMOROS</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">242</td>
                    <td className="border border-gray-300 p-2">CONGO</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">45</td>
                    <td className="border border-gray-300 p-2">DENMARK</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">593</td>
                    <td className="border border-gray-300 p-2">ECUADOR</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">49</td>
                    <td className="border border-gray-300 p-2">GERMANY</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">233</td>
                    <td className="border border-gray-300 p-2">GHANA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">30</td>
                    <td className="border border-gray-300 p-2">GREECE</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1473</td>
                    <td className="border border-gray-300 p-2">GRENEDA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">1671</td>
                    <td className="border border-gray-300 p-2">GUAM</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">504</td>
                    <td className="border border-gray-300 p-2">HONDURAS</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">852</td>
                    <td className="border border-gray-300 p-2">HONGKONG</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">352</td>
                    <td className="border border-gray-300 p-2">LUXUMBURG</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">853</td>
                    <td className="border border-gray-300 p-2">MACAO</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">261</td>
                    <td className="border border-gray-300 p-2">MADAGASCAR</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">373</td>
                    <td className="border border-gray-300 p-2">MOLDOVA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">377</td>
                    <td className="border border-gray-300 p-2">MONACO</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">212</td>
                    <td className="border border-gray-300 p-2">MOROCCO</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">95</td>
                    <td className="border border-gray-300 p-2">MYANMAR</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">674</td>
                    <td className="border border-gray-300 p-2">NAURU</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">47</td>
                    <td className="border border-gray-300 p-2">NORWAY</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">968</td>
                    <td className="border border-gray-300 p-2">OMAN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">46</td>
                    <td className="border border-gray-300 p-2">SWEDEN</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">676</td>
                    <td className="border border-gray-300 p-2">TONGA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">256</td>
                    <td className="border border-gray-300 p-2">UGANDA</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">598</td>
                    <td className="border border-gray-300 p-2">URUGUAY</td>
                  </tr>
                  <tr className="h-10 text-left">
                    <td className="border border-gray-300 p-2">967</td>
                    <td className="border border-gray-300 p-2">YEMEN</td>
                  </tr>
                </tbody>
              </table>
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

export default Countrycode;
