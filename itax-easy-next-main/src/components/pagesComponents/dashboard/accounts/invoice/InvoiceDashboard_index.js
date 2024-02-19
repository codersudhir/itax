"use client";
import DashSection from "@/components/pagesComponents/pageLayout/DashSection";
import GridContainer from "@/components/pagesComponents/grid/GridContainer";
import GridItem from "@/components/pagesComponents/grid/GridItem";
import Pagination from "@/components/navigation/Pagination";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import userAxios from "@/lib/userAxios";
import Link from "next/link";
import { toast } from "react-toastify";
import ErrorComponent from "@/components/partials/error/ErrorComponent";
import LoadingComponent from "@/components/partials/loading/LoadingComponent";

const invoiceDashboardNavItem = [
    {
		linkTo: "#",
		icon: "iconamoon:invoice-duotone",
		title: "All Invoices",
		data: "0",
		cssClass:
			"p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500",
	},
    {
		linkTo: "all-sales",
		icon: "mdi:cart-sale",
		title: "All Sale",
		data: "0",
		cssClass:
			"p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full dark:text-yellow-100 dark:bg-yellow-500",
	},
    {
		linkTo: "all-purchase",
		icon: "carbon:purchase",
		title: "All Purchase",
		data: "0",
		cssClass:
			"p-3 mr-4 text-indigo-500 bg-indigo-100 rounded-full dark:text-indigo-100 dark:bg-indigo-500",
	},
    {
		linkTo: "expense",
		icon: "mdi:cash-return",
		title: "Expense",
		data: "0",
		cssClass:
			"p-3 mr-4 text-pink-500 bg-pink-100 rounded-full dark:text-pink-100 dark:bg-pink-500",
	},
	{
		linkTo: "items",
		icon: "solar:box-broken",
		title: "All Item",
		data: "0",
		cssClass:
			"p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500",
	},
	{
		linkTo: "all-parties",
		icon: "ph:users-four",
		title: "All Customer",
		data: "0",
		cssClass:
			"p-3 mr-4 text-red-500 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-500",
	},
	{
		linkTo: "all-parties",
		icon: "ph:users-four",
		title: "All Suppler",
		data: "0",
		cssClass:
			"p-3 mr-4 text-red-500 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-500",
	},
	{
		linkTo: "reports",
		icon: "tabler:report",
		title: "Reports",
		data: "0",
		cssClass:
			"p-3 mr-4 text-purple-500 bg-purple-100 rounded-full dark:text-purple-100 dark:bg-purple-500",
	},
	{
		linkTo: "cash-bank",
		icon: "game-icons:cash",
		title: "Cash/Bank",
		data: "0",
		cssClass:
			"p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500",
	},
];
function InvoiceDashboardNavItem() {
	return (
        <DashSection className="mt-4" title="Invoice" titleRight="current year - 2024">
            
            <GridContainer className=" p-4">
                {invoiceDashboardNavItem.map((el, key) => (
                    <GridItem
                        key={key}
                        href={`/dashboard/accounts/invoice/${el?.linkTo}`}>
                        <div className=" grid justify-center sm:w-1/2 w-1/5">
                            <Icon
                                icon={el?.icon}
                                className={`
                                rounded-xl
                                sm:h-16 
                                sm:w-16
                                sm:p-3
                                
                                h-14 
                                w-14 
                                p-3
                                ${el?.cssClass}
                            `}
                            />
                        </div>
                        <div>
                            <p
                                className={`
                                text-lg 
                                sm:w-full  
                            `}>
                                {el.title}
                            </p>
                            <p className="font-normal">{el.data}</p>
                        </div>
                    </GridItem>
                ))}
            </GridContainer>
        </DashSection>
	);
}
function OverviewDashboard(props) {
    const { invoices } = props;
	const [data, setData] = useState({
        unpaidInvoices: 0,
        overDue: 0,
        upcomingPayouts: 0,
	});
	return (
		<DashSection
			className="mt-4"
			title={"Overview"}
			titleRight={"current year - 2024"}
		>
			<ul 
                className="
                grid p-4 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1
                gap-4
                [&>li]:p-2
                [&>li]:border-l-4/
                "
                >
				<li>
					<h2>Total Invoices</h2>
					<p className="text-lg font-medium">{invoices?.length}</p>
				</li>
				<li>
					<h2>Unpaid Invoices</h2>
					<p className="text-lg font-medium">{data?.unpaidInvoices} </p>
				</li>
				<li>
					<h2>OverDue</h2>
					<p className="text-lg font-medium">{data?.overDue } &#8377;</p>
				</li>
				<li>
					<h2>Upcoming Payouts</h2>
					<p className="text-lg font-medium">{data?.upcomingPayouts} &#8377;</p>
				</li>
			</ul>
		</DashSection>
	);
}

