"use client";
import { useEffect, useState } from "react";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import Image from "next/image";
import Link from "next/link";
import userAxios from "@/lib/userAxios";

const filterOptions = (data) => {
  const reg = data.filter((item) => item.categories === "registration");
  let com = data.filter((item) => item.categories === "company registration");
  let ret = data.filter((item) => item.categories === "returns");
  let aud = data.filter((item) => item.categories === "audits");

  return [
    {
      title: "Registration",
      items: reg,
    },
    {
      title: "Company registration",
      items: com,
    },
    {
      title: "returns",
      items: ret,
    },
    {
      title: "audits",
      items: aud,
    },
  ];
};
function OptionsNav({ startupData, handleActive, active }) {
  // console.log("OPTIONSHOW", startupData);
  return (
    <div>
      <ul className=" max-w-6xl mx-auto relative z-0 rounded-lg shadow divide-x divide-gray-200 grid grid-cols-2 lg:grid-cols-4">
        {startupData.map((item, index) => (
          <li
            key={index}
            className="min-w-0 flex-1 p-2 bg-white text-center focus:z-10"
          >
            <button
              onClick={() => handleActive(index)}
              className={`${
                index === active ? "btn-primary" : "btn-light "
              } text-lg font-semibold capitalize w-full h-full text-nowrap `}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
function ActiveSection({ startupData, active }) {
  const activeTabData = startupData[active];

  return (
    <div className="container 2xl:max-w-6xl mx-auto py-4">
      <h3 class="mt-2 text-4xl font-semibold leading-7 text-gray-900 text-center">
        {activeTabData?.title}
      </h3>
      <ul className="mt-4 px-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {activeTabData?.items.map((item, index) => (
          // console.log(
          //   "activedata",
          //   // `${process.env.NEXT_PUBLIC_BASE_URL}/${item.image}`
          // )
          <li
            key={index}
            className="shadow-md grid gap-2 bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg"
          >
            <div className=" p-4 shadow-sm shadow-blue-500 aspect-video rounded-lg overflow-hidden grid place-content-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/${item.image}`}
                alt={"itaxeasy"}
                width={280}
                height={280}
              />
            </div>
            <div className="text-xl font-medium">{item.title}</div>
            {/* <div className="text-sm text-gray-500">{item.description}</div> */}
            <Link href={`/register-startup/`}>
              <button className="btn-primary">View Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default function RegisterStartup() {
  const [startupData, setStartupData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const [active, setActive] = useState(0);
  const handleActive = (e) => {
    setIsLoading(true);
    setActive(e);
    setIsLoading(false);
  };
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        let response = await userAxios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/startup/getAll`
        );
        console.log(response);
        setStartupData(filterOptions(response.data.AllStartup));
      } catch (error) {
        setIsError(true);
        setError(error);
        setIsLoading(false);
      }
      setIsLoading(false);
    })();
  }, []);
  if (isError) {
    return (
      <div className="container 2xl:max-w-6xl mx-auto py-4 min-h-screen">
        <h3 class="mt-2 text-4xl font-semibold leading-7 text-gray-900 text-center">
          {error.message}
        </h3>
      </div>
    );
  }
  return (
    <div className="mt-2 mb-24">
      <OptionsNav
        handleActive={handleActive}
        startupData={startupData}
        active={active}
      />
      {isLoading && (
        <div className="container 2xl:max-w-6xl mx-auto py-4 min-h-screen">
          <h3 class="mt-2 text-4xl font-semibold leading-7 text-gray-900 text-center">
            Loading...
          </h3>
        </div>
      )}
      <ActiveSection active={active} startupData={startupData} />
    </div>
  );
}
