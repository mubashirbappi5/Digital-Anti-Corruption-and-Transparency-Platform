import { useState } from "react";

const ReportCorruption = () => {
 



  

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
        Report Corruption
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
        Your report helps build a more transparent and accountable society.
      </p>

     
        <form className="mt-6 space-y-4" >
    
            <>
              <input
                type="text"
                name="name"
                placeholder="Your Name (Optional)"
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
                
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email (Optional)"
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
               
              />
            </>
        
          <label className="flex items-center space-x-2 text-gray-700 dark:text-white">
            <input
              type="checkbox"
              name="anonymous"
         
              className="w-5 h-5"
            />
            <span>Submit anonymously</span>
          </label>
          
          <input
                type="email"
                name="email"
                placeholder="Crime Title"
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
               
              />
              <input
            type="file"
            accept=".jpg,.png,.pdf"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
           
          />
          <select
  name="district"
  required
  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
>
  <option value="">Select District</option>
  <option value="bagerhat">Bagerhat</option>
  <option value="bandarban">Bandarban</option>
  <option value="barguna">Barguna</option>
  <option value="barishal">Barishal</option>
  <option value="bhola">Bhola</option>
  <option value="bogura">Bogura</option>
  <option value="brahmanbaria">Brahmanbaria</option>
  <option value="chandpur">Chandpur</option>
  <option value="chapainawabganj">Chapainawabganj</option>
  <option value="chattogram">Chattogram</option>
  <option value="chuadanga">Chuadanga</option>
  <option value="coxsbazar">Cox's Bazar</option>
  <option value="cumilla">Cumilla</option>
  <option value="dhaka">Dhaka</option>
  <option value="dinajpur">Dinajpur</option>
  <option value="faridpur">Faridpur</option>
  <option value="feni">Feni</option>
  <option value="gaibandha">Gaibandha</option>
  <option value="gazipur">Gazipur</option>
  <option value="gopalganj">Gopalganj</option>
  <option value="habiganj">Habiganj</option>
  <option value="jamalpur">Jamalpur</option>
  <option value="jashore">Jashore</option>
  <option value="jhalokathi">Jhalokathi</option>
  <option value="jhenaidah">Jhenaidah</option>
  <option value="joypurhat">Joypurhat</option>
  <option value="khagrachari">Khagrachari</option>
  <option value="khulna">Khulna</option>
  <option value="kishoreganj">Kishoreganj</option>
  <option value="kurigram">Kurigram</option>
  <option value="kushtia">Kushtia</option>
  <option value="lakshmipur">Lakshmipur</option>
  <option value="lalmonirhat">Lalmonirhat</option>
  <option value="madaripur">Madaripur</option>
  <option value="magura">Magura</option>
  <option value="manikganj">Manikganj</option>
  <option value="meherpur">Meherpur</option>
  <option value="moulvibazar">Moulvibazar</option>
  <option value="munshiganj">Munshiganj</option>
  <option value="mymensingh">Mymensingh</option>
  <option value="naogaon">Naogaon</option>
  <option value="narail">Narail</option>
  <option value="narayanganj">Narayanganj</option>
  <option value="narsingdi">Narsingdi</option>
  <option value="natore">Natore</option>
  <option value="netrokona">Netrokona</option>
  <option value="nilphamari">Nilphamari</option>
  <option value="noakhali">Noakhali</option>
  <option value="pabna">Pabna</option>
  <option value="panchagarh">Panchagarh</option>
  <option value="patuakhali">Patuakhali</option>
  <option value="pirojpur">Pirojpur</option>
  <option value="rajbari">Rajbari</option>
  <option value="rajshahi">Rajshahi</option>
  <option value="rangamati">Rangamati</option>
  <option value="rangpur">Rangpur</option>
  <option value="satkhira">Satkhira</option>
  <option value="shariatpur">Shariatpur</option>
  <option value="sherpur">Sherpur</option>
  <option value="sirajganj">Sirajganj</option>
  <option value="sunamganj">Sunamganj</option>
  <option value="sylhet">Sylhet</option>
  <option value="tangail">Tangail</option>
  <option value="thakurgaon">Thakurgaon</option>
</select>

          <textarea
            name="description"
            required
            rows="4"
            placeholder="Describe the incident..."
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
           
          ></textarea>

          <input
            type="date"
            name="date"
            required
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
           
          />

          <input
            type="text"
            name="location"
            required
            placeholder="Location of Incident"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
           
          />

          

          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Submit Report
          </button>
        </form>
     
        
    

     
      {/* FAQ Section */}
      <div className="mt-10">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          Frequently Asked Questions
        </h3>
        <div className="mt-4 space-y-4">
          <details className="border p-3 rounded-lg dark:border-gray-600">
            <summary className="font-medium text-gray-800 dark:text-white">
              Is my complaint confidential?
            </summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Yes, your report is secure, and you can submit it anonymously.
            </p>
          </details>
          <details className="border p-3 rounded-lg dark:border-gray-600">
            <summary className="font-medium text-gray-800 dark:text-white">
              How long does it take to process a complaint?
            </summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              The review process varies but typically takes 7-14 days.
            </p>
          </details>
          <details className="border p-3 rounded-lg dark:border-gray-600">
            <summary className="font-medium text-gray-800 dark:text-white">
              Can I track the progress of my complaint?
            </summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Yes, use your tracking ID to check real-time updates.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default ReportCorruption;
