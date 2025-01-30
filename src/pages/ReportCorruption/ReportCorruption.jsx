import { useState } from "react";

const ReportCorruption = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    corruptionType: "",
    description: "",
    date: "",
    location: "",
    file: null,
    anonymous: false,
  });

  const [trackingID, setTrackingID] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedID = "TRK" + Math.floor(Math.random() * 100000);
    setTrackingID(generatedID);
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
        Report Corruption
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
        Your report helps build a more transparent and accountable society.
      </p>

      {!submitted ? (
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {!formData.anonymous && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Your Name (Optional)"
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email (Optional)"
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
                onChange={handleChange}
              />
            </>
          )}

          <label className="flex items-center space-x-2 text-gray-700 dark:text-white">
            <input
              type="checkbox"
              name="anonymous"
              checked={formData.anonymous}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <span>Submit anonymously</span>
          </label>

          <select
            name="corruptionType"
            required
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
            onChange={handleChange}
          >
            <option value="">Select Corruption Type</option>
            <option value="bribery">Bribery</option>
            <option value="embezzlement">Embezzlement</option>
            <option value="fraud">Fraud</option>
            <option value="misuse_of_power">Misuse of Power</option>
          </select>

          <textarea
            name="description"
            required
            rows="4"
            placeholder="Describe the incident..."
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
            onChange={handleChange}
          ></textarea>

          <input
            type="date"
            name="date"
            required
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
            onChange={handleChange}
          />

          <input
            type="text"
            name="location"
            required
            placeholder="Location of Incident"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
            onChange={handleChange}
          />

          <input
            type="file"
            accept=".jpg,.png,.pdf"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
            onChange={handleFileChange}
          />

          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Submit Report
          </button>
        </form>
      ) : (
        <div className="text-center mt-6">
          <h3 className="text-lg font-bold text-green-600">
            Your complaint has been submitted!
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Track your complaint with ID:{" "}
            <span className="font-bold text-blue-500">{trackingID}</span>
          </p>
        </div>
      )}

      {/* Complaint Tracking Section */}
      {/* <div className="mt-10">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          Track Your Complaint
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Enter your tracking ID to check the status.
        </p>
        <input
          type="text"
          placeholder="Enter Tracking ID"
          className="w-full p-3 border rounded-lg mt-2 dark:bg-gray-700 dark:text-white"
        />
        <button className="w-full mt-3 p-3 text-white bg-green-500 rounded-lg hover:bg-green-600">
          Check Status
        </button>
      </div> */}

      {/* FAQ Section */}
      <div className="mt-10">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          Frequently Asked Questions
        </h3>
        <div className="mt-4 space-y-4">
          <details className="border p-3 rounded-lg dark:border-gray-600">
            <summary className="font-medium text-gray-800 dark:text-white">
              Is my complaint confidential?
            </summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Yes, your report is secure, and you can submit it anonymously.
            </p>
          </details>
          <details className="border p-3 rounded-lg dark:border-gray-600">
            <summary className="font-medium text-gray-800 dark:text-white">
              How long does it take to process a complaint?
            </summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              The review process varies but typically takes 7-14 days.
            </p>
          </details>
          <details className="border p-3 rounded-lg dark:border-gray-600">
            <summary className="font-medium text-gray-800 dark:text-white">
              Can I track the progress of my complaint?
            </summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Yes, use your tracking ID to check real-time updates.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default ReportCorruption;
