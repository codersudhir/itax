"use client"
import { useForm } from "react-hook-form";
import BackButton from "../../../BackButton";
import { useState } from "react";
import userAxios from "@/lib/userAxios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
export default function CreateParty() {
    const { handleSubmit, register,watch,formState:{errors},setError,clearErrors} =useForm()

    const [isLoading, setIsLoading] = useState(false);
    const [isRespError, setIsRespError] = useState(null);
    const [respError, setRespError] = useState(null);
    const router = useRouter()
    const onCreateParty =async (formData) => {
        try {
            setIsLoading(true);
            setIsRespError(false);
            const JsonData ={
                partyName: formData.partyName,
                type: formData.partyType,
                gstin: formData.GSTIN,
                pan: formData.pan,
                upi: formData.upi,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                bankName: formData.bankName,
                bankAccountNumber: formData.bankAccountNumber,
                bankIfsc: bankBranch.bankIfsc,
                bankBranch: bankBranch.bankBranch
            }
            const response = await userAxios.post("/invoice/parties",JSON.stringify(JsonData));
            
            if (response.data.success==true) {
                toast.success("New Item Created");
                router.replace("/dashboard/accounts/invoice/parties")
            }
            

            setIsLoading(false);
        } catch (respError) {
            setIsLoading(false);
            setIsRespError(true);
            setRespError( respError);
        }
    }
    console.log(respError)
    const formClassNames={
        label:"block mb-2 text-sm font-medium text-gray-950/90 dark:text-white",
        input:"bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        button:"w-full text-center mt-4 focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-4 ",
        gridUL:"grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4",
        formSectionTitle:"text-lg mt-4 font-semibold text-gray-600 dark:text-gray-300",
    }
	return (
        <>
            <BackButton title={"Create Party"}/>
            <section className="p-4 max-w-6xl mx-auto">
                <form action="" onSubmit={handleSubmit(onCreateParty)}>
                    <p className={formClassNames.formSectionTitle}>Basic Details</p>
                    <ul className={formClassNames.gridUL}>
                        <li>
                            <label htmlFor="partyName" className={formClassNames.label}>
                                Party name
                            </label>
                            <input
                                type="text"
                                id="partyName"
                                className={formClassNames.input}
                                placeholder="Party name"
                                {...register("partyName",{
                                    required:"Party name is required"
                                })}
                            />
                            {errors.partyName && <p className=" text-xs text-red-500 italic">{errors.partyName.message}</p>}
                        </li>
                        <li>
                            <label htmlFor="partyType" className={formClassNames.label}>
                                Party Type
                            </label>
                            <select
                                id="partyType"
                                className={formClassNames.input}
                                {...register("partyType",{
                                    required:"Party type is required"
                                })}
                                defaultValue={"supplier"}
                                >
                                <option value="supplier">Supplier</option>
                                <option value="customer">Customer</option>
                            </select>
                            {errors.partyType && <p className=" text-xs text-red-500 italic">{errors.partyType.message}</p>}
                        </li>
                        <li>
                            <label htmlFor="contactPerson" className={formClassNames.label}>
                                Contact Person
                            </label>
                            <input
                                type="text"
                                id="contactPerson"
                                className={formClassNames.input}
                                placeholder="Contact Person"
                                {...register("contactPerson")}
                            />
                        </li>
                        <li>
                            <label htmlFor="pan" className={formClassNames.label}>
                                Pan
                            </label>
                            <input
                                type="text"
                                id="pan"
                                className={formClassNames.input}
                                placeholder="Pan"
                                {...register("pan")}
                            />
                        </li>
                        <li>
                            <label htmlFor="upi" className={formClassNames.label}>
                                UPI
                            </label>
                            <input
                                type="text"
                                id="upi"
                                className={formClassNames.input}
                                placeholder="abc@upi"
                                {...register("upi")}
                            />
                        </li>
                    </ul>
                        
                    <p className={formClassNames.formSectionTitle}>Bank Details</p>
                    <ul className={formClassNames.gridUL}>
                        <li>
                            <label htmlFor="bankName" className={formClassNames.label}>
                                Bank Name
                            </label>
                            <input
                                type="text"
                                id="bankName"
                                className={formClassNames.input}
                                placeholder="Bank Name"
                                {...register("bankName")}
                            />
                        </li>
                        <li>
                            <label htmlFor="bankAccountNumber" className={formClassNames.label}>
                                Bank Account Number
                            </label>
                            <input
                                type="text"
                                id="bankAccountNumber"
                                className={formClassNames.input}
                                placeholder="Bank Account Number"
                                {...register("bankAccountNumber")}
                            />
                        </li>
                        <li>
                            <label htmlFor="bankIfsc" className={formClassNames.label}>
                                Bank IFSC
                            </label>
                            <input
                                type="text"
                                id="bankIfsc"
                                className={formClassNames.input}
                                placeholder="Bank IFSC"
                                {...register("bankIfsc")}
                            />
                        </li>
                        <li>
                            <label htmlFor="bankBranch" className={formClassNames.label}>
                                Bank Branch
                            </label>
                            <input
                                type="text"
                                id="bankBranch"
                                className={formClassNames.input}
                                placeholder="Bank Branch"
                                {...register("bankBranch")}
                            />
                        </li>
                    </ul>
                    <p className={formClassNames.formSectionTitle}>Contact Details</p>
                    <ul className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li>
                            <label htmlFor="phone" className={formClassNames.label}>
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className={formClassNames.input}
                                placeholder="Phone"
                                {...register("phone")}
                            />
                        </li>
                        <li>
                            <label htmlFor="email" className={formClassNames.label}>
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className={formClassNames.input}
                                placeholder="Email"
                                {...register("email")}
                            />
                        </li>
                        <li className="md:col-span-2">
                            <label htmlFor="address"className={formClassNames.label}>
                            Address
                            </label>
                            <textarea 
                                id="address" 
                                className={formClassNames.input}
                                rows="3" 
                                placeholder="123 Street, City, Country"
                                {...register("address")}
                                ></textarea>
                        </li>

                    </ul>

                    <p className={formClassNames.formSectionTitle}>GST</p>
                    <ul className={formClassNames.gridUL}>
                        <li>
                            <label htmlFor="GSTIN" className={formClassNames.label}>
                                GSTIN
                            </label>
                            <input
                                type="text"
                                id="GSTIN"
                                className={formClassNames.input}
                                placeholder="GSTIN"
                                maxLength="15"
                                {...register("GSTIN",{
                                    onChange:(e)=>{
                                        let value = e.target.value;
                                        // Convert to uppercase
                                        value = value.toUpperCase();
                                        // Validate using regex
                                        const regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
                                        if (!regex.test(value)) {
                                            setError("GSTIN", {
                                                type: "manual",
                                                message: "Invalid GSTIN"
                                            });
                                        } else {
                                            clearErrors("GSTIN");
                                        }
                                        // Update the input value
                                        e.target.value = value;
                                    }
                                })}
                            />
                            {errors.GSTIN && <p className=" text-xs text-red-500 italic">{errors.GSTIN.message}</p>}
                        </li>
                    </ul>
                    <div className={formClassNames.gridUL}>
                        <button className={formClassNames.button}>
                            Create
                        </button>
                    </div>
                </form>
            </section>
        </>
	);
}
