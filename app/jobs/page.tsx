import Link from "next/link"

export default function JobsPage() {
  // Mock data for jobs
  const jobs = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA (Remote)",
      salary: "$120,000 - $150,000",
      type: "Full-time",
      posted: "2 days ago",
      description:
        "We are looking for a Senior Frontend Developer to join our team. You will be responsible for building user interfaces for our web applications.",
      matchScore: 92,
    },
    {
      id: "2",
      title: "React Developer",
      company: "InnovateTech",
      location: "New York, NY (Hybrid)",
      salary: "$90,000 - $110,000",
      type: "Full-time",
      posted: "1 week ago",
      description:
        "Join our team as a React Developer to build modern web applications using React, TypeScript, and Next.js.",
      matchScore: 85,
    },
    {
      id: "3",
      title: "Frontend Engineer",
      company: "StartupXYZ",
      location: "Remote",
      salary: "$100,000 - $130,000",
      type: "Full-time",
      posted: "3 days ago",
      description: "We're looking for a Frontend Engineer to help us build beautiful, responsive web applications.",
      matchScore: 78,
    },
    {
      id: "4",
      title: "UI/UX Designer",
      company: "DesignStudio",
      location: "San Francisco, CA (On-site)",
      salary: "$90,000 - $120,000",
      type: "Full-time",
      posted: "1 week ago",
      description:
        "Join our design team to create beautiful, intuitive user interfaces for web and mobile applications.",
      matchScore: 65,
    },
    {
      id: "5",
      title: "Full Stack Developer",
      company: "TechGrowth",
      location: "Chicago, IL (Hybrid)",
      salary: "$110,000 - $140,000",
      type: "Full-time",
      posted: "5 days ago",
      description: "We're seeking a Full Stack Developer proficient in React, Node.js, and database technologies.",
      matchScore: 88,
    },
    {
      id: "6",
      title: "JavaScript Developer",
      company: "WebSolutions",
      location: "Remote",
      salary: "$85,000 - $110,000",
      type: "Full-time",
      posted: "2 weeks ago",
      description: "Looking for a JavaScript Developer with experience in modern frameworks like React or Vue.",
      matchScore: 82,
    },
  ]

  return (
    <div className="container mx-auto max-w-7xl py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Find Jobs</h1>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="flex max-w-3xl">
          <input
            type="text"
            placeholder="Search jobs, skills, or companies..."
            className="input w-full h-12 pl-4 pr-12 rounded-l-lg"
          />
          <button className="btn btn-primary btn-md rounded-l-none px-6 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-1/4">
          <div className="card p-6 sticky top-24">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Job Role</label>
                <select className="select w-full">
                  <option value="">All Roles</option>
                  <option value="software">Software Development</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="data">Data Science</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <select className="select w-full">
                  <option value="">All Locations</option>
                  <option value="remote">Remote</option>
                  <option value="san-francisco">San Francisco, CA</option>
                  <option value="new-york">New York, NY</option>
                  <option value="chicago">Chicago, IL</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Experience Level</label>
                <select className="select w-full">
                  <option value="">All Levels</option>
                  <option value="entry">Entry Level</option>
                  <option value="mid">Mid Level</option>
                  <option value="senior">Senior Level</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Salary Range</label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="200000"
                    step="10000"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span>$0</span>
                  <span>$200k+</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Job Type</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="full-time"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="full-time" className="ml-2 text-sm">
                      Full-time
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="part-time"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="part-time" className="ml-2 text-sm">
                      Part-time
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="contract"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="contract" className="ml-2 text-sm">
                      Contract
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remote"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="remote" className="ml-2 text-sm">
                      Remote
                    </label>
                  </div>
                </div>
              </div>

              <button className="btn btn-primary btn-md w-full">Apply Filters</button>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600 dark:text-gray-400">{jobs.length} jobs found</p>
            <div className="flex items-center">
              <label className="text-sm mr-2">Sort by:</label>
              <select className="select py-1 h-9">
                <option value="relevance">Relevance</option>
                <option value="date">Date</option>
                <option value="salary">Salary</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="card job-card p-6 hover:border-blue-500 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-semibold">
                        <Link href={`/job/${job.id}`} className="hover:text-blue-600 dark:hover:text-blue-500">
                          {job.title}
                        </Link>
                      </h3>
                      <span className="badge badge-secondary bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 md:hidden">
                        {job.matchScore}% Match
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 gap-x-3 gap-y-1 mb-2">
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-1"
                        >
                          <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                        {job.company}
                      </span>
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-1"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-1"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        Posted {job.posted}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2 mb-3">
                      <span className="badge badge-outline flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-1"
                        >
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        {job.salary}
                      </span>
                      <span className="badge badge-outline">{job.type}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-2">{job.description}</p>
                  </div>
                  <div className="flex gap-2 self-end md:self-center">
                    <span className="badge badge-secondary bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 hidden md:inline-flex">
                      {job.matchScore}% Match
                    </span>
                    <button className="btn btn-outline btn-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                      </svg>
                      Save
                    </button>
                    <Link href={`/job/${job.id}`} className="btn btn-primary btn-sm">
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex">
              <button className="btn btn-outline px-4 rounded-r-none border-r-0">Previous</button>
              <button className="btn btn-outline px-4 rounded-none border-r-0">1</button>
              <button className="btn btn-primary px-4 rounded-none border-r-0">2</button>
              <button className="btn btn-outline px-4 rounded-none border-r-0">3</button>
              <button className="btn btn-outline px-4 rounded-l-none">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

