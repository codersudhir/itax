"use client"
import { useEffect, useState } from "react"
import userAxios from "@/lib/userAxios"
import { getCookie } from "cookies-next"
import { useRouter } from "next/navigation";
export default function TrackGstReturn() {
    const router = useRouter()
	const gstinNumber = getCookie("gstin")
	const [EFiledlist, setData] = useState()
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
    const [year, setYear] = useState("FY 2023-24")

    if (typeof window !== "undefined" && !gstinNumber){
        router.push("/dashboard/easy-gst-return/login")
    }
    
	const getTrackGstReturn = async (e) => {
		try {
			setLoading(true)
			const resp = await userAxios.post(`/gst/return/track`, {
				gstin: gstinNumber,
				financialYear: year,
			})
			setData(resp.data.data)
            setError(null)
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}
	}
    useEffect(() => {
        getTrackGstReturn()
    },[year])

	return (
		<div className="p-4">
			<div className="mb-3 xl:w-75 mx-2 items-start  grid  place-content-center">
				<label htmlFor="financialYear" className="form-label inline-block mb-2 text-gray-700" >
					Financial Year
				</label>
				<div className="flex justify-center">
					<div className="mb-3 xl:w-96">
						<select
                            onChange={(e) => setYear(e.target.value)} defaultValue={year}
							className="form-input w-full border p-2 border-blue-500 rounded-l"
							aria-label="Default select example"
						>
							<option value="FY 2023-24">2023-24</option>
							<option value="FY 2022-23">2022-23</option>
							<option value="FY 2021-22">2021-22</option>
						</select>
					</div>
				</div>
			</div>
            {error && <div className="grid min-h-56 place-content-center">{error.message}</div>}
            {loading ? (<div className="grid min-h-56 place-content-center">loading</div>):(
                <ul className="max-w-7xl mx-auto grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                    {EFiledlist && EFiledlist?.EFiledlist?.map((item,key) => (
                        <li key={`${item.rtntype} ${key}`}>
                            <div className="block rounded-lg shadow-lg bg-white md:max-w-sm text-center">
                                <div className="py-3 px-6 border-b border-gray-300">
                                    <h6 className="text-center">{item.rtntype}</h6>
                                </div>
                                <div className="p-6">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">
                                    ARN No. - {item.arn}
                                </h5>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Date Of Filing - {item.dof}</li>
                                    <li>Mode Of Filing - {item.mof}</li>
                                    <li>Return Period - {item.ret_prd}</li>
                                    <li>valid - {item.valid}</li>
                                </ul>
                                <button
                                    type="button"
                                    className="inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                    Status - {item.status}
                                </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul> 
            )}
		</div>
	)
}
