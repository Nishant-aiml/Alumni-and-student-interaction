import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Building, GraduationCap, Briefcase, Mail, Linkedin, Github, MessageCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import CompanyInsights from '../components/directory/CompanyInsights';
import AlumniGroups from '../components/directory/AlumniGroups';
import DirectoryMap from '../components/directory/DirectoryMap';
import DirectoryStats from '../components/directory/DirectoryStats';
import ChatModal from '../components/directory/ChatModal';

// Nagpur Engineering Colleges
const nagpurColleges = [
  "Visvesvaraya National Institute of Technology (VNIT)",
  "Shri Ramdeobaba College of Engineering and Management (RCOEM)",
  "Yeshwantrao Chavan College of Engineering (YCCE)",
  "G.H. Raisoni College of Engineering (GHRCE)",
  "KDK College of Engineering",
  "Priyadarshini College of Engineering",
  "Nagpur Institute of Technology",
  "St. Vincent Pallotti College of Engineering and Technology",
  "Anjuman College of Engineering and Technology",
  "JD College of Engineering and Management",
  "Gurunanak Institute of Engineering and Technology",
  "Central India College of Engineering and Technology",
  "Tulsiramji Gaikwad-Patil College of Engineering and Technology"
];

// Batch years
const batchYears = Array.from({ length: 10 }, (_, i) => 2025 - i).map(String);

// Fields/Branches
const branches = [
  "Computer Science Engineering",
  "Information Technology",
  "Electronics & Communication",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Chemical Engineering",
  "Production Engineering",
  "Industrial Engineering",
  "Biotechnology"
];

interface Alumni {
  id: string;
  name: string;
  college: string;
  batch: string;
  branch: string;
  location: string;
  company: string;
  position: string;
  email: string;
  linkedin?: string;
  github?: string;
  avatar: string;
  skills: string[];
}

