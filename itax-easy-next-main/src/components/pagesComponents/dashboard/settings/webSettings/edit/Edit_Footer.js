"use client"
import { useForm } from "react-hook-form"
export default function Edit_Footer() {
    const { register, handleSubmit, watch, formState,trigger  } =useForm();
    const { errors }=formState
    const onSubmit = (data) => {
        console.log(data);
    }

    return(
    <form className="container 2xl:max-w-4xl mx-auto my-12 p-4 py-8" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1 className="text-3xl font-bold mb-4">Edit Footer</h1>
        <ul className="grid md:grid-cols-2 gap-2 ">
            <li className="sm:col-span-1 col-span-2">
                <label className="text-txt/60 font-semibold" htmlFor="Facebook">Facebook</label>
                <input {...register("Facebook",{
                    required:{
                        value:true,
                        message:"Facebook name is required",
                    }
                })} 
                type="text" placeholder="Facebook" name="Facebook" id="Facebook" className=" bg-bg_2/20 border border-txt/50 focus:border-primary text-txt text-sm rounded-lg block w-full p-2.5" 
                />
                {errors?
                <small className="text-red-500 italic">{errors.Facebook?.message}</small>
                :""}
            </li>
            <li className="sm:col-span-1 col-span-2">
                <label className="text-txt/60 font-semibold" htmlFor="Instagram">Instagram</label>
                <input {...register("Instagram",{
                    required:{
                        value:true,
                        message:"Instagram name is required",
                    }
                })} 
                type="text" placeholder="Instagram" name="Instagram" id="Instagram" className=" bg-bg_2/20 border border-txt/50 focus:border-primary text-txt text-sm rounded-lg block w-full p-2.5" 
                />
                {errors?
                <small className="text-red-500 italic">{errors.Instagram?.message}</small>
                :""}
            </li>
            <li className="sm:col-span-1 col-span-2">
                <label className="text-txt/60 font-semibold" htmlFor="Twitter">Twitter</label>
                <input {...register("Twitter",{
                    required:{
                        value:true,
                        message:"Twitter name is required",
                    }
                })} 
                type="text" placeholder="Twitter" name="Twitter" id="Twitter" className=" bg-bg_2/20 border border-txt/50 focus:border-primary text-txt text-sm rounded-lg block w-full p-2.5" 
                />
                {errors?
                <small className="text-red-500 italic">{errors.Twitter?.message}</small>
                :""}
            </li>
            <li className="sm:col-span-1 col-span-2">
                <label className="text-txt/60 font-semibold" htmlFor="Youtube">Youtube</label>
                <input {...register("Youtube",{
                    required:{
                        value:true,
                        message:"Youtube name is required",
                    }
                })} 
                type="text" placeholder="Youtube" name="Youtube" id="Youtube" className=" bg-bg_2/20 border border-txt/50 focus:border-primary text-txt text-sm rounded-lg block w-full p-2.5" 
                />
                {errors?
                <small className="text-red-500 italic">{errors.Youtube?.message}</small>
                :""}
            </li>
            <li className="sm:col-span-1 col-span-2">
                <label className="text-txt/60 font-semibold" htmlFor="Whatsapp">Whatsapp</label>
                <input {...register("Whatsapp",{
                    required:{
                        value:true,
                        message:"Whatsapp name is required",
                    }
                })} 
                type="text" placeholder="Whatsapp" name="Whatsapp" id="Whatsapp" className=" bg-bg_2/20 border border-txt/50 focus:border-primary text-txt text-sm rounded-lg block w-full p-2.5" 
                />
                {errors?
                <small className="text-red-500 italic">{errors.Whatsapp?.message}</small>
                :""}
            </li>
            <li className="sm:col-span-1 col-span-2">
                <label className="text-txt/60 font-semibold" htmlFor="Email">Email</label>
                <input {...register("Email",{
                    required:{
                        value:true,
                        message:"Email name is required",
                    }
                })} 
                type="text" placeholder="Email" name="Email" id="Email" className=" bg-bg_2/20 border border-txt/50 focus:border-primary text-txt text-sm rounded-lg block w-full p-2.5" 
                />
                {errors?
                <small className="text-red-500 italic">{errors.Email?.message}</small>
                :""}
            </li>
            <li className="sm:col-span-1 col-span-2">
                <label className="text-txt/60 font-semibold" htmlFor="Phone">Phone</label>
                <input {...register("Phone",{
                    required:{
                        value:true,
                        message:"Phone name is required",
                    }
                })} 
                type="text" placeholder="Phone" name="Phone" id="Phone" className=" bg-bg_2/20 border border-txt/50 focus:border-primary text-txt text-sm rounded-lg block w-full p-2.5" 
                />
                {errors?
                <small className="text-red-500 italic">{errors.Phone?.message}</small>
                :""}
            </li>
            <li className="sm:col-span-1 col-span-2">
                <label className="text-txt/60 font-semibold" htmlFor="Address">Address</label>
                <input {...register("Address",{
                    required:{
                        value:true,
                        message:"Address name is required",
                    }
                })} 
                type="text" placeholder="Address" name="Address" id="Address" className=" bg-bg_2/20 border border-txt/50 focus:border-primary text-txt text-sm rounded-lg block w-full p-2.5" 
                />
                {errors?
                <small className="text-red-500 italic">{errors.Address?.message}</small>
                :""}
            </li>
            <li className="sm:col-span-1 col-span-2">
                <label className="text-txt/60 font-semibold" htmlFor="Copyright">Copyright</label>
                <input {...register("Copyright",{
                    required:{
                        value:true,
                        message:"Copyright name is required",
                    }
                })} 
                type="text" placeholder="Copyright" name="Copyright" id="Copyright" className=" bg-bg_2/20 border border-txt/50 focus:border-primary text-txt text-sm rounded-lg block w-full p-2.5" 
                />
                {errors?
                <small className="text-red-500 italic">{errors.Copyright?.message}</small>
                :""}
            </li>
        </ul>
        <div className="flex justify_start mt-2">
            <button className="bg-primary/80 hover:bg-primary/100 px-6 py-2 rounded-md text-neutral-100" type="submit">Save Changes</button>
        </div>
    </form>
    );
}
