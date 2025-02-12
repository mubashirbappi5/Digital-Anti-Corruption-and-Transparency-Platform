import React, { useContext } from "react";
import { Authcontext } from "../../AuthContext/AuthProvider";
import { useNavigate } from "react-router-dom";
const About = () => {
  const { name } = useContext(Authcontext);
  const navigate = useNavigate();
  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center bg-blue-500 text-white py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">
          Fighting Corruption, Building a Just Future
        </h1>
        <p className="text-lg max-w-2xl">
          Corruption thrives in darkness, but we stand as a beacon of light.
          Join us in the battle for transparency, accountability, and justice.
        </p>
        <button
          className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
          onClick={() => navigate("/signup")}
        >
          Get Involved
        </button>
      </section>

      {/* Our Mission */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          We are dedicated to eradicating corruption by exposing injustices,
          educating communities, and advocating for policy change. Our mission
          is to empower individuals to take a stand and create a fair society.
        </p>
      </section>

      {/* Why It Matters */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Why It Matters?
          </h2>
          <p className="text-gray-700">
            Corruption affects economies, governments, and everyday people. It
            hinders progress, increases inequality, and weakens trust in
            institutions. Together, we can create a world where honesty
            prevails.
          </p>
        </div>
      </section>

      {/* How We Fight */}
      <section className="bg-blue-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            How We Fight?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-blue-500">
                🔍 Transparency
              </h3>
              <p className="text-gray-700">
                We investigate and expose corruption cases, ensuring
                transparency in governance.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-blue-500">📢 Awareness</h3>
              <p className="text-gray-700">
                Through education and campaigns, we empower people to take a
                stand against corruption.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-blue-500">⚖️ Advocacy</h3>
              <p className="text-gray-700">
                We push for stronger anti-corruption policies and legal reforms
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          Join the Movement
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Be part of the change! Whether by reporting corruption, spreading
          awareness, or supporting our initiatives, your voice makes a
          difference.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
          Take Action Now
        </button>
      </section>
    </div>
  );
};

export default About;
