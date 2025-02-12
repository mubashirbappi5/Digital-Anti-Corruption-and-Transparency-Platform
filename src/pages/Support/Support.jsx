import React from "react";
import { FaPhone, FaEnvelope, FaUsers, FaShieldAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { VscReport } from "react-icons/vsc";
import FAQSection from "../../Components/FAQSection";

const Support = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-200">
      {/* Hero Section */}
      <section className="relative text-center py-24 bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-lg">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">
          Support & Assistance
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto drop-shadow-md">
          We are here to help you in the fight against corruption.
        </p>
        <div className="absolute inset-0 bg-white opacity-5 blur-3xl rounded-full w-96 h-96 top-[-50px] left-[-100px]"></div>
      </section>

      {/* Support Center */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 text-center">
          Support Center
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mt-4">
          Need help? Explore the resources below or contact us directly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {/* Contact Support */}
          <div className="support-card">
            <FaPhone className="text-blue-600 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Contact Support</h3>
            <p className="mt-2 text-gray-600">
              Reach us via phone for immediate assistance.
            </p>
            <p className="font-bold text-blue-600 mt-2">
              +88 01304-186131 <br /> +88 01851-516736
            </p>
          </div>

          {/* Email Us */}
          <div className="support-card">
            <MdEmail className="text-blue-400 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Email Us</h3>
            <p className="mt-2 text-gray-600">
              Send us your queries, and we'll get back to you.
            </p>
            <p className="font-bold text-blue-600 mt-2">
              support@anticorruption.com
            </p>
          </div>

          {/* Community Support */}
          <div className="support-card">
            <FaUsers className="text-blue-600 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Community Support</h3>
            <p className="mt-2 text-gray-600">
              Join discussions and collaborate with activists.
            </p>
            <button className="btn-primary mt-4">Join Now</button>
          </div>

          {/* Report Issue */}
          <div className="support-card">
            <VscReport className="text-blue-600 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Report Message</h3>
            <p className="mt-2 text-gray-600">
              Take a stand against corruption and make a difference.
            </p>
            <button className="btn-primary mt-4">Report</button>
          </div>
        </div>
      </section>

      {/* Report an Issue */}
      <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <FaShieldAlt className="text-blue-600 text-5xl mx-auto" />
          <h2 className="text-4xl font-bold text-blue-600 mt-4">
            Report an Issue
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            If you have witnessed corruption, report it securely and
            anonymously.
          </p>
          <button className="btn-primary mt-6">Report Now</button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 ">
        <FAQSection />
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .support-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }
        .support-card::before {
          content: "";
          position: absolute;
          top: -20px;
          left: -20px;
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transition: transform 0.4s ease;
        }
        .support-card:hover::before {
          transform: scale(3);
        }
        .support-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }
        .btn-primary {
          padding: 12px 24px;
          background-color: #2563eb;
          color: white;
          font-weight: bold;
          border-radius: 8px;
          transition: background 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        .btn-primary:hover {
          background-color: #1e40af;
        }
      `}</style>
    </div>
  );
};

export default Support;
