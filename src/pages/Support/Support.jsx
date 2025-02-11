import React from "react";
import { FaPhone, FaEnvelope,FaUsers, FaShieldAlt, FaQuestionCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import FAQSection from "../../Components/FAQSection";

const Support = () => {
  return (
    <div className="bg-blue-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
    <section className="text-center py-20 bg-blue-500 text-white">
        <h1 className="text-5xl font-bold">Support & Assistance</h1>
        <p className="mt-4 text-lg">We are here to help you in the fight against corruption.</p>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 text-center">Support Center</h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mt-4">
          Need help? Explore the resources below or contact us directly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <FaPhone className="text-blue-600 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Contact Support</h3>
            <p className="mt-2 text-gray-600">Reach us via phone for immediate assistance.</p>
            <p className="font-bold text-blue-600 mt-2">+123 456 7890</p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <MdEmail className="text-blue-400 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Email Us</h3>
            <p className="mt-2 text-gray-600">Send us your queries, and we'll get back to you.</p>
            <p className="font-bold text-blue-600 mt-2">support@anticorruption.com</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <FaUsers className="text-blue-600 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Community Support</h3>
            <p className="mt-2 text-gray-600">Join discussions and collaborate with activists.</p>
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Join Now
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <FaShieldAlt className="text-blue-600 text-5xl mx-auto" />
          <h2 className="text-4xl font-bold text-blue-600 mt-4">Report an Issue</h2>
          <p className="mt-4 text-gray-700">
            If you have witnessed corruption, report it securely and anonymously.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Report Now
          </button>
        </div>
      </section>
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <FAQSection />
        </div>
      </section>
    </div>
  );
};

export default Support;
