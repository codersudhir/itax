"use client"
import ErrorComponent from "@/components/partials/error/ErrorComponent";
export default function error(props) {
	return (
		<ErrorComponent
			type={""}
			info={"something went Wrong"}
			message={props.error.message}
		/>
	);
}
