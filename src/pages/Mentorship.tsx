const Mentorship = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mentorship Program</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Find a Mentor</h2>
          <p className="text-gray-600 mb-4">
            Connect with experienced professionals who can guide you in your career journey.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
            Browse Mentors
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Become a Mentor</h2>
          <p className="text-gray-600 mb-4">
            Share your experience and help others grow in their careers.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
            Register as Mentor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
