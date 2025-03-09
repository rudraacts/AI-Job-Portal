export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="card p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Personal Information</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Update your personal details</p>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium">
                    First Name
                  </label>
                  <input id="firstName" className="input" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium">
                    Last Name
                  </label>
                  <input id="lastName" className="input" defaultValue="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input id="email" type="email" className="input" defaultValue="john.doe@example.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone
                </label>
                <input id="phone" type="tel" className="input" defaultValue="+1 (555) 123-4567" />
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="block text-sm font-medium">
                  Location
                </label>
                <input id="location" className="input" defaultValue="San Francisco, CA" />
              </div>

              <div className="space-y-2">
                <label htmlFor="bio" className="block text-sm font-medium">
                  Professional Summary
                </label>
                <textarea
                  id="bio"
                  className="textarea"
                  rows={4}
                  defaultValue="Senior Frontend Developer with 7+ years of experience building responsive web applications using React, TypeScript, and modern JavaScript frameworks."
                />
              </div>

              <button type="submit" className="btn btn-primary btn-md">
                Save Changes
              </button>
            </form>
          </div>
        </div>

        <div>
          <div className="card p-6 mb-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Skills</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Add or remove skills</p>
            </div>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "JavaScript", "HTML", "CSS", "Next.js", "Redux", "Node.js", "GraphQL"].map(
                  (skill) => (
                    <span key={skill} className="badge badge-secondary flex items-center gap-1">
                      {skill}
                      <button className="ml-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 p-0.5">
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                        <span className="sr-only">Remove {skill}</span>
                      </button>
                    </span>
                  ),
                )}
              </div>

              <div className="flex gap-2">
                <input placeholder="Add a skill..." className="input flex-1" />
                <button className="btn btn-outline btn-md">
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
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Job Preferences</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Set your job preferences</p>
            </div>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="jobTitle" className="block text-sm font-medium">
                  Desired Job Title
                </label>
                <input id="jobTitle" className="input" defaultValue="Senior Frontend Developer" />
              </div>

              <div className="space-y-2">
                <label htmlFor="jobType" className="block text-sm font-medium">
                  Job Type
                </label>
                <select id="jobType" className="select">
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="freelance">Freelance</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="salary" className="block text-sm font-medium">
                  Expected Salary (USD)
                </label>
                <input id="salary" type="number" className="input" defaultValue="120000" />
              </div>

              <div className="space-y-2">
                <label htmlFor="remote" className="block text-sm font-medium">
                  Remote Preference
                </label>
                <select id="remote" className="select">
                  <option value="remote">Remote Only</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="onsite">On-site</option>
                  <option value="any">Any</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary btn-md">
                Save Preferences
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

