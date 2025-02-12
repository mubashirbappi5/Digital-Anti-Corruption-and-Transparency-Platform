import React from 'react';
import { FaBook, FaVideo, FaDownload, FaTools, FaFileAlt ,FaBalanceScale } from "react-icons/fa";

const Resource = () => {
    return (
        <div>
            <section className="bg-blue-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600">Anti-Corruption Resources</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Explore a wealth of knowledge to fight corruption and promote transparency.
        </p>
      </div>

      {/* Resource Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
        
        {/* Educational Resources */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <FaBook className="text-blue-600 text-5xl mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Educational Resources</h3>
          <p className="mt-2 text-gray-600">
            Access articles, case studies, and expert reports on corruption.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Explore Now
          </button>
        </div>

        {/* Video Library */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <FaVideo className="text-blue-600 text-5xl mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Video Library</h3>
          <p className="mt-2 text-gray-600">
            Watch documentaries, speeches, and expert insights on corruption.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Watch Now
          </button>
        </div>

        {/* Downloadable Materials */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <FaDownload className="text-blue-600 text-5xl mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Downloadable Materials</h3>
          <p className="mt-2 text-gray-600">
            Get legal documents, policy guides, and research papers.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Download Now
          </button>
        </div>

        {/* Tools & Platforms */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <FaTools className="text-blue-600 text-5xl mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Tools & Platforms</h3>
          <p className="mt-2 text-gray-600">
            Use anti-corruption tools, secure reporting platforms, and legal aid.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Access Tools
          </button>
        </div>

        {/* Featured Reports */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <FaFileAlt className="text-blue-600 text-5xl mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Featured Reports</h3>
          <p className="mt-2 text-gray-600">
            Read the latest corruption investigations and analysis.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            View Reports
          </button>
        </div>
        {/* 🆕 Corruption Case Studies */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <FaBalanceScale className="text-blue-600 text-5xl mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Corruption Case Studies</h3>
          <p className="mt-2 text-gray-600">
            Learn from real-world cases of corruption, their impact, and successful legal actions.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Read Cases
          </button>
        </div>

      </div>
    </section>
        </div>
    );
};

export default Resource;