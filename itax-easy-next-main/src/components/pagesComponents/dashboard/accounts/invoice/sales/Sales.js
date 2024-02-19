"use client"
import DashSection from "@/components/pagesComponents/pageLayout/DashSection";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";
function ItemsInventory(props) {
    const { isInventoryOpen,setInventoryOpen}=props;
    return (
		<>
			<div className={`${ isInventoryOpen ? "translate-x-[0%]" : "translate-x-full" } transition-transform duration-200 pt-20 pb-20 fixed top-0 right-0 bottom-0 z-40 h-screen bg-neutral-50`}
			>
				<div className="p-2 border-b-2 border-b-blue-500 flex gap-2">
					<button
						onClick={() => setInventoryOpen(false)}
						type="button"
						className="btn-primary"
					>
						<Icon icon="material-symbols:close" />
					</button>
				</div>
				<ul className="p-2 flex flex-col gap-2 h-full overflow-y-auto">
					<li>some data</li>
				</ul>
                <div className="text-xl px-1 border-t-2 border-t-blue-500 flex gap-2">
                    <div>Total Items:</div>
                </div>
			</div>
			<div
				onClick={() => setInventoryOpen(false)}
				className={` ${
					isInventoryOpen
						? "fixed inset-[0_0_0_0] z-30 bg-neutral-950/20"
						: "hidden"
				}`}
			></div>
		</>
	);
}
export default function Sales() {
    const [isInventoryOpen,setInventoryOpen] = useState(false);
	return (
        <DashSection 
            title={"Sales Invoice"}
            titleRight={
                <div className=" flex flex-col items-center gap-4 justify-center mb-2">
                    <Link href="/dashboard/accounts/invoice/sales/create" className="inline-block px-4 py-1 rounded-md text-white bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-[transform,_colors] duration-300" >
                        create
                    </Link>
                </div>
            }
            className="py-0"
        >

        <div className="h-[calc(100vh-190px)] sm:h-[calc(100vh-220px)] overflow-y-auto p-2 border border-t-2">
            
            {/* {salesData.salesData_body.length === 0 ? ( 
                <div className="grid place-content-center h-full">
                    <Icon className="w-40 h-24 opacity-5 mx-auto" icon="ph:files-light" />
                    <p className="text-center">No Record Found</p>
                </div>
            ):
            <ul  className="p-2 gap-2 grid sm:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
                {salesData?.salesData_body?.map((item,index)=>
                    <li>
                        <Link href="#" className="text-sm p-2 rounded-md grid sm:grid-cols-2 gap-4 shadow-md shadow-blue-500 hover:shadow-blue-600 outline outline-1 hover:outline-2 outline-blue-500">
                            <div>
                                <div className="flex gap-2">
                                    <div className="label font-semibold">Name:</div>
                                    <div className="tracking-tighter text-gray-800 font-medium">Jitendra Yadav</div>    
                                </div>
                                <div className="flex gap-2">
                                    <div className="label font-semibold">Added by:</div>
                                    <div className="tracking-tighter text-gray-800 font-medium">Ajash jha</div>    
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-2">
                                    <div className="label font-semibold">Date</div>
                                    <div className="tracking-tighter text-gray-800 font-medium">12-12-2022</div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="label font-semibold">Invoice No.</div>
                                    <div className="tracking-tighter text-gray-800 font-medium">INV-0001</div>
                                </div>
                            </div>
                            <div className="sm:col-span-2 sm:flex justify-between">
                                <div className="flex gap-2">
                                    <div className="label font-semibold">Amount-</div>
                                    <div className="tracking-tighter text-gray-800 font-medium">₹801.11</div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="label font-semibold">Status </div>
                                    <div className="text-orange-500 ">Partially Paid</div>
                                </div>
                            </div>
                        </Link>
                    </li>
                )}
            </ul>
            } */}
            <ul className="p-2 gap-2 grid sm:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
                <li onClick={() => setInventoryOpen(true)}>
                    <Link href="#" className="text-sm p-2 rounded-md grid sm:grid-cols-2 gap-4 shadow-md shadow-blue-500 hover:shadow-blue-600 outline outline-1 hover:outline-2 outline-blue-500">
                        <div>
                            <div className="flex gap-2">
                                <div className="label font-semibold">Name:</div>
                                <div className="tracking-tighter text-gray-800 font-medium">Jitendra Yadav</div>    
                            </div>
                            <div className="flex gap-2">
                                <div className="label font-semibold">Added by:</div>
                                <div className="tracking-tighter text-gray-800 font-medium">Ajash jha</div>    
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2">
                                <div className="label font-semibold">Date</div>
                                <div className="tracking-tighter text-gray-800 font-medium">12-12-2022</div>
                            </div>
                            <div className="flex gap-2">
                                <div className="label font-semibold">Invoice No.</div>
                                <div className="tracking-tighter text-gray-800 font-medium">INV-0001</div>
                            </div>
                        </div>
                        <div className="sm:col-span-2 sm:flex justify-between">
                            <div className="flex gap-2">
                                <div className="label font-semibold">Amount-</div>
                                <div className="tracking-tighter text-gray-800 font-medium">₹801.11</div>
                            </div>
                            <div className="flex gap-2">
                                <div className="label font-semibold">Status </div>
                                <div className="text-orange-500 ">Partially Paid</div>
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
        <ItemsInventory  isInventoryOpen={isInventoryOpen} setInventoryOpen={setInventoryOpen} />
        </DashSection>
	);
}
