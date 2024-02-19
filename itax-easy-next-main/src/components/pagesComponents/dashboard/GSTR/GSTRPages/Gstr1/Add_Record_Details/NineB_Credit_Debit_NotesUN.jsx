"use client";
import { Icon } from "@iconify/react";

const NineB_Credit_Debit_NotesUN = () => {
  return (
    <div className="p-2 md:px-80 space-y-4">
      <p>GSTN:-</p>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Sr No.
            </th>
            <th scope="col" class="px-6 py-3">
              1
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-3"> Type</td>
            <td>
              <select
                id="note type"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>B2CL</option>
                <option>Exports With Payment</option>
                <option>Export Without Payment</option>
              </select>
            </td>
            <td className="flex">
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="uil:edit" />
                Edit
              </button>
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="material-symbols-light:delete-outline" />
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-3">Debit/Credit Note No.</td>
            <td>
              <input
                type="text"
                id="base-input"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </td>
            <td className="flex">
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="uil:edit" />
                Edit
              </button>
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="material-symbols-light:delete-outline" />
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-3">Debit/Credit Note date</td>
            <td>
              <input
                type="date"
                id="base-input"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </td>
            <td className="flex">
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="uil:edit" />
                Edit
              </button>
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="material-symbols-light:delete-outline" />
                Delete
              </button>
            </td>
          </tr>

          <tr>
            <td className="px-6 py-3">State Tax</td>
            <td>
              <input
                type="text"
                id="base-input"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </td>
            <td className="flex">
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="uil:edit" />
                Edit
              </button>
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="material-symbols-light:delete-outline" />
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-3">Note Type</td>
            <td>
              <select
                id="note type"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Credit</option>
                <option>Debit</option>
              </select>
            </td>
            <td className="flex">
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="uil:edit" />
                Edit
              </button>
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="material-symbols-light:delete-outline" />
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-3">Supply Type</td>
            <td>
              <input
                type="text"
                id="base-input"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </td>
            <td className="flex">
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="uil:edit" />
                Edit
              </button>
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="material-symbols-light:delete-outline" />
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-3">Item Details</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-6 py-3">Select Rate (%)</td>
            <td>
              <select
                id="note type"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>0%</option>
                <option>0.1%</option>
                <option>0.25%</option>
                <option>1%</option>
                <option>1.5%</option>
                <option>3%</option>
                <option>5%</option>
                <option>6%</option>
                <option>7.5%</option>
                <option>12%</option>
                <option>18%</option>
                <option>28%</option>
              </select>
            </td>
            <td className="flex">
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="uil:edit" />
                Edit
              </button>
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="material-symbols-light:delete-outline" />
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-3">Note Value</td>
            <td>
              <input
                type="text"
                id="base-input"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </td>
            <td className="flex">
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="uil:edit" />
                Edit
              </button>
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="material-symbols-light:delete-outline" />
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-3">State Tax ₹</td>
            <td>
              <input
                type="text"
                id="base-input"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </td>
            <td className="flex">
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="uil:edit" />
                Edit
              </button>
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="material-symbols-light:delete-outline" />
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-3">Central Tax ₹</td>
            <td>
              <input
                type="text"
                id="base-input"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </td>
            <td className="flex">
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="uil:edit" />
                Edit
              </button>
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="material-symbols-light:delete-outline" />
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-3">Cess ₹</td>
            <td>
              <input
                type="text"
                id="base-input"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </td>
            <td className="flex">
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="uil:edit" />
                Edit
              </button>
              <button
                type="button"
                class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
              >
                <Icon icon="material-symbols-light:delete-outline" />
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center p-2 md:p-2 border-t border-gray-200 rounded-b dark:border-gray-600">
        <button
          data-modal-hide="static-modal"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>
        <button
          data-modal-hide="static-modal"
          type="button"
          className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        >
          Bach
        </button>
      </div>
    </div>
  );
};

export default NineB_Credit_Debit_NotesUN;
