import Link from "next/link"

interface JobDetailsPageProps {
  params: {
    id: string
  }
}

export default function JobDetailsPage({ params }: JobDetailsPageProps) {
  // In a real app, you would fetch job details based on params.id
  const job = {
    id: params.id,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA (Remote)",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    posted: "2 days ago",
    description:
      "We are looking for a Senior Frontend Developer to join our team. You will be responsible for building user interfaces for our web applications.",
    responsibilities: [
      "Develop new user-facing features using React.js",
      "Build reusable components and front-end libraries for future use",
      "Translate designs and wireframes into high-quality code",
      "Optimize components for maximum performance across devices and browsers",
    ],
    requirements: [
      "5+ years of experience in frontend development",
      "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model",
      "Thorough understanding of React.js and its core principles",
      "Experience with popular React.js workflows (such as Flux or Redux)",
      "Familiarity with newer specifications of ECMAScript",
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Unlimited PTO",
      "Remote work options",
      "Professional development budget",
    ],
  }

  // Mock data for similar jobs
  const similarJobs = [
    {
      id: "2",
      title: "React Developer",
      company: "InnovateTech",
      location: "New York, NY (Hybrid)",
      salary: "$90,000 - $110,000",
      type: "Full-time",
      matchScore: 85,
    },
    {
      id: "3",
      title: "Frontend Engineer",
      company: "StartupXYZ",
      location: "Remote",
      salary: "$100,000 - $130,000",
      type: "Full-time",
      matchScore: 78,
    },
    {
      id: "4",
      title: "UI/UX Designer",
      company: "DesignStudio",
      location: "San Francisco, CA (On-site)",
      salary: "$90,000 - $120,000",
      type: "Full-time",
      matchScore: 65,
    },
  ]

  return (
    <div className="container mx-auto max-w-7xl py-8 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="w-full lg:w-2/3">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
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
                className="mr-1"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <span className="mr-4">{job.company}</span>
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
                className="mr-1"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{job.location}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                {job.type}
              </span>
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
              <span className="badge badge-outline">Posted {job.posted}</span>
            </div>
          </div>

          <div className="card p-6 mb-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Job Description</h2>
              <p className="text-gray-600 dark:text-gray-400">{job.description}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Requirements</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                {job.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Benefits</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                {job.benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Similar Jobs</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {similarJobs.map((job) => (
                <div key={job.id} className="card job-card p-4 hover:border-blue-500 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">
                      <Link href={`/job/${job.id}`} className="hover:text-blue-600 dark:hover:text-blue-500">
                        {job.title}
                      </Link>
                    </h3>
                    <span className="badge badge-secondary bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
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
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
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
                  <Link href={`/job/${job.id}`} className="btn btn-primary btn-sm w-full">
                    View Job
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3">
          <div className="card p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Apply for this job</h2>

            <div className="mb-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Your profile has a <span className="font-semibold text-green-600 dark:text-green-500">92% match</span>{" "}
                with this job based on your skills and experience.
              </p>

              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500" style={{ width: "92%" }}></div>
              </div>
            </div>

            <div className="space-y-4">
              <button className="btn btn-primary btn-md w-full">Apply Now</button>

              <div className="flex gap-2">
                <button className="btn btn-outline btn-md flex-1 flex items-center justify-center">
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
                <button className="btn btn-outline btn-md flex-1 flex items-center justify-center">
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
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                  </svg>
                  Share
                </button>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-2">About {job.company}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                TechCorp Inc. is a leading technology company specializing in innovative software solutions for
                businesses of all sizes.
              </p>
              <Link href="#" className="text-blue-600 dark:text-blue-500 text-sm font-medium hover:underline">
                View Company Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

