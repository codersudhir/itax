"use client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import BackButton from "../../../BackButton";
import { useRouter } from "next/navigation";
import userAxios from "@/lib/userAxios";
import { useEffect, useState } from "react";
import gstStateCodes from "@/utils/gstStateCodes";
import {Input_GSTIN} from "@/components/formComponents/Inputs"
const formClassNames = {
	label: "block mb-2 text-sm font-medium text-gray-950/90 dark:text-white",
	input: "bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
	button: "w-full text-center mt-4 focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-4 ",
	gridUL: "grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4",
	formSectionTitle:
		"text-lg mt-4 font-semibold text-gray-600 dark:text-gray-300",
};

function ItemsInputContainer(props) {
	const { itemsData, newItems, setNewItems } = props;
	const [itemId, setItemId] = useState("");
	const [quantity, setQuantity] = useState("");
	const [discount, setDiscount] = useState("");
	const handleAddItems = () => {
		setNewItems((prev) => [
			...prev,
			{
				itemId: itemId,
				quantity: parseInt(quantity),
				discount: parseInt(discount),
			},
		]);
	};
    const handleDeleteById = ( id)=>{
        setNewItems((prev)=>{
            return prev.filter((item)=>{
                return item.itemId !== id
            })
        })
    }
	return (
		<div className="mt-6">
			<h2>Items</h2>
			<div>
				<div>{newItems.length === 0 && "No item added"}</div>
				<ol>
					{newItems?.map((item, index) => (
						<li key={index} className="border border-blue-500 my-2">
							<div>Item Id: {item.itemId}</div>
							<div>Quantity: {item.quantity}</div>
							<div>Discount: {item.discount} %</div>
                            <div>
                                <button type="button" className="text-red-500" onClick={()=>handleDeleteById(item.itemId)}>Delete</button>
                            </div>
						</li>
					))}
				</ol>
			</div>
			<p className=" text-xs text-red-500 h-4 px-2">
				{itemsData?.items?.length === 0 && "No item found"}
			</p>
			<ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
				<li>
					<label htmlFor="itemName" className={formClassNames.label}>
						Item name
					</label>
					<select
						name="itemName"
						id="itemName"
						onChange={(e) => setItemId(e.target.value)}
						className={formClassNames.input}
						defaultValue={""}
					>
						<option value="">select item...</option>
						{itemsData?.items?.map((item, index) => (
							<option key={index} value={item.id}>
								{item.itemName}
							</option>
						))}
					</select>
				</li>
				<li>
					<label htmlFor="quantity" className={formClassNames.label}>
						Quantity
					</label>
					<input
						onChange={(e) => setQuantity(e.target.value)}
						className={formClassNames.input}
						type="number"
						name="quantity"
						id="quantity"
					/>
				</li>
				<li>
					<label htmlFor="discount" className={formClassNames.label}>
						Discount
					</label>
					<input
						onChange={(e) => setDiscount(e.target.value)}
						className={formClassNames.input}
						type="number"
						name="discount"
						id="discount"
					/>
				</li>
			</ul>
			<div className="flex justify-end py-2">
				<button
					onClick={handleAddItems}
					className="btn-primary"
					type="button"
				>
					Add
				</button>
			</div>
		</div>
	);
}

