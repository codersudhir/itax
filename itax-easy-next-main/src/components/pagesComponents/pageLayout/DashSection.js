export default function DashSection(props) {
    const{title="",titleRight="",className="",children=""}=props
    return (
        <section className={`${className} shadow-md rounded-xl shadow-blue-200 mx-auto w-[calc(100%-1rem)] max-w-7xl py-4`}>
            <div className="capitalize flex justify-between flex-wrap items-center">
                <h2 className="px-4 border-l-4 border-l-blue-500 text-neutral-700 text-xl leading-10 font-medium">
                    {title}
                </h2>
                <div className="px-6 text-neutral-500 font-semibold">{titleRight}</div>
            </div>
            {children}
        </section>
    )

}