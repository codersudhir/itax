"use client"
import { Icon } from "@iconify/react";
import Link from "next/link";
import BackButton from "../../../BackButton";
import { useState,useEffect } from "react";
import userAxios from "@/lib/userAxios";
import { toast } from "react-toastify";
const itemsData = {
    itemsData_title: [
        "partyName",
        "bankAccountNumber",
        "bankBranch",
        "bankIfsc",
        "bankName",
        "createdAt",
        "email",
        "gstin",
        "id",
        "pan",
        "address",
        "phone",
        "tan",
        "type",
        "updatedAt",
        "upi",
        "userId",
    ],
};
export default function AllParties() {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
    const [error, setError] = useState(null);
    const [allParties, setAllParties] = useState();
    const fetchPartiesData = async () => {
        try {
            setIsLoading(true);
            setIsError(false);

            const response = await userAxios.get("/invoice/parties");
            setAllParties(response.data);

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setIsError(true);
            setError({ isError: true, error });
        }
    }
    useEffect(() => {
        fetchPartiesData()
    }, []);


    const handleDeleteParty = async (id) => {
        try {
            const resp = await userAxios.delete(`/invoice/parties/${id}`);
            console.log(resp)
            if (resp.data.success) {
                fetchPartiesData();
                toast.success("Party Deleted");
            }else{
                toast.error("Something went wrong. Party Not Deleted");
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    const linkToCreateParty = "/dashboard/accounts/invoice/parties/add-party";

	return (
        <>
            <BackButton title={"All Parties"}/>
            <section className="p-4 max-w-6xl mx-auto">
                <div className=" flex gap-2 justify-end mb-2 max-w-6xl mx-auto">
                    <Link href={linkToCreateParty}>
                        <button type="button" className="capitalize flex items-center focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2  ">
                            create parties
                        </button>
                    </Link>
                </div>
                <form className="grid md:grid-cols-[1fr_auto] gap-2 items-center max-w-6xl mx-auto">   
                    <label htmlFor="default-search" className=" text-sm font-medium text-neutral-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <input 
                            type="search" 
                            id="default-search" 
                            className="block w-full py-2 px-4 pe-6 text-sm text-neutral-900 border border-neutral-300 rounded-lg bg-neutral-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Search Name, Address..." 
                            required
                                />
                        <button type="submit" className="m-2 bg-neutral-50 dark:bg-neutral-900 absolute inset-y-0 end-0 flex items-center p-2">
                            <Icon icon="zondicons:search"/>
                        </button>
                    </div>
                    
                    <div className="relative m-[2px] float-right ml-auto sm:block">
                        <label htmlFor="inputFilter" className="sr-only">Filter</label>
                        <select id="inputFilter" className="block w-40 rounded-lg border dark:border-none dark:bg-neutral-600 p-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400">
                            <option value="1" >Last week</option>
                            <option value="2">Last month</option>
                            <option value="3">Yesterday</option>
                            <option value="4">Last 7 days</option>
                            <option value="5">Last 30 days</option>
                        </select>
                    </div>
                </form>

                {allParties?
                    <>
                        <div className="my-4 max-w-6xl max-h-96 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full border-collapse border border-gray-200 bg-white text-left text-sm text-gray-500">
                                <thead className=" sticky -top-2 shadow-md text-neutral-700 uppercase bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-400">
                                    <tr className="border-b-2 dark:border-neutral-900">
                                        {itemsData.itemsData_title.map((item,i)=>
                                            <th className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap" key={i}>{item}</th>
                                            )}
                                        <th className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap">action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                                    {allParties?.parties.map((item,i) => (
                                        <tr key={i} className="odd:bg-white odd:dark:bg-neutral-900 even:bg-neutral-50 even:dark:bg-neutral-800 border-b dark:border-neutral-700">
                                            <td className="px-3 py-1 text-sm font-semibold text-gray-900">{item.partyName}</td>
                                            <td className="px-3 py-1 text-sm">{item.bankAccountNumber}</td>
                                            <td className="px-3 py-1 text-sm">{item.bankBranch}</td>
                                            <td className="px-3 py-1 text-sm">{item.bankIfsc}</td>
                                            <td className="px-3 py-1 text-sm">{item.bankName}</td>
                                            <td className="px-3 py-1 text-sm">{item.createdAt}</td>
                                            <td className="px-3 py-1 text-sm">{item.email}</td>
                                            <td className="px-3 py-1 text-sm">{item.gstin}</td>
                                            <td className="px-3 py-1 text-sm">{item.id}</td>
                                            <td className="px-3 py-1 text-sm">{item.pan}</td>
                                            <td className="px-3 py-1 text-sm">{item.address}</td>
                                            <td className="px-3 py-1 text-sm">{item.phone}</td>
                                            <td className="px-3 py-1 text-sm">{item.tan}</td>
                                            <td className="px-3 py-1 text-sm">{item.type}</td>
                                            <td className="px-3 py-1 text-sm">{item.updatedAt}</td>
                                            <td className="px-3 py-1 text-sm">{item.upi}</td>
                                            <td className="px-3 py-1 text-sm">{item.userId}</td>
                                            <td className="px-3 py-1 text-sm grid grid-cols-2 place-content-start gap-4 font-medium">
                                                {/* <Icon icon="bxs:edit" className=" cursor-pointer hover:text-blue-700 text-xl"/> */}
                                                <Icon onClick={() => handleDeleteParty(item.id)} icon="material-symbols:delete" className=" cursor-pointer hover:text-red-700 text-xl"/>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {isLoading && 
                            <div>
                                <Icon className="w-40 h-24 opacity-5 mx-auto" icon="ph:files-light" />
                                <p className="text-center">Loading</p>
                            </div>
                            }
                            {isError && 
                            <div>
                                <Icon className="w-40 h-24 opacity-5 mx-auto" icon="ph:files-light" />
                                <p className="text-center">No Record Found</p>
                            </div>
                            }
                            {allParties?.parties.length === 0 ? ( 
                            <div>
                                <Icon className="w-40 h-24 opacity-5 mx-auto" icon="ph:files-light" />
                                <p className="text-center">No Record Found</p>
                            </div>
                            ):""}
                        </div>
                        {allParties?.parties.length === 0 ? (
                        <div className=" flex gap-2 justify-center mb-2 max-w-6xl mx-auto">
                            <Link href={linkToCreateParty}>
                                <button type="button" disabled={isLoading} className="capitalize flex items-center focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2  ">
                                    add parties
                                </button>
                            </Link>
                        </div>
                        ):""}
                    </>
                :"loading"}
            </section>
        </>
	);
}