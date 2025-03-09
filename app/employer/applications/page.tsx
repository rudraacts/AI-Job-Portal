import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Mail, Phone, Check, X, User } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ApplicationsPage() {
  // Mock data for applications
  const applications = [
    {
      id: "1",
      candidate: {
        name: "John Smith",
        email: "john.smith@example.com",
        phone: "+1 (555) 123-4567",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      job: {
        id: "1",
        title: "Senior Frontend Developer",
      },
      appliedDate: "2 days ago",
      status: "review",
      matchScore: 92,
    },
    {
      id: "2",
      candidate: {
        name: "Emily Johnson",
        email: "emily.johnson@example.com",
        phone: "+1 (555) 987-6543",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      job: {
        id: "1",
        title: "Senior Frontend Developer",
      },
      appliedDate: "3 days ago",
      status: "interview",
      matchScore: 85,
    },
    {
      id: "3",
      candidate: {
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1 (555) 456-7890",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      job: {
        id: "2",
        title: "React Developer",
      },
      appliedDate: "1 week ago",
      status: "rejected",
      matchScore: 65,
    },
    {
      id: "4",
      candidate: {
        name: "Sarah Davis",
        email: "sarah.davis@example.com",
        phone: "+1 (555) 789-0123",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      job: {
        id: "2",
        title: "React Developer",
      },
      appliedDate: "5 days ago",
      status: "review",
      matchScore: 78,
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "review":
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
      case "hired":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
            Hired
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">
            Rejected
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
          <TabsTrigger value="review">Under Review</TabsTrigger>
          <TabsTrigger value="interview">Interviews</TabsTrigger>
          <TabsTrigger value="hired">Hired</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Applications</CardTitle>
              <CardDescription>View and manage all job applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {applications.map((application) => (
                  <div key={application.id} className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={application.candidate.avatar} alt={application.candidate.name} />
                          <AvatarFallback>
                            {application.candidate.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>

                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold">{application.candidate.name}</h3>
                            {getStatusBadge(application.status)}
                            <Badge
                              variant="secondary"
                              className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                            >
                              {application.matchScore}% Match
                            </Badge>
                          </div>

                          <p className="text-sm text-muted-foreground mb-1">
                            Applied for{" "}
                            <Link href={`/job/${application.job.id}`} className="font-medium hover:text-primary">
                              {application.job.title}
                            </Link>{" "}
                            • {application.appliedDate}
                          </p>

                          <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-3 gap-y-1">
                            <span className="flex items-center">
                              <Mail className="h-3 w-3 mr-1" />
                              {application.candidate.email}
                            </span>
                            <span className="flex items-center">
                              <Phone className="h-3 w-3 mr-1" />
                              {application.candidate.phone}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 self-end md:self-center">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/employer/applications/${application.id}`}>
                            <User className="h-4 w-4 mr-2" />
                            View Profile
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/employer/applications/${application.id}/resume`}>
                            <FileText className="h-4 w-4 mr-2" />
                            View Resume
                          </Link>
                        </Button>

                        {application.status === "review" && (
                          <>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              <Check className="h-4 w-4 mr-2" />
                              Interview
                            </Button>
                            <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                              <X className="h-4 w-4 mr-2" />
                              Reject
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Other tab contents would filter the applications by status */}
      </Tabs>
    </div>
  )
}

