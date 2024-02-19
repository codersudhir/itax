import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "Itax Easy",
	description: "Ease of Doing Taxation, iTaxEasy.",
}

import TopNavbar from "@/components/partials/topNavbar/TopNavbar"
import Footer from "@/components/partials/footer/Footer"
import StoreProvider from "@/store/StoreProvider"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AppLayout from "@/layouts/AppLayout"
export default function RootLayout({children}) {
	return (
        <StoreProvider>
        <html lang="en">
            <body className={inter.className}>
                <ToastContainer />
                <AppLayout>{children}</AppLayout>
            </body>
        </html>
        </StoreProvider>
	)
}