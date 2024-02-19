"use client"
import SideBar from "@/components/pagesComponents/dashboard/sidebar/SideBar";
import useAuth from "@/hooks/useAuth";
import { usePathname } from "next/navigation";
import { useState } from "react";
import TopNavbar from "@/components/partials/topNavbar/TopNavbar";
import BackButton from "@/components/pagesComponents/dashboard/BackButton";

const DashboardSidebarItemsData = {
    normal: [
        {
            upcoming: false,
            title: "Dashboard",
            linkTo: "/dashboard",
            iconName: "material-symbols:dashboard",
            subMenu: false,
        },
        {
            upcoming: false,
            title: "Easy GST Return",
            linkTo: "/dashboard/easy-gst-return",
            iconName: "carbon:finance",
            subMenu: false,
        },
        {
            upcoming: false,
            title: "ITR",
            iconName: "fa6-solid:percent",
            subMenu: true,
            subMenuItems: [
                {
                    upcoming: false,
                    linkTo: "itr/itr-filling/upload-form-16",
                    title: "Upload Form-16",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: false,
                    linkTo: "itr/menual-itr",
                    title: "File Manually",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "/",
                    title: "Challan Entry",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
            ],
        },
        {
            upcoming: false,
            title: "Easy Investment",
            linkTo: "easy-investment",
            iconName: "mdi:finance",
            subMenu: true,
            subMenuItems: [
                {
                    upcoming: false,
                    linkTo: "/dashboard/easy-investment/insurance",
                    title: "Insurance",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "/easy-investment/mutual-fund",
                    title: "Mutual Fund",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "/easy-investment/sip",
                    title: "SIP",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "/easy-investment/sells-of-shares",
                    title: "Sells of Share",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "/easy-investment/purchases-of-shares",
                    title: "Purchase of Share",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "/easy-investment/profit",
                    title: "Profit",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "/easy-investment/loss",
                    title: "Loss",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
            ],
        },
        {
            upcoming: false,
            title: "Accounts",
            iconName: "fa6-solid:users",
            subMenu: true,
            subMenuItems: [
                {
                    title: "Invoice",
                    iconName: "material-symbols:dashboard",
                    upcoming: false,
                    linkTo: "/dashboard/accounts/invoice",
                    subMenu: false,
                },
                {
                    title: "others",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "/dashboard/accounts/invoice/cash-bank",
                },
            ],
        },
        {
            upcoming: false,
            title: "Finance",
            iconName: "mingcute:currency-rupee-fill",
            subMenu: true,
            subMenuItems: [
                {
                    title: "Loan",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: false,
                    linkTo: "/dashboard/finance/loan",
                },
                {
                    title: "Payment",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: false,
                    linkTo: "/dashboard/finance/payment",
                },
                {
                    title: "Working Capital",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "/dashboard/finance/working-capital",
                },
            ],
        },
        {
            upcoming: false,
            title: "Transactions",
            iconName: "clarity:two-way-arrows-line",
            linkTo: "/dashboard/",
            subMenu: false,
        },
        {
            upcoming: false,
            title: "Reports",
            iconName: "tabler:report",
            subMenu: true,
            subMenuItems: [
                {
                    title: "Project Report",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: false,
                    linkTo: "/dashboard/reports/project-report",
                },
            ],
        },
        {
            upcoming: false,
            title: "Bill Payment",
            iconName: "mingcute:paper-fill",
            subMenu: true,
            subMenuItems: [
                {
                    title: "Electricity Bill",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "bill-payment/electricity",
                },
                {
                    title: "Mobile Recharge",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "bill-payment/mobile-recharge",
                },
                {
                    title: "Gas Bill",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "bill-payment/gas-bill",
                },
            ],
        },
        {
            upcoming: false,
            title: "Settings",
            iconName: "material-symbols:settings",
            subMenu: true,
            subMenuItems: [
                {
                    title: "User Account",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "dashboard/settings/user-account",
                },
                {
                    title: "Business profile",
                    iconName: "lets-icons:subttasks-alt-fill",
                    linkTo: "/dashboard/profile/business",
                },
            ],
        },
    ],
    admin: [
        {
            upcoming: false,
            title: "Dashboard",
            linkTo: "/dashboard",
            iconName: "material-symbols:dashboard",
            subMenu: false,
        },
        // {
        //     upcoming: false,
        //     title: "My Account",
        //     iconName: "mdi:user",
        //     subMenu: true,
        //     subMenuItems: [
        //         {
        //             upcoming: false,
        //             linkTo: "my-account/services",
        //             title: "Services",
        //             iconName: "lets-icons:subttasks-alt-fill",
        //         },
        //         {
        //             upcoming: false,
        //             linkTo: "my-account/orders",
        //             title: "Orders",
        //             iconName: "lets-icons:subttasks-alt-fill",
        //         },
        //         {
        //             upcoming: false,
        //             linkTo: "my-account/payments",
        //             title: "Payments",
        //             iconName: "lets-icons:subttasks-alt-fill",
        //         },
        //         {
        //             upcoming: true,
        //             linkTo: "my-account/apis",
        //             title: "APIs",
        //             iconName: "lets-icons:subttasks-alt-fill",
        //         },
        //     ],
        // },
        {
            upcoming: false,
            title: "My Network",
            iconName: "mdi:user",
            subMenu: true,
            subMenuItems: [
                {
                    upcoming: false,
                    linkTo: "/dashboard/my-network/agents",
                    title: "Agents",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: false,
                    linkTo: "/dashboard/my-network/clients",
                    title: "Clients",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
               
            ],
        },
        {
            upcoming: false,
            title: "Easy GST Return",
            linkTo: "gstr",
            iconName: "carbon:finance",
            subMenu: false,
        },
        {
            upcoming: false,
            title: "Invoice",
            linkTo: "/dashboard/accounts/invoice",
            iconName: "ri:bill-line",
            subMenu: false,
        },
        {
            upcoming: false,
            title: "ITR",
            iconName: "fa6-solid:percent",
            subMenu: true,
            subMenuItems: [
                {
                    upcoming: false,
                    linkTo: "itr/itr-filling/upload-form-16",
                    title: "Upload Form-16",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: false,
                    linkTo: "itr/menual-itr",
                    title: "File Manually",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "/",
                    title: "Challan Entry",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
            ],
        },
        {
            upcoming: false,
            title: "Easy Investment",
            linkTo: "easy-investment",
            iconName: "mdi:finance",
            subMenu: true,
            subMenuItems: [
                {
                    upcoming: false,
                    linkTo: "/dashboard/insureance",
                    title: "Insurance",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "/easy-investment/mutual-fund",
                    title: "Mutual Fund",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "/easy-investment/sip",
                    title: "SIP",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "/easy-investment/sells-of-shares",
                    title: "Sells of Share",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "/easy-investment/purchases-of-shares",
                    title: "Purchase of Share",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "/easy-investment/profit",
                    title: "Profit",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "/easy-investment/loss",
                    title: "Loss",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
            ],
        },
        
      
        {
            upcoming: false,
            title: "Accounts",
            iconName: "fa6-solid:users",
            subMenu: true,
            subMenuItems: [
                {
                    title: "Dashboard",
                    iconName: "material-symbols:dashboard",
                    upcoming: false,
                    linkTo: "/dashboard/accounts",
                },              

                {
                    title: "Reports",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: false,
                    linkTo: "/dashboard/accounts/reports",
                },
                {
                    title: "All Sales",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: false,
                    linkTo: "/dashboard/accounts/all-sales",
                },
                {
                    title: "All Purchase",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: false,
                    linkTo: "/dashboard/accounts/all-purchase",
                },
                {
                    title: "Expense",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: false,
                    linkTo: "/dashboard/accounts/expense",
                },
                {
                    title: "Cash/Bank",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: false,
                    linkTo: "/dashboard/accounts/cash-bank",
                },
            ],
        },
        {
            upcoming: true,
            title: "Finance",
            iconName: "mingcute:currency-rupee-fill",
            subMenu: true,
            subMenuItems: [
                {
                    title: "Loan",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: false,
                    linkTo: "/finance/loan",
                },
                {
                    title: "Payment",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: false,
                    linkTo: "/finance/payment",
                },
                {
                    title: "Working Capital",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: false,
                    linkTo: "/finance/working-capital",
                },
            ],
        },
        {
            upcoming: false,
            title: "Transactions",
            iconName: "clarity:two-way-arrows-line",
            linkTo: "/dashboard/transactions",
            subMenu: false,
        },
        {
            upcoming: true,
            title: "Reports",
            iconName: "tabler:report",
            subMenu: true,
            subMenuItems: [
                {
                    title: "Project Report",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: false,
                    linkTo: "dashboard/reports/project-report",
                },
            ],
        },
        {
            upcoming: true,
            title: "Bill Payment",
            iconName: "mingcute:paper-fill",
            subMenu: true,
            subMenuItems: [
                {
                    title: "Electricity Bill",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "bill-payment/electricity",
                },
                {
                    title: "Mobile Recharge",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "bill-payment/mobile-recharge",
                },
                {
                    title: "Gas Bill",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "bill-payment/gas-bill",
                },
            ],
        },
        {
            upcoming: true,
            title: "Settings",
            iconName: "material-symbols:settings",
            subMenu: true,
            subMenuItems: [
                {
                    title: "User Account",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "settings/user-account",
                },
                {
                    title: "Business Details",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "settings/business-details",
                },
            ],
        },
    ],
    superAdmin: [
        {
            upcoming: false,
            title: "Dashboard",
            linkTo: "/dashboard",
            iconName: "material-symbols:dashboard",
            subMenu: false,
        },

        {
            upcoming: false,
            title: "users/admins",
            iconName: "mdi:user",
            subMenu: true,
            subMenuItems: [
                {
                    upcoming: false,
                    linkTo: "/dashboard/all-users",
                    title: " Users",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: false,
                    linkTo: "/dashboard/all-admin",
                    title: " Admins",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
               
            ],
        },
        {
            upcoming: true,
            title: "Easy GST Return",
            linkTo: "gstr",
            iconName: "carbon:finance",
            subMenu: true,
            subMenuItems: [
                {
                    upcoming: false,
                    linkTo: "all-users",
                    title: "all users",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: false,
                    linkTo: "active-users",
                    title: "active users",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: false,
                    linkTo: "non-active-users",
                    title: "non active users",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
            ],
        },
        {
            upcoming: true,
            title: "Easy ITR",
            iconName: "fa6-solid:percent",
            subMenu: true,
            subMenuItems: [
                {
                    upcoming: false,
                    linkTo: "all-users",
                    title: "all users",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: false,
                    linkTo: "active-users",
                    title: "active users",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: false,
                    linkTo: "non-active-users",
                    title: "non active users",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
            ],
        },
        {
            upcoming: false,
            title: "Easy Investment",

            iconName: "mdi:finance",
            subMenu: true,
            subMenuItems: [
                {
                    upcoming: false,
                    linkTo: "/dashboard/insureance",
                    title: "insurance",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "easy-investment/mutual-fund",
                    title: "mutual fund",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "easy-investment/sip",
                    title: "sip",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "easy-investment/sales-of-share",
                    title: "sales if share",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "easy-investment/purchase-of-share",
                    title: "purchase if share",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "easy-investment/profit",
                    title: "profit",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "easy-investment/loss",
                    title: "loss",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "easy-investment/lic",
                    title: "lic",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "easy-investment/star-health",
                    title: "star health",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
                {
                    upcoming: true,
                    linkTo: "easy-investment/post-office",
                    title: "post office",
                    iconName: "lets-icons:subttasks-alt-fill",
                },
            ],
        },
        {
            upcoming: false,
            title: "Invoice",
            iconName: "mdi:invoice-edit-outline",
            subMenu: true,
            subMenuItems: [
                {
                    title: "Invoice",
                    iconName: "material-symbols:dashboard",
                    upcoming: false,
                    linkTo: "/dashboard/invoice",
                },
                {
                    title: "Parties",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "/invoice/addparty",
                },
                {
                    title: "Items",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "/invoice/createitem",
                },
                {
                    title: "Purchase",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "/invoice/purchase",
                },
                {
                    title: "Sales",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "/invoice/sales",
                },
            ],
        },
        {
            upcoming: false,
            title: "Accounts",
            iconName: "fa6-solid:users",
            subMenu: true,
            subMenuItems: [
                {
                    title: "Accounts",
                    iconName: "material-symbols:dashboard",
                    upcoming: false,
                    linkTo: "/dashboard/accounts",
                },
                {
                    title: "All Parties",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "/dashboard/accounts/all-parties",
                },

                {
                    title: "Items",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "/dashboard/accounts/items",
                },

                {
                    title: "Reports",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "/dashboard/accounts/reports",
                },
                {
                    title: "Sales",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "/dashboard/accounts/sales",
                },
                {
                    title: "Purchase",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "/dashboard/accounts/purchase",
                },
                {
                    title: "Expense",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "/dashboard/accounts/expense",
                },
                {
                    title: "Cash/Bank",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "/dashboard/accounts/cash-bank",
                },
            ],
        },
        {
            upcoming: true,
            title: "Finance",
            iconName: "mingcute:currency-rupee-fill",
            subMenu: true,
            subMenuItems: [
                {
                    title: "Finance",
                    iconName: "material-symbols:dashboard",
                    upcoming: true,
                    linkTo: "finance",
                },
                {
                    title: "Loan",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: false,
                    linkTo: "/finance/loan",
                },
                {
                    title: "Payment",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: false,
                    linkTo: "/finance/payment",
                },
                {
                    title: "Working Capital",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: false,
                    linkTo: "/finance/working-capital",
                },
            ],
        },
        {
            upcoming: false,
            title: "Transactions",
            iconName: "clarity:two-way-arrows-line",
            linkTo: "/dashboard/transactions",
            subMenu: false,
        },
        {
            upcoming: false,
            title: "Reports",
            iconName: "tabler:report",
            subMenu: true,
            subMenuItems: [
                {
                    title: "Reports",
                    iconName: "material-symbols:dashboard",
                    upcoming: false,
                    linkTo: "reports",
                },
            ],
        },
        {
            upcoming: false,
            title: "Bill Payment",
            iconName: "mingcute:paper-fill",
            subMenu: true,
            subMenuItems: [
                {
                    title: "Bill payments",
                    iconName: "material-symbols:dashboard",
                    upcoming: false,
                    linkTo: "bill-payments",
                },
                {
                    title: "Electricity Bill",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "bill-payment/electricity",
                },
                {
                    title: "Mobile Recharge",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "bill-payment/mobile-recharge",
                },
                {
                    title: "Gas Bill",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: true,
                    linkTo: "bill-payment/gas-bill",
                },
            ],
        },
        {
            upcoming: false,
            title: "Settings",
            iconName: "material-symbols:settings",
            subMenu: true,
            subMenuItems: [
                {
                    title: "web-settings",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: false,
                    linkTo: "/dashboard/settings/web-settings",
                },
                {
                    title: "settings",
                    iconName: "lets-icons:subttasks-alt-fill",
                    upcoming: false,
                    linkTo: "/dashboard/settings",
                },
            ],
        },
    ],
};
export default function DashboardLayout({ children }) {
    const pathname = usePathname();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const handleSidebar = () => setIsSidebarOpen((prev) => !prev);
    const {currentUser} = useAuth();

    if (pathname.startsWith("/dashboard/accounts/invoice")) {
        return (
            <>
                {children}
            </>
        )
    }

    const userType = currentUser?.userType;
    let data;
    switch (userType) {
        case "superadmin":
            data = DashboardSidebarItemsData.superAdmin;
            break;
        case "admin":
            data = DashboardSidebarItemsData.admin;
            break;
        case "normal":
            data = DashboardSidebarItemsData.normal;
            break;
    }
	return (
        <>
            <>
                <SideBar data={data} userType={userType} isSidebarOpen={isSidebarOpen} handleSidebar={handleSidebar}/>
            </>
            <TopNavbar handleSidebar={handleSidebar} isSidebarOpen={isSidebarOpen}/>
            <main className={`${isSidebarOpen ? "md:pl-64 ":"md:pl-16"} transition-[padding] duration-200`}>
                <BackButton/>
                {children}
            </main>
		</>
	);
}