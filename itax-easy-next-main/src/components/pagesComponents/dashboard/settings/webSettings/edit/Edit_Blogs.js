"use client";
import Section from "@/components/pagesComponents/pageLayout/Section";
import { H5 } from "@/components/pagesComponents/pageLayout/Headings";
import Pagination from "@/components/navigation/Pagination";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import userAxios from "@/lib/userAxios";
function Item_edit(props) {
  const { title, overview, date } = props;
  return (
    <li className=" shadow-md shadow-primary/20 rounded-md p-4 bg-bg_1/70">
      <div className="flex ">
        <div className="flex-1">
          <div className="text-txt text-xl font-semibold self-center">
            {title}
          </div>
          <p className="text-txt/90">{overview}</p>
        </div>
        <div className="grid place-content-between gap-2">
          <div
            className="border border-blue-600 rounded-md p-1 text-xl hover:text-blue-500"
            title="edit"
          >
            <Icon icon="material-symbols:edit-outline" />
          </div>
          <div
            className="border border-red-600 rounded-md p-1 text-xl hover:text-red-600"
            title="delete"
          >
            <Icon icon="material-symbols:delete-outline" />
          </div>
        </div>
      </div>
      <div className=" relative top-2 italic text-sm text-txt/40">{date}</div>
    </li>
  );
}

export default function Edit_Blogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");
  const [blogList, setBlogList] = useState([]);
  const { register, handleSubmit, watch, formState, trigger, getValues } =
    useForm();
  const totalPages = 14;
  const CratePost = () => {
    const URL = "/blog/posts";
    console.log("slected img", selectedImage);
    const formData = new FormData();
    formData.append("title", getValues("title"));
    formData.append("contentheading", getValues("contentheading"));
    formData.append("contentdiscription", getValues("contentdiscription"));
    formData.append("category", getValues("category"));
    formData.append("imageUrl", selectedImage);

    console.log("form,daata", formData);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    userAxios
      .post(URL, formData, config)
      .then(function (response) {
        toast("Added Successfully", {
          type: "success",
        });
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
        // console.log("errr", response.data);
      });
  };

  useEffect(() => {
    userAxios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/posts`)
      .then(function (response) {
        // console.log("direact list", response.data.data.posts);
        setBlogList(response.data.data.posts);
      })
      .catch(function (error) {
        console.log(error);
        console.log("errr", response.data);
      });
  }, []);
  return (
    <>
      {/* <H5 className=" mt-12">Edit Blogs</H5> */}

      <div className="p-4 bg-white border border-gray-200  shadow-sm dark:bg-gray-700 dark:border-gray-600">
        <form className="max-w-lg mx-auto " onSubmit={handleSubmit(CratePost)}>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="enter title"
                required
                {...register("title")}
              />
            </div>
            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Contnet Heading
              </label>
              <input
                type="text"
                id="heading"
                placeholder="enter heading title"
                {...register("contentheading")}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>
            <div className="mb-2 col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Contnet Description
              </label>
              <textarea
                type="text"
                id="password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
                {...register("contentdiscription")}
              />
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an Category
              </label>
              <select
                id="countries"
                {...register("category")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Account & Audit</option>
                <option value="companylaw">Company Law</option>
                <option value="competitionlaw">Competition Law</option>
                <option value="fema&banking">FEMA & Banking</option>
                <option value="gst&customs">Gst & Customs</option>
                <option value="incometax">Income Tax</option>
                <option value="indinacts">Indian Acts</option>
                <option value="nsolvencyandbankeuptcy">
                  Insolvency and Bankeuptcy
                </option>
                <option value="nternationaltax">International Tax</option>
                <option value="labour&industriallaws">
                  Labour & Industrial Laws
                </option>
                <option value="otherlaws">Other Laws</option>
                <option value="transferpricing">Transfer Pricing</option>
              </select>
            </div>

            <div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="default_size"
                >
                  Upload Image
                </label>
                <input
                  className="block w-full my-3 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="default_size"
                  type="file"
                  onChange={(event) => {
                    // console.log(event.target.value);
                    setSelectedImage(event.target.files[0]);
                  }}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Post
          </button>
        </form>
      </div>

      <Section>
        <ul className="px-2 py-4 grid gap-4">
          {blogList?.map((blog, index) => {
            return (
              <>
                <Item_edit
                  key={index}
                  title={blog.title}
                  overview={blog.contentdiscription}
                  date={blog.updatedAt}
                />
              </>
            );
          })}
        </ul>
      </Section>
      <div className="flex p-6">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
}
