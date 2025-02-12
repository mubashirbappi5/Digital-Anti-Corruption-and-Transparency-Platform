import React, { useState } from "react";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosAlert } from "react-icons/io";

const EmergencyCon = () => {
  const [location, setLocation] = useState("");
  const [contacts, setContacts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const fetchContacts = () => {
    // Mock contact data based on location (for demonstration purposes)
    const contacts = {
      Dhaka: {
        police: { name: "Dhaka Police", phone: "+8801191001155" },
         hospital: {
            name: "Dhaka Medical College Hospital",
            address: "Dhaka 1000, Bangladesh",
            phone: "+880-2-55165088",
          },
      },
      Chattogram: {
        police: { name: "Chattogram Police", phone: "+8801191001188" },
        hospital: {
            name: "Chittagong Medical College Hospital",
            address: "Chittagong, Bangladesh",
            phone: "+880-31-619004",
          },
      
      },
      Rajshahi: {
        police: { name: "Rajshahi Police", phone: "+8801812345678" },
        hospital: {
            name: "Rajshahi Medical College Hospital",
            address: "Rajshahi, Bangladesh",
            phone: "+880-721-761234",
          },
      
      
      },
      Khulna: {
        police: { name: "Khulna Police", phone: "+8801812345678" },
        hospital: {
            name: "Khulna Medical College Hospital",
            address: "Khulna, Bangladesh",
            phone: "+880-41-720171",
          },      
      
      
      },
      Barisal: {
        police: { name: "Barisal Police", phone: "+8801812345678" },
        hospital: {
            name: "Sher-e-Bangla Medical College Hospital",
            address: "Barisal, Bangladesh",
            phone: "+880-431-2173308",
          },
      
      
      
      },
      Sylhet: {
        police: { name: "Sylhet Police", phone: "+8801812345678" },
        hospital: {
            name: "Sylhet MAG Osmani Medical College Hospital",
            address: "Sylhet, Bangladesh",
            phone: "+880-821-713311",
          },     
      },
      Rangpur: {
        police: { name: "Rangpur Police", phone: "+8801812345678" },
        hospital: {
            name: "Rangpur Medical College Hospital",
            address: "Rangpur, Bangladesh",
            phone: "+880-521-62111",
          },
           
      },
      Mymensingh: {
        police: { name: "Mymensingh Police", phone: "+8801812345678" },
        hospital: {
            name: "Mymensingh Medical College Hospital",
            address: "Mymensingh, Bangladesh",
            phone: "+880-91-66666",
          },
      
           
      },
      
    };

    setLoading(true);
    setError("");
    setTimeout(() => {
      const contactData = contacts[location];
      if (!contactData) {
        setError("No contacts found for this location.");
        setContacts(null);
      } else {
        setContacts(contactData);
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-600 text-white p-6 rounded-xl shadow-xl">
      <h2 className="text-4xl font-bold text-center mb-6">
        <IoIosAlert className="inline-block text-5xl mr-3" />
        Emergency Contacts
      </h2>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter Division/District"
          className="w-full p-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <button
        onClick={fetchContacts}
        className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-all"
        disabled={loading}
      >
        {loading ? "Loading..." : "Get Contacts"}
      </button>

      {error && <p className="text-red-300 mt-4 text-center">{error}</p>}

      {contacts && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-600 text-center">Emergency Contacts for {location}</h3>

          <div className="mt-6 space-y-6">
            <div className="flex justify-between items-center">
              <FaPhone className="text-blue-600 text-3xl" />
              <div>
                <h4 className="font-semibold text-lg">police</h4>
                <a href={`tel:${contacts.police.phone}`} className="text-blue-600 text-lg font-bold hover:underline">
                 {contacts.police.name}
                  {contacts.police.phone}
                </a>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <FaPhone className="text-green-600 text-3xl" />
              <div>
                <h4 className="font-semibold text-lg">Hospital</h4>
                <a href={`tel:${contacts.hospital.phone}`} className="text-green-600 text-lg font-bold hover:underline">
                  {contacts.hospital.name}
                  {contacts.hospital.phone}
                </a>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <FaMapMarkerAlt className="text-red-600 text-3xl" />
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-gray-700 text-lg">
                  For a map, check out <span className="text-blue-600 hover:underline">Google Maps</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyCon;
