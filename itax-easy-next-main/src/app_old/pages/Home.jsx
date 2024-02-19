"use client";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const token = process.env.NEXT_PUBLIC_WEB_TOKEN;
const BLAZ_URL = process.env.NEXT_PUBLIC_BLAZ_URL;
import styled from "styled-components";
import useWindowDimensions from "@/hooks/useWindowDimension";
// import useAuth from "@/hooks/useAuth.js";
import { _ } from "ag-grid-community";
// import Video from "../components/Video";
// import videoITR from "../../../public/ITR.mp4";
import Marquee from "react-fast-marquee";
import Typewriter from "typewriter-effect";
import Card from "../styles/cardStyles";
import { HoveringNavCard } from "../styles/navcardStyle";
import MaintenancePopup from "../helpers/maintenancePopup";

import { H1, H2, H3 } from "../components/pageLayouts/Headings.jsx";
import Link from "next/link";
import Image from "next/image";

const Para = styled.p`
  max-height: 100px;
  min-height: 100px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const StyledButtonLink =
  "cursor-pointer inline-block bg-blue-600 text-white mt-8 px-8 py-3 text-gray-500 rounded-md font-semibold text-sm";

function Home() {
  const [pageData, setPageData] = useState();
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allUsers, setAllUsers] = useState({});
  const [visitors, setVisitors] = useState(0);
  // const { height, width } = useWindowDimensions();
  const refs = useRef({});
  const cardRefs = useRef({});
  const containerRef = useRef();
  const currentRef = useRef();
  const activeNav = useRef(null);

  const handleScroll = () => {
    const y = window.scrollY;

    Object.entries(cardRefs.current).forEach(([name, card]) => {
      const navEl = refs.current[name];

      if (
        y >= containerRef.current?.offsetTop + card?.offsetTop &&
        currentRef.current !== navEl
      ) {
        navEl.classList.add("border-primary");
        currentRef.current?.classList.remove("border-primary");

        currentRef.current = navEl;
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    try {
      setLoading(true);
      const asynFunction = async () => {
        const homeResponse = await axios.get(`${BASE_URL}/cms/homescreen`);
        if (!homeResponse.data.success) {
          throw new Error("Network response was not ok");
        }
        const data = homeResponse.data.data.home;
        setPageData(data);
        setSections(data.navcards.map((element) => element.name));
        setLoading(false);
      };
      const countVisitors = async () => {
        const res = await fetch(`${BASE_URL}/visitorCount/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setVisitors(data.count);
      };
      countVisitors();
      asynFunction();
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // console.log("DATA",pageData)

  useEffect(() => {
    const getCmsStats = async () => {
      try {
        const res = await fetch(`${BASE_URL}/cms/stats`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        setAllUsers(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCmsStats();
  }, []);

  const [isPopupVisible, setPopupVisible] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      {loading ? (
        <div className="fixed h-screen w-screen bg-white flex items-center justify-center">
          <Image
            loading="eager"
            width={100}
            height={100}
            src="/loading.svg"
            alt="loading..."
            style={{ width: "100px" }}
          />
        </div>
      ) : (
        <div className="max-w-screen-2xl p-5 mx-auto">
          <Hero pageData={pageData} />

          <OurServices ourServicesCards={ourServicesCards} />

          <div ref={containerRef}>
            <div id="servicesNav" className="mt-10 ">
              <ul className="max-w-7xl mx-auto flex items-stretch justify-between overflow-hidden md:shadow-lg bg-zinc-200 md:rounded-full shadow rounded-full">
                {pageData.navcards.map((element) => {
                  return (
                    <HoveringNavCard
                      ref={(el) => (refs.current[element.name] = el)}
                      key={element.name}
                      id={"nav" + element.name}
                      onClick={() => {
                        const scrollDiv = document.getElementById(element.name);
                        scrollDiv.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                          inline: "center",
                        });
                        activeNav.current = scrollDiv;
                      }}
                      className="flex text-slate-900 items-center justify-center w-full my-2 mx-2 py-3 font-semibold text-center cursor-pointer transition-transform-all transform hover:scale-90 transition-colors duration-300 ease-in-out hover:bg-blue-500 hover:shadow-md rounded-full"
                    >
                      {element.name}
                    </HoveringNavCard>
                  );
                })}
              </ul>
            </div>

            <div
              id="servicesSection"
              className="max-w-6xl mx-auto md:pb-20 relative"
            >
              {pageData.navcards.map((element) => {
                let icon;
                let link;
                if (element.name === "GST" || element.name === "Audit") {
                  icon = "";
                  link = `${BLAZ_URL}`;
                } else {
                  icon = "";
                  link = "/blog";
                }

                return (
                  <div
                    ref={(el) => (cardRefs.current[element.name] = el)}
                    key={element.name}
                    className="relative"
                    id={element.name}
                  >
                    <h4 className="border-b my-2 text-slate-900 text-2xl font-semibold text-center mt-16 mb-10 flex-wrap">
                      {element.name}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10">
                      {element.cards.map((items) => (
                        <li
                          key={items.heading}
                          className="flex flex-col justify-between max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden border"
                        >
                          <div className="flex items-center px-5 text-lg py-2 bg-primary text-white font-semibold rounded-t-lg">
                            <img
                              alt={icon}
                              src={`/icons/home/${icon}`}
                              className="object-contain h-10"
                            />
                            <span className="ml-2">{items.heading}</span>
                          </div>
                          <p className=" max-h-[100px] overflow-hidden line-clamp-4 text-sm p-5 font-medium my-5 text-justify">
                            {items.content}
                          </p>
                          <div className="flex justify-end bg-zinc-100 px-5 gap-5 items-center">
                            <Link
                              href={"/"}
                              // href={link}
                              target="_blank"
                              className="py-2 link hover:text-primary"
                            >
                              Continue
                            </Link>
                            <Link
                              href="/blogs"
                              className="py-2 link hover:text-primary"
                            >
                              Read Me..
                            </Link>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mx-auto flex md:flex-row flex-col justify-between items-center py-32 md:py-20 my-5 overflow-hidden">
            <div className="sm:w-1/2  order-2 md:order-1 flex flex-col items-center justify-center">
              <h4 className="font-black text-sm md:text-2xl text-slate-600">
                Choose your right policy
              </h4>
              <h4 className="font-black text-xl md:text-3xl lg:text-justify text-slate-800 leading-snug pt-4">
                Protecting your future,
                <br /> One policy at a time.
              </h4>
              <div className="mt-4">
                <Link href="/insurance" className="btn-primary">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="sm:w-1/2 order-1 md:order-2">
              <img
                src="https://img.freepik.com/free-vector/father-shaking-hands-with-insurance-agent_74855-4412.jpg"
                alt="logo"
                className="object-contain w-52 md:w-96 mx-auto md:ml-auto"
              />
            </div>
          </div>

          <div className="mx-auto max-w-4xl flex md:flex-row flex-col items-center py-32 md:py-20 my-5 overflow-hidden">
            <div className="md:mr-auto">
              <img
                src="/images/home/phoneApp.jpg"
                alt="logo"
                className="object-contain w-full max-w-lg md:w-96 mx-auto md:ml-auto"
              />
            </div>
            <div className="mx-5 md:mx-0 mt-8 md:mt-0 text-center md:text-left md:ml-auto">
              <h4 className="font-black text-2xl md:text-4xl text-slate-800 leading-snug text-center">
                Visit here
              </h4>
              <h4 className="font-black text-2xl md:text-4xl text-slate-800 leading-snug text-center pt-4">
                File Your ITR In One Go
              </h4>
              <p className="font-semibold text-slate-900 mt-3 text-sm md:text-base text-center">
                Download ItaxEasy App For Better Tax Experience
              </p>
              <a href="" className="block mt-2">
                <img
                  src="/icons/home/google-play-badge.png"
                  alt="google-play-badge"
                  className="object-contain mx-auto h-16 w-60"
                />
                <p className="font-semibold text-slate-900 mt-3 text-sm md:text-base text-center">
                  Being Serviced
                </p>
              </a>
            </div>
          </div>

          <div className="container sm:gap-6 px-8 grid md:grid-cols-2 place-items-center">
            <img
              className=" w-full mb-4"
              src="/images/home/income-text.png"
              alt=""
            />

            <div className="grid gap-4 ">
              <h4 className="font-black text-2xl md:text-4xl text-slate-800 leading-snug">
                Income Tax
              </h4>
              <p className="font-medium mt-3 text-sm md:text-base text-justify grid grid-cols-1 gap-4">
                <span>
                  <strong className=" text-gray-600">
                    Determine Your Taxable Income:
                  </strong>{" "}
                  Your taxable income encompasses the money you earn in a given
                  year from all sources. Subtract any eligible deductions or
                  exemptions to arrive at this crucial figure. Various types of
                  income fall under the taxable category, including wages,
                  salaries, and investment returns.
                </span>
                <span>
                  <strong className=" text-gray-600">
                    Calculate Your Tax Liability:
                  </strong>{" "}
                  Armed with your taxable income, employ a tax calculator or
                  refer to a tax table to gauge the amount you owe. The precise
                  tax owed hinges on factors such as your income level and
                  filing status (single, married filing jointly, etc.).
                  Understanding these steps is pivotal in navigating the
                  intricacies of the income tax system.
                </span>
              </p>

              <div className="flex justify-center items-center">
                <Link href="/blogs" className="btn-primary">
                  Read more
                </Link>
              </div>
            </div>
          </div>

          <OngoingProjects ongoingProjects={ongoingProjects} />

          <h3 className="text-center text-slate-900 text-3xl md:text-4xl font-extrabold">
            Corporate Partners
          </h3>
          <Marquee gradientWidth={50} speed={40} pauseOnHover={true}>
            <div className="mx-auto py-12 mb-20">
              <div className="grid grid-cols-6 mt-8">
                {corporatePartners.map((element, i) => (
                  <div
                    key={element.label}
                    className="flex flex-col hover:shadow-lg hover:shadow-primary  w-60 shadow-md rounded-lg mx-8 items-center overflow-hidden border"
                  >
                    <div className="flex items-center py-5 h-48">
                      <img
                        alt="partners-logo"
                        src={`/images/home/partners/${element.img}`}
                      />
                    </div>
                    <div className="bg-zinc-100 w-full flex items-center px-5">
                      <span className="font-semibold text-sm mx-auto text-center py-3">
                        {element.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Marquee>

          <div>
            <h3 className="text-center text-slate-900 text-3xl md:text-4xl font-extrabold">
              User Insights
            </h3>
            <div className="flex flex-wrap gap-10 my-16 justify-center sm:justify-between ">
              <Card text={visitors} color="rgb(0, 85, 212)">
                Total Visitors
              </Card>
              <Card text={allUsers.totalUsers} color="rgb(0, 85, 212)">
                Total Active User
              </Card>
              <Card
                text={allUsers.totalPhoneNumbers}
                logo="logo"
                color="rgb(0, 85, 212)"
              >
                Total Phone Contacts
              </Card>
              <Card
                text={allUsers.totalEmails}
                logo="logo"
                color="rgb(0, 85, 212)"
              >
                Total Mailing Addresses
              </Card>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const ourServicesCards = [
  {
    heading: "For Individuals",
    items: [
      {
        icon: "itr.png",
        // link: "/itr-filling/personal-info",
        label: "Easy ITR",
        upcoming: true,
      },
      {
        icon: "itr.png",
        // link: `${BLAZ_URL}/form-16`,
        label: "Form-16",
        upcoming: true,
      },
      {
        icon: "invest.png",
        externalLink: `${BLAZ_URL}`,
        label: "Easy Investment",
      },
      {
        icon: "invoice.png",
        link: `/loan`,
        label: "Apply For Loan",
      },
    ],
  },
  {
    heading: "For Enterprises",
    items: [
      {
        icon: "itr.png",
        // link: "/itr-filling/personal-info",
        label: "Easy ITR",
        upcoming: true,
      },
      {
        icon: "gst.png",
        // externalLink: `${BLAZ_URL}/gst/gstr`,
        label: "Easy GSTR",
        upcoming: true,
      },
      {
        icon: "invoice.png",
        externalLink: `${BLAZ_URL}/invoice`,
        label: "Easy E-Invoice",
      },
      {
        icon: "graph.png",
        // externalLink: `${BLAZ_URL}`,
        label: "Easy Audit",
        upcoming: true,
      },
    ],
  },
  {
    heading: "For Tax Experts",
    items: [
      {
        icon: "itr.png",
        // link: "/itr-filling/personal-info",
        label: "Easy ITR",
        upcoming: true,
      },
      {
        icon: "gst.png",
        // externalLink: `${BLAZ_URL}/gst/gstr`,
        label: "Easy GSTR",
        upcoming: true,
      },
      {
        icon: "rupees.png",
        // link: `${BLAZ_URL}`,
        label: "Easy TDS",
        upcoming: true,
      },
      {
        icon: "graph.png",
        // externalLink: `${BLAZ_URL}`,
        label: "Easy Audit",
        upcoming: true,
      },
    ],
  },
  {
    heading: "For SMEs",
    items: [
      {
        icon: "itr.png",
        // link: "/itr-filling/personal-info",
        label: "Easy ITR",
        upcoming: true,
      },
      {
        icon: "gst.png",
        // externalLink: `${BLAZ_URL}/gst/gstr`,
        label: "Easy GSTR",
        upcoming: true,
      },
      {
        icon: "invoice.png",
        externalLink: `${BLAZ_URL}/invoice`,
        label: "Easy E-Invoice",
      },
      {
        icon: "graph.png",
        // externalLink: `${BLAZ_URL}`,
        label: "Easy Audit",
        upcoming: true,
      },
    ],
  },
];

const ongoingProjects = [
  {
    img: "build_the_future.png",
    label: "Build The Future",
  },
  {
    img: "homes.png",
    label: "Buy & Rent The House With Us",
  },
  {
    img: "buy_sell_cars.png",
    label: "Best Way To BUY/SELL Cars",
  },
  {
    img: "health.png",
    label: "Health Care Management Consultancy",
  },
  {
    img: "upcoming.webp",
    label: "Blaze",
  },
  {
    img: "upcoming.webp",
    label: "Accounts",
  },
  {
    img: "upcoming.webp",
    label: "Ninja Hosting",
  },
  {
    img: "upcoming.webp",
    label: "Block Chain",
  },
];

const corporatePartners = [
  {
    img: "lic.png",
    label: "Life Insurance Corporation of India (LIC)",
  },
  {
    img: "rbi.png",
    label: "Liability On Long-Term Capital Gains",
  },
  {
    img: "star.png",
    label: "Star Health And Allied Insurance Co Ltd",
  },
  {
    img: "yes.png",
    label: "YES Securities (India) Limited (YSL)",
  },
  {
    img: "bajajCapital.png",
    label: "Bajaj Capital",
  },
  {
    img: "iciciciHomeLogo.svg",
    label: "ICICICI Home Finance",
  },
];

function Hero(prop) {
  const { pageData } = prop;

  const [isPopupVisible, setPopupVisible] = useState(false);
  const showPopup = () => {
    setPopupVisible(true);
  };
  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-x-8 gap-y-8 my-24 lg:my-32 ">
      <div className=" lg:order-2 mx-auto max-w-lg ">
        {/* <Video src="/ITR.mp4" /> */}
        <img
          className="w-full"
          src="/Hero-ITR.gif"
          loading="eager"
          width={700}
          height={500}
          alt="ITR"
        />
      </div>
      <div className="lg:w-full lg:pl-16 lg:mx-0 mt-5 lg:mt-0 text-center lg:text-left">
        <h1 className="text-lg font-bold lg:text-3xl text-slate-800 leading-snug">
          <Typewriter
            options={{
              strings: [`${pageData.upper.mainHeading}`],
              autoStart: true,
              loop: true,
              changeDeleteSpeed: 3,
            }}
          />
        </h1>
        <p className="font-semibold text-slate-900 mt-3 text-sm lg:text-lg">
          {pageData.upper.subHeading}
        </p>

        <span onClick={showPopup} className={StyledButtonLink}>
          {pageData.upper.button}
        </span>
        {isPopupVisible && <MaintenancePopup closePopup={closePopup} />}
      </div>
    </div>
  );
}

function OurServices(prop) {
  const { ourServicesCards } = prop;
  return (
    <div className="mx-auto max-w-7xl py-10 ">
      <H2 className="justify-center">Our Services</H2>
      <ul className=" py-8 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  gap-4 gap-y-8 xl:gap-x-8">
        {ourServicesCards.map((element, i) => (
          <li
            key={`key ${element.name + " " + i}`}
            className="shadow-lg overflow-hidden p-8 lg:p-2 flex-grow flex-shrink-0"
          >
            <h4 className="rounded-lg text-center text-lg py-5 bg-primary text-white font-semibold">
              {element.heading}
            </h4>
            <div className="flex flex-col justify-between">
              {element.items.map((item) =>
                item.link ? (
                  <Link
                    key={item.label}
                    href={"/"}
                    className="flex gap-4  items-center py-3 px-3  hover:text-blue-600"
                    // href={item.link}
                  >
                    {console.log("item :", item)}
                    <img
                      alt={item.icon}
                      src={`/icons/home/services/${item.icon}`}
                      className="object-contain h-10"
                    />
                    <span className="font-semibold whitespace-nowrap ">
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <div
                    key={item.label}
                    target="_blank"
                    className="flex gap-4  relative rounded items-center py-3 px-3 hover:text-blue-600"
                  >
                    <img
                      alt={item.icon}
                      src={`/icons/home/services/${item.icon}`}
                      className="object-contain h-10"
                    />

                    <span className="font-semibold whitespace-nowrap">
                      {item.label} &nbsp;
                    </span>
                    {item.upcoming && (
                      <span className="tracking-tighter absolute  right-2 ml-auto text-xs text-blue-500 italic">
                        Upcoming
                      </span>
                    )}
                  </div>
                )
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OngoingProjects(prop) {
  const { ongoingProjects } = prop;
  return (
    <div className="max-w-7xl mx-auto py-20">
      <h3 className="text-center text-slate-900 text-3xl md:text-4xl font-extrabold">
        Ongoing Projects
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-8 mt-8">
        {ongoingProjects.map((element) => (
          <li key={element.label}>
            <div className="max-w-xs mx-auto hover:shadow-lg hover:shadow-primary  grid grid-rows-2  rounded-lg overflow-hidden  shadow-md border">
              <div className="row-span-2 m-auto  max-w-xs  h-48 grid place-items-center overflow-hidden">
                <img
                  className="object-contained "
                  alt="projects"
                  src={`/images/home/ongoing_projects/${element.img}`}
                />
              </div>
              <div className="row-span-1 bg-zinc-100flex items-center py-3 px-5">
                <span className="font-semibold text-sm mx-auto text-center">
                  {element.label}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
