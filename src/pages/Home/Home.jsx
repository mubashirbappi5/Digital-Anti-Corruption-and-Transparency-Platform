import Contact from "../../Components/Contact";
import FAQSection from "../../Components/FAQSection";
import HowWorks from "../../Components/HowWorks";
import News from "../../Components/News";
import RealTimeStat from "../../Components/RealTimeStat";


const Home = () => {
    return (
        <div>
            <div className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-20 px-8">
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Towards a Corruption-Free Bangladesh
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Empowering Citizens with Technology to Build Transparency and
          Accountability.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
            Track Projects
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
            Report Corruption
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-700 to-transparent"></div>
    </div>
    <HowWorks/>
    <RealTimeStat/>
     <FAQSection/>
     <Contact/>
     <News/>

        </div>

       
    );
};

export default Home;