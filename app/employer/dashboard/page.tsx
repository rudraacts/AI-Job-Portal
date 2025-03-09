"use client"

import { useState } from "react"
import Link from "next/link"

export default function EmployerDashboardPage() {
  const [timeRange, setTimeRange] = useState("week")

  // Mock data for dashboard metrics
  const metrics = {
    activeJobs: 12,
    totalApplications: 87,
    newApplications: 24,
    viewRate: 78,
    applicationRate: 32,
    topPerformingJobs: [
      { id: "1", title: "Senior Frontend Developer", applications: 42, views: 215, conversionRate: 19.5 },
      { id: "2", title: "React Developer", applications: 28, views: 176, conversionRate: 15.9 },
      { id: "3", title: "UI/UX Designer", applications: 17, views: 124, conversionRate: 13.7 },
    ],
    recentApplications: [
      { id: "1", name: "John Smith", position: "Senior Frontend Developer", date: "2 hours ago", matchScore: 92 },
      { id: "2", name: "Emily Johnson", position: "React Developer", date: "5 hours ago", matchScore: 85 },
      { id: "3", name: "Michael Brown", position: "UI/UX Designer", date: "1 day ago", matchScore: 78 },
      { id: "4", name: "Sarah Davis", position: "Senior Frontend Developer", date: "2 days ago", matchScore: 88 },
    ],
    candidatesByLocation: [
      { location: "San Francisco, CA", count: 32 },
      { location: "New York, NY", count: 28 },
      { location: "Remote", count: 45 },
      { location: "Chicago, IL", count: 15 },
      { location: "Seattle, WA", count: 12 },
    ],
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Employer Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Welcome back to your employer dashboard</p>
        </div>
        <div className="flex gap-3">
          <Link href="/employer/post-job" className="btn btn-primary">
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
              <path d="M12 5v14M5 12h14"></path>
            </svg>
            Post a New Job
          </Link>
          <Link href="/employer/company" className="btn btn-outline">
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
              <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            Company Profile
          </Link>
        </div>
      </div>

      {/* Time Range Selector */}
      <div className="flex justify-end">
        <div className="inline-flex rounded-md shadow-sm">
          <button
            onClick={() => setTimeRange("week")}
            className={`px-4 py-2 text-sm font-medium rounded-l-md ${
              timeRange === "week"
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            } border border-gray-300 dark:border-gray-600`}
          >
            Week
          </button>
          <button
            onClick={() => setTimeRange("month")}
            className={`px-4 py-2 text-sm font-medium ${
              timeRange === "month"
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            } border-t border-b border-gray-300 dark:border-gray-600`}
          >
            Month
          </button>
          <button
            onClick={() => setTimeRange("year")}
            className={`px-4 py-2 text-sm font-medium rounded-r-md ${
              timeRange === "year"
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            } border border-gray-300 dark:border-gray-600`}
          >
            Year
          </button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Jobs</h3>
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
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
                className="text-blue-600 dark:text-blue-400"
              >
                <path d="M9 11V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5"></path>
                <path d="M5 11h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z"></path>
              </svg>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold">{metrics.activeJobs}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="text-green-500 dark:text-green-400">+2</span> from last {timeRange}
              </p>
            </div>
            <Link
              href="/employer/jobs"
              className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
            >
              View All
            </Link>
          </div>
        </div>

        <div className="card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Applications</h3>
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
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
                className="text-green-600 dark:text-green-400"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold">{metrics.totalApplications}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="text-green-500 dark:text-green-400">+{metrics.newApplications}</span> new this{" "}
                {timeRange}
              </p>
            </div>
            <Link
              href="/employer/applications"
              className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
            >
              View All
            </Link>
          </div>
        </div>

        <div className="card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">View Rate</h3>
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
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
                className="text-purple-600 dark:text-purple-400"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold">{metrics.viewRate}%</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="text-green-500 dark:text-green-400">+2.5%</span> from last {timeRange}
              </p>
            </div>
            <div className="w-16 h-8">
              <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-sm relative overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bottom-0 w-1.5 bg-purple-500 dark:bg-purple-400 rounded-t-sm"
                    style={{
                      height: `${Math.floor(Math.random() * 70) + 30}%`,
                      left: `${i * 2}px`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Application Rate</h3>
            <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
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
                className="text-yellow-600 dark:text-yellow-400"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
                <path d="M10 9H8"></path>
              </svg>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold">{metrics.applicationRate}%</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="text-green-500 dark:text-green-400">+1.2%</span> from last {timeRange}
              </p>
            </div>
            <div className="w-16 h-8">
              <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-sm relative overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bottom-0 w-1.5 bg-yellow-500 dark:bg-yellow-400 rounded-t-sm"
                    style={{
                      height: `${Math.floor(Math.random() * 60) + 20}%`,
                      left: `${i * 2}px`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Performing Jobs */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-semibold">Top Performing Jobs</h2>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      <th className="pb-3">Job Title</th>
                      <th className="pb-3">Applications</th>
                      <th className="pb-3">Views</th>
                      <th className="pb-3">Conversion</th>
                      <th className="pb-3"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    {metrics.topPerformingJobs.map((job) => (
                      <tr key={job.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                        <td className="py-4 pr-4">
                          <div className="font-medium">{job.title}</div>
                        </td>
                        <td className="py-4 pr-4">{job.applications}</td>
                        <td className="py-4 pr-4">{job.views}</td>
                        <td className="py-4 pr-4">
                          <div className="flex items-center">
                            <span
                              className={`mr-2 ${job.conversionRate >= 15 ? "text-green-500 dark:text-green-400" : "text-yellow-500 dark:text-yellow-400"}`}
                            >
                              {job.conversionRate}%
                            </span>
                            <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${job.conversionRate >= 15 ? "bg-green-500 dark:bg-green-400" : "bg-yellow-500 dark:bg-yellow-400"}`}
                                style={{ width: `${job.conversionRate}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">
                          <Link
                            href={`/employer/jobs/${job.id}`}
                            className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center">
                <Link
                  href="/employer/jobs"
                  className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                >
                  View All Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Candidates by Location */}
        <div>
          <div className="card">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-semibold">Candidates by Location</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {metrics.candidatesByLocation.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
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
                        className="mr-2 text-gray-500 dark:text-gray-400"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>{item.location}</span>
                    </div>
                    <span className="font-medium">{item.count}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  {/* Simple map visualization */}
                  <div className="absolute inset-0 opacity-50">
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-500 text-sm">Interactive map in production</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="card">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Recent Applications</h2>
          <Link
            href="/employer/applications"
            className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
          >
            View All
          </Link>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {metrics.recentApplications.map((application) => (
            <div
              key={application.id}
              className="p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-900/50"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 font-medium">
                  {application.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-medium">{application.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{application.position}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">{application.date}</span>
                <div className="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-xs font-medium">
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
                  >
                    <path d="m9 12 2 2 4-4"></path>
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  </svg>
                  <span>{application.matchScore}% Match</span>
                </div>
                <Link href={`/employer/applications/${application.id}`} className="btn btn-sm btn-outline">
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
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
                className="text-blue-600 dark:text-blue-400"
              >
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </div>
            <h3 className="font-semibold">AI Job Description Writer</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Generate compelling job descriptions with our AI tool. Optimize for better candidate matches.
          </p>
          <Link href="/employer/ai-tools/job-description" className="btn btn-sm btn-outline w-full">
            Create Job Description
          </Link>
        </div>

        <div className="card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
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
                className="text-purple-600 dark:text-purple-400"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="font-semibold">Candidate Screening</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Set up automated screening questions and assessments for your job postings.
          </p>
          <Link href="/employer/screening" className="btn btn-sm btn-outline w-full">
            Setup Screening
          </Link>
        </div>

        <div className="card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
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
                className="text-green-600 dark:text-green-400"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="font-semibold">Interview Scheduler</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Schedule and manage interviews with candidates. Sync with your calendar.
          </p>
          <Link href="/employer/interviews" className="btn btn-sm btn-outline w-full">
            Manage Interviews
          </Link>
        </div>
      </div>
    </div>
  )
}

