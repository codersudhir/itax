const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import axios from "axios";
const Axios = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});
export default Axios;
