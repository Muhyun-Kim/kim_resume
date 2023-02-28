import React, { useRef, useState } from "react";

function EmailForm() {
  const [input, setInput] = useState({
    sender: "",
    email: "",
    subject: "",
    message: "",
  });

  const senderRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      sender: senderRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-5/12">
          <label htmlFor="email">Email</label>
          <input
            className="border border-current bg-gray-100"
            id="email"
            type="email"
            ref={emailRef}
            required
          />
        </div>
        <div className="flex">
          <div className="flex flex-col w-5/12 mr-3">
            <label htmlFor="name">Name</label>
            <input
              className="border border-current bg-gray-100"
              id="name"
              type="text"
              ref={senderRef}
              required
            />
          </div>
          <div className="flex flex-col w-5/12">
            <label htmlFor="subject">Subject</label>
            <input
              className="border border-current bg-gray-100"
              id="subject"
              type="text"
              ref={subjectRef}
              required
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col w-5/12 mr-3">
            <label htmlFor="message">Message</label>
            <textarea
              className="border border-current h-40 bg-gray-100"
              id="message"
              ref={messageRef}
              required
            ></textarea>
          </div>
          <div className="flex justify-center w-5/12 mt-8">
            <div className="flex justify-centerw h-40 w-40 bg-orange-400 border border-current rounded-full">
              <button type="submit" className="w-full text-2xl font-black">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default EmailForm;
