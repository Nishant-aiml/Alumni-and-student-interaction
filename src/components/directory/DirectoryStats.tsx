import React from 'react';
import { Users, Building2, Globe, TrendingUp } from 'lucide-react';
import { AlumniStats } from '../../types/directory';

interface DirectoryStatsProps {
  stats: AlumniStats;
}

const DirectoryStats: React.FC<DirectoryStatsProps> = ({ stats }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Alumni Network Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Alumni */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-white/20">
              <Users className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-white/70">Total Alumni</p>
              <h3 className="text-2xl font-bold">{stats.totalAlumni.toLocaleString()}</h3>
            </div>
          </div>
        </div>

        {/* Companies */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-white/20">
              <Building2 className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-white/70">Companies</p>
              <h3 className="text-2xl font-bold">{stats.totalCompanies.toLocaleString()}</h3>
            </div>
          </div>
        </div>

        {/* Countries */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-white/20">
              <Globe className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-white/70">Countries</p>
              <h3 className="text-2xl font-bold">{stats.totalCountries.toLocaleString()}</h3>
            </div>
          </div>
        </div>

        {/* Top Industries */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-white/20">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-white/70">Top Industry</p>
              <h3 className="text-2xl font-bold">{stats.topIndustries[0].name}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Top Industries */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
          <h4 className="text-lg font-semibold mb-4">Top Industries</h4>
          <div className="space-y-4">
            {stats.topIndustries.map((industry) => (
              <div key={industry.name} className="flex items-center justify-between">
                <span className="text-sm text-white/70">{industry.name}</span>
                <div className="flex items-center">
                  <span className="text-sm font-medium">{industry.count.toLocaleString()}</span>
                  <div className="ml-2 w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white"
                      style={{
                        width: `${(industry.count / stats.totalAlumni) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Skills */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
          <h4 className="text-lg font-semibold mb-4">Top Skills</h4>
          <div className="flex flex-wrap gap-2">
            {stats.topSkills.map((skill) => (
              <span
                key={skill.name}
                className="px-3 py-1 rounded-full bg-white/20 text-sm font-medium"
              >
                {skill.name}
                <span className="ml-1 text-white/70">({skill.count.toLocaleString()})</span>
              </span>
            ))}
          </div>
        </div>

        {/* Batch Distribution */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
          <h4 className="text-lg font-semibold mb-4">Recent Batches</h4>
          <div className="space-y-4">
            {stats.batchDistribution.map((batch) => (
              <div key={batch.year} className="flex items-center justify-between">
                <span className="text-sm text-white/70">Class of {batch.year}</span>
                <div className="flex items-center">
                  <span className="text-sm font-medium">{batch.count.toLocaleString()}</span>
                  <div className="ml-2 w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white"
                      style={{
                        width: `${(batch.count / Math.max(...stats.batchDistribution.map(b => b.count))) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectoryStats;
