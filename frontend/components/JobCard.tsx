import { Box, Text, Button, Image, Flex, Stack } from "@mantine/core";
import { MapPin, User, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface Job {
  id: number;
  title: string;
  companyName: string;
  location: string;
  jobType: string;
  salaryMin: number;
  salaryMax: number;
  description: string;
  requirements: string;
  responsibilities: string;
  applicationDeadline: string;
  createdAt: string;
  logo?: string;
}

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const formatSalary = (min: number, max: number) => {
    const formatValue = (value: number) =>
      value >= 100000 ? `${(value / 100000).toFixed(1)}L` : `${(value / 1000).toFixed(0)}K`;
    return `₹${formatValue(min)} - ₹${formatValue(max)}`;
  };

  const getTimeAgo = (dateString: string) => {
    return formatDistanceToNow(new Date(dateString), { addSuffix: false });
  };

  const getLogoUrl = () => {
    if (job.logo) return job.logo;
    if (job.companyName.toLowerCase().includes("amazon")) {
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png";
    } else if (job.companyName.toLowerCase().includes("tesla")) {
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/800px-Tesla_logo.png";
    } else {
      return "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png";
    }
  };

  return (
    <Box bg="white" p={20} sx={{ borderRadius: 8, border: "1px solid #eaeaea" }} mb={20}>
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
            src={getLogoUrl() || "/placeholder.svg"}
            alt={job.companyName}
            style={{ maxWidth: "70%", maxHeight: "70%", objectFit: "contain" }}
          />
        </Box>
        <Box pos="absolute" top={0} right={0} bg="#B0D9FF" px={10} py={5} sx={{ borderRadius: 20 }}>
          <Text size="xs" color="black" weight={500}>
            {getTimeAgo(job.createdAt) === "1 day" ? "24h Ago" : getTimeAgo(job.createdAt)}
          </Text>
        </Box>
      </Box>

      <Text size="lg" weight={700} mb={15}>
        {job.title}
      </Text>

      <Flex gap={10} mb={15} wrap="wrap">
        <Flex align="center" gap={5}>
          <User size={14} color="#686868" />
          <Text size="sm" color="#686868">1-3 yr Exp</Text>
        </Flex>
        <Flex align="center" gap={5}>
          <MapPin size={14} color="#686868" />
          <Text size="sm" color="#686868">{job.jobType}</Text>
        </Flex>
        <Flex align="center" gap={5}>
          <Clock size={14} color="#686868" />
          <Text size="sm" color="#686868">12LPA</Text>
        </Flex>
      </Flex>

      <Stack spacing={8} mb={20}>
        <Flex align="flex-start" gap={8}>
          <Text color="#686868" mt={3}>•</Text>
          <Text size="sm" color="#686868">{job.description}</Text>
        </Flex>
        <Flex align="flex-start" gap={8}>
          <Text color="#686868" mt={3}>•</Text>
          <Text size="sm" color="#686868">{job.requirements}</Text>
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
  );
}