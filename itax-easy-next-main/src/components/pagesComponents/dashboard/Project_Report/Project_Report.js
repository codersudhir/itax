"use client"
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Project_Report = () => {
  const [property, setProperty] = useState("");
  const [promotercon, setPromotercon] = useState("");
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);

  const next = () => {
    setFormNo(formNo + 1);
  };
  const pre = () => {
    setFormNo(formNo - 1);
  };

  const [inputs, setInputs] = useState([
    {
      lable: "Name",
      Nameinput: "",
      pricelable: "Price",
      Price: "",
      DepreciationRatelable: "Depreciation Rate",
      DepreciationRate: "",
    },
  ]);
  const handleAddInput = () => {
    setInputs([
      ...inputs,
      {
        lable: "Name",
        Nameinput: "",
        pricelable: "Price",
        Price: "",
        DepreciationRatelable: "Depreciation Rate",
        DepreciationRate: "",
      },
    ]);
  };

  const handleDeleteInput = (index) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
  };

  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="p-5 mx-5">
          <div className="flex justify-center items-center mb-8">
            {formArray.map((v, i) => (
              <>
                <div
                  className={`w-[35px] my-3 text-white rounded-full ${
                    formNo - 1 === i ||
                    formNo - 1 === i + 1 ||
                    formNo === formArray.length
                      ? "bg-blue-500"
                      : "bg-slate-400"
                  } h-[35px] flex justify-center items-center`}
                >
                  {v}
                </div>
                {i !== formArray.length - 1 && (
                  <div
                    className={`w-[85px] h-[2px] ${
                      formNo === i + 2 || formNo === formArray.length
                        ? "bg-blue-500"
                        : "bg-slate-400"
                    }`}
                  ></div>
                )}
              </>
            ))}
          </div>
          {formNo === 1 && (
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col mb-2">
                <label htmlFor="batch">BUSINESS NAME (required)</label>
              </div>
              <div className="col-span-2">
                <select
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  name="type"
                >
                  <option value="" disabled="">
                    -- Select an Option --
                  </option>
                  <option value="Flour Mill">Flour Mill</option>
                  <option value="Toilet Soap Manufacturing Unit">
                    Toilet Soap Manufacturing Unit
                  </option>
                  <option value="Tomato sauce Manufacturing Unit">
                    Tomato sauce Manufacturing Unit
                  </option>
                  <option value="Roasted Rice Flakes">
                    Roasted Rice Flakes
                  </option>
                  <option value="Banana Fiber Extraction and weaving">
                    Banana Fiber Extraction and weaving
                  </option>
                  <option value="Computer Assembling">
                    Computer Assembling
                  </option>
                  <option value="Light Engineering(Nuts, Bolts, Washers, Rivets etc.)">
                    Light Engineering(Nuts, Bolts, Washers, Rivets etc.)
                  </option>
                  <option value="Metal Based Industries: Agricultural Implements, Cutleries&amp; Hand Tools">
                    Metal Based Industries: Agricultural Implements,
                    Cutleries&amp; Hand Tools
                  </option>
                  <option value="Manufacturing of Paper Products (Paper Cups)">
                    Manufacturing of Paper Products (Paper Cups)
                  </option>
                  <option value="Curry and Rice Powder">
                    Curry and Rice Powder
                  </option>
                  <option value="Bakery Products">Bakery Products</option>
                  <option value="Steel Furniture">Steel Furniture</option>
                  <option value="Desiccated Coconut Powder">
                    Desiccated Coconut Powder
                  </option>
                  <option value="Foot Wear">Foot Wear</option>
                  <option value="Wooden Furniture Manufacturing Unit">
                    Wooden Furniture Manufacturing Unit
                  </option>
                  <option value="Manufacturing of Paper Napkins">
                    Manufacturing of Paper Napkins
                  </option>
                  <option value="Pappad Manufacturing">
                    Pappad Manufacturing
                  </option>
                  <option value="Readymade Garments">Readymade Garments</option>
                  <option value="Pickle Unit">Pickle Unit</option>
                  <option value="Manufacturing of Palm Plate">
                    Manufacturing of Palm Plate
                  </option>
                  <option value="Note Book Manufacturing">
                    Note Book Manufacturing
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="arera">Area of property:</label>
              </div>
              <div className="flex flex-col mb-2 col-span-2">
                <input
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="text"
                  name="gstin_no"
                  id="gstin_no"
                />
              </div>
              <br />

              <div className="col-span-2">
                <div className="flex items-center mb-4 ">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value="rent"
                    name="default-radio"
                    onClick={(e) => setProperty(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Rental
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="default-radio-2"
                    type="radio"
                    name="default-radio"
                    onClick={(e) => setProperty(e.target.value)}
                    value="own"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Owned
                  </label>
                </div>
              </div>
              {property === "rent" && (
                <>
                  <div>
                    <label htmlFor="arera">Value of Security Deposit:</label>
                  </div>
                  <div className="flex flex-col col-span-2 mb-2">
                    <input
                      className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                      type="text"
                      name="partyname"
                      placeholder="Value of Security Deposit"
                      id="partyname"
                    />
                  </div>
                  <div>
                    <label htmlFor="arera">Monthly Rent:</label>
                  </div>
                  <div className="flex flex-col col-span-2 mb-2">
                    <input
                      className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                      type="text"
                      name="partyname"
                      placeholder="Monthly Rent"
                      id="partyname"
                    />
                  </div>
                </>
              )}
              {property === "own" && (
                <>
                  <div>
                    <label htmlFor="arera">Value of Land/building:</label>
                  </div>
                  <div className="flex flex-col col-span-2 mb-2">
                    <input
                      className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                      type="text"
                      name="partyname"
                      placeholder="Value in ₹"
                      id="partyname"
                    />
                  </div>
                  <div>
                    <label htmlFor="arera">Depreciation Rate of Building</label>
                  </div>
                  <div className="flex flex-col col-span-2 mb-2">
                    <input
                      className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                      type="text"
                      name="partyname"
                      placeholder="Depreciation Rate of Building in %"
                      id="partyname"
                    />
                  </div>
                </>
              )}

              <div className="mt-4 flex justify-center items-center">
                <button
                  onClick={next}
                  className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {formNo === 2 && (
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col mb-2 col-span-4 text-center">
                <label className="font-bold text-lg">Plant and Machinery</label>
              </div>

              {inputs.map((item, index) => (
                <>
                  <div className="flex flex-col" key={index}>
                    <p>{item.lable}</p>
                    <input
                      className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                      name="firstName"
                      type="text"
                      value={item.Nameinput}
                      onChange={(event) => handleChange(event, index)}
                    />
                  </div>
                  <div className="flex flex-col" key={index}>
                    <p>{item.pricelable}</p>
                    <input
                      className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                      name="firstName"
                      type="text"
                      value={item.Price}
                      onChange={(event) => handleChange(event, index)}
                    />
                  </div>
                  <div className="flex flex-col" key={index}>
                    <p>{item.DepreciationRatelable}</p>
                    <input
                      className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                      name="firstName"
                      type="text"
                      value={item.DepreciationRate}
                      onChange={(event) => handleChange(event, index)}
                    />
                  </div>
                  <div>
                    {inputs.length > 1 && (
                      <button
                        type="button"
                        class="text-white bg-red-600 hover:bg-primary/90 focus:ring-4 p-1 m-2 mt-9 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm  text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
                        onClick={() => handleDeleteInput(index)}
                      >
                        <Icon
                          class="w-6 h-6 me-2 -mx-3"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon="apple"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          icon="gg:add"
                        />
                        Delete
                      </button>
                    )}
                    {index === inputs.length - 1 && (
                      <button
                        type="button"
                        class="text-white bg-primary hover:bg-primary/90 focus:ring-4 p-1 m-2 mt-9 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm  text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
                        onClick={() => handleAddInput()}
                      >
                        <Icon
                          class="w-6 h-6 me-2 -mx-3"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon="apple"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          icon="gg:add"
                        />
                        Add
                      </button>
                    )}
                  </div>
                </>
              ))}

              <div className="flex flex-col mb-2 col-span-4 text-center mt-5">
                <label className="font-bold text-lg">Working Capital</label>
              </div>

              <div className="flex flex-col mb-2 ">
                <label htmlFor="arera">Raw Material</label>
                <input
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="text"
                  name="gstin_no"
                  id="gstin_no"
                />
              </div>

              <div className="flex flex-col mb-2 ">
                <label htmlFor="arera">Wages</label>
                <input
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="text"
                  name="gstin_no"
                  id="gstin_no"
                />
              </div>

              <div className="flex flex-col mb-2 ">
                <label htmlFor="arera">Electricity Charges</label>

                <input
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="text"
                  name="gstin_no"
                  id="gstin_no"
                />
              </div>

              <div className="flex flex-col mb-2 ">
                <label htmlFor="arera">Other Charges</label>

                <input
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="text"
                  name="gstin_no"
                  id="gstin_no"
                />
              </div>

              <div className="mt-4 flex justify-center items-center">
                <button
                  onClick={next}
                  className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {formNo === 3 && (
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col mb-2 col-span-3 text-center">
                <label className="font-bold text-lg">Finance</label>
              </div>
              <div>
                <label htmlFor="">Promoter&apos;s Contribution</label>
              </div>
              <div className="flex flex-col mb-2  col-span-2">
                <input
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="text"
                  name="gstin_no"
                  id="gstin_no"
                />
              </div>
              <div className="flex items-center mb-4 col-span-3 justify-end ">
                <input
                  id="default-radio-1"
                  type="radio"
                  value="yes"
                  name="default-radio"
                  onClick={(e) => setPromotercon(e.target.value)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Do You Have Any Loan
                </label>
              </div>
              {promotercon === "yes" && (
                <>
                  <div>
                    <label htmlFor="">Amount Of Loan</label>
                  </div>
                  <div className="flex flex-col mb-2  col-span-2">
                    <input
                      className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                      type="text"
                      name="gstin_no"
                      id="gstin_no"
                    />
                  </div>
                  <div>
                    <label htmlFor="">Interest rate on Loan</label>
                  </div>
                  <div className="flex flex-col mb-2  col-span-2">
                    <input
                      className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                      type="text"
                      name="gstin_no"
                      id="gstin_no"
                    />
                  </div>
                </>
              )}
              <div className="flex flex-col mb-2 col-span-3 text-center">
                <label className="font-bold text-lg">Turnover per Year</label>
              </div>

              <div>
                <label htmlFor="">Expected Sale Turnover per Year</label>
              </div>
              <div className="flex flex-col mb-2  col-span-2">
                <input
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="text"
                  name="gstin_no"
                  id="gstin_no"
                />
              </div>

              <div className="mt-4 flex justify-center items-center col-span-3">
                <button className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500">
                  Genrate PDF
                </button>
              </div>
            </div>
          )}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Project_Report;
