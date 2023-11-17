import React from "react";

import SubmitBut from "../Button/submit";
const Form = () => {
  return (
    <>
      <div className="w-100 h-auto mt-8 mx-36 flex flex-row justify-between align-center mb-16" >
        <div className="w-3/5 h-100">
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className=" text-2xl mb-4 font-medium text-gray-600 inline-block"
            >
              Name
            </label>
            <br></br>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="w-3/5 p-2 border-2 mb-8 border-black opacity-90 border-opacity-20  rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-2xl mb-4 inline-block font-medium text-gray-600"
            >
              Email
            </label>
            <br></br>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              className="w-3/5 p-2 border-2 mb-8 border-black opacity-90 border-opacity-20  border-opacity-20  rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Subject Input */}
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="text-2xl mb-4  inline-block font-medium text-gray-600"
            >
              Subject
            </label>{" "}
            <br />
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject of your message"
              className="w-3/5 p-2 mb-8 border-2 border-black   border-opacity-20  rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="text-2xl mb-4 inline-block font-medium text-gray-600"
            >
              Message
            </label>{" "}
            <br />
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message here"
              className="w-3/5 p-2 border-2 border-black opacity-90 border-opacity-20  rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <SubmitBut />
        </div>

        <div className="w-2/5 bg-pink-100 object-cover object-center">
          <img
            src="public\img3.jpg"
            alt=""
            className="object-cover object-center"
          />
        </div>
      </div>
    </>
  );
};

export default Form;
