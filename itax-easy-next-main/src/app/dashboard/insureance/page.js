import Insureance_Admin from "@/components/pagesComponents/dashboard/admin/insureance/Insureance_Admin";
import Insureance from "@/components/pagesComponents/dashboard/superAdmin/insureance/Insureance";
import { cookies } from "next/headers";
const page = () => {
  const cookieStore = cookies();
  const currentUser = cookieStore.get("currentUser") || "";
  const { userType } = JSON.parse(currentUser.value || "{}");
  switch(userType) {

 
    case "admin":   return <Insureance_Admin/>;
    case "superadmin": return <Insureance />;
  

    default:      return <h1>No project match</h1>
  }
  return ;
};

export default page;
