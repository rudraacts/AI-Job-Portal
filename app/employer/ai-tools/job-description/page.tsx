"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function AIJobDescriptionPage() {
  const [jobTitle, setJobTitle] = useState("")
  const [jobType, setJobType] = useState("full-time")
  const [location, setLocation] = useState("")
  const [experience, setExperience] = useState("mid-level")
  const [skills, setSkills] = useState<string[]>([])
  const [skillInput, setSkillInput] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedDescription, setGeneratedDescription] = useState("")
  const [tone, setTone] = useState("professional")

  const handleAddSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()])
      setSkillInput("")
    }
  }

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddSkill()
    }
  }

  const handleGenerate = () => {
    if (!jobTitle) {
      alert("Please enter a job title")
      return
    }

    setIsGenerating(true)

    // Simulate API call with setTimeout
    setTimeout(() => {
      // Mock generated job description
      const mockDescription = `
# ${jobTitle}

## About the Role
We are seeking a talented and motivated ${jobTitle} to join our team. This is a ${jobType} position ${location ? `based in ${location}` : "with remote options available"}. The ideal candidate will have ${experience === "entry-level" ? "some" : experience === "mid-level" ? "solid" : "extensive"} experience in the field.

## Responsibilities
- Design and implement new features and functionality
- Collaborate with cross-functional teams to define, design, and ship new features
- Identify and resolve performance bottlenecks
- Participate in code reviews and mentor junior developers
- Stay up-to-date with the latest industry trends and technologies

## Requirements
${skills.map((skill) => `- Experience with ${skill}`).join("\n")}
- Strong problem-solving abilities
- Excellent communication skills
- Ability to work in a fast-paced environment
- ${experience === "entry-level" ? "0-2 years" : experience === "mid-level" ? "3-5 years" : "5+ years"} of relevant experience

## Benefits
- Competitive salary and benefits package
- Professional development opportunities
- Flexible work schedule
- Collaborative and innovative work environment
- Opportunity to work on cutting-edge projects
      `

      setGeneratedDescription(mockDescription)
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">AI Job Description Generator</h1>
          <p className="text-gray-600 dark:text-gray-400">Create compelling job descriptions with AI assistance</p>
        </div>
        <Link href="/employer/dashboard" className="btn btn-outline">
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
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          Back to Dashboard
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">Job Details</h2>

          <div className="space-y-6">
            <div>
              <label htmlFor="jobTitle" className="block text-sm font-medium mb-2">
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                id="jobTitle"
                type="text"
                className="input"
                placeholder="e.g. Senior Frontend Developer"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="jobType" className="block text-sm font-medium mb-2">
                Job Type
              </label>
              <select id="jobType" className="select" value={jobType} onChange={(e) => setJobType(e.target.value)}>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="freelance">Freelance</option>
                <option value="internship">Internship</option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium mb-2">
                Location
              </label>
              <input
                id="location"
                type="text"
                className="input"
                placeholder="e.g. San Francisco, CA (Remote)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium mb-2">
                Experience Level
              </label>
              <select
                id="experience"
                className="select"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="entry-level">Entry Level (0-2 years)</option>
                <option value="mid-level">Mid Level (3-5 years)</option>
                <option value="senior">Senior Level (5+ years)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Required Skills</label>
              <div className="flex flex-wrap gap-2 mb-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className="ml-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    >
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
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                      <span className="sr-only">Remove {skill}</span>
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="input flex-1"
                  placeholder="Add a skill..."
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button type="button" className="btn btn-outline" onClick={handleAddSkill}>
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
                  Add
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="tone" className="block text-sm font-medium mb-2">
                Tone
              </label>
              <select id="tone" className="select" value={tone} onChange={(e) => setTone(e.target.value)}>
                <option value="professional">Professional</option>
                <option value="casual">Casual</option>
                <option value="enthusiastic">Enthusiastic</option>
                <option value="formal">Formal</option>
              </select>
            </div>

            <button
              type="button"
              className="btn btn-primary w-full py-3 h-auto text-base relative overflow-hidden group"
              onClick={handleGenerate}
              disabled={isGenerating || !jobTitle}
            >
              {isGenerating ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Generating...
                </div>
              ) : (
                <>
                  <span className="relative z-10">Generate Job Description</span>
                  <span className="absolute inset-0 bg-blue-700 dark:bg-blue-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Output Section */}
        <div className="card p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Generated Description</h2>
            {generatedDescription && (
              <div className="flex gap-2">
                <button
                  type="button"
                  className="btn btn-sm btn-outline"
                  onClick={() => navigator.clipboard.writeText(generatedDescription)}
                >
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
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                  </svg>
                  Copy
                </button>
                <Link href="/employer/post-job" className="btn btn-sm btn-primary">
                  Use This
                </Link>
              </div>
            )}
          </div>

          {generatedDescription ? (
            <div className="prose dark:prose-invert max-w-none">
              <div className="whitespace-pre-line bg-gray-50 dark:bg-gray-900 p-4 rounded-md border border-gray-200 dark:border-gray-800 h-[500px] overflow-y-auto">
                {generatedDescription}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-[500px] text-center bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-800">
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
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">No Description Generated Yet</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mb-4">
                Fill in the job details on the left and click "Generate Job Description" to create a compelling job
                posting.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Tip: The more details you provide, the better the generated description will be.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tips Section */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold mb-4">Tips for Effective Job Descriptions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
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
                >
                  <path d="m9 12 2 2 4-4"></path>
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                </svg>
              </div>
              <h3 className="font-medium">Be Specific</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Clearly define the role, responsibilities, and requirements to attract qualified candidates.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
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
                >
                  <path d="m9 12 2 2 4-4"></path>
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                </svg>
              </div>
              <h3 className="font-medium">Highlight Benefits</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Include information about company culture, benefits, and growth opportunities.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
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
                >
                  <path d="m9 12 2 2 4-4"></path>
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                </svg>
              </div>
              <h3 className="font-medium">Use Inclusive Language</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Avoid gender-biased terms and use inclusive language to attract diverse candidates.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

