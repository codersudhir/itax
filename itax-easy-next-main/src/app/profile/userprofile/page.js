"use client";
import userAxios from "@/lib/userAxios";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const UserProfile = () => {
  const [data, setData] = useState("");
  const [editable, setEditable] = useState(false);
  const { register, handleSubmit, getValues, setValue } = useForm();
  useEffect(() => {
    userAxios
      .get(`/user/profile`)
      .then(function (response) {
        console.log(response.data.data.user);
        setData(response.data.data.user);

        // setBusinessProfileResponse(response.data.data.profile);
        // setCreateBusiness(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const handleeditbutton = () => {
    setEditable(!editable);
  };
  const handlUpdatebutton = async () => {
    console.log(
      "handle value",
      getValues("firstName"),
      getValues("lastName"),
      getValues("mobile")
    );
    try {
      await userAxios.post("/user/update", {
        firstName: getValues("fName"),
        lastName: getValues("lName"),
        phone: getValues("mobile"),
        gender: "male",
        address: getValues("address"),
        aadhaar: getValues("aadhaar"),
        pan: getValues("pan"),
        pin: "",
      });
    } catch (error) {
      console.log(error);
    }

    setEditable(!editable);
  };
  return (
    <div className="grid  my-6 gap-4 grid-cols-1 lg:grid-cols-2">
      <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto  bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-32 overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          {/* <img
            className="object-cover object-center h-32"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Woman looking front"
          /> */}
          <Icon
            className="text-9xl bg-neutral-50 text-neutral-950 rounded-xl p-2 sm:p-6"
            icon="mdi:user"
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="font-semibold">
            {data.firstName} {data.lastName}
          </h2>
          <p className="text-gray-500">{data.email}</p>
        </div>
        <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
          <li className="flex flex-col items-center justify-around">
            <svg
              class="w-4 h-4 me-2 mt-5 text-green-500 dark:text-green-400 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <div>Aadhaar</div>
          </li>
          <li className="flex flex-col items-center justify-between">
            <svg
              class="w-4 h-4 me-2 mt-5 text-green-500 dark:text-green-400 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <div>Pan</div>
          </li>
          <li className="flex flex-col items-center justify-around">
            <svg
              class="w-4 h-4 me-2 mt-5 text-green-500 dark:text-green-400 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <div>Business Profile</div>
          </li>
        </ul>
        <div className="p-4 border-t mx-8 mt-2">
          {!editable && (
            <button
              onClick={handleeditbutton}
              className="w-1/2 block mx-auto rounded-full bg-primary hover:shadow-lg font-semibold text-white px-6 py-2"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
      <div className="max-w-lg px-5">
        <div className="rounded-md border mb-4 bg-gray-50  ">
          <label
            htmlFor="upload"
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 fill-white stroke-primary"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-gray-600 font-medium">Upload Pan Card </span>
          </label>
          <input id="upload" type="file" className="hidden" />
        </div>
        {/* <hr class="mt-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" /> */}

        <form
          className="w-full max-w-lg"
          onSubmit={handleSubmit(handlUpdatebutton)}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
              </label>
              {editable ? (
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="fName"
                  type="text"
                  placeholder="first name"
                  {...register("fName")}
                />
              ) : (
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="first-name"
                  type="text"
                  value={data.firstName}
                  placeholder="first name"
                />
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Last Name
              </label>
              {editable ? (
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="lName"
                  type="text"
                  placeholder="last name"
                  {...register("lName")}
                />
              ) : (
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="last-name"
                  type="text"
                  value={data.lastName}
                  placeholder="Last Name"
                />
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email
              </label>
              {editable ? (
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  placeholder="email"
                  {...register("email")}
                />
              ) : (
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  value={data.email}
                  placeholder="email"
                />
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Mobile No.
              </label>
              {editable ? (
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="mobile"
                  type="text"
                  placeholder="mobile no."
                  {...register("mobile")}
                />
              ) : (
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="mobile"
                  type="text"
                  value={data.phone}
                  placeholder="mobile no."
                />
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Aadhaar
              </label>
              {editable ? (
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="aadhaar"
                  type="text"
                  placeholder="aadhaar"
                  {...register("aadhaar")}
                />
              ) : (
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="aadhaar"
                  type="text"
                  placeholder="aadhaar"
                  value={data.aadhaar}
                />
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Pan
              </label>
              {editable ? (
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="gpan"
                  type="text"
                  placeholder="pan"
                  {...register("pan")}
                />
              ) : (
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="gpan"
                  type="text"
                  placeholder="pan"
                  value={data.pan}
                />
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              {editable ? (
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="address"
                  type="text"
                  placeholder="address"
                  {...register("address")}
                />
              ) : (
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="address"
                  type="text"
                  placeholder="address"
                  value={data.address}
                />
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Gender
              </label>
              {editable ? (
                <select
                  {...register("gender")}
                  id="gender"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected value="male">
                    Male
                  </option>
                  <option value="female">Female</option>
                </select>
              ) : (
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="address"
                  type="text"
                  value={data.gender}
                />
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-7 ">
            {editable && (
              <>
                <div className="flex ">
                  <button
                    className="btn-primary mx-4"
                    onClick={handleeditbutton}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="btn-primary">
                    Save
                  </button>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
