const Jobs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Job Opportunities</h1>
      <div className="grid grid-cols-1 gap-6">
        {/* Job listings will go here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold mb-2">Senior Software Engineer</h3>
              <p className="text-gray-600 mb-2">Tech Corp - San Francisco, CA</p>
              <p className="text-sm text-gray-500">Posted by Alumni: Jane Doe</p>
            </div>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
