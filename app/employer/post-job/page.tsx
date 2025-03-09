import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { X, Plus } from "lucide-react"

export default function PostJobPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Post a New Job</h1>

      <Card>
        <CardHeader>
          <CardTitle>Job Details</CardTitle>
          <CardDescription>Fill in the details for your job posting</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Job Title</Label>
              <Input id="title" placeholder="e.g. Senior Frontend Developer" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="jobType">Job Type</Label>
                <select id="jobType" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                  <option value="">Select Job Type</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="freelance">Freelance</option>
                  <option value="internship">Internship</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="e.g. San Francisco, CA (Remote)" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="minSalary">Minimum Salary (USD)</Label>
                <Input id="minSalary" type="number" placeholder="e.g. 80000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxSalary">Maximum Salary (USD)</Label>
                <Input id="maxSalary" type="number" placeholder="e.g. 120000" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Job Description</Label>
              <Textarea
                id="description"
                rows={6}
                placeholder="Describe the job role, responsibilities, and your company..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements">Requirements</Label>
              <Textarea
                id="requirements"
                rows={4}
                placeholder="List the skills, qualifications, and experience required..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="benefits">Benefits</Label>
              <Textarea
                id="benefits"
                rows={4}
                placeholder="List the benefits, perks, and advantages of working at your company..."
              />
            </div>

            <div className="space-y-2">
              <Label>Required Skills</Label>
              <div className="flex flex-wrap gap-2 mb-3">
                {["React", "TypeScript", "JavaScript", "HTML", "CSS"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                    {skill}
                    <button className="ml-1 rounded-full hover:bg-muted p-0.5">
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove {skill}</span>
                    </button>
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                <Input placeholder="Add a required skill..." />
                <Button variant="outline" type="button">
                  <Plus className="h-4 w-4 mr-2" />
                  Add
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>AI Job Matching</Label>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="aiMatching" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                <Label htmlFor="aiMatching" className="text-sm font-normal">
                  Enable AI-powered candidate matching for this job
                </Label>
              </div>
              <p className="text-sm text-muted-foreground">
                Our AI will analyze candidate resumes and match them to your job requirements, helping you find the best
                candidates faster.
              </p>
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="outline">Save as Draft</Button>
              <Button type="submit">Post Job</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

