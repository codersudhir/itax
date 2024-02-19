import { redirect , notFound } from "next/navigation";
import { cookies } from "next/headers";
export default function PrivateRoute(props) {
	const cookieStore = cookies();
	const currentUser = cookieStore.get("currentUser") || "";
	const { userType } = JSON.parse(currentUser.value || "{}");
	const { Normal, Admin, SuperAdmin } = props;
	let Component;
	switch (userType) {
		case "normal":
			Component = Normal;
			break;
		case "admin":
			Component = Admin;
			break;
		case "superadmin":
			Component = SuperAdmin;
			break;
		default:
			redirect("/login");
			return null;
	}
	if (!Component) {
        notFound()
	}
	return <Component />;
}
