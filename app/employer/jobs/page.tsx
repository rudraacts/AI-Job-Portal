import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Eye, Users, Clock } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ManageJobsPage() {
  // Mock data for jobs
  const jobs = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      location: "San Francisco, CA (Remote)",
      type: "Full-time",
      posted: "2 days ago",
      expires: "30 days left",
      status: "active",
      applications: 12,
    },
    {
      id: "2",
      title: "React Developer",
      location: "New York, NY (Hybrid)",
      type: "Full-time",
      posted: "1 week ago",
      expires: "23 days left",
      status: "active",
      applications: 8,
    },
    {
      id: "3",
      title: "Frontend Engineer",
      location: "Remote",
      type: "Full-time",
      posted: "3 days ago",
      expires: "27 days left",
      status: "draft",
      applications: 0,
    },
    {
      id: "4",
      title: "UI/UX Designer",
      location: "San Francisco, CA (On-site)",
      type: "Full-time",
      posted: "2 weeks ago",
      expires: "16 days left",
      status: "expired",
      applications: 24,
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
            Active
          </Badge>
        )
      case "draft":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
            Draft
          </Badge>
        )
      case "expired":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">
            Expired
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Jobs</h1>
        <Button asChild>
          <Link href="/employer/post-job">Post a New Job</Link>
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Jobs</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
          <TabsTrigger value="expired">Expired</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>Your Job Listings</CardTitle>
              <CardDescription>Manage all your job postings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {jobs.map((job) => (
                  <div key={job.id} className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-lg font-semibold">
                            <Link href={`/job/${job.id}`} className="hover:text-primary">
                              {job.title}
                            </Link>
                          </h3>
                          {getStatusBadge(job.status)}
                        </div>
                        <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-3 gap-y-1 mb-2">
                          <span>{job.location}</span>
                          <span>{job.type}</span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            Posted {job.posted}
                          </span>
                          <span>Expires in {job.expires}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>
                            <strong>{job.applications}</strong> applications received
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2 self-end md:self-center">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/job/${job.id}`}>
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/employer/jobs/edit/${job.id}`}>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Other tab contents would filter the jobs by status */}
      </Tabs>
    </div>
  )
}

