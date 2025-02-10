import React, { useContext } from 'react';
import { Authcontext } from '../../AuthContext/AuthProvider';
import bgImage from '../../assets/digital.webp'
const About = () => { 
  const {name} = useContext(Authcontext)
        return (
          <section className="bg-gray-100 py-16 px-6 text-gray-800 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-blue-600 mb-12">স্বচ্ছতা ও দুর্নীতির বিরুদ্ধে আমাদের প্রতিশ্রুতি</h2>
            </div>
      
            <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">✅ নামবিহীন রিপোর্টিং</h3>
                <p className="text-gray-600 mt-2">
                  সম্পূর্ণ সুরক্ষিত ও গোপনীয় রিপোর্টিং ব্যবস্থা, যাতে ব্যবহারকারীরা নির্ভয়ে দুর্নীতি রিপোর্ট করতে পারেন।
                </p>
              </div>
      
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">📊 রিয়েল-টাইম ডাটা</h3>
                <p className="text-gray-600 mt-2">
                  লাইভ ড্যাশবোর্ড ও রিপোর্টিং সিস্টেম যা আপনাকে সর্বশেষ দুর্নীতি সংক্রান্ত তথ্য প্রদান করবে।
                </p>
              </div>
      
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">📜উন্মুক্ত প্রশাসন</h3>
                <p className="text-gray-600 mt-2">
                  সরকার ও প্রতিষ্ঠানগুলোর স্বচ্ছতা নিশ্চিত করতে উন্মুক্ত তথ্যভান্ডার ব্যবহার করুন।
                </p>
              </div>
      
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">🔗ব্লকচেইন নিরাপত্তা</h3>
                <p className="text-gray-600 mt-2">
                  তথ্যের নির্ভরযোগ্যতা ও নিরাপত্তার জন্য ব্লকচেইন প্রযুক্তি ব্যবহার করা হয়েছে।
                </p>
              </div>
            </div>
      
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
                রিপোর্ট করুন
              </button>
            </div>
          </section>
      
      
);
};

export default About;