import React from 'react';

const HowWorks = () => {
    return (
        <div>
             <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">
          Making Governance Transparent and Accountable
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <img src="https://img.icons8.com/?size=100&id=1CE0gYy8a1e6&format=png&color=000000" alt="" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Sign Up or Log In</h3>
            <p className="text-gray-600 text-center">Create an account or log in to get started and access personalized features.</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <img src="https://img.icons8.com/?size=100&id=MLsI9Dal53Hu&format=png&color=000000" alt="" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Track Government Projects</h3>
            <p className="text-gray-600 text-center">Monitor progress, budgets, and timelines in real-time for all ongoing public projects.</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <img src="https://img.icons8.com/?size=100&id=jBl6xwooyufg&format=png&color=000000" alt="" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Submit a Corruption Complaint</h3>
            <p className="text-gray-600 text-center">Report corruption with evidence such as photos, documents, and videos to help investigate the issue.</p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <img src="https://img.icons8.com/?size=100&id=107460&format=png&color=000000" alt="" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Track Your Complaint</h3>
            <p className="text-gray-600 text-center">Follow your complaint’s status and track the actions taken by authorities in real-time.</p>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <img src="https://img.icons8.com/?size=100&id=XnHBz2LnhELw&format=png&color=000000" alt="" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Explore the Public Dashboard</h3>
            <p className="text-gray-600 text-center">View anonymized data and trends of complaints to understand patterns and monitor resolutions.</p>
          </div>

          {/* Step 6 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <img src="https://img.icons8.com/?size=100&id=8ZW5L1yusnPA&format=png&color=000000" alt="" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Receive Automated Reports</h3>
            <p className="text-gray-600 text-center">Stay informed with automated weekly or monthly summaries about complaints and resolutions.</p>
          </div>
        </div>
      </div>
    </section>
            
        </div>
    );
};

export default HowWorks;