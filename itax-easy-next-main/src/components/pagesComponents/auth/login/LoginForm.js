"use client"
import { useForm } from "react-hook-form"
import Link from "next/link"
import Axios from "@/lib/Axios"
import { I } from "@/components/iconify/I"
import { setCookie, getCookie, deleteCookie } from "cookies-next"
import regex from "@/utils/regex"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { useState } from "react"
import useClient from "@/hooks/useClient"

const formClassName = {
    Label: "text-sm font-medium",
    Input: "w-full py-2 px-3 mt-1 outline-none border focus:border-primary rounded",
}
export default function LoginForm() {
    const router= useRouter();
	const { register, handleSubmit, getValues } = useForm();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
	const onLogin = async (data) => {
		try {
            if (data.email && data.password) {
                setLoading(true)
                const response = await Axios.post("/user/login", {
                    email: data.email,
                    password: data.password,
                })
                console.log(response)
                if (response.status === 200 && response.data.data.user.verified) {
                    setCookie("token", JSON.stringify(response.data.data.token));
                    setCookie("currentUser", JSON.stringify(response.data.data.user));
                    toast.success("login successfully")
                    router.push("/")
                }
            }
		} catch (error) {
            console.log(error);
            if (error.response.status===401) {
                toast.info(error.response.data.message+" Please Signup");
            }
            else if (error.response.status===301) {
                toast.info(error.response.data.message+" Please verify")
                router.push("/verify-otp?email="+data.email)
            }else {
                toast.error("something went wrong. Please try again later");
            }
        }finally {
            setLoading(false)
        }
	}
	return (
		<form className="shadow-lg bg-neutral-50 p-4 sm:max-w-sm mx-auto rounded-lg py-4 sm:p-8" action="" onSubmit={handleSubmit(onLogin)}>
			<h1 className="text-2xl font-bold text-center mb-8">Login</h1>
			<ul className=" grid gap-2">
				<li>
					<label className={formClassName.Label} htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						className={formClassName.Input}
						{...register("email",{
                            pattern: regex.EMAIL_RGX,
                            required: "Email is required",
                        })}
					/>
				</li>
				<li className="relative">
					<label className={formClassName.Label} htmlFor="password">password</label>
					<input
						type={isPasswordVisible?"text":"password"}
						id="password"
						className={formClassName.Input}
						{...register("password")}
					/>
                     <I
                        onClick={()=>setIsPasswordVisible(!isPasswordVisible)}
                        icon={isPasswordVisible ? "mdi:eye": "mdi:eye-off" }
                        className=" select-none text-zinc-500 absolute right-3 top-9 text-xl cursor-pointer"
                    />
				</li>
			</ul>
            <div className="flex justify-center pt-4">
				Forget Password
				<Link className="ml-2 text-blue-600 font-bold" href="/reset-password">
                    Reset Password
				</Link>
			</div>
			<div className="pt-4 text-center">
				<button className="py-2 px-4 w-[50%] bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl">
					{loading ? (
						<span className="inline-block w-4 h-4 border-white border-b-zinc-400 border-r-zinc-400 border-2 border-solid rounded-full animate-spin"></span>
					) : (
						"Login"
					)}
				</button>
			</div>
			<div className="flex justify-center pt-4">
				Don&apos;t have an account?
				<Link className="ml-2 text-blue-600 font-bold" href="/signup">
					Signup
				</Link>
			</div>
		</form>
	)
}