function OverviewTable(props) {
    const { invoices ,fetchInvoicesData,isLoading ,isSuccess,isError} = props;
    const [currentPage, setCurrentPage ] = useState(1)
    // console.log(invoices)
    // let tHeading = Object.keys(invoices[0] || {});
    const [isDeleteLoading, setDeleteLoading] = useState(false);
    const handleDeleteById = async(id)=>{
        try {
            setDeleteLoading(true)
            const response = await userAxios.delete("/invoice/invoices/"+id)
            if (response.status === 200) {
                // console.log(response)
                toast.success(response.data.message)
                fetchInvoicesData()
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }finally {
            setDeleteLoading(false)
        }
    }
    return (
        <DashSection 
            title={"Invoices"}
            titleRight={
                <>
                    <div className=" flex gap-2 justify-end mb-2 max-w-6xl mx-auto">
                        <Link href={"/dashboard/accounts/invoice/invoice/create-invoice"}>
                            <button type="button" className="capitalize flex items-center focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2  ">
                                create Invoice
                            </button>
                        </Link>
                    </div>
                    <form action="" className="flex gap-2">
                        <label className="hidden" htmlFor="search">Search</label>
                        <input type="search" name="search" id="search" className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        <button className="inline-block p-2.5 btn-primary"><Icon icon="ic:baseline-search" /></button>
                    </form>
                </>
            } 
            className="flex gap-4 flex-col mt-8 p-2"
            >
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead>
                                <tr>
                                    {/* {tHeading.map((el, key) => (
                                        <th key={key} scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                                            {el}
                                        </th>
                                    ))} */}
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Download/Print</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">cgst</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">createdAt</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">credit</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">details</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">extraDetails</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">gstNumber</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">id</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">igst</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">invoiceItems</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">invoiceNumber</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">modeOfPayment</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">partyId</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">sgst</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">stateOfSupply</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">status</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">totalAmount</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">totalGst</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">type</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">updatedAt</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">userId</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">utgst</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {invoices.map((invoice, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                            <Link href={`/dashboard/accounts/invoice/invoice/${invoice.id}`} className="btn-primary flex justify-center">
                                                <Icon className="text-2xl mr-2" icon="material-symbols:download"/> Download
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{invoice.cgst}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{invoice.createdAt}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{invoice.credit}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{invoice.details}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{invoice.extraDetails}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{invoice.gstNumber}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{invoice.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{invoice.igst}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{invoice.invoiceItems.length}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{invoice.invoiceNumber}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{invoice.modeOfPayment}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{invoice.partyId}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{invoice.sgst}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{invoice.stateOfSupply}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{invoice.status}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{invoice.totalAmount}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{invoice.totalGst}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{invoice.type}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{invoice.updatedAt}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{invoice.userId}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{invoice.utgst}</td>

                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            {isDeleteLoading?
                                            <button type="button" disabled className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none ">Delete</button>
                                            :
                                            <button onClick={()=>handleDeleteById(invoice.id)} type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none ">Delete</button>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {invoices.length === 0 ? ( 
            <div>
                <Icon className="w-40 h-24 opacity-5 mx-auto" icon="ph:files-light" />
                <p className="text-center">No Record Found</p>
            </div>
            ):""}
            {isLoading && <div className="grid place-content-center text-2xl">Loading...</div>}
            {isError && <div className="grid place-content-center text-2xl">Something went wrong</div>}
            <Pagination currentPage={currentPage} totalPages={1} setCurrentPage={setCurrentPage}/>
        </DashSection>
    )
}
export default function InvoiceDashboard_index() {
    const [invoices, setInvoicesData] = useState(null);
	const [isLoading, setLoading] = useState(false);
	const [isSuccess, setSuccess] = useState(false);
	const [error, setError] = useState(null);
    
    const fetchInvoicesData = async() => {
        try {
            setLoading(true);
            const response = await userAxios.get("/invoice/invoices")
            if (response.status === 200) {
                setInvoicesData(response.data.invoices)
                setSuccess(true)
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchInvoicesData()
    },[])
    // console.log(invoices)
    // console.log(error)
    if (isLoading) {
        return (
            <LoadingComponent/>
        )
        
    }
    if (error) {
        return (
			<ErrorComponent
				type={500}
				info={"Page Not Found"}
				message={
					"Check if the search term is correct. If you think this is an error, contact support Thanks!"
				}
			/>
		);
    }
	return (invoices &&
		    <>
                <InvoiceDashboardNavItem/>
                <OverviewDashboard invoices={invoices}/>
                <OverviewTable invoices={invoices} isLoading={isLoading} isSuccess={isSuccess} error={error} fetchInvoicesData={fetchInvoicesData}/>
                <div className="p-8">
                </div>
            </>
        
	);
}
