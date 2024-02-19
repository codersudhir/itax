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
  const { title, overview, ID } = props;

  const DeleteStartups = (ID) => {
    userAxios
      .delete(`/startup/delete/${ID}`)
      .then(function (response) {
        toast("Delete Successfully", {
          type: "success",
        });
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
        // console.log("errr", response.data);
      });
  };

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
            <Icon
              className="cursor-pointer"
              icon="material-symbols:delete-outline"
              onClick={() => DeleteStartups(ID)}
            />
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Edit_Startups() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");
  const [startupsList, setStartupsList] = useState([]);
  const { register, handleSubmit, watch, formState, trigger, getValues } =
    useForm();
  const totalPages = 14;
  const CrateStartups = () => {
    const URL = "/startup/register";
    console.log("slected img", selectedImage);
    const formData = new FormData();
    formData.append("title", getValues("title"));
    formData.append("categories", getValues("categories"));
    formData.append("image", selectedImage);

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
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/startup/getAll`)
      .then(function (response) {
        // console.log("direact list", response.data.data.posts);
        setStartupsList(response.data.AllStartup);
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
        <form
          className="max-w-lg mx-auto "
          onSubmit={handleSubmit(CrateStartups)}
        >
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

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select an Category
              </label>
              <select
                {...register("categories")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected value={"registration"}>
                  Registration
                </option>
                <option value="company registration">
                  Company Registration
                </option>
                <option value="returns">Returns</option>
                <option value="audits">Audits</option>
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
            Add Startup
          </button>
        </form>
      </div>

      <Section>
        <ul className="px-2 py-4 grid gap-4">
          {startupsList?.map((blog, index) => {
            return (
              <>
                <Item_edit
                  key={index}
                  title={blog.title}
                  overview={blog.categories}
                  ID={blog.id}
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
