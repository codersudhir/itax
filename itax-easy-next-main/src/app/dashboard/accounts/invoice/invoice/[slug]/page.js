import Axios from "@/lib/Axios";
import InvoicePreview from "@/components/pagesComponents/dashboard/accounts/invoice/invoicePreview/InvoicePreview";
import { getCurrentUser , getBusinessProfile} from "@/hooks/authProvider";
async function getInvoiceById(id) {
	const {token }= await getCurrentUser()
	// const response = {resp:null,error:null}
	try {
		const response = await Axios.get(`/invoice/invoices/${id}`, {
			headers: {
				Authorization: "Bearer " + token,
			},
		});
		return { respInvoice: response.data };
	} catch (error) {
		return { errorInvoice: error };
	}
}
async function getPartyById(id) {
	const {token }= await getCurrentUser()
	try {
		const response = await Axios.get(`/invoice/parties/${id}`, {
			headers: {
				Authorization: "Bearer " + token,
			},
		});
		return { respParty: response.data };
	} catch (error) {
		return { errorParty: error };
	}
}

export default async function Page({ params }) {
	const { respInvoice, errorInvoice } = await getInvoiceById(params.slug);
	if (errorInvoice) {
	    return <div>Something went wrong</div>;
	}
	const { respParty, errorParty } = await getPartyById(respInvoice?.partyId);
	const { response: businessProfile, error: businessProfileError } =await getBusinessProfile();
	// if (response.data && businessProfile.data) {
	//     return <div>{response.data.message}</div>;
	// }
	return (
		<div>
			<InvoicePreview respParty={respParty.party} respInvoice={respInvoice} businessProfile={businessProfile?.data}/>
		</div>
	);
}