// Generate dummy alumni data
const generateDummyAlumni = (): Alumni[] => {
  const companies = [
    "TCS", "Infosys", "Wipro", "Tech Mahindra", "Persistent Systems",
    "IBM", "Accenture", "Microsoft", "Amazon", "Google"
  ];
  
  const positions = [
    "Software Engineer", "Data Scientist", "Product Manager", "System Architect",
    "DevOps Engineer", "Full Stack Developer", "ML Engineer", "Cloud Engineer"
  ];
  
  const locations = [
    "Nagpur", "Mumbai", "Pune", "Bangalore", "Hyderabad", "Delhi NCR"
  ];

  const skills = [
    "JavaScript", "Python", "Java", "React", "Node.js", "AWS", "Docker",
    "Kubernetes", "Machine Learning", "Data Science", "Cloud Computing"
  ];

  return Array.from({ length: 100 }, (_, i) => ({
    id: `alumni_${i + 1}`,
    name: [
      "Aditya", "Priya", "Rahul", "Sneha", "Vikram", "Neha", "Raj", "Pooja",
      "Amit", "Riya", "Saurabh", "Tanvi", "Kunal", "Ananya"
    ][Math.floor(Math.random() * 14)] + " " + [
      "Sharma", "Patel", "Kumar", "Singh", "Deshmukh", "Tiwari", "Malhotra",
      "Gupta", "Verma", "Joshi", "Agrawal", "Mehta"
    ][Math.floor(Math.random() * 12)],
    college: nagpurColleges[Math.floor(Math.random() * nagpurColleges.length)],
    batch: batchYears[Math.floor(Math.random() * batchYears.length)],
    branch: branches[Math.floor(Math.random() * branches.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
    company: companies[Math.floor(Math.random() * companies.length)],
    position: positions[Math.floor(Math.random() * positions.length)],
    email: `alumni${i + 1}@example.com`,
    linkedin: `https://linkedin.com/in/alumni${i + 1}`,
    github: `https://github.com/alumni${i + 1}`,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
    skills: Array.from(
      { length: Math.floor(Math.random() * 4) + 2 },
      () => skills[Math.floor(Math.random() * skills.length)]
    )
  }));
};

const Directory = () => {
  const { userData } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCollege, setSelectedCollege] = useState<string>('');
  const [selectedBatch, setSelectedBatch] = useState<string>('');
  const [selectedBranch, setSelectedBranch] = useState<string>('');
  const [alumni, setAlumni] = useState<Alumni[]>([]);
  const [filteredAlumni, setFilteredAlumni] = useState<Alumni[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedAlumni, setSelectedAlumni] = useState<Alumni | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    // Initialize with dummy data
    const dummyData = generateDummyAlumni();
    setAlumni(dummyData);
    setFilteredAlumni(dummyData);
  }, []);

  useEffect(() => {
    let filtered = alumni;

    // Apply college filter
    if (selectedCollege) {
      filtered = filtered.filter(a => a.college === selectedCollege);
    }

    // Apply batch filter
    if (selectedBatch) {
      filtered = filtered.filter(a => a.batch === selectedBatch);
    }

    // Apply branch filter
    if (selectedBranch) {
      filtered = filtered.filter(a => a.branch === selectedBranch);
    }

    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(a =>
        a.name.toLowerCase().includes(query) ||
        a.college.toLowerCase().includes(query) ||
        a.position.toLowerCase().includes(query) ||
        a.company.toLowerCase().includes(query) ||
        a.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }

    setFilteredAlumni(filtered);
  }, [selectedCollege, selectedBatch, selectedBranch, searchQuery, alumni]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Alumni Directory</h1>
          <p className="mt-2 text-gray-600">Connect with alumni from Nagpur's top engineering colleges</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search by name, college, position, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Filter className="h-5 w-5" />
            Filters
          </button>
        </div>

        {/* Filters Panel */}
        {isFilterOpen && (
          <div className="mb-6 p-4 bg-white rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* College Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">College</label>
                <select
                  value={selectedCollege}
                  onChange={(e) => setSelectedCollege(e.target.value)}
                  className="w-full rounded-md border border-gray-300 py-2 px-3"
                >
                  <option value="">All Colleges</option>
                  {nagpurColleges.map((college) => (
                    <option key={college} value={college}>{college}</option>
                  ))}
                </select>
              </div>

              {/* Batch Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Batch</label>
                <select
                  value={selectedBatch}
                  onChange={(e) => setSelectedBatch(e.target.value)}
                  className="w-full rounded-md border border-gray-300 py-2 px-3"
                >
                  <option value="">All Batches</option>
                  {batchYears.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              {/* Branch Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="w-full rounded-md border border-gray-300 py-2 px-3"
                >
                  <option value="">All Branches</option>
                  {branches.map((branch) => (
                    <option key={branch} value={branch}>{branch}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((alumnus) => (
            <div key={alumnus.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={alumnus.avatar}
                    alt={alumnus.name}
                    className="h-16 w-16 rounded-full"
                  />
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-semibold text-gray-900 truncate">{alumnus.name}</h2>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      {alumnus.company}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {alumnus.position}
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <GraduationCap className="h-4 w-4" />
                    {alumnus.college}
                  </p>
                  <p className="text-sm text-gray-600">
                    {alumnus.branch} ({alumnus.batch})
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {alumnus.location}
                  </p>
                </div>

                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {alumnus.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-start space-x-4">
                  <a
                    href={`mailto:${alumnus.email}`}
                    className="text-gray-600 hover:text-gray-900 flex items-center"
                    title="Send Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <button
                    onClick={() => {
                      setSelectedAlumni(alumnus);
                      setIsChatOpen(true);
                    }}
                    className="text-gray-600 hover:text-indigo-600 flex items-center"
                    title="Start Chat"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </button>
                  {alumnus.linkedin && (
                    <a
                      href={alumnus.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 flex items-center"
                      title="View LinkedIn Profile"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {alumnus.github && (
                    <a
                      href={alumnus.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 flex items-center"
                      title="View GitHub Profile"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredAlumni.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No alumni found matching your criteria</p>
          </div>
        )}
      </div>

      {/* Additional Directory Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Company Insights Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Insights</h2>
          <CompanyInsights />
        </div>

        {/* Alumni Groups Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Alumni Groups</h2>
          <AlumniGroups />
        </div>

        {/* Directory Map Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Alumni Around the World</h2>
          <DirectoryMap />
        </div>

        {/* Directory Stats Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Directory Statistics</h2>
          <DirectoryStats stats={{
            totalAlumni: filteredAlumni.length,
            companies: [...new Set(filteredAlumni.map(a => a.company))].length,
            locations: [...new Set(filteredAlumni.map(a => a.location))].length,
            skills: [...new Set(filteredAlumni.flatMap(a => a.skills))].length
          }} />
        </div>
      </div>

      {/* Chat Modal */}
      {selectedAlumni && (
        <ChatModal
          isOpen={isChatOpen}
          onClose={() => {
            setIsChatOpen(false);
            setSelectedAlumni(null);
          }}
          alumni={{
            id: selectedAlumni.id,
            name: selectedAlumni.name,
            avatar: selectedAlumni.avatar,
            position: selectedAlumni.position,
            company: selectedAlumni.company
          }}
        />
      )}
    </div>
  );
};

export default Directory;
