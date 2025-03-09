"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"

export default function ResumeAnalysisPage() {
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [jobDescription, setJobDescription] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Mock analysis result type
  type AnalysisResult = {
    matchScore: number
    matchedSkills: { name: string; proficiency: string }[]
    missingSkills: string[]
    suggestions: string[]
    keywordDensity: { keyword: string; count: number }[]
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0]
      if (
        droppedFile.type === "application/pdf" ||
        droppedFile.type === "application/msword" ||
        droppedFile.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        setFile(droppedFile)
      } else {
        alert("Please upload a PDF or Word document")
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleAnalyze = () => {
    if (!file) {
      alert("Please upload a resume")
      return
    }

    if (!jobDescription) {
      alert("Please enter a job description")
      return
    }

    setIsAnalyzing(true)

    // Simulate API call with setTimeout
    setTimeout(() => {
      // Mock analysis result
      const mockResult: AnalysisResult = {
        matchScore: Math.floor(Math.random() * 31) + 70, // Random score between 70-100
        matchedSkills: [
          { name: "React", proficiency: "Expert" },
          { name: "TypeScript", proficiency: "Advanced" },
          { name: "Next.js", proficiency: "Intermediate" },
          { name: "Tailwind CSS", proficiency: "Advanced" },
          { name: "JavaScript", proficiency: "Expert" },
        ],
        missingSkills: ["GraphQL", "AWS", "Docker"],
        suggestions: [
          "Add more details about your React project experience",
          "Include metrics and achievements in your work experience",
          "Add GraphQL to your skill set for better job matches",
          "Consider adding a portfolio link to showcase your work",
          "Quantify your achievements with specific numbers and percentages",
        ],
        keywordDensity: [
          { keyword: "React", count: 8 },
          { keyword: "TypeScript", count: 6 },
          { keyword: "Next.js", count: 4 },
          { keyword: "Frontend", count: 7 },
          { keyword: "Development", count: 5 },
        ],
      }

      setAnalysisResult(mockResult)
      setIsAnalyzing(false)
    }, 3000)
  }

  const resetAnalysis = () => {
    setFile(null)
    setJobDescription("")
    setAnalysisResult(null)
  }

  return (
    <div className="container mx-auto max-w-7xl py-12 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Resume Analysis</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
          Upload your resume and enter a job description to get AI-powered insights on your match score, missing skills,
          and suggestions for improvement.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Input Section */}
        <div className="space-y-8">
          {/* Resume Upload Section */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Upload Your Resume</h2>

            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center ${
                isDragging ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border-gray-300 dark:border-gray-700"
              } ${file ? "bg-green-50 dark:bg-green-900/20 border-green-500" : ""}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />

              {file ? (
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600 dark:text-green-400"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <path d="m9 15 3 3 3-3"></path>
                      <path d="M12 12v6"></path>
                    </svg>
                  </div>
                  <p className="text-lg font-medium mb-1">{file.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                  <div className="flex gap-3">
                    <button className="btn btn-outline btn-sm" onClick={() => setFile(null)}>
                      Remove
                    </button>
                    <button className="btn btn-outline btn-sm" onClick={handleBrowseClick}>
                      Replace
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600 dark:text-blue-400"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <path d="M12 12v6"></path>
                      <path d="m15 15-3-3-3 3"></path>
                    </svg>
                  </div>
                  <p className="text-lg font-medium mb-1">Drag & Drop your resume here</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Supports PDF, DOC, DOCX (Max 5MB)</p>
                  <button className="btn btn-primary btn-sm" onClick={handleBrowseClick}>
                    Browse Files
                  </button>
                </div>
              )}
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your resume will be analyzed by our AI to extract skills, experience, and other relevant information.
              </p>
            </div>
          </div>

          {/* Job Description Section */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Enter Job Description</h2>
            <div className="space-y-4">
              <textarea
                className="textarea w-full h-64"
                placeholder="Paste the job description here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              ></textarea>

              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">{jobDescription.length} characters</p>
                <button
                  className="btn btn-sm btn-outline"
                  onClick={() => setJobDescription("")}
                  disabled={!jobDescription}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          {/* Analyze Button */}
          <button
            className="btn btn-primary w-full py-3 h-auto text-base relative overflow-hidden group"
            onClick={handleAnalyze}
            disabled={isAnalyzing || !file || !jobDescription}
          >
            {isAnalyzing ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Analyzing Resume...
              </div>
            ) : (
              <>
                <span className="relative z-10">Analyze Resume</span>
                <span className="absolute inset-0 bg-blue-700 dark:bg-blue-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </>
            )}
          </button>
        </div>

        {/* Right Column - Results Section */}
        <div>
          {analysisResult ? (
            <div className="card p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Analysis Results</h2>
                <button className="btn btn-outline btn-sm" onClick={resetAnalysis}>
                  New Analysis
                </button>
              </div>

              {/* Match Score */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Resume-Job Match Score</h3>
                <div className="flex items-center gap-4">
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle
                        className="text-gray-200 dark:text-gray-700"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="42"
                        cx="50"
                        cy="50"
                      />
                      <circle
                        className={`${
                          analysisResult.matchScore >= 90
                            ? "text-green-500 dark:text-green-400"
                            : analysisResult.matchScore >= 75
                              ? "text-blue-500 dark:text-blue-400"
                              : "text-yellow-500 dark:text-yellow-400"
                        }`}
                        strokeWidth="10"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="42"
                        cx="50"
                        cy="50"
                        strokeDasharray={`${2 * Math.PI * 42}`}
                        strokeDashoffset={`${2 * Math.PI * 42 * (1 - analysisResult.matchScore / 100)}`}
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold">{analysisResult.matchScore}%</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Match</span>
                    </div>
                  </div>
                  <div>
                    <p className="mb-2">
                      {analysisResult.matchScore >= 90
                        ? "Excellent match! Your resume is well-aligned with this job."
                        : analysisResult.matchScore >= 75
                          ? "Good match! With a few improvements, you could be an excellent candidate."
                          : "Fair match. Consider addressing the missing skills to improve your chances."}
                    </p>
                    <Link href="/jobs" className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                      View matching jobs →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Skills Analysis */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Skills Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center">
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
                        className="mr-2 text-green-500 dark:text-green-400"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      Matched Skills
                    </h4>
                    <div className="space-y-2">
                      {analysisResult.matchedSkills.map((skill, index) => (
                        <div
                          key={index}
                          className="flex justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded-md"
                        >
                          <span>{skill.name}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{skill.proficiency}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center">
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
                        className="mr-2 text-yellow-500 dark:text-yellow-400"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      Missing Skills
                    </h4>
                    <div className="space-y-2">
                      {analysisResult.missingSkills.map((skill, index) => (
                        <div key={index} className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-md">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Keyword Density */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Keyword Density</h3>
                <div className="space-y-3">
                  {analysisResult.keywordDensity.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{item.keyword}</span>
                        <span>{item.count} mentions</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full"
                          style={{ width: `${Math.min(100, item.count * 10)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggestions */}
              <div>
                <h3 className="text-lg font-medium mb-4">Improvement Suggestions</h3>
                <div className="space-y-3 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  {analysisResult.suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="mt-0.5">
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
                          className="text-blue-600 dark:text-blue-400"
                        >
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </div>
                      <p>{suggestion}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="card p-6 h-full flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600 dark:text-blue-400"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                  <path d="M10 9H8"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Resume Analysis Results</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                Upload your resume and enter a job description, then click "Analyze Resume" to see your match score and
                suggestions.
              </p>
              <div className="space-y-4 w-full max-w-md">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4 animate-pulse"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-5/6 animate-pulse"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-2/3 animate-pulse"></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Resume Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
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
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <h3 className="font-semibold">Resume Templates</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Download professionally designed resume templates optimized for ATS systems.
            </p>
            <Link href="#" className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
              Browse Templates →
            </Link>
          </div>
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
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
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="font-semibold">Resume Writing Guide</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Learn how to write a resume that stands out and gets past ATS systems.
            </p>
            <Link href="#" className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
              Read Guide →
            </Link>
          </div>
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-semibold">Professional Review</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Get personalized feedback from professional resume writers and career coaches.
            </p>
            <Link href="#" className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
              Get Review →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

