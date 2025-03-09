import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react"

export default function ResumePage() {
  // Mock data for resume analysis
  const resumeAnalysis = {
    score: 85,
    skills: [
      { name: "React", level: "Expert", match: true },
      { name: "TypeScript", level: "Advanced", match: true },
      { name: "JavaScript", level: "Expert", match: true },
      { name: "Node.js", level: "Intermediate", match: true },
      { name: "GraphQL", level: "Beginner", match: false },
      { name: "AWS", level: "Beginner", match: false },
    ],
    recommendations: [
      "Add more details about your React project experience",
      "Include metrics and achievements in your work experience",
      "Add GraphQL to your skill set for better job matches",
      "Consider adding a portfolio link to showcase your work",
    ],
    jobMatches: [
      { title: "Senior Frontend Developer", company: "TechCorp", matchScore: 92 },
      { title: "React Developer", company: "InnovateTech", matchScore: 85 },
      { title: "Frontend Engineer", company: "StartupXYZ", matchScore: 78 },
    ],
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Resume Analysis</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Resume Overview</CardTitle>
              <CardDescription>AI-powered analysis of your resume</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        className="text-gray-200 dark:text-gray-700"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="42"
                        cx="50"
                        cy="50"
                      />
                      <circle
                        className="text-primary"
                        strokeWidth="8"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="42"
                        cx="50"
                        cy="50"
                        strokeDasharray={`${2 * Math.PI * 42}`}
                        strokeDashoffset={`${2 * Math.PI * 42 * (1 - resumeAnalysis.score / 100)}`}
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold">{resumeAnalysis.score}</span>
                      <span className="text-sm text-muted-foreground">Resume Score</span>
                    </div>
                  </div>
                  <Button className="mt-4" asChild>
                    <label>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload New Resume
                      <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                    </label>
                  </Button>
                </div>

                <div className="w-full md:w-2/3">
                  <h3 className="text-lg font-semibold mb-3">Improvement Recommendations</h3>
                  <ul className="space-y-2">
                    {resumeAnalysis.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Skills Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {resumeAnalysis.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{skill.name}</span>
                          {skill.match ? (
                            <Badge
                              variant="outline"
                              className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                            >
                              In Demand
                            </Badge>
                          ) : null}
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}</span>
                      </div>
                      {skill.match ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-amber-500" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resume Preview</CardTitle>
              <CardDescription>Your current resume on file</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-12">
                <FileText className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold">John_Doe_Resume.pdf</h3>
                <p className="text-sm text-muted-foreground mb-4">Uploaded on March 1, 2025</p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    View Resume
                  </Button>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Top Job Matches</CardTitle>
              <CardDescription>Based on your resume</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {resumeAnalysis.jobMatches.map((job, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{job.title}</h4>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                      >
                        {job.matchScore}%
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{job.company}</p>
                    <Progress value={job.matchScore} className="h-2 mb-2" />
                    <Button size="sm" className="w-full mt-2" asChild>
                      <a href={`/job/${index + 1}`}>View Job</a>
                    </Button>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-4" asChild>
                <a href="/jobs">View All Matching Jobs</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

