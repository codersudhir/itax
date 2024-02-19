import Image from "next/image";
export default function InvoiceTemplate_2(props) {
	const { data } = props;
    // console.log(data)

	return (
            <>
                <div>
                    <Image
                        width={50}
                        height={50}
                        src="/logo.png"
                        alt="itaxeasy"
                    />
                    <h1 className="mt-2 text-lg md:text-xl font-semibold text-blue-600 dark:text-white">
                        ItaxEasy
                    </h1>
                </div>
                <div className="flex justify-between items-center">
                    {/* <h1 className="heading-4 uppercase">{data?.type == "sales"?"sale":"purchase"} bill</h1> */}
                    <div className="uppercase text-2xl font-medium text-neutral-700/50">original receipt</div>
                </div>
                <div className="border-2 border-neutral-900/10 m-4">
                    <div>
                        <table>
                            <thead>
                                <tr className="[&>th]:py-4 border-b divide-x-2">
                                    <th colSpan="7">
                                        <div>Sample</div>
                                    </th>
                                    <th colSpan="7">
                                        <div className="flex justify-between">
                                            <span>Invoice No :</span>
                                            <span>Invoice Date :</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <thead>
                                <tr className="[&>td]:py-4 border-b">
                                    <td colSpan="14">
                                        <div className="flex justify-start p-2">
                                            Billing And Shipping Address
                                        </div>
                                    </td>
                                </tr>
                            </thead>
                            <thead>
                                <tr className="[&>th]:p-2 [&>th]:border-l [&>th]:border-r border-b">
                                    <th colSpan="1">S.NO.</th>
                                    <th colSpan="5">ITEMS</th>
                                    <th colSpan="2">QTY.</th>
                                    <th colSpan="3">RATE/UNIT</th>
                                    <th colSpan="3">AMOUNT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="[&>td]:p-2 border-b">
                                    <td colSpan="1">1</td>
                                    <td colSpan="5">1</td>
                                    <td colSpan="2">1</td>
                                    <td colSpan="3">1</td>
                                    <td colSpan="3">1</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr className="[&>td]:p-2 [&>td]:border-l [&>td]:border-r border-b">
                                    <td colSpan="6">TOTAL</td>
                                    <td colSpan="2">0</td>
                                    <td colSpan="3">0</td>
                                    <td colSpan="3">200</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="p-2">
                        <div className="font-medium">Total Amount (in words):</div>
                        <div className="text-sm">Two Thousand rupees</div>
                    </div>
                </div>
            </>
	);
}