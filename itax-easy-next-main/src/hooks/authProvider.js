import Axios from "@/lib/Axios";
import { cookies } from "next/headers";
export async function getCurrentUser() {
	const cookieList = cookies();
	const token = JSON.parse(cookieList.get("token").value || "{}");
	const user = JSON.parse(cookieList.get("currentUser").value || "{}");
	return {
		token,
		...user,
	};
}
export async function getBusinessProfile() {
	const { token } = await getCurrentUser();
	try {
		const response = await Axios("/business/profile", {
			headers: {
				Authorization: "Bearer " + token,
			},
		});
		return { response: response.data };
	} catch (error) {
		return { error: error };
	}
}
export async function getUserProfile() {
	const { token } = await getCurrentUser();
	try {
		const response = await Axios("/user/profile", {
			headers: {
				Authorization: "Bearer " + token,
			},
		});
		return { response: response.data };
	} catch (error) {
		return { error: error };
	}
}
