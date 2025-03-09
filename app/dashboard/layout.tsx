"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-20"} flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="border-b border-gray-200 dark:border-gray-800 p-4 flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">JD</span>
          </div>
          {isSidebarOpen && (
            <div className="flex flex-col">
              <span className="text-sm font-medium">John Doe</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">john.doe@example.com</span>
            </div>
          )}
          <button
            className="ml-auto text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
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
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            ) : (
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
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 overflow-auto py-4">
          <ul className="space-y-1 px-2">
            <li>
              <Link
                href="/dashboard/profile"
                className={`flex items-center gap-2 px-3 py-2 rounded-md ${isActive("/dashboard/profile") ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
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
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                {isSidebarOpen && <span>Profile</span>}
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/saved-jobs"
                className={`flex items-center gap-2 px-3 py-2 rounded-md ${isActive("/dashboard/saved-jobs") ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
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
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
                {isSidebarOpen && <span>Saved Jobs</span>}
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/applications"
                className={`flex items-center gap-2 px-3 py-2 rounded-md ${isActive("/dashboard/applications") ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
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
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                {isSidebarOpen && <span>Applications</span>}
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/resume"
                className={`flex items-center gap-2 px-3 py-2 rounded-md ${isActive("/dashboard/resume") ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
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
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                </svg>
                {isSidebarOpen && <span>Resume Analysis</span>}
              </Link>
            </li>
          </ul>
        </div>

        {/* Sidebar Footer */}
        <div className="border-t border-gray-200 dark:border-gray-800 p-4">
          <Link
            href="/auth/logout"
            className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
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
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" x2="9" y1="12" y2="12"></line>
            </svg>
            {isSidebarOpen && <span>Logout</span>}
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

