import React from 'react';

const News = () => {
    return (
        <div>
             <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          Latest News & Updates
          </h1>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">
          Catch up on the latest developments, initiatives, and success stories in the fight against corruption and efforts to promote transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {/* Blog Item 1 */}
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
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">Prothom alo</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Newspaper</p>
                </div>
              </div>
            </div>
            <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
            নিম্নমানের ইভিএম কিনে রাষ্ট্রীয় অর্থ অপচয়ের অভিযোগ খতিয়ে দেখবে দুদক
            </h1>
            <hr className="w-32 my-6 text-blue-500" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
            নিম্নমানের ইলেকট্রনিক ভোটিং মেশিন (ইভিএম) কিনে রাষ্ট্রের অর্থ অপচয়ের অভিযোগে নির্বাচন কমিশনের প্রধান কার্যালয়ে অভিযান চালিয়েছে দুর্নীতি দমন কমিশন (দুদক)। গতকাল রোববার এ অভিযান চালায় দুদক।
            </p>
            <a href="https://www.prothomalo.com/bangladesh/1ggtcs1z6j" className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">
              Read more
            </a>
          </div>

          {/* Blog Item 2 */}
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
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">Amader Somoy</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Newspaper</p>
                </div>
              </div>
            </div>
            <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
            সাবেক আইজিপি বেনজীরের সাভানা রিসোর্টে অভিযান চলছে
            </h1>
            <hr className="w-32 my-6 text-blue-500" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
            পুলিশের সাবেক মহাপরিদর্শক (আইজিপি) বেনজীর আহমেদের গোপালগঞ্জের সাভানা রিসোর্টে অভিযানে গেছে জাতীয় রাজস্ব বোর্ডের (এনবিআর) গোয়েন্দা বিভাগ (সিআইসি)।
            </p>
            <a href="https://www.dainikamadershomoy.com/details/019487b64e9b" className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">
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
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">ITTEFAQ</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Newspaper</p>
                </div>
              </div>
            </div>
            <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
            তারিক সিদ্দিকসহ ১৯ জনের বিরুদ্ধে দুদকের মামলা
            </h1>
            <hr className="w-32 my-6 text-blue-500" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
            হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর, সিলেটের ওসমানী আন্তর্জাতিক বিমানবন্দর ও কক্সবাজার আন্তর্জাতিক বিমানবন্দরের উন্নয়ন প্রকল্পের ৮১২ কোটি টাকা আত্মসাতের অভিযোগে সাবেক প্রধানমন্ত্রী শেখ হাসিনার সামরিক উপদেষ্টা মেজর জেনারেল তারিক আহমেদ সিদ্দিকসহ ১৯ কর্মকর্তার বিরুদ্ধে চারটি মামলা দায়ের করেছে দুর্নীতি দমন কমিশন (দুদক)।
            </p>
            <a href="https://www.ittefaq.com.bd/716993/%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%95-%E0%A6%B8%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%A6%E0%A6%BF%E0%A6%95%E0%A6%B8%E0%A6%B9-%E0%A7%A7%E0%A7%AF-%E0%A6%9C%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%AC%E0%A6%BF%E0%A6%B0%E0%A7%81%E0%A6%A6%E0%A7%8D%E0%A6%A7%E0%A7%87-%E0%A6%A6%E0%A7%81%E0%A6%A6%E0%A6%95%E0%A7%87%E0%A6%B0-%E0%A6%AE%E0%A6%BE%E0%A6%AE%E0%A6%B2%E0%A6%BE" className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">
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