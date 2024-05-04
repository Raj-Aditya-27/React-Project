import React from "react";
import Button from "./Button";

function Contact() {
  return (
    <>
      <main className="w-screen flex flex-col h-[90vh]  items-start justify-center px-36 overflow-hidden pt-20 leading-7">
        <h1 className="font-extrabold text-5xl ">CONTACT US</h1>
        <p className="w-[975px] font-semibold text-gray-500">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
        <div className="flex mt-4 w-full  ">
          <div>
            <div className="flex flex-col  h-[100px] justify-between">
              <div className="flex gap-2">
                <Button
                  colors="black"
                  text="VIA SUPPORT CHAT"
                  textColor="white"
                />
                <Button colors="black" text="VIA CALL" textColor="white" />
              </div>
              <button className="w-full border-2 rounded text-bold">
                VIA EMAIL FORM
              </button>
            </div>
            <div className="flex flex-col  h-[329px] px-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-2 rounded"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="border-2 rounded"
              />
              <label htmlFor="text-message">Text</label>
              <textarea
                name="text-message"
                id="text-message"
                cols="30"
                rows="2"
                className="border-2 rounded"
              ></textarea>
              <div className="flex w-full justify-end mt-2">
                <Button text="Submit" colors="black" textColor="white"/>
              </div>
            </div>
          </div>
          <div className="w-[608px] flex justify-center">
            <img
              src="../../public/images/service.jpg"
              alt="service"
              className="h-[300px] object-contain"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
