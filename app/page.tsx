"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced Hero Section with Animation */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-900 dark:via-blue-800 dark:to-indigo-900 py-20 px-4">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-400/20 dark:bg-blue-700/20 blur-3xl animate-blob"></div>
          <div className="absolute top-40 -left-20 w-60 h-60 rounded-full bg-indigo-400/20 dark:bg-indigo-700/20 blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-40 right-20 w-60 h-60 rounded-full bg-purple-400/20 dark:bg-purple-700/20 blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              <span className="animate-pulse mr-2">🔥</span> Over 10,000 jobs
              from top companies
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Find Your Dream Job with{" "}
              <span className="text-yellow-300 relative inline-block">
                AI
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-300 rounded animate-pulse"></span>
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Our AI-powered platform matches your skills with the perfect job
              opportunities, making your job search smarter and more efficient.
            </p>

            {/* Enhanced Search Bar */}
            <div className="relative max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
              <div className="flex shadow-lg rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Search jobs, skills, or companies..."
                  className="input w-full h-14 pl-4 pr-12 text-lg rounded-l-lg border-0 focus:ring-2 focus:ring-yellow-300"
                />
                <button className="btn bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-medium btn-lg rounded-l-none px-6 flex items-center border-0 transition-all duration-300">
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

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/jobs"
                className="btn bg-white text-blue-600 hover:bg-blue-50 btn-lg group relative overflow-hidden"
              >
                <span className="relative z-10">Find Jobs</span>
                <span className="absolute inset-0 bg-blue-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
              <Link
                href="/resume-analysis"
                className="btn border-2 border-white/50 text-white hover:bg-white/10 btn-lg group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
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
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                  Upload Resume
                </span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
              <Link
                href="/employer"
                className="btn bg-transparent border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-blue-700 btn-lg group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
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
                    <rect
                      width="20"
                      height="14"
                      x="2"
                      y="7"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  Post a Job
                </span>
                <span className="absolute inset-0 bg-yellow-300 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </div>
          </div>

          {/* Trusted By Companies */}
          <div className="mt-16 text-center">
            <p className="text-white/60 text-sm uppercase tracking-wider mb-6">
              Trusted by leading companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {["Google", "Microsoft", "Amazon", "Apple", "Meta"].map(
                (company) => (
                  <div
                    key={company}
                    className="text-white/80 font-bold text-xl"
                  >
                    {company}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-3">
              Explore Categories
            </span>
            <h2 className="text-3xl font-bold">Popular Job Categories</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
              Explore jobs in different categories to find your perfect match
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Software Development", icon: "💻", count: 1240 },
              { name: "Design", icon: "🎨", count: 842 },
              { name: "Marketing", icon: "📊", count: 647 },
              { name: "Data Science", icon: "📈", count: 523 },
              { name: "Customer Support", icon: "🎧", count: 412 },
              { name: "Sales", icon: "🤝", count: 325 },
              { name: "Finance", icon: "💰", count: 289 },
              { name: "Human Resources", icon: "👥", count: 176 },
            ].map((category) => (
              <Link
                href={`/jobs?category=${category.name.toLowerCase().replace(" ", "-")}`}
                key={category.name}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </span>
                  <h3 className="font-semibold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {category.count} jobs
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section with Enhanced Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-3">
              Featured Opportunities
            </span>
            <h2 className="text-3xl font-bold">Featured Jobs</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
              Discover top opportunities from leading companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                title: "Senior Frontend Developer",
                company: "TechCorp Inc.",
                logo: "T",
                location: "San Francisco (Remote)",
                salary: "$120k - $150k",
                type: "Full-time",
                matchScore: 92,
                tags: ["React", "TypeScript", "Next.js"],
                isHot: true,
                isNew: false,
              },
              {
                id: 2,
                title: "UX/UI Designer",
                company: "DesignStudio",
                logo: "D",
                location: "New York (Hybrid)",
                salary: "$90k - $120k",
                type: "Full-time",
                matchScore: 88,
                tags: ["Figma", "UI Design", "User Research"],
                isHot: false,
                isNew: true,
              },
              {
                id: 3,
                title: "Full Stack Developer",
                company: "StartupXYZ",
                logo: "S",
                location: "Remote",
                salary: "$100k - $130k",
                type: "Full-time",
                matchScore: 85,
                tags: ["React", "Node.js", "MongoDB"],
                isHot: false,
                isNew: true,
              },
            ].map((job) => (
              <div
                key={job.id}
                className="card job-card p-6 hover:border-blue-500 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Status badges */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {job.isHot && (
                    <span className="badge bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 flex items-center gap-1 animate-pulse">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>{" "}
                      Hot
                    </span>
                  )}
                  {job.isNew && (
                    <span className="badge bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      New
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 rounded-md flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                      {job.logo}
                    </div>
                    <div className="ml-3">
                      <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {job.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="radial-progress-container">
                      <div className="relative w-12 h-12 flex items-center justify-center">
                        <svg
                          className="w-full h-full -rotate-90"
                          viewBox="0 0 36 36"
                        >
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-gray-200 dark:text-gray-700"
                          />
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeDasharray={`${2 * Math.PI * 16}`}
                            strokeDashoffset={`${2 * Math.PI * 16 * (1 - job.matchScore / 100)}`}
                            className="text-green-500 dark:text-green-400 transition-all duration-500 ease-out"
                          />
                        </svg>
                        <span className="absolute text-sm font-semibold">
                          {job.matchScore}%
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Match
                    </span>
                  </div>
                </div>

                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
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
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                    {job.salary}
                  </span>
                  <span className="badge badge-outline">{job.type}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/job/${job.id}`}
                  className="btn btn-primary btn-md w-full group-hover:bg-blue-700 dark:group-hover:bg-blue-600 transition-colors"
                >
                  View Details
                </Link>

                {/* Decorative element */}
                <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-blue-100/50 dark:bg-blue-900/20 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/jobs"
              className="btn btn-outline btn-lg group relative overflow-hidden inline-flex items-center"
            >
              <span className="relative z-10">View All Jobs</span>
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
                className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
              <span className="absolute inset-0 bg-blue-100 dark:bg-blue-900/50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section with Enhanced Visuals */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full border-8 border-blue-100 dark:border-blue-900/30 opacity-60"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full border-8 border-indigo-100 dark:border-indigo-900/30 opacity-60"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-3">
              Simple Process
            </span>
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our AI-powered platform simplifies your job search in just three
              easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-24 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 dark:from-blue-600 dark:to-indigo-700"></div>

            {[
              {
                step: 1,
                title: "Upload Your Resume",
                description:
                  "Our AI analyzes your skills and experience to create your profile.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M12 12v6"></path>
                    <path d="m15 15-3-3-3 3"></path>
                  </svg>
                ),
              },
              {
                step: 2,
                title: "Get Matched",
                description:
                  "Our AI matches you with jobs that fit your skills and career goals.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 11 3 3L22 4"></path>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                ),
              },
              {
                step: 3,
                title: "Apply with Ease",
                description:
                  "Apply to jobs with one click and track your applications.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="m9 3-6 6"></path>
                    <path d="m9 3 6 6"></path>
                    <path d="M8 14h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 18h.01"></path>
                    <path d="M12 18h.01"></path>
                    <path d="M16 18h.01"></path>
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 rounded-full flex items-center justify-center text-white mb-6 relative z-10">
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 dark:bg-yellow-500 rounded-full text-gray-900 text-sm font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/register"
              className="btn bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white btn-lg group"
            >
              <span>Get Started Now</span>
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
                className="ml-2 group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-3">
              Success Stories
            </span>
            <h2 className="text-3xl font-bold">What Our Users Say</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
              Hear from people who found their dream jobs using our platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "UX Designer at Google",
                image: "/placeholder.svg?height=80&width=80",
                quote:
                  "The AI matching technology helped me find a job that perfectly aligned with my skills and career goals. I received an offer within 2 weeks!",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Software Engineer at Microsoft",
                image: "/placeholder.svg?height=80&width=80",
                quote:
                  "I was skeptical about AI-powered job matching, but it actually worked! The platform suggested jobs I wouldn't have found otherwise.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Manager at Spotify",
                image: "/placeholder.svg?height=80&width=80",
                quote:
                  "The resume analysis feature gave me valuable insights on how to improve my profile. This definitely helped me stand out to employers.",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                      }
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-400 italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section with Animations */}
      <section className="py-16 px-4 bg-blue-600 dark:bg-blue-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "10,000+", label: "Active Job Listings", icon: "📋" },
              { value: "5,000+", label: "Companies", icon: "🏢" },
              { value: "1M+", label: "Job Seekers", icon: "👥" },
            ].map((stat, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold mb-2 flex items-center justify-center">
                  <span className="text-4xl mr-3">{stat.icon}</span>
                  <span className="counter-animation">{stat.value}</span>
                </div>
                <p className="text-xl text-blue-100">{stat.label}</p>
                <div className="absolute -z-10 inset-0 bg-blue-500/20 dark:bg-blue-800/20 rounded-lg blur-xl animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-3">
              AI-Powered Features
            </span>
            <h2 className="text-3xl font-bold">Smart Job Search Tools</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
              Our AI technology makes finding your dream job easier than ever
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI Resume Analysis",
                description:
                  "Get personalized feedback on your resume and suggestions for improvement to increase your chances of getting hired.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                    <path d="M10 9H8"></path>
                  </svg>
                ),
              },
              {
                title: "Skill Matching",
                description:
                  "Our AI analyzes your skills and matches them with job requirements to find the perfect opportunities for you.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                    <path d="M12 2v2"></path>
                    <path d="M12 22v-2"></path>
                    <path d="m17 20.66-1-1.73"></path>
                    <path d="M11 10.27 7 3.34"></path>
                    <path d="m20.66 17-1.73-1"></path>
                    <path d="m3.34 7 1.73 1"></path>
                    <path d="M14 12h8"></path>
                    <path d="M2 12h2"></path>
                    <path d="m20.66 7-1.73 1"></path>
                    <path d="m3.34 17 1.73-1"></path>
                    <path d="m17 3.34-1 1.73"></path>
                    <path d="m7 20.66 1-1.73"></path>
                  </svg>
                ),
              },
              {
                title: "Salary Insights",
                description:
                  "Get accurate salary information based on your skills, experience, and location to help you negotiate better offers.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" x2="12" y1="2" y2="22"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                ),
              },
              {
                title: "Career Path Recommendations",
                description:
                  "Discover potential career paths based on your current skills and interests, with recommendations for skill development.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                    <path d="M12 13v8"></path>
                    <path d="M12 3v3"></path>
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Stay Updated with Job Alerts
              </h2>
              <p className="text-blue-100 mb-6">
                Subscribe to our newsletter to receive personalized job
                recommendations and career advice directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input border-0 focus:ring-2 focus:ring-yellow-300 text-gray-900 flex-1"
                />
                <button className="btn bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium border-0">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-blue-200 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-blue-500/30 rounded-full absolute -top-5 -left-5 animate-pulse"></div>
                <div className="w-48 h-48 bg-indigo-500/30 rounded-full absolute -bottom-3 -right-3 animate-pulse animation-delay-1000"></div>
                <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900">
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
                      >
                        <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"></path>
                        <polyline points="15,9 18,9 18,11"></polyline>
                        <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"></path>
                        <line x1="6" x2="7" y1="10" y2="10"></line>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Job Alert</h3>
                  </div>
                  <p className="text-sm mb-3">New job matching your profile:</p>
                  <div className="bg-white/10 rounded-lg p-3 mb-3">
                    <h4 className="font-medium">Senior Frontend Developer</h4>
                    <p className="text-sm text-blue-100">
                      TechCorp Inc. • San Francisco
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm">$120k - $150k</span>
                      <span className="bg-green-400/20 text-green-300 text-xs px-2 py-1 rounded">
                        92% Match
                      </span>
                    </div>
                  </div>
                  <button className="btn bg-blue-500/30 hover:bg-blue-500/50 text-white border border-white/20 w-full text-sm">
                    View Job
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-400"
                >
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <span className="text-xl font-bold">AI Job Portal</span>
              </div>
              <p className="text-gray-400 mb-4">
                Find your dream job with AI-powered matching.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
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
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
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
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
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
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
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
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Job Seekers</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/jobs"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Browse Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resume-analysis"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Resume Analysis
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/career-resources"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Career Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/salary-insights"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Salary Insights
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Employers</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/employer/post-job"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Post a Job
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employer/applications"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Manage Applications
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Employer Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employer/resources"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Hiring Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
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
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  support@aijobportal.com
                </li>
                <li className="flex items-center text-gray-400">
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center text-gray-400">
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
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  123 Tech Street, San Francisco, CA
                </li>
              </ul>
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Download Our App</h4>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="bg-gray-800 hover:bg-gray-700 transition-colors p-2 rounded flex items-center"
                  >
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
                      className="mr-1"
                    >
                      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                      <path d="M10 2c1 .5 2 2 2 5"></path>
                    </svg>
                    iOS
                  </a>
                  <a
                    href="#"
                    className="bg-gray-800 hover:bg-gray-700 transition-colors p-2 rounded flex items-center"
                  >
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
                      className="mr-1"
                    >
                      <path d="M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5Z"></path>
                      <path d="m12 12-5.5 5.5"></path>
                      <path d="m12 12 5.5-5.5"></path>
                      <path d="M12 12v9"></path>
                      <path d="M12 12H3"></path>
                      <path d="M12 12V3"></path>
                      <path d="M12 12h9"></path>
                    </svg>
                    Android
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AI Job Portal. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
          </svg>
          <span className="absolute right-full mr-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat with AI Assistant
          </span>
        </button>
      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .counter-animation {
          display: inline-block;
          position: relative;
        }
        .counter-animation::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: currentColor;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 1s ease-out;
          animation: counter-line 2s forwards 0.5s;
        }
        @keyframes counter-line {
          to {
            transform: scaleX(1);
            transform-origin: left;
          }
        }
      `}</style>
    </div>
  );
}
