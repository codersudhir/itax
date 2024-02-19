"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Axios from "@/lib/Axios";
import { useState } from "react";
import { toast } from "react-toastify";
import regex from "@/utils/regex";
import { I } from "@/components/iconify/I";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
const formClassName = {
  Label: "text-sm font-medium",
  Input:
    "w-full py-2 px-3 mt-1 outline-none border focus:border-primary rounded",
};

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  // const [otpKey, setOtpKey] = useState(null)
  // const [email, setEmail] = useState(null)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSendOtp = async (FormData) => {
    const {
      firstName,
      lastName,
      phone,
      email,
      password,
      confirmPassword,
      address,
    } = FormData;
    try {
      setLoading(true);
      if (password !== confirmPassword) {
        toast.error("passwords do not match");
        return;
      }
      if (firstName && lastName && phone && email && password && address) {
        const response = await Axios.post("/user/sign-up", {
          firstName: FormData.firstName,
          lastName: FormData.lastName,
          phone: FormData.phone,
          email: FormData.email,
          password: FormData.password,
          address: FormData.address,
          gender: FormData.gender,
        });
        // otp_key
        if (response.status === 200) {
          // toast.success("please verify your account")
          router.push(
            "/verify-otp?email=" +
              FormData.email +
              "&otp_key=" +
              response.data.data.otp_key
          );
        }
      } else {
        toast.warning("Please fill all the fields");
      }
    } catch (error) {
      if (error?.response?.status === 409) {
        toast.success(error.response.data.message);
        console.log("Internal server error login", error);
      } else if (error?.response && error?.response?.status === 500) {
        toast.error("something went wrong. Please try again later");
        console.log("Internal server error login", error);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form
        className="shadow-lg rounded-md bg-neutral-50 p-4 sm:max-w-2xl py-4 sm:p-8"
        onSubmit={handleSubmit(onSendOtp)}
      >
        <h1 className="text-2xl font-bold text-center mb-8">Sign Up</h1>

        <ul className=" grid gap-2 sm:grid-cols-2">
          <li>
            <label className={formClassName.Label} htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className={formClassName.Input}
              maxLength={20}
              {...register("firstName", { required: "firstName is required." })}
            />
            {errors.firstName && (
              <p className="text-xs text-red-500">{errors.firstName.message}</p>
            )}
          </li>
          <li>
            <label className={formClassName.Label} htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              maxLength={25}
              className={formClassName.Input}
              {...register("lastName", { required: "lastName is required." })}
            />
            {errors.lastName && (
              <p className="text-xs text-red-500">{errors.lastName.message}</p>
            )}
          </li>
          <li>
            <label className={formClassName.Label} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={formClassName.Input}
              {...register(
                "email",
                {
                  pattern: {
                    value: regex.EMAIL_RGX,
                    message: "Invalid email",
                  },
                },
                { required: "Email is required" }
              )}
            />

            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </li>
          <li>
            <label className={formClassName.Label} htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className={formClassName.Input}
              {...register(
                "phone",
                {
                  pattern: {
                    value: regex.PHONE_RGX,
                    message: "Enter a valid 10 digit phone number",
                  },
                },
                { required: "Mobile no is required" }
              )}
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone.message}</p>
            )}
          </li>
          <li className="relative">
            <label className={formClassName.Label} htmlFor="password">
              password
            </label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              className={formClassName.Input}
              {...register("password")}
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
            <I
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              icon={isPasswordVisible ? "mdi:eye" : "mdi:eye-off"}
              className=" select-none text-zinc-500 absolute right-3 top-9 text-xl cursor-pointer"
            />
          </li>
          <li className="relative">
            <label className={formClassName.Label} htmlFor="confirmPassword">
              Confirm password
            </label>
            <input
              type={isPasswordVisible2 ? "text" : "password"}
              id="confirmPassword"
              className={formClassName.Input}
              {...register("confirmPassword", {
                required: "confirmPassword is required.",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-xs text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
            <I
              onClick={() => setIsPasswordVisible2(!isPasswordVisible2)}
              icon={isPasswordVisible2 ? "mdi:eye" : "mdi:eye-off"}
              className=" select-none text-zinc-500 absolute right-3 top-9 text-xl cursor-pointer"
            />
          </li>
          <li>
            <label className={formClassName.Label} htmlFor="gender">
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              className={formClassName.Input}
              {...register("gender", { required: "gender is required." })}
              defaultValue={getValues("gender")}
            >
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="others">others</option>
            </select>
            {errors.gender && (
              <p className="text-xs text-red-500">{errors.gender.message}</p>
            )}
          </li>
          {/* <li>
                        <label className={formClassName.Label} htmlFor="pin">PIN Code</label>
                        <input
                            type="number"
                            id="pin"
                            className={formClassName.Input}
                            {...register(
                                "pin",{
                                    pattern: {
                                        value: regex.PIN_RGX,
                                        message: "Enter a valid PIN Code",
                                    },
                                },
                                {
                                    required: "Pincode is required",
                                }
                            )}
                        />
                        {errors.pin && <p className="text-xs text-red-500">{errors.pin.message}</p>}
                    </li> */}
          <li className="sm:col-span-2">
            <label className={formClassName.Label} htmlFor="address">
              Address
            </label>
            <textarea
              type="text"
              name="address"
              id="address"
              className={formClassName.Input}
              {...register("address")}
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
          <button
            type="submit"
            className="py-2 px-4 w-[50%] bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl"
          >
            {loading ? (
              <span className="inline-block w-4 h-4 border-white border-b-zinc-400 border-r-zinc-400 border-2 border-solid rounded-full animate-spin"></span>
            ) : (
              " Send OTP"
            )}
          </button>
        </div>

        <div className="flex justify-center pt-4">
          Already have an account?
          <Link className="ml-2 text-blue-600 font-bold" href="/login">
            Login
          </Link>
        </div>
      </form>
    </>
  );
}
