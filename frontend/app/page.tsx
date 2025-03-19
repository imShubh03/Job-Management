"use client"

import { useState, useEffect } from "react"
import {
  Container,
  TextInput,
  Select,
  RangeSlider,
  Text,
  Button,
  Box,
  Loader,
  Center,
  Grid,
  UnstyledButton,
  Image,
  Flex,
  Stack,
} from "@mantine/core"
import { Search, MapPin, User, Clock, ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"

// Job type interface
interface Job {
  id: number
  title: string
  companyName: string
  location: string
  jobType: string
  salaryMin: number
  salaryMax: number
  description: string
  requirements: string
  responsibilities: string
  applicationDeadline: string
  createdAt: string
  logo?: string
}

export default function JobListPage() {
  const router = useRouter()
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  // Filter states
  const [titleFilter, setTitleFilter] = useState("")
  const [locationFilter, setLocationFilter] = useState("")
  const [jobTypeFilter, setJobTypeFilter] = useState<string | null>(null)
  const [salaryRange, setSalaryRange] = useState<[number, number]>([50, 80])

  // Fetch jobs with filters
  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true)
      try {
        // Build query parameters
        const params = new URLSearchParams()
        if (titleFilter) params.append("title", titleFilter)
        if (locationFilter) params.append("location", locationFilter)
        if (jobTypeFilter) params.append("jobType", jobTypeFilter)
        params.append("salaryMin", (salaryRange[0] * 1000).toString())
        params.append("salaryMax", (salaryRange[1] * 1000).toString())

        const response = await fetch(`/api/jobs?${params.toString()}`)
        if (!response.ok) {
          throw new Error("Failed to fetch jobs")
        }
        const data = await response.json()
        setJobs(data)
      } catch (err) {
        setError("Failed to load jobs. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [titleFilter, locationFilter, jobTypeFilter, salaryRange])

  // Mock data for demonstration
  const mockJobs = [
    {
      id: 1,
      title: "Full Stack Developer",
      companyName: "Amazon",
      location: "Bangalore",
      jobType: "Onsite",
      salaryMin: 50000,
      salaryMax: 80000,
      description: "A user-friendly interface lets you browse stunning photos and videos",
      requirements: "Filter destinations based on interests and travel style, and create personalized",
      responsibilities: "Develop and maintain web applications",
      applicationDeadline: "2023-12-31",
      createdAt: "2023-11-01",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    },
    {
      id: 2,
      title: "Node Js Developer",
      companyName: "Tesla",
      location: "Remote",
      jobType: "Onsite",
      salaryMin: 60000,
      salaryMax: 90000,
      description: "A user-friendly interface lets you browse stunning photos and videos",
      requirements: "Filter destinations based on interests and travel style, and create personalized",
      responsibilities: "Develop backend services",
      applicationDeadline: "2023-12-15",
      createdAt: "2023-11-02",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/800px-Tesla_logo.png",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      companyName: "Figma",
      location: "Hyderabad",
      jobType: "Onsite",
      salaryMin: 45000,
      salaryMax: 75000,
      description: "A user-friendly interface lets you browse stunning photos and videos",
      requirements: "Filter destinations based on interests and travel style, and create personalized",
      responsibilities: "Design user interfaces",
      applicationDeadline: "2023-12-20",
      createdAt: "2023-11-03",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
    },
    {
      id: 4,
      title: "Full Stack Developer",
      companyName: "Amazon",
      location: "Bangalore",
      jobType: "Onsite",
      salaryMin: 70000,
      salaryMax: 100000,
      description: "A user-friendly interface lets you browse stunning photos and videos",
      requirements: "Filter destinations based on interests and travel style, and create personalized",
      responsibilities: "Develop full stack applications",
      applicationDeadline: "2023-12-25",
      createdAt: "2023-11-04",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    },
    {
      id: 5,
      title: "Node Js Developer",
      companyName: "Tesla",
      location: "Remote",
      jobType: "Onsite",
      salaryMin: 60000,
      salaryMax: 90000,
      description: "A user-friendly interface lets you browse stunning photos and videos",
      requirements: "Filter destinations based on interests and travel style, and create personalized",
      responsibilities: "Develop backend services",
      applicationDeadline: "2023-12-15",
      createdAt: "2023-11-02",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/800px-Tesla_logo.png",
    },
    {
      id: 6,
      title: "UX/UI Designer",
      companyName: "Figma",
      location: "Hyderabad",
      jobType: "Onsite",
      salaryMin: 45000,
      salaryMax: 75000,
      description: "A user-friendly interface lets you browse stunning photos and videos",
      requirements: "Filter destinations based on interests and travel style, and create personalized",
      responsibilities: "Design user interfaces",
      applicationDeadline: "2023-12-20",
      createdAt: "2023-11-03",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Swiggy_Logo.svg/330px-Swiggy_Logo.svg.png",
    },
    {
      id: 7,
      title: "Full Stack Developer",
      companyName: "Amazon",
      location: "Bangalore",
      jobType: "Onsite",
      salaryMin: 70000,
      salaryMax: 100000,
      description: "A user-friendly interface lets you browse stunning photos and videos",
      requirements: "Filter destinations based on interests and travel style, and create personalized",
      responsibilities: "Develop full stack applications",
      applicationDeadline: "2023-12-25",
      createdAt: "2023-11-04",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    },
    {
      id: 8,
      title: "Node Js Developer",
      companyName: "Tesla",
      location: "Remote",
      jobType: "Onsite",
      salaryMin: 60000,
      salaryMax: 90000,
      description: "A user-friendly interface lets you browse stunning photos and videos",
      requirements: "Filter destinations based on interests and travel style, and create personalized",
      responsibilities: "Develop backend services",
      applicationDeadline: "2023-12-15",
      createdAt: "2023-11-02",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/800px-Tesla_logo.png",
    },
  ]

  return (
    <div className="min-h-screen bg-[#fbfbff]">
      {/* Header */}
      <Box bg="white" py={15} mb={0} sx={{ borderBottom: "1px solid #eaeaea" }}>
        <Container size="xl">
          <Flex justify="center" align="center" gap={50}>
            <Box w={40} h={40}>
              <Image src="https://media.licdn.com/dms/image/v2/D560BAQHpPblOaplcOQ/company-logo_200_200/company-logo_200_200/0/1694017343509/cybermind_works_logo?e=2147483647&v=beta&t=N13ljMg1CHgxKadTUGz5b35KPUjx9qKRVed2giPMM00" alt="Logo" />
            </Box>

            <Flex gap={30}>
              <UnstyledButton>Home</UnstyledButton>
              <UnstyledButton>Find Jobs</UnstyledButton>
              <UnstyledButton>Find Talents</UnstyledButton>
              <UnstyledButton>About us</UnstyledButton>
              <UnstyledButton>Testimonials</UnstyledButton>
            </Flex>

            <Button color="violet" radius="xl" onClick={() => router.push("/create")}>
              Create Jobs
            </Button>
          </Flex>
        </Container>
      </Box>


      {/* Search Filters */}
      <Box bg="white" py={15} mb={30} sx={{ borderBottom: "1px solid #eaeaea" }}>
        <Container size="xl">
          <Flex gap={20} align="center">
            {/* Search Input */}
            <Box style={{ flex: 1 }}>
              <TextInput
                icon={<Search size={16} />}
                placeholder="Search By Job Title, Role"
                value={titleFilter}
                onChange={(e) => setTitleFilter(e.currentTarget.value)}
                radius="md"
                styles={{
                  input: {
                    border: "1px solid #eaeaea",
                    height: "45px",
                  },
                }}
              />
            </Box>

            {/* Divider */}
            <Box sx={{ height: 30, width: 1, background: "#eaeaea" }} />

            {/* Location Dropdown */}
            <Box style={{ flex: 1 }}>
              <Select
                icon={<MapPin size={16} />}
                placeholder="Preferred Location"
                value={locationFilter}
                onChange={(value) => setLocationFilter(value || "")}
                data={[
                  { value: "Bangalore", label: "Bangalore" },
                  { value: "Hyderabad", label: "Hyderabad" },
                  { value: "Chennai", label: "Chennai" },
                  { value: "Remote", label: "Remote" },
                ]}
                clearable
                radius="md"
                rightSection={<ChevronDown size={16} />}
                styles={{
                  input: {
                    border: "1px solid #eaeaea",
                    height: "45px",
                  },
                }}
              />
            </Box>

            {/* Divider */}
            <Box sx={{ height: 30, width: 1, background: "#eaeaea" }} />

            {/* Job Type Dropdown */}
            <Box style={{ flex: 1 }}>
              <Select
                icon={<User size={16} />}
                placeholder="Job type"
                value={jobTypeFilter}
                onChange={setJobTypeFilter}
                data={[
                  { value: "Full-time", label: "Full-time" },
                  { value: "Part-time", label: "Part-time" },
                  { value: "Contract", label: "Contract" },
                  { value: "Internship", label: "Internship" },
                ]}
                clearable
                radius="md"
                rightSection={<ChevronDown size={16} />}
                styles={{
                  input: {
                    border: "1px solid #eaeaea",
                    height: "45px",
                  },
                }}
              />
            </Box>

            {/* Divider */}
            <Box sx={{ height: 30, width: 1, background: "#eaeaea" }} />

            {/* Salary Range Slider */}
            <Box style={{ flex: 1.5 }}>
              <Flex justify="space-between" mb={5}>
                <Text size="sm" weight={500}>
                  Salary Per Month
                </Text>
                <Text size="sm" weight={500}>
                  ₹{salaryRange[0]}k - ₹{salaryRange[1]}k
                </Text>
              </Flex>
              <RangeSlider
                min={10}
                max={200}
                step={5}
                value={salaryRange}
                onChange={setSalaryRange}
                color="#000"
                radius="xl"
                thumbSize={14}
                styles={{
                  thumb: {
                    borderWidth: 2,
                    height: 14,
                    width: 14,
                    backgroundColor: "white",
                    borderColor: "black",
                  },
                  track: {
                    height: 3,
                  },
                }}
              />
            </Box>
          </Flex>
        </Container>
      </Box>


      {/* Job Listings */}
      <Container size="xl" pb={50}>
        {loading ? (
          <Center h={200}>
            <Loader color="violet" />
          </Center>
        ) : error ? (
          <Center h={200}>
            <Text color="red">{error}</Text>
          </Center>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
            {mockJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </Container>
    </div>
  )
}

interface JobCardProps {
  job: any
}

function JobCard({ job }: JobCardProps) {
  return (
    <Box bg="white" p={20} sx={{ borderRadius: 8, border: "1px solid #eaeaea" }}>
      <Box pos="relative" mb={15}>
        <Box
          w={60}
          h={60}
          bg="white"
          style={{
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #eaeaea",
            overflow: "hidden",
          }}
        >
          <Image
            src={job.logo || "/placeholder.svg"}
            alt={job.companyName}
            style={{
              maxWidth: "70%",
              maxHeight: "70%",
              objectFit: "contain",
            }}
          />
        </Box>
        <Box pos="absolute" top={0} right={0} bg="#b0d9ff" px={10} py={5} sx={{ borderRadius: 20 }}>
          <Text size="xs" color="#00000" weight={500}>
            24h Ago
          </Text>
        </Box>
      </Box>

      <Text size="lg" weight={700} mb={15}>
        {job.title}
      </Text>

      <Flex gap={10} mb={15} wrap="wrap">
        <Flex align="center" gap={5}>
          <User size={14} color="#686868" />
          <Text size="sm" color="#686868">
            1-3 yr Exp
          </Text>
        </Flex>

        <Flex align="center" gap={5}>
          <MapPin size={14} color="#686868" />
          <Text size="sm" color="#686868">
            {job.jobType}
          </Text>
        </Flex>

        <Flex align="center" gap={5}>
          <Clock size={14} color="#686868" />
          <Text size="sm" color="#686868">
            12LPA
          </Text>
        </Flex>
      </Flex>

      <Stack spacing={8} mb={20}>
        <Flex align="flex-start" gap={8}>
          <Text color="#686868" mt={3}>
            •
          </Text>
          <Text size="sm" color="#686868">
            {job.description}
          </Text>
        </Flex>
        <Flex align="flex-start" gap={8}>
          <Text color="#686868" mt={3}>
            •
          </Text>
          <Text size="sm" color="#686868">
            {job.requirements}
          </Text>
        </Flex>
      </Stack>

      <Button
        fullWidth
        styles={{
          root: {
            backgroundColor: "#00000",
            "&:hover": {
              backgroundColor: "#0099ee",
            },
          },
        }}
        radius="md"
      >
        Apply Now
      </Button>
    </Box>
  )
}