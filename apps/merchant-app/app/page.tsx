import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      {/* Hero Section */}
      <section className="text-center p-8">
        <h1 className="text-6xl font-extrabold tracking-wide text-white drop-shadow-lg animate-fadeInUp mb-4">
          Merchant app will be launched soon!
        </h1>
        <p className="text-xl text-gray-200 mb-6 animate-fadeInUp delay-1s">
          Stay tuned for our exciting launch. Sign up to be notified!
        </p>
        <div className="flex justify-center items-center mt-8 animate-fadeInUp delay-2s">
          <input
            type="email"
            className="px-4 py-3 border border-transparent rounded-md text-gray-800 focus:outline-none shadow-xl w-80"
            placeholder="Enter your email"
          />
          <button className="ml-2 px-6 py-3 bg-pink-500 hover:bg-pink-600 transition-all duration-300 text-white font-semibold rounded-md shadow-xl">
            Notify Me
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white text-gray-800 p-8 mt-16 w-full rounded-t-3xl shadow-2xl">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Why You'll Love Us</h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover the features that make us special!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <FaCheckCircle size={50} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Instant Access</h3>
              <p className="text-white">
                Get immediate access to top-notch content and features that you’ll love.
              </p>
            </div>
            <div className="p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-r from-green-400 to-blue-500 text-white">
              <FaCheckCircle size={50} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Seamless Experience</h3>
              <p className="text-white">
                Enjoy a smooth, fast, and responsive experience across all devices.
              </p>
            </div>
            <div className="p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
              <FaCheckCircle size={50} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
              <p className="text-white">
                Our team is here to help you anytime, anywhere with dedicated support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 w-full bg-gray-900 py-8 text-white text-center rounded-b-3xl shadow-inner">
        <p className="text-lg">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p className="text-sm">Follow us on <a href="#" className="underline hover:text-gray-400">Twitter</a> & <a href="#" className="underline hover:text-gray-400">Instagram</a></p>
      </footer>
    </div>
  );
};

export default LandingPage;
