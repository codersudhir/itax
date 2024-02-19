"use client"
import { useForm } from "react-hook-form"
import userAxios from "@/lib/userAxios"
import { useState } from "react";
import {toast} from "react-toastify"
import { getCookie,setCookie } from "cookies-next"
import { useRouter } from "next/navigation";


function LoginWithGstin_step1(props) {
    const {register} = props;
    return(
        <ul>
            <li>
                <label htmlFor="gstin">GSTIN</label>
                <input
                    {...register("gstin")}
                    className="w-full text-neutral-900 py-2 px-3 mt-1 outline-none border focus:border-primary rounded"    
                    type="text" id="gstin" 
                    placeholder="GSTIN"
                />
            </li>
            <li>
                <label htmlFor="username">Username</label>
                <input
                    {...register("username")}
                    className="w-full text-neutral-900 py-2 px-3 mt-1 outline-none border focus:border-primary rounded"    
                    type="text" id="username"
                    placeholder="Username"
                />
            </li>
        </ul>
    )
}
function LoginWithGstin_step2(props) {
    const {register} = props
    return(
        <>
            <ul className="grid gap-2">
                <li>
                    <label htmlFor="OTP">OTP</label>
                    <div className="flex">
                        <input
                            {...register("otp")}
                            className="w-full text-neutral-900 py-2 px-3 mt-1 outline-none border focus:border-primary rounded"    
                            type="text" 
                            id="otp" 
                            placeholder="OTP"
                        />
                    </div>
                </li>
            </ul>
        </>
    )
}
export default function LoginWithGstin() {
    const {register, handleSubmit,getValues} = useForm();
    const [isStep1, setIsStep1] = useState(1);
    const [isError, setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    if(typeof window !== "undefined" && getCookie("gstin")) {
        return router.replace("/dashboard/easy-gst-return/check-return-status");
    }

    const handleSendOtp = async () => {
        const {gstin,username} = getValues();
        
        if (gstin && username) {
            try {
                setIsLoading(true)
                const resp = await userAxios.post("/gst/tax-payer/generate-otp", {
                        gstin:gstin,
                        username:username
                    })
                if (resp.data.data.status_cd==="1") {
                    toast.success(resp.data.data.message);
                    console.log(resp.data.data);
                    setIsStep1(2);
                    
                } else {
                    toast.error("enter a valid GSTIN and Username");
                }
                
            } catch (error) {
                console.log(error);
                setIsError(error)
            } finally {
                setIsLoading(false)
            }
        }else{
            toast.error("GSTIN and Username is required")
        }
        
    }
    const onSubmit = async (data) => {
        const {gstin,username,otp} = data;
        if (gstin && username && otp) {
            try {
                setIsLoading(true)
                const resp = await userAxios.post("/gst/tax-payer/verify-otp", {
                        gstin:gstin,
                        username:username,
                        otp:otp
                    })
                if (resp.data.success) {
                    setCookie("gstin",gstin)
                    toast.success(resp.data.message)
                    router.push("/dashboard/easy-gst-return/check-return-status")
                }
                
            } catch (error) {
                setIsError(error)
            } finally {
                setIsLoading(false)
                
            }
        }else{
            toast.error("GSTIN , Username and OTP is required")
        }
    }
    return (
		<div className="grid lg:grid-col-2 place-content-center min-h-[calc(100vh-10rem)] ">
			<form className="my-8 rounded-md bg-blue-400/90 text-neutral-50 px-8 pt-10 pb-6" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-2xl pb-8 font-semibold">Login With GSTIN</h1>
				{isStep1 === 1 ? (
					<LoginWithGstin_step1
						register={register}
					/>
				) : (
					<LoginWithGstin_step2 register={register} />
				)}
				<div className="flex justify-between mt-8">
					{isStep1 === 1 ? (
						<button
							onClick={handleSendOtp}
							type="button"
							className="button-neutral"
						>
                        {isLoading ? <div>loading...</div> : "Send OTP"}
							
						</button>
					) : (
                        <>
                            <button
                                onClick={() => setIsStep1(1)}
                                type="button"
                                className="button-neutral"
                            >
                                back
                            </button>
                            <button type="submit" className="button-blue">
                            {isLoading ? <div>loading...</div> : "Login"}
                            </button>
                        </>
					)}
				</div>
                
			</form>
		</div>
	)
}