import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-white dark:bg-gray-900">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
        
          <div className="w-full lg:w-2/5 px-6">
            <a href="#" aria-label="Brand Logo">
              <img
                className="w-auto h-8"
                src="https://merakiui.com/images/full-logo.svg"
                alt="Brand Logo"
              />
            </a>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-sm">
              Join 31,000+ others and never miss out on new tips, tutorials, and more.
            </p>
           
            <div className="flex mt-6 space-x-4">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Reddit"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="..." />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="..." />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Github"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="..." />
                </svg>
              </a>
            </div>
          </div>

         
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
             
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white font-bold">About</h3>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Company
                </a>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Community
                </a>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Careers
                </a>
              </div>

             
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white font-bold">Blog</h3>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Tech
                </a>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Music
                </a>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Videos
                </a>
              </div>

             
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white font-bold">Products</h3>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Mega Cloud
                </a>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Aperion UI
                </a>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Meraki UI
                </a>
              </div>

              
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white font-bold">Contact</h3>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400">+1 526 654 8965</span>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400">example@email.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <div>
          <p className="text-center text-gray-500 dark:text-gray-400">
            © Brand 2020 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
            
        </div>
    );
};

export default Footer;