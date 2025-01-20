const Events = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Event cards will go here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Alumni Networking Night</h3>
          <p className="text-gray-600 mb-4">Join us for an evening of networking and knowledge sharing.</p>
          <div className="text-sm text-gray-500">Date: March 15, 2025</div>
        </div>
      </div>
    </div>
  );
};

export default Events;
