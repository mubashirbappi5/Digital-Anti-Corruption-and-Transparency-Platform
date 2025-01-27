import React, { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">FAQ's</h1>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <div>
          {/* FAQ Items */}
          {[
            {
              question: "How can I pay for my appointment?",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
            },
            {
              question: "What can I expect at my first consultation?",
              answer: "You can expect a detailed discussion of your issues and a plan tailored to your needs.",
            },
            {
              question: "What are your opening hours?",
              answer: "We are open Monday to Friday, 9 AM to 5 PM.",
            },
            {
              question: "Do I need a referral?",
              answer: "Referrals are not mandatory but can be helpful for certain services.",
            },
            {
              question: "Is the cost of the appointment covered by private health insurance?",
              answer: "Yes, most private health insurance providers cover the cost of our services.",
            },
          ].map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`flex-shrink-0 w-6 h-6 text-blue-500 transform ${
                    openFAQ === index ? "rotate-90" : ""
                  } transition-transform`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                <h1 className="mx-4 text-xl text-gray-700 dark:text-white">{faq.question}</h1>
              </button>
              {openFAQ === index && (
                <div className="flex mt-4 md:mx-10">
                  <span className="border border-blue-500"></span>
                  <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}
              <hr className="my-8 border-gray-200 dark:border-gray-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
