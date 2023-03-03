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
        <div className="flex mb-4">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col w-11/12">
              <label>メールアドレス</label>
              <input
                className="border border-current bg-gray-100"
                type="email"
                name="user_email"
                required
              />
            </div>
            <div className="flex flex-col w-11/12">
              <label>お名前</label>
              <input
                className="border border-current bg-gray-100"
                type="text"
                name="user_name"
                required
              />
            </div>
            <div className="flex flex-col w-11/12">
              <label htmlFor="subject">件名</label>
              <input
                className="border border-current bg-gray-100"
                name="subject"
                type="text"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message">本文</label>
            <input
              className="border border-current h-40 w-full bg-gray-100"
              name="message"
              required
            ></input>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center h-14 w-full bg-orange-400 border border-current rounded-full">
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
