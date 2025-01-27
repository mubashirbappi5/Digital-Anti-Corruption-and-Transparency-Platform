import React from 'react';
import Marquee from 'react-fast-marquee';

const RealTimeStat = () => {
    return (
        <div className=' '>
            <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
          Real-Time Transparency Stats
        </h2>
          <div className=''>
          <Marquee className=''>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center mr-7">
           
            <p className="mt-4 text-4xl font-semibold text-blue-500">40</p>
            <h3 className="text-xl font-medium text-gray-800 dark:text-white">Complaints Submitted</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center  mr-7">
           
            <p className="mt-4 text-4xl font-semibold text-blue-500">40</p>
            <h3 className="text-xl font-medium text-gray-800 dark:text-white">Complaints Submitted</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center  mr-7">
           
            <p className="mt-4 text-4xl font-semibold text-blue-500">40</p>
            <h3 className="text-xl font-medium text-gray-800 dark:text-white">Complaints Submitted</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center  mr-7">
           
            <p className="mt-4 text-4xl font-semibold text-blue-500">40</p>
            <h3 className="text-xl font-medium text-gray-800 dark:text-white">Complaints Submitted</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center  mr-7">
           
            <p className="mt-4 text-4xl font-semibold text-blue-500">40</p>
            <h3 className="text-xl font-medium text-gray-800 dark:text-white">Complaints Submitted</h3>
          </div>
          </Marquee>

          </div>
            
        </div>
    );
};

export default RealTimeStat;