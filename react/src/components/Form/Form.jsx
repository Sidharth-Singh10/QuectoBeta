import React from "react";

const Form = () => {
  return (
    <>
      <div className="w-100 h-auto mt-8 mx-36 flex flex-row justify-between align-center ">
        <div className="w-3/5 h-100">
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className=" text-3xl mb-6 font-medium text-gray-600 inline-block"
            >
              Name
            </label>
            <br></br>
            <input
              type="text"
              id="name"
              name="name"
              className="w-3/5 p-2 border-2 border-black opacity-20 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-3xl mb-6 inline-block font-medium text-gray-600"
            >
              Email
            </label>
            <br></br>
            <input
              type="email"
              id="email"
              name="email"
              className="w-3/5 p-2 border-2 border-black opacity-20  rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Subject Input */}
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="text-3xl mb-6  inline-block font-medium text-gray-600"
            >
              Subject
            </label>{" "}
            <br />
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-3/5 p-2  border-2 border-black opacity-20  rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="text-3xl mb-6 inline-block font-medium text-gray-600"
            >
              Message
            </label>{" "}
            <br />
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-3/5 p-2 border-2 border-black opacity-20  rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-start mt-14 align-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-12 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue "
            >
              Submit
            </button>
          </div>
        </div>

        <div className="w-2/5 bg-pink-100 object-cover object-center">
          <img
            src="public\img2.jpg"
            alt=""
            className="object-cover object-center"
          />
        </div>
      </div>
    </>
  );
};

export default Form;
