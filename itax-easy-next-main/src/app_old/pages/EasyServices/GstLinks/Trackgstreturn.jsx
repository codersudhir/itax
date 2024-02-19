"use client";
import React, { useRef, useState } from "react";
// import { useAuth } from "../../../hooks/useAuth";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const token = process.env.NEXT_PUBLIC_WEB_TOKEN;
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import SearchResult_section from "@/components/pagesComponents/pageLayout/SearchResult_section.js";

export default function Trackgstreturn() {
    const yearRef = useRef("");
    const gstinRef = useRef("");
  
    const [showdata, setShowData] = useState("");
    const [loading, setLoading] = useState("");
    const [error, setError] = useState(false);
    const [showhide, setShowHide] = useState(false);
    const pdf_ref = useRef();
    // const { token } = useAuth();
  
    const handleInputChange = (event) => {
      if (event.target.value) {
        event.target.value = event.target.value.toUpperCase();
      }
    };
  
    const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		console.log(token);

		await axios
			.post(
				`${BASE_URL}/gst/return/track`,
				{
					gstin: gstinRef.current.value,
					financialYear: yearRef.current.value,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then(function (response) {
				//  console.log(response.data.data);
				setShowData(response.data.data);

				setLoading(false);
				setShowHide(true);
				setError(false);
			})
			.catch(function (error) {
				console.log(error);
				setError(true);
				setShowHide(false);

				setLoading(false);
			});

		// try {
		//     const response = await fetch(`${BASE_URL}/gst/return/track`, {
		//         method: 'POST',
		//         headers: {
		//             'Authorization': `Bearer ${token}`
		//           },
		//         body: JSON.stringify({
		//             // gstin: "23BNJPS3408M1ZP",
		//             // gst_portal_username: "newsethielectri"
		//             gstin: gstinRef.current.value,
		//             financialYear: yearRef.current.value,
		//         })
		//     });
		//     const data = await response.json();
		//     console.log(data)
		//     setShowData(data)

		// } catch (e) {
		//     console.error(e);
		//     setLoading(false);

		// } finally {
		//     setLoading(false);

		// }
	};
    const manageHandleClear = (e) => {
		e.preventDefault();
		gstinRef.current.value = "";
		setShowData("");
		setShowHide(false);
	};
	const generatePDF = useReactToPrint({
		content: () => pdf_ref.current,
		documentTitle: "track-gst-return",
	});
    return (
        <SearchResult_section title="Track GST Return">
            <li className="">
                <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 ">
                        <div className="">
                            <label
                            htmlFor="gstin"
                            className="form-label inline-block mb-2 text-gray-700"
                            >
                            GSTN Of The Tax Payer
                            </label>
                            <div className="flex">
                            <input
                                type="text"
                                className="form-input w-full border p-2 border-blue-500 rounded-l"
                                id="gstin"
                                placeholder="Enter GSTN Of The Tax Payer"
                                ref={gstinRef}
                                onChange={handleInputChange}
                            />
                            </div>
                        </div>
                        <div className="">
                            <label
                            htmlFor="financialYear"
                            className="form-label inline-block mb-2 text-gray-700"
                            >
                            Financial Year
                            </label>
                            <select
                            ref={yearRef}
                            className="form-input w-full border p-2 border-blue-500 rounded-l"
                            aria-label="Default select example"
                            defaultValue={""}
                            >
                                <option>Choose..</option>
                                <option value="FY 2023-24">2023-24</option>
                                <option value="FY 2022-23">2022-23</option>
                                <option value="FY 2021-22">2021-22</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid gap-4 lg:p-4 place-content-center grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] xl:grid-cols-2 lg:grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))]">
                        <button
                            onClick={handleSubmit}
                            onKeyDown={(event) =>
                                event.key === "Enter" ? handleSubmit() : ""
                            }
                            disabled={loading}
                            className={`btn-primary ${loading?" cursor-not-allowed ":""}`}
                        >
                            {loading ? (<span className="spinner"></span>):("Search")}
                                
                        </button>
                        <button
                            disabled={loading}
                            onClick={(e) => manageHandleClear(e)}
                            className={`btn-warning ${loading?" cursor-not-allowed ":""}`}
                        >
                            clear
                        </button>
                        {showhide && (
                        <button type="button" className="btn-primary lg:col-span-2" onClick={generatePDF}>Download</button>
                        )}
                    </div>
                </form>
                <div className="py-4">
                {error && (
                    <h1 className="text-red-400 ml-4">Please Enter Valid GSTIN</h1>
                    )}
                </div>
            </li>
            <li className="lg:col-span-2 bg-gray-200 p-4">
                {showhide ? (
                    <div ref={pdf_ref} className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4 place-content-center">
                        {showdata && showdata?.EFiledlist?.map((curdata, i) => (
                            <div className="grid" key={i}>
                                <div className="block rounded-lg shadow-lg bg-white text-center">
                                    <div className="py-6 px-6 border-b border-gray-300">
                                    <h6 className="text-center">{curdata.rtntype}</h6>
                                    </div>
                                    <div className="p-6">
                                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                                        ARN No. - {curdata.arn}
                                    </h5>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>Date Of Filing - {curdata.dof}</li>
                                        <li>Mode Of Filing - {curdata.mof}</li>
                                        <li>Return Period - {curdata.ret_prd}</li>
                                        <li>valid - {curdata.valid}</li>
                                    </ul>
                                    <button
                                        type="button"
                                        className="inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Status - {curdata.status}
                                    </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    ):(
                    <div className="bg-white mx-auto md:w-2/3 px-2 py-8">
                        <div className="text-center ">
                            <p className="paragraph-xl"> Welcome to the Track GST Return page. </p>
                            <p className="paragraph-md"> Use the search bar to find information GST Returns and their financial records. </p>
                        </div>
                    </div>
                )}
            </li>
        </SearchResult_section>

    );
}
