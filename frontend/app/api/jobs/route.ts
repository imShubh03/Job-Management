import { type NextRequest, NextResponse } from "next/server"

// This is a mock API for demonstration purposes
// In a real application, this would connect to your NestJS backend

// Mock data
const jobs = [
  {
    id: 1,
    title: "Full Stack Developer",
    companyName: "Amazon",
    location: "Bangalore, India",
    jobType: "Full-time",
    salaryMin: 50000,
    salaryMax: 80000,
    description: "We are looking for a Full Stack Developer to join our team.",
    requirements: "3+ years of experience with React, Node.js, and PostgreSQL.",
    responsibilities: "Develop and maintain web applications, collaborate with the team.",
    applicationDeadline: "2023-12-31T00:00:00.000Z",
    createdAt: "2023-11-01T00:00:00.000Z",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
  },
  {
    id: 2,
    title: "Node.js Developer",
    companyName: "Tesla",
    location: "Remote",
    jobType: "Contract",
    salaryMin: 60000,
    salaryMax: 90000,
    description: "We are looking for a Node.js Developer to join our team.",
    requirements: "2+ years of experience with Node.js and Express.",
    responsibilities: "Develop and maintain backend services, collaborate with the team.",
    applicationDeadline: "2023-12-15T00:00:00.000Z",
    createdAt: "2023-11-02T00:00:00.000Z",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/800px-Tesla_logo.png",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    companyName: "Figma",
    location: "Hyderabad, India",
    jobType: "Full-time",
    salaryMin: 45000,
    salaryMax: 75000,
    description: "We are looking for a UX/UI Designer to join our team.",
    requirements: "2+ years of experience with Figma and Adobe XD.",
    responsibilities: "Design user interfaces, collaborate with the team.",
    applicationDeadline: "2023-12-20T00:00:00.000Z",
    createdAt: "2023-11-03T00:00:00.000Z",
    logo: "https://cdn.worldvectorlogo.com/logos/figma-5.svg",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    companyName: "Microsoft",
    location: "Bangalore, India",
    jobType: "Full-time",
    salaryMin: 70000,
    salaryMax: 100000,
    description: "We are looking for a Full Stack Developer to join our team.",
    requirements: "5+ years of experience with React, Node.js, and PostgreSQL.",
    responsibilities: "Develop and maintain web applications, collaborate with the team.",
    applicationDeadline: "2023-12-25T00:00:00.000Z",
    createdAt: "2023-11-04T00:00:00.000Z",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
  },
]

export async function GET(request: NextRequest) {
  // Get query parameters
  const searchParams = request.nextUrl.searchParams
  const title = searchParams.get("title")
  const location = searchParams.get("location")
  const jobType = searchParams.get("jobType")
  const salaryMin = searchParams.get("salaryMin")
  const salaryMax = searchParams.get("salaryMax")

  // Filter jobs based on query parameters
  let filteredJobs = [...jobs]

  if (title) {
    filteredJobs = filteredJobs.filter((job) => job.title.toLowerCase().includes(title.toLowerCase()))
  }

  if (location) {
    filteredJobs = filteredJobs.filter((job) => job.location.toLowerCase().includes(location.toLowerCase()))
  }

  if (jobType) {
    filteredJobs = filteredJobs.filter((job) => job.jobType === jobType)
  }

  if (salaryMin) {
    filteredJobs = filteredJobs.filter((job) => job.salaryMin >= Number.parseInt(salaryMin))
  }

  if (salaryMax) {
    filteredJobs = filteredJobs.filter((job) => job.salaryMax <= Number.parseInt(salaryMax))
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json(filteredJobs)
}

export async function POST(request: NextRequest) {
  try {
    const jobData = await request.json()

    // Validate required fields
    const requiredFields = ["title", "companyName", "location", "jobType", "salaryMin", "salaryMax", "description"]

    for (const field of requiredFields) {
      if (!jobData[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // Create new job
    const newJob = {
      id: jobs.length + 1,
      ...jobData,
      requirements: jobData.requirements || "Not specified",
      responsibilities: jobData.responsibilities || "Not specified",
      applicationDeadline: jobData.applicationDeadline || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      createdAt: new Date().toISOString(),
      logo: getLogo(jobData.companyName),
    }

    // Add to mock database
    jobs.push(newJob)

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(newJob, { status: 201 })
  } catch (error) {
    console.error("Error creating job:", error)
    return NextResponse.json({ error: "Failed to create job" }, { status: 500 })
  }
}

function getLogo(companyName: string): string {
  const name = companyName.toLowerCase()
  if (name.includes("amazon")) {
    return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
  } else if (name.includes("tesla")) {
    return "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/800px-Tesla_logo.png"
  } else if (name.includes("figma")) {
    return "https://cdn.worldvectorlogo.com/logos/figma-5.svg"
  } else if (name.includes("microsoft")) {
    return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
  } else {
    return "https://cdn-icons-png.flaticon.com/512/2936/2936630.png"
  }
}

