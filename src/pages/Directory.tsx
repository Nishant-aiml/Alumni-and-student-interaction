const Directory = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Alumni Directory</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Alumni cards will go here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
            <div>
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-gray-600">Software Engineer at Tech Corp</p>
              <p className="text-sm text-gray-500">Class of 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory;
