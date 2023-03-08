import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function EmailForm() {
  const form = React.useRef(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_SERVICE_TEMPLATE_ID,
        e.currentTarget,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex justify-between mb-4 max-md:flex-col">
          <div className="flex flex-col justify-between md:w-5/12">
            <div className="flex flex-col">
              <label>メールアドレス</label>
              <input
                className="border border-current bg-gray-100"
                type="email"
                name="user_email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label>お名前</label>
              <input
                className="border border-current bg-gray-100"
                type="text"
                name="user_name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject">件名</label>
              <input
                className="border border-current bg-gray-100"
                name="subject"
                type="text"
                required
              />
            </div>
          </div>
          <div className="md:w-6/12">
            <label htmlFor="message">本文</label>
            <input
              className="border border-current h-40 w-full bg-gray-100 max-md:w-11/12"
              name="message"
              required
            ></input>
          </div>
        </div>
        <div className="flex justify-center max-md:justify-start">
          <div className="flex justify-center h-14 w-full bg-orange-400 border border-current rounded-full max-md:w-11/12">
            <input
              type="submit"
              value="Submit"
              className="w-full text-2xl font-black"
            ></input>
          </div>
        </div>
      </form>
    </>
  );
}

export default EmailForm;
