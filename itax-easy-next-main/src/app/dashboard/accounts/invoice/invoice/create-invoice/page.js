import CreateInvoice from "@/components/pagesComponents/dashboard/accounts/invoice/invoice/CreateInvoice"
import { getBusinessProfile } from "@/hooks/authProvider";
export default async function Create() {
    const businessProfile = await getBusinessProfile();
    return (
        <CreateInvoice businessProfile={businessProfile.data}/>
    )
}
