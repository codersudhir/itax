"use client"
import { useForm } from "react-hook-form";
import PartyDetails from "./PartyDetails";
import InvoiceDetails from "./InvoiceDetails";
import ItemsInTheInvoice from "./ItemsInTheInvoice";
import GST from "./GST";
import OtherDetails from "./OtherDetails";
import FinalDetails from "./FinalDetails";
import { useEffect, useState } from "react";
import userAxios from "@/lib/userAxios";
import { toast } from "react-toastify";

export default function CreateSaleForm({parties}) {
    const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
        getValues,
		setError,
		clearErrors,
	} = useForm({
        defaultValues: {
            credit: "false",
            invoiceNumber: "INV-" + new Date().getTime(),
        }
    });
    const [addedItemsInInvoice, setAddedItemsInInvoice] = useState([]);
    const [party_State, setParty_State] = useState({});
    const totalAmount = addedItemsInInvoice.reduce((accumulator, current) => accumulator + current.amount,  0);
    useEffect(()=>{
        setValue("totalAmount", totalAmount);
    },[setValue,totalAmount])


    const [isLoading_Submit,setIsLoading_Submit]=useState(false);

    const onSubmit = async (formData)=>{
        try {
            setIsLoading_Submit(true);
            console.log({
                type: "sale",
                partyId: formData.id,
                invoiceNumber: formData.invoiceNumber,
                
                gstNumber: formData.partyGstin,
                stateOfSupply: formData.stateOfSupply,
                credit: formData.credit,
    
                details: formData.details,
                extraDetails: formData.extraDetails,
    
                invoiceItems: addedItemsInInvoice,
    
                cgst: parseInt(formData.cgst),
                sgst: parseInt(formData.sgst),
                igst: parseInt(formData.igst),
                utgst: parseInt(formData.utgst),
                
                totalGst: 180,
                totalAmount: parseInt(formData.totalAmount),
                modeOfPayment: formData.modeOfPayment ==="true"?true:false,
                status: modeOfPayment==="cash" || modeOfPayment==="online" ? "paid" : "pending",
            })
            const resp = await userAxios.post("/invoice/invoices", {
                invoiceNumber: "INV123",
                gstNumber: "12ABCDE1234F1Z9",
                type: "sales",
                gstNumber: formData.partyGstin,
                totalAmount: 1000,
                totalGst: 180,
                stateOfSupply: "Some State",
                cgst: 9,
                sgst: 9,
                igst: 0,
                utgst: 0,
                details: "'Some extra details",
                extraDetails: "'Some extra details",
                invoiceItems: [
                    {
                        itemId:"0981fdae-a893-4795-90e2-512556850481",
                        quantity: 2,
                        discount: 5
                    }
                   
                ],
                modeOfPayment: "cash",
                credit: false,
                status: "paid"
            });
            console.log(resp);
            // if (resp.status === 201) {
            //     toast.success("Invoice Created");
            //     router.push(`/dashboard/accounts/invoice/invoice/${resp.data.id}`);
                
            // }
            
        } catch (error) {
            console.log(error)
        }finally {
            setIsLoading_Submit(false);
        }
        // console.log(data)
    }
    return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="grid gap-4 grid-cols-1 md:grid-cols-2 p-2"
			>
				<PartyDetails
					register={register}
					setError={setError}
					clearErrors={clearErrors}
					errors={errors}
					setValue={setValue}
					parties={parties}
					getValues={getValues}
                    setParty_State={setParty_State}
				/>
				<InvoiceDetails
					register={register}
					setError={setError}
					clearErrors={clearErrors}
					errors={errors}
					setValue={setValue}
				/>
				<GST 
                    register={register}
                    setError={setError}
                    clearErrors={clearErrors}
                    errors={errors}
                    setValue={setValue}
                    party_State={party_State}
                />
				<OtherDetails
                    register={register}
                    errors={errors}
                />
				<ItemsInTheInvoice
                    addedItemsInInvoice={addedItemsInInvoice}
                    setAddedItemsInInvoice={setAddedItemsInInvoice}
                />

                <FinalDetails
                    register={register}
                    errors={errors}
                />

                <div className="flex justify-end md:col-span-2 p-2 rounded-t-md border-2 shadow-blue-600">
                    <button type="submit" className="btn-primary">
                        {isLoading_Submit? "submitting..." : "submit"}
                    </button>
                </div>
			</form>
		</div>
	);
}