import React from 'react';

function Donate() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Give to Zoe Worship Center
      </h2>

      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-xs dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">

        {/* Card 1 */}
        <div className="flex flex-col items-left justify-center p-8 text-left bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Tithe & Offerings</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-1"><strong>Paybill:</strong> 123456</p>
          <p className="text-gray-600 dark:text-gray-400"><strong>Account:</strong> Tithe / Offering</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-left justify-center p-8 text-left bg-white border-b border-gray-200 md:rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Support a Project</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-1"><strong>Paybill:</strong> 789101</p>
          <p className="text-gray-600 dark:text-gray-400"><strong>Account:</strong> Project Name (e.g. Building Fund)</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-left justify-center p-8 text-left bg-white border-b border-gray-200 md:border-b-0 md:border-e md:rounded-bl-lg dark:bg-gray-800 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Bank Deposit 1</h3>
          <p className="text-gray-600 dark:text-gray-400"><strong>Bank:</strong> ABC Bank</p>
          <p className="text-gray-600 dark:text-gray-400"><strong>Account Name:</strong> Zoe Worship Center</p>
          <p className="text-gray-600 dark:text-gray-400"><strong>Acc No:</strong> 0123456789</p>
          <p className="text-gray-600 dark:text-gray-400"><strong>Branch:</strong> Nairobi CBD</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-left justify-center p-8 text-left bg-white rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Bank Deposit 2</h3>
          <p className="text-gray-600 dark:text-gray-400"><strong>Bank:</strong> XYZ Bank</p>
          <p className="text-gray-600 dark:text-gray-400"><strong>Account Name:</strong> Zoe Missions Support</p>
          <p className="text-gray-600 dark:text-gray-400"><strong>Acc No:</strong> 9876543210</p>
          <p className="text-gray-600 dark:text-gray-400"><strong>Branch:</strong> Westlands</p>
        </div>

      </div>
    </div>
  );
}

export default Donate;