export default function CreateInvoice(props) {
	const { businessProfile } = props;

	const {
		handleSubmit,
		register,
		watch,
		formState: { errors },
		setError,
		clearErrors,
	} = useForm({
        defaultValues: {
            credit: false,
        }
    });
	const [isLoading, setIsLoading] = useState(false);
	const [isRespError, setIsRespError] = useState(null);
	const [respError, setRespError] = useState(null);
	const [Preview, setPreview] = useState(false);
	const router = useRouter();
	const [newItems, setNewItems] = useState([]);

	const [partiesIsLoading, setPartiesIsLoading] = useState(true);
	const [partiesData, setPartiesData] = useState([]);
	const [itemsData, setItemsData] = useState([]);

	const onSubmit = async (formData) => {
        // console.log(newItems)
        // return toast.error("something went wrong")
		try {
			setIsLoading(true);
			const resp = await userAxios.post("/invoice/invoices", {
                invoiceNumber: formData.invoiceNumber,
                gstNumber: formData.GSTIN,
                type: formData.type,
                partyId: formData.partyId,
                totalAmount: parseInt(formData.totalAmount),
                totalGst: parseInt(formData.totalGst),
                stateOfSupply: formData.stateOfSupply,
                cgst: parseInt(formData.cgst),
                sgst: parseInt(formData.sgst),
                igst: parseInt(formData.igst),
                utgst: parseInt(formData.utgst),
                details: formData.details,
                extraDetails: formData.extraDetails,
                invoiceItems: newItems,
                modeOfPayment: formData.modeOfPayment,
                credit: formData.credit==="true"?true:false,
                status: formData.status
            });
            if (resp.status === 201) {
                toast.success("Invoice Created");
                router.push(`/dashboard/accounts/invoice/invoice/${resp.data.id}`);
                
            }
			console.log(resp);
		} catch (error) {
			console.log(error);
			setIsRespError(error);
		} finally {
			setIsLoading(false);
		}
	};

	const getParies = async () => {
		try {
			setPartiesIsLoading(true);
			const pariesResponse = await userAxios.get("/invoice/parties");
			setPartiesData(pariesResponse.data);
		} catch (error) {
			console.log(error);
		} finally {
			setPartiesIsLoading(false);
		}
	};
	const getItems = async () => {
		try {
			const itemsResponse = await userAxios.get("/invoice/items");
			setItemsData(itemsResponse.data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getParies();
		getItems();
	}, []);
	// console.log(itemsData.items)
	return (
		<>
			<BackButton title={"Create Invoice"} />
			<section className="p-4 max-w-6xl mx-auto">
				<form onSubmit={handleSubmit(onSubmit)}>
					<ul className="mt-6 grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
						<li>
							<label
								htmlFor="partyId"
								className={formClassNames.label}
							>
								Party
							</label>
							<div className="relative">
								<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5 text-gray-500">
									{partiesIsLoading && (
										<span className="spinner text-blue-500"></span>
									)}
								</div>
								<select
									name="partyId"
									id="partyId"
									{...register("partyId", {
										required: "party is required",
									})}
									className={`${formClassNames.input} ${
										partiesIsLoading && "pl-6"
									}`}
									defaultValue={""}
								>
									<option value="">select party...</option>
									{partiesData?.parties?.map(
										(party, index) => (
											<option
												key={index}
												value={party.id}
											>
												{party.partyName}
											</option>
										)
									)}
								</select>
							</div>
							<p className=" text-xs text-red-500 h-4 px-2">
								{errors.partyId && errors.partyId.message}
							</p>
							<p className=" text-xs text-red-500 h-4 px-2">
								{partiesData?.parties?.length === 0 &&
									"No party found"}
							</p>
						</li>
						<li>
							<label
								htmlFor="invoiceNumber"
								className={formClassNames.label}
							>
								Invoice Number
							</label>
							<input
								type="text"
								id="invoiceNumber"
								className={formClassNames.input}
								placeholder="INV123"
								{...register("invoiceNumber", {
									required: "Invoice Number is required",
								})}
							/>
							<p className=" text-xs text-red-500 h-4 px-2">
								{errors.invoiceNumber &&
									errors.invoiceNumber.message}
							</p>
						</li>
						<li>
							<label
								htmlFor="type"
								className={formClassNames.label}
							>
								type
							</label>
							<select
								name="type"
								id="type"
								{...register("type", {
									required: "Item name is required",
								})}
								className={formClassNames.input}
								defaultValue={"sales"}
							>
								<option value="sales">Sales</option>
								<option value="purchase">Purchase</option>
							</select>
							<p className=" text-xs text-red-500 h-4 px-2">
								{errors.type && errors.type.message}
							</p>
						</li>
						<li>
							<label
								htmlFor="stateOfSupply"
								className={formClassNames.label}
							>
								State Of Supply
							</label>
							<select
								name="stateOfSupply"
								id="stateOfSupply"
								{...register("stateOfSupply", {
									required: "Item name is required",
								})}
								className={formClassNames.input}
								defaultValue={"same state"}
							>
								<option value="same state">Same State</option>
								{gstStateCodes.map((state, index) => (
									<option
										key={index}
										value={`${state.code}`}
									>
										{state.state}
									</option>
								))}
							</select>
							<p className=" text-xs text-red-500 h-4 px-2">
								{errors.stateOfSupply &&
									errors.stateOfSupply.message}
							</p>
						</li>
						<li>
                            <Input_GSTIN {...{ register, formState: { errors }, setError, clearErrors }}/>
						</li>
                        {/* <li>
							<label
								htmlFor="HSN"
								className={formClassNames.label}
							>
								HSN Code
							</label>
							<input
								type="text"
								id="HSN"
								className={formClassNames.input}
								placeholder="HSN Code"
								{...register("HSN", {
									required: "HSN Code is required",
								})}
							/>
							<p className=" text-xs text-red-500 h-4 px-2">
								{errors.HSN && errors.HSN.message}
							</p>
						</li> */}
					</ul>
					<ul className="mt-6 grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
						<li className="flex p-2 justify-between items-center space-x-3 border border-gray-300 rounded-md ">
							<label htmlFor="credit">Credit</label>
							<label
								htmlFor="credit"
								className=" relative inline-flex cursor-pointer items-center"
							>
								<input
									type="checkbox"
									id="credit"
									className="peer sr-only"
									{...register("credit")}
								/>
								<div
									className={` ${
										watch("credit")
											? "bg-blue-400"
											: "bg-gray-400"
									} h-6 w-11 rounded-full after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[''] hover:bg-gray-200 peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-primary-200 peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100 peer-disabled:after:bg-gray-50`}
								></div>
							</label>
						</li>
					</ul>
					<ul className="mt-6 grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
						<li>
							<label
								htmlFor="cgst"
								className={formClassNames.label}
							>
								CGST
							</label>
							<input
								type="number"
								id="cgst"
								className={formClassNames.input}
								placeholder="0.00"
								{...register("cgst", {
									required: "CGST is required",
								})}
							/>
							<p className=" text-xs text-red-500 h-4 px-2">
								{errors.cgst && errors.cgst.message}
							</p>
						</li>
						<li>
							<label
								htmlFor="sgst"
								className={formClassNames.label}
							>
								SGST
							</label>
							<input
								type="number"
								id="sgst"
								className={formClassNames.input}
								placeholder="0.00"
								{...register("sgst", {
									required: "SGST is required",
								})}
							/>
							<p className=" text-xs text-red-500 h-4 px-2">
								{errors.sgst && errors.sgst.message}
							</p>
						</li>
						<li>
							<label
								htmlFor="igst"
								className={formClassNames.label}
							>
								IGST
							</label>
							<input
								type="number"
								id="igst"
								className={formClassNames.input}
								placeholder="0.00"
								{...register("igst", {
									required: "IGST is required",
								})}
							/>
							<p className=" text-xs text-red-500 h-4 px-2">
								{errors.igst && errors.igst.message}
							</p>
						</li>
						<li>
							<label
								htmlFor="utgst"
								className={formClassNames.label}
							>
								UTGST
							</label>
							<input
								type="number"
								id="utgst"
								className={formClassNames.input}
								placeholder="0.00"
								{...register("utgst", {
									required: "UTGST is required",
								})}
							/>
							<p className=" text-xs text-red-500 h-4 px-2">
								{errors.utgst && errors.utgst.message}
							</p>
						</li>
					</ul>
					<ul className="mt-6 grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] ">
						<li>
							<label
								htmlFor="totalAmount"
								className={formClassNames.label}
							>
								Total Amount
							</label>
							<input
								type="number"
								id="totalAmount"
								className={formClassNames.input}
								placeholder="00"
								{...register("totalAmount", {
									required: "total Amount is required",
								})}
							/>
							<p className=" text-xs text-red-500 h-4 px-2">
								{errors.totalAmount &&
									errors.totalAmount.message}
							</p>
						</li>
						<li>
							<label
								htmlFor="totalGst"
								className={formClassNames.label}
							>
								Total GST
							</label>
							<input
								type="number"
								id="totalGst"
								className={formClassNames.input}
								placeholder="00"
								{...register("totalGst", {
									required: "total Gst is required",
								})}
							/>
							<p className=" text-xs text-red-500 h-4 px-2">
								{errors.totalGst && errors.totalGst.message}
							</p>
						</li>
						<li>
							<label
								htmlFor="modeOfPayment"
								className={formClassNames.label}
							>
								Mode Of Payment
							</label>
							<select
								id="modeOfPayment"
								className={formClassNames.input}
								placeholder="00"
								{...register("modeOfPayment", {
									required: "made of payment is required",
								})}
								defaultValue={"cash"}
							>
								<option value="cash">Cash</option>
							</select>
							<p className=" text-xs text-red-500 h-4 px-2">
								{errors.modeOfPayment &&
									errors.modeOfPayment.message}
							</p>
						</li>
						<li>
							<label
								htmlFor="status"
								className={formClassNames.label}
							>
								Status
							</label>
							<select
								name="status"
								id="status"
								{...register("status", {
									required: "status is required",
								})}
								className={formClassNames.input}
								defaultValue={"unpaid"}
							>
								<option value="unpaid">Unpaid</option>
								<option value="paid">Paid</option>
							</select>
							<p className=" text-xs text-red-500 h-4 px-2">
								{errors.status && errors.status.message}
							</p>
						</li>
					</ul>
					<ul className="mt-6 grid gap-4  ">
						<li>
							<label
								htmlFor="details"
								className={formClassNames.label}
							>
								Details
							</label>
							<textarea
								id="details"
								className={formClassNames.input}
								rows="1"
								placeholder="Details"
								{...register("details", {
									required: "details is required",
								})}
							></textarea>
							<p className=" text-xs text-red-500 h-4 px-2">
								{errors.details && errors.details.message}
							</p>
						</li>
						<li>
							<label
								htmlFor="extraDetails"
								className={formClassNames.label}
							>
								Extra Details
							</label>
							<textarea
								id="extraDetails"
								className={formClassNames.input}
								rows="2"
								placeholder="Details"
								{...register("extraDetails", {
									required: "extraDetails is required",
								})}
							></textarea>
							<p className=" text-xs text-red-500 h-4 px-2">
								{errors.extraDetails &&
									errors.extraDetails.message}
							</p>
						</li>
					</ul>

					<ItemsInputContainer
						register={register}
						itemsData={itemsData}
						newItems={newItems}
						setNewItems={setNewItems}
					/>
					<div className="flex justify-between md:justify-start items-center mt-4">
						<button
							type="submit"
							className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
						>
							{isLoading ? "Loading..." : "Submit"}
						</button>
					</div>
				</form>
			</section>
		</>
	);
}
