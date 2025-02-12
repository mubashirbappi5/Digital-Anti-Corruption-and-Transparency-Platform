import React from "react";

const News = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
              Latest News & Updates
            </h1>

            <p className="max-w-lg mx-auto mt-4 text-gray-500">
              Catch up on the latest developments, initiatives, and success
              stories in the fight against corruption and efforts to promote
              transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {/* Blog 1 */}
            <div>
              <div className="relative">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src="https://i.ibb.co.com/w4RWXhT/download-16.jpg"
                  alt=""
                />
                <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src="https://i.ibb.co.com/GQStft7/download-11.png"
                    alt=""
                  />
                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">
                      Prothom alo
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Newspaper
                    </p>
                  </div>
                </div>
              </div>
              <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                ACC will look into allegations of wastage of state money by
                buying substandard EVMs{" "}
              </h1>
              <hr className="w-32 my-6 text-blue-500" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                The Anti-Corruption Commission (ACC) has raided the head office
                of the Election Commission on allegations of wasting state money
                by buying low-quality electronic voting machines (EVMs). ACC
                conducted this operation yesterday Sunday.{" "}
              </p>
              <a
                href="https://www.prothomalo.com/bangladesh/1ggtcs1z6j"
                className="inline-block mt-4 text-blue-500 underline hover:text-blue-400"
              >
                Read more
              </a>
            </div>

            {/* Blog  2 */}
            <div>
              <div className="relative">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src="https://i.ibb.co.com/Bsbg6V0/download-17.jpg"
                  alt=""
                />
                <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src="https://i.ibb.co.com/YBzPynG/download-12.png"
                    alt=""
                  />
                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">
                      Amader Somoy
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Newspaper
                    </p>
                  </div>
                </div>
              </div>
              <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                Former IGP Benazir's Savannah resort is being raided
              </h1>
              <hr className="w-32 my-6 text-blue-500" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Former Inspector General of Police (IGP) Benazir Ahmed of
                Gopalganj National Board of Revenue (NBR) raided Savannah resort
                Intelligence Division (CIC).
              </p>
              <a
                href="https://www.dainikamadershomoy.com/details/019487b64e9b"
                className="inline-block mt-4 text-blue-500 underline hover:text-blue-400"
              >
                Read more
              </a>
            </div>

            {/* Blog Item 3 */}
            <div>
              <div className="relative">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src="https://i.ibb.co.com/PTCdmd9/download-15.jpg"
                  alt=""
                />
                <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src="https://i.ibb.co.com/Gs9bPDC/download-13.png"
                    alt=""
                  />
                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">
                      ITTEFAQ
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Newspaper
                    </p>
                  </div>
                </div>
              </div>
              <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                ACC case against 19 people including Tariq Siddique
              </h1>
              <hr className="w-32 my-6 text-blue-500" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                The Anti-Corruption Commission (ACC) has filed four cases
                against 19 officials, including former Prime Minister Sheikh
                Hasina's military advisor Major General Tariq Ahmed Siddique, on
                charges of embezzling Tk 8.12 billion from the development
                projects of Hazrat Shahjalal International Airport, Sylhet's
                Osmani International Airport and Cox's Bazar International
                Airport.
              </p>
              <a
                href="https://www.ittefaq.com.bd/716993/%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%95-%E0%A6%B8%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%A6%E0%A6%BF%E0%A6%95%E0%A6%B8%E0%A6%B9-%E0%A7%A7%E0%A7%AF-%E0%A6%9C%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%AC%E0%A6%BF%E0%A6%B0%E0%A7%81%E0%A6%A6%E0%A7%8D%E0%A6%A7%E0%A7%87-%E0%A6%A6%E0%A7%81%E0%A6%A6%E0%A6%95%E0%A7%87%E0%A6%B0-%E0%A6%AE%E0%A6%BE%E0%A6%AE%E0%A6%B2%E0%A6%BE"
                className="inline-block mt-4 text-blue-500 underline hover:text-blue-400"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default News;
