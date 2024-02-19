import { Icon } from "@iconify/react";
import { useRouter,usePathname } from 'next/navigation';

export default function BackButton({ props }) {
    const router = useRouter()
    const pathname = usePathname();

    const pathnames = pathname.split('/').filter(Boolean);
    let lastElement = pathnames.pop();
        
	return (
		<div className="text-gray-800 dark:text-gray-200 font-semibold max-w-7xl mx-auto flex items-center gap-2 p-2 border-y border-gray-200 dark:border-gray-700">
			<button onClick={() => router.back()} {...props}>
				<Icon icon="ph:arrow-left-bold" className="w-6 h-6" />
			</button>
			<h1 className="uppercase">{lastElement}</h1>
		</div>
	);
}
