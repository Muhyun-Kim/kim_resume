import React from "react";
import EmailForm from "../Components/EmailForm";
import PageTitle from "../Components/PageTitle";

function Contact() {
  return (
    <>
      <div className="flex flex-col items-center w-11/12 my-32 max-md:my-16">
        <PageTitle title="Contact" />
        <div className="flex mt-2 px-20 w-full max-md:flex-col max-md:p-0">
          <div className="w-1/2 max-md:w-full">
            <p>ご連絡をお待ちしております。</p>
            <div className="flex flex-col mt-8">
              <p className=" text-xl font-bold">Line</p>
              <p>kmh030369</p>
            </div>
            <div className="flex flex-col mt-8">
              <p className=" text-xl font-bold">Email</p>
              <p>muhyun.kim.dev@gmail.com</p>
            </div>
          </div>
          <div className="w-1/2 max-md:w-full max-md:mt-8">
            <EmailForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
