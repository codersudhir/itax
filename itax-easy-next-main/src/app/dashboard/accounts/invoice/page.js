import InvoiceDashboard_Index from "@/components/pagesComponents/dashboard/accounts/invoice/InvoiceDashboard_index";
import Invoice_Dashboard from "@/components/pagesComponents/dashboard/superAdmin/accounts/invoice/Invoice_Dashboard";

export default function page() {
    const userType ="normal";
    if (userType === "superAdmin") {
        return (
            <Invoice_Dashboard />
        )
    }
    return (
        <InvoiceDashboard_Index />
    );
}