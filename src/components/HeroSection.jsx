import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4">
            AI-Powered Pet Insurance Quote
          </h1>
          <p className="text-xl text-gray-600">
            Predict. Protect. Pamper.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Main content */}
        <div className="space-y-1">
          <p className="text-gray-700 leading-relaxed">
            Our machine learning platform analyzes your pet's health data from wearable devices to calculate the fairest insurance premium.
            Simply connect your pet's health tracker or answer a few questions to receive your instant quote.
          </p>

          <div className="space-y-1 mt-2">
            <p className="text-gray-700 leading-relaxed font-semibold">Key Benefits:</p>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
              </div>
              <p className="ml-3 text-gray-700">
                Accurate pricing based on real health metrics
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
              </div>
              <p className="ml-3 text-gray-700">
                Discounts for healthy activity levels
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
              </div>
              <p className="ml-3 text-gray-700">
                No unnecessary coverage - pay only for what your pet needs
              </p>
            </div>
          </div>
        </div>

        {/* Closing line */}
        <div className="mt-5 text-center">
          <p className="text-gray-600 mb-6 font-semibold italic">
            Because your pet deserves protection as unique as they are.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;