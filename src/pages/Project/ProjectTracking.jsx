import React from "react";
import { FaCheckCircle, FaClock, FaTimesCircle, FaSync, FaSearch } from "react-icons/fa";

const ProjectTracking = () => {
  const projects = [
    {
      id: "PRJ001",
      title: "Road Construction Budget Audit",
      status: "In Progress",
      progress: 70,
      description: "Verifying the transparency of budget allocation and expense reports.",
    },
    {
      id: "PRJ002",
      title: "Public Fund Misuse Investigation",
      status: "Completed",
      progress: 100,
      description: "Investigated and recovered misused public funds for healthcare services.",
    },
    {
      id: "PRJ003",
      title: "Illegal Property Seizure Case",
      status: "Pending",
      progress: 30,
      description: "Awaiting legal review on unauthorized property acquisitions.",
    },
  ];

  return (
    <section className="py-16 bg-blue-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-600 text-center">Project Tracking</h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mt-4">
          Stay informed about ongoing investigations and anti-corruption projects.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mt-8">
          <input
            type="text"
            placeholder="Enter Project ID..."
            className="w-full max-w-md p-3 border border-blue-400 rounded-l-lg focus:ring focus:ring-blue-300"
          />
          <button className="px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition">
            <FaSearch />
          </button>
        </div>

        {/* Project List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-center">
              {/* Status Icon */}
              <div className="flex justify-center">
                {project.status === "Completed" ? (
                  <FaCheckCircle className="text-green-500 text-4xl" />
                ) : project.status === "In Progress" ? (
                  <FaSync className="text-yellow-500 text-4xl animate-spin" />
                ) : (
                  <FaTimesCircle className="text-red-500 text-4xl" />
                )}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-4">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>

              {/* Progress Bar */}
              <div className="relative pt-4">
                <div className="w-full bg-gray-300 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${
                      project.status === "Completed" ? "bg-green-500" : "bg-blue-500"
                    }`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-gray-600">{project.progress}% Completed</p>
              </div>

              <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTracking;
