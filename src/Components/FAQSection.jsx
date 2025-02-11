import React, { useState } from "react";
import {FaChevronDown,FaChevronUp} from "react-icons/fa";
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="bg-blue-50 dark:bg-gray-900 py-16 px-6">
    <div className="max-w-5xl mx-auto">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10">
        Find answers to common questions about reporting corruption, protecting your identity, and getting involved.
      </p>

      {/* FAQ Items */}
      <div className="space-y-6">
        {[
          {
            question: "How can I submit a complaint about corruption?",
            answer:
              "You can submit a complaint by logging into the platform, navigating to the 'Report Corruption' section, filling out the details, uploading any evidence, and submitting it. You’ll receive a tracking ID to monitor the progress in real time. Anonymity and confidentiality are ensured.",
          },
          {
            question: "Will submitting a complaint expose me to legal risks?",
            answer:
              "No, your identity is protected, and you can choose to file complaints anonymously. The platform ensures confidentiality and complies with legal standards to safeguard users.",
          },
          {
            question: "What happens to my complaint once it is submitted?",
            answer:
              "Once submitted, your complaint is securely logged into the system and assigned a unique tracking ID. It is reviewed by the relevant authorities or oversight teams for validation and investigation. You can track its progress in real time through the platform, and updates will be shared at each stage of the process.",
          },
          {
            question: "How does the platform handle false or malicious complaints?",
            answer:
              "The platform employs strict verification processes to identify false or malicious complaints. Each submission is reviewed for validity, and complaints lacking evidence or found to be intentionally misleading may be dismissed. Repeated false submissions can result in user restrictions to maintain the integrity of the system.",
          },
          {
            question: "How can citizens get involved in improving transparency beyond using the platform?",
            answer:
              "Citizens can raise awareness, join community programs, monitor public projects, engage with officials, and encourage others to report corruption. Collective action fosters accountability and transparency.",
          },
        ].map((faq, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <h3 className="text-lg font-semibold text-blue-600">
                {faq.question}
              </h3>
              {openFAQ === index ? (
                <FaChevronUp className="text-blue-600" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>

            {/* Answer */}
            {openFAQ === index && (
              <div className="mt-4 text-gray-700 dark:text-gray-300">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default FAQSection;
