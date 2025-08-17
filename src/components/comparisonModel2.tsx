import React from "react";
import { comparisonData } from "../data/ComparisonData";
import { SectionBadge } from "./custom/sectionBadge";
import { BarChart3 } from "lucide-react";

const ComparisonModel: React.FC = () => {
  return (
    <section className="py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 my-16 md:my-24 lg:my-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 md:mb-24 lg:mb-28">
          <div className="flex justify-center mb-6">
            <SectionBadge
              text="Model Comparison"
              icon={<BarChart3 className="w-4 h-4" />}
              variant="glass"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            {comparisonData.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            {comparisonData.subtitle}
          </p>
        </div>

        {/* Comparison Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Today's AI Card */}
          <div className="bg-blue-50 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            {/* Header Badge */}
            <div className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-lg font-semibold mb-8">
              {comparisonData.todaySection.title}
            </div>

            {/* Icon subtitle */}
            <div className="relative flex items-center mb-8">
              {/* <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-gray-900 text-xl font-semibold">✱</span>
              </div> */}
              <span className="text-2xl sm:text-3xl font-semibold">
                {comparisonData.todaySection.subtitle}
              </span>
            </div>

            {/* Icon Placeholder */}
            {/* <div className="w-16 h-16 bg-gray-800 rounded-lg mb-8"></div> */}

            {/* Main Content */}
            <div className="mb-12">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
                Decentralized, Open & Free
              </h3>

              {/* Feature List */}
              <div className="space-y-4">
                {comparisonData.todaySection.description.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-400 rounded-sm flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">⚠</span>
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-6">
              {comparisonData.metrics.map((metric) => (
                <div key={metric.id}>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-gray-900 font-medium text-base sm:text-lg">
                      {metric.title}
                    </h4>
                    <span className="text-2xl sm:text-3xl font-semibold text-gray-600">
                      {metric.todayValue}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${metric.todayProgress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tomorrow's AI Card */}
          <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 rounded-3xl p-8 sm:p-10 relative overflow-hidden text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>

            {/* Header Badge */}
            <div className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-lg font-semibold mb-8">
              {comparisonData.tomorrowSection.title}
            </div>

            {/* OpenxAI Logo/Icon */}
            <div className="relative flex items-center mb-8">
              {/* <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-gray-900 text-xl font-semibold">✱</span>
              </div> */}
              <span className="text-2xl sm:text-3xl font-semibold">
                {comparisonData.tomorrowSection.subtitle}
              </span>
            </div>

            {/* Main Content */}
            <div className="relative mb-12">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
                Decentralized, Open & Free
              </h3>

              {/* Feature List */}
              <div className="space-y-4">
                {comparisonData.tomorrowSection.description.map(
                  (item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white rounded-sm flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <span className="text-purple-600 text-sm font-semibold">
                          ✱
                        </span>
                      </div>
                      <p className="text-gray-100 text-base sm:text-lg">
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Metrics */}
            <div className="relative space-y-6">
              {comparisonData.metrics.map((metric, index) => (
                <div key={metric.id}>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-white font-medium text-base sm:text-lg">
                      {metric.title}
                    </h4>
                    <span
                      className={`text-2xl sm:text-3xl font-semibold ${
                        index === 0
                          ? "text-red-400"
                          : index === 1
                          ? "text-orange-400"
                          : "text-orange-300"
                      }`}
                    >
                      {metric.tomorrowValue}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        index === 0
                          ? "bg-gradient-to-r from-red-500 to-orange-500"
                          : index === 1
                          ? "bg-gradient-to-r from-blue-500 to-orange-500"
                          : "bg-gradient-to-r from-blue-500 to-purple-500"
                      }`}
                      style={{ width: `${metric.tomorrowProgress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonModel;
