import React from "react";
import EmailForm from "../Components/EmailForm";
import PageTitle from "../Components/PageTitle";

function Contact() {
  return (
    <>
      <div className="flex flex-col items-center w-11/12 my-32">
        <PageTitle title="Contact" />
        <div className="flex mt-2 px-20 w-full">
          <div className="w-1/2">
            <p>ご連絡をお待ちしております。</p>
            <div className="flex flex-col mt-8">
              <p className=" text-xl font-bold">Phone</p>
              <p>080-8858-2858</p>
            </div>
            <div className="flex flex-col mt-8">
              <p className=" text-xl font-bold">Email</p>
              <p>muhyun.kim.dev@gmail.com</p>
            </div>
          </div>
          <div className="w-1/2">
            <EmailForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
