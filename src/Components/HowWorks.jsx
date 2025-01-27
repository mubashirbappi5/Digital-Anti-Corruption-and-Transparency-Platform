import React from 'react';

const HowWorks = () => {
    return (
        <div>
             <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Making Governance Transparent and Accountable
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Sign Up or Log In</h3>
            <p className="text-gray-600 text-center">Create an account or log in to get started and access personalized features.</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14l3 3 3-3" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Track Government Projects</h3>
            <p className="text-gray-600 text-center">Monitor progress, budgets, and timelines in real-time for all ongoing public projects.</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Submit a Corruption Complaint</h3>
            <p className="text-gray-600 text-center">Report corruption with evidence such as photos, documents, and videos to help investigate the issue.</p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Track Your Complaint</h3>
            <p className="text-gray-600 text-center">Follow your complaint’s status and track the actions taken by authorities in real-time.</p>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3l2 2" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Explore the Public Dashboard</h3>
            <p className="text-gray-600 text-center">View anonymized data and trends of complaints to understand patterns and monitor resolutions.</p>
          </div>

          {/* Step 6 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 2l4 4m0 0l4-4m-4 4l-4-4m4 4l-4 4m4 4l-4 4" />
              </svg>
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