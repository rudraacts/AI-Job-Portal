import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bookmark, ExternalLink, MapPin, Building, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

export default function SavedJobsPage() {
  // Mock data for saved jobs
  const savedJobs = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA (Remote)",
      salary: "$120,000 - $150,000",
      type: "Full-time",
      posted: "2 days ago",
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
      matchScore: 78,
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Saved Jobs</h1>

      <Card>
        <CardHeader>
          <CardTitle>Your Bookmarked Jobs</CardTitle>
          <CardDescription>You have saved {savedJobs.length} jobs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {savedJobs.map((job) => (
              <div key={job.id} className="border rounded-lg p-4 hover:border-primary transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      <Link href={`/job/${job.id}`} className="hover:text-primary">
                        {job.title}
                      </Link>
                    </h3>
                    <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-3 gap-y-1 mb-2">
                      <span className="flex items-center">
                        <Building className="h-3 w-3 mr-1" />
                        {job.company}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        Posted {job.posted}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline" className="flex items-center">
                        <DollarSign className="h-3 w-3 mr-1" />
                        {job.salary}
                      </Badge>
                      <Badge variant="outline">{job.type}</Badge>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                      >
                        {job.matchScore}% Match
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2 self-end md:self-center">
                    <Button variant="outline" size="sm">
                      <Bookmark className="h-4 w-4 mr-2 fill-current" />
                      Saved
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={`/job/${job.id}`}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

