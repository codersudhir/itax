import ErrorComponent from "@/components/partials/error/ErrorComponent";
import CreateSaleForm from "./components/CreateSaleForm";
import Axios from "@/lib/Axios";
import {getCurrentUser} from "@/hooks/authProvider";
export default async function CreateSale() {
    try {
        const { token } = await getCurrentUser();
        const pariesResponse = await Axios.get("/invoice/parties",{
            headers: {
                Authorization: "Bearer " + token,
            }
        });
        return (
            <div>
                <CreateSaleForm parties={pariesResponse?.data?.parties || []}/>
            </div>
        );
    } catch (error) {
        console.log(error);
        return (
            <ErrorComponent message={error.message} info={error.info} type={error.type} />
        )
    }
}