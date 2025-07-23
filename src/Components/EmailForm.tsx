import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faCheck, faExclamationTriangle, faSpinner } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

enum SubmitStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

function EmailForm() {
  const form = useRef<HTMLFormElement>(null);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(SubmitStatus.IDLE);
  const [message, setMessage] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(SubmitStatus.LOADING);

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
        process.env.REACT_APP_EMAILJS_SERVICE_TEMPLATE_ID || '',
        e.currentTarget,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ''
      );
      
      setSubmitStatus(SubmitStatus.SUCCESS);
      setMessage("メッセージが正常に送信されました。ご連絡いただき、ありがとうございます！");
      
      // Reset form
      if (form.current) {
        form.current.reset();
      }
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(SubmitStatus.IDLE);
        setMessage("");
      }, 5000);
      
    } catch (error) {
      setSubmitStatus(SubmitStatus.ERROR);
      setMessage("メッセージの送信に失敗しました。もう一度お試しください。");
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(SubmitStatus.IDLE);
        setMessage("");
      }, 5000);
    }
  };

  const getSubmitButtonContent = () => {
    switch (submitStatus) {
      case SubmitStatus.LOADING:
        return (
          <>
            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
            送信中...
          </>
        );
      case SubmitStatus.SUCCESS:
        return (
          <>
            <FontAwesomeIcon icon={faCheck} />
            送信完了
          </>
        );
      case SubmitStatus.ERROR:
        return (
          <>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            再試行
          </>
        );
      default:
        return (
          <>
            <FontAwesomeIcon icon={faPaperPlane} />
            送信する
          </>
        );
    }
  };

  const getSubmitButtonClass = () => {
    switch (submitStatus) {
      case SubmitStatus.LOADING:
        return "btn-primary opacity-75 cursor-not-allowed";
      case SubmitStatus.SUCCESS:
        return "bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300";
      case SubmitStatus.ERROR:
        return "bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300";
      default:
        return "btn-primary";
    }
  };

  return (
    <div className="bg-white dark:bg-dark-card rounded-2xl shadow-soft p-8">
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                メールアドレス *
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                お名前 *
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="山田太郎"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                件名 *
              </label>
              <input
                type="text"
                name="subject"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="お問い合わせ内容"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              本文 *
            </label>
            <textarea
              name="message"
              required
              rows={8}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
              placeholder="メッセージをここに入力してください..."
            />
          </div>
        </div>

        {/* Status Message */}
        {message && (
          <div
            className={`p-4 rounded-lg ${
              submitStatus === SubmitStatus.SUCCESS
                ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-700"
                : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-700"
            }`}
          >
            <p className="text-sm">{message}</p>
          </div>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={submitStatus === SubmitStatus.LOADING}
            className={`inline-flex items-center gap-2 ${getSubmitButtonClass()}`}
          >
            {getSubmitButtonContent()}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmailForm;
