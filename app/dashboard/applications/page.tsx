import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, MapPin, Building, Clock, DollarSign } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ApplicationsPage() {
  // Mock data for applications
  const applications = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA (Remote)",
      salary: "$120,000 - $150,000",
      type: "Full-time",
      applied: "2 days ago",
      status: "interview",
      statusText: "Interview Scheduled",
      nextStep: "Technical Interview on May 10, 2025",
    },
    {
      id: "2",
      title: "React Developer",
      company: "InnovateTech",
      location: "New York, NY (Hybrid)",
      salary: "$90,000 - $110,000",
      type: "Full-time",
      applied: "1 week ago",
      status: "pending",
      statusText: "Application Under Review",
      nextStep: "Waiting for recruiter feedback",
    },
    {
      id: "3",
      title: "Frontend Engineer",
      company: "StartupXYZ",
      location: "Remote",
      salary: "$100,000 - $130,000",
      type: "Full-time",
      applied: "3 days ago",
      status: "rejected",
      statusText: "Application Not Selected",
      nextStep: "Position has been filled",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
            Under Review
          </Badge>
        )
      case "interview":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
            Interview
          </Badge>
        )
      case "offer":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
            Offer
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">
            Not Selected
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Applications</h1>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Applications</TabsTrigger>
          <TabsTrigger value="pending">Under Review</TabsTrigger>
          <TabsTrigger value="interview">Interviews</TabsTrigger>
          <TabsTrigger value="offer">Offers</TabsTrigger>
          <TabsTrigger value="rejected">Not Selected</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>Your Applications</CardTitle>
              <CardDescription>You have {applications.length} active applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {applications.map((application) => (
                  <div key={application.id} className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-lg font-semibold">
                            <Link href={`/job/${application.id}`} className="hover:text-primary">
                              {application.title}
                            </Link>
                          </h3>
                          {getStatusBadge(application.status)}
                        </div>
                        <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-3 gap-y-1 mb-2">
                          <span className="flex items-center">
                            <Building className="h-3 w-3 mr-1" />
                            {application.company}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {application.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            Applied {application.applied}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline" className="flex items-center">
                            <DollarSign className="h-3 w-3 mr-1" />
                            {application.salary}
                          </Badge>
                          <Badge variant="outline">{application.type}</Badge>
                        </div>
                        <div className="mt-2 text-sm">
                          <span className="font-medium">Next Step:</span> {application.nextStep}
                        </div>
                      </div>
                      <div className="flex gap-2 self-end md:self-center">
                        <Button size="sm" asChild>
                          <Link href={`/job/${application.id}`}>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Other tab contents would filter the applications by status */}
        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Applications Under Review</CardTitle>
              <CardDescription>Applications waiting for employer feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {applications
                  .filter((app) => app.status === "pending")
                  .map((application) => (
                    <div key={application.id} className="border rounded-lg p-4 hover:border-primary transition-colors">
                      {/* Same content structure as above */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="text-lg font-semibold">
                              <Link href={`/job/${application.id}`} className="hover:text-primary">
                                {application.title}
                              </Link>
                            </h3>
                            {getStatusBadge(application.status)}
                          </div>
                          <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-3 gap-y-1 mb-2">
                            <span className="flex items-center">
                              <Building className="h-3 w-3 mr-1" />
                              {application.company}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {application.location}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              Applied {application.applied}
                            </span>
                          </div>
                          <div className="mt-2 text-sm">
                            <span className="font-medium">Next Step:</span> {application.nextStep}
                          </div>
                        </div>
                        <div className="flex gap-2 self-end md:self-center">
                          <Button size="sm" asChild>
                            <Link href={`/job/${application.id}`}>
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View Details
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Similar structure for other tabs */}
      </Tabs>
    </div>
  )
}

