import React, { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl text-center dark:text-white">FAQ's</h1>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <div>
          {/* FAQ Items */}
          {[
            {
              question: "How can I submit a complaint about corruption?",
              answer:
                "You can submit a complaint by logging into the platform, navigating to the 'Report Corruption' section, filling out the details, uploading any evidence, and submitting it. You’ll receive a tracking ID to monitor the progress in real time. Anonymity and confidentiality are ensured.",
            },
            {
              question: "Will submitting a complaint expose me to legal risks?",
              answer: "No, your identity is protected, and you can choose to file complaints anonymously. The platform ensures confidentiality and complies with legal standards to safeguard users.",
            },
            {
              question: "What happens to my complaint once it is submitted?",
              answer: "Once submitted, your complaint is securely logged into the system and assigned a unique tracking ID. It is reviewed by the relevant authorities or oversight teams for validation and investigation. You can track its progress in real time through the platform, and updates will be shared at each stage of the process.",
            },
            {
              question: "How does the platform handle false or malicious complaints?",
              answer: "The platform employs strict verification processes to identify false or malicious complaints. Each submission is reviewed for validity, and complaints lacking evidence or found to be intentionally misleading may be dismissed. Repeated false submissions can result in user restrictions to maintain the integrity of the system.",
            },
            {
              question: "How can citizens get involved in improving transparency beyond using the platform?",
              answer: "Citizens can raise awareness, join community programs, monitor public projects, engage with officials, and encourage others to report corruption. Collective action fosters accountability and transparency.",
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
