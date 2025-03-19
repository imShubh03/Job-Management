"use client"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import {
  Container,
  Title,
  TextInput,
  Select,
  Textarea,
  NumberInput,
  Button,
  Box,
  Grid,
  Text,
  Flex,
  Modal,
  Stack,
  UnstyledButton,
  Image,
} from "@mantine/core"
import { useRouter } from "next/navigation"
import { notifications } from "@mantine/notifications"
import { ChevronDown, ArrowRight } from "lucide-react"
import JobListPage from "../page"

interface JobFormData {
  title: string
  companyName: string
  location: string
  jobType: string
  salaryMin: number
  salaryMax: number
  description: string
}

export default function CreateJobPage() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [opened, setOpened] = useState(true)
  const [locationOpen, setLocationOpen] = useState(false)
  const [jobTypeOpen, setJobTypeOpen] = useState(true)

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JobFormData>({
    defaultValues: {
      title: "Full Stack Developer",
      companyName: "Amazon",
      location: "Chennai",
      jobType: "Full Time",
      salaryMin: 0,
      salaryMax: 1200000,
      description: "",
    },
  })

  const onSubmit = async (data: JobFormData) => {
    setSubmitting(true)
    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to create job")
      }

      notifications.show({
        title: "Success",
        message: "Job posting created successfully",
        color: "green",
      })

      router.push("/")
    } catch (error) {
      console.error("Error creating job:", error)
      notifications.show({
        title: "Error",
        message: "Failed to create job posting. Please try again.",
        color: "red",
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => router.push("/")}
        title=""
        size="lg"
        centered
        withCloseButton={false}
        styles={{
          body: {
            padding: "30px",
          },
          content: {
            borderRadius: "12px",
          },
        }}
      >
        <Title order={3} align="center" mb={30}>
          Create Job Opening
        </Title>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid>
            <Grid.Col span={6}>
              <Stack spacing={8}>
                <Text weight={500}>Job Title</Text>
                <TextInput
                  placeholder="Full Stack Developer"
                  defaultValue="Full Stack Developer"
                  {...register("title", { required: "Job title is required" })}
                  error={errors.title?.message}
                  styles={{
                    input: {
                      height: "45px",
                      borderRadius: "8px",
                    },
                  }}
                />
              </Stack>
            </Grid.Col>

            <Grid.Col span={6}>
              <Stack spacing={8}>
                <Text weight={500}>Company Name</Text>
                <TextInput
                  placeholder="Amazon"
                  defaultValue="Amazon"
                  {...register("companyName", { required: "Company name is required" })}
                  error={errors.companyName?.message}
                  styles={{
                    input: {
                      height: "45px",
                      borderRadius: "8px",
                    },
                  }}
                />
              </Stack>
            </Grid.Col>

            <Grid.Col span={6}>
              <Stack spacing={8}>
                <Text weight={500}>Location</Text>
                <Controller
                  name="location"
                  control={control}
                  rules={{ required: "Location is required" }}
                  render={({ field }) => (
                    <Select
                      placeholder="Chennai"
                      defaultValue="Chennai"
                      data={[
                        { value: "Chennai", label: "Chennai" },
                        { value: "Bangalore", label: "Bangalore" },
                        { value: "Hyderabad", label: "Hyderabad" },
                        { value: "Remote", label: "Remote" },
                      ]}
                      error={errors.location?.message}
                      rightSection={<ChevronDown size={14} />}
                      styles={{
                        input: {
                          height: "45px",
                          borderRadius: "8px",
                        },
                        rightSection: {
                          pointerEvents: "none",
                        },
                      }}
                      {...field}
                      dropdownOpened={locationOpen}
                      onDropdownOpen={() => setLocationOpen(true)}
                      onDropdownClose={() => setLocationOpen(false)}
                    />
                  )}
                />
              </Stack>
            </Grid.Col>

            <Grid.Col span={6}>
              <Stack spacing={8}>
                <Text weight={500}>Job Type</Text>
                <Controller
                  name="jobType"
                  control={control}
                  rules={{ required: "Job type is required" }}
                  render={({ field }) => (
                    <Select
                      placeholder="FullTime"
                      defaultValue="Full Time"
                      data={[
                        { value: "Internship", label: "Internship" },
                        { value: "Full Time", label: "Full Time" },
                        { value: "Partime", label: "Partime" },
                        { value: "Contract", label: "Contract" },
                      ]}
                      error={errors.jobType?.message}
                      rightSection={<ChevronDown size={14} />}
                      styles={{
                        input: {
                          height: "45px",
                          borderRadius: "8px",
                        },
                        rightSection: {
                          pointerEvents: "none",
                        },
                        dropdown: {
                          borderRadius: "8px",
                        },
                        item: {
                          padding: "8px 12px",
                        },
                      }}
                      {...field}
                      dropdownOpened={jobTypeOpen}
                      onDropdownOpen={() => setJobTypeOpen(true)}
                      onDropdownClose={() => setJobTypeOpen(false)}
                    />
                  )}
                />
              </Stack>
            </Grid.Col>

            <Grid.Col span={6}>
              <Stack spacing={8}>
                <Text weight={500}>Salary Range</Text>
                <Flex gap={15} align="center">
                  <Controller
                    name="salaryMin"
                    control={control}
                    render={({ field }) => (
                      <NumberInput
                        placeholder="₹0"
                        defaultValue={0}
                        min={0}
                        step={10000}
                        formatter={(value) => `₹${value}`}
                        error={errors.salaryMin?.message}
                        styles={{
                          input: {
                            height: "45px",
                            borderRadius: "8px",
                          },
                          wrapper: {
                            flex: 1,
                          },
                        }}
                        {...field}
                      />
                    )}
                  />
                  <Text>to</Text>
                  <Controller
                    name="salaryMax"
                    control={control}
                    render={({ field }) => (
                      <NumberInput
                        placeholder="₹12,00,000"
                        defaultValue={1200000}
                        min={0}
                        step={10000}
                        formatter={(value) => `₹${value}`}
                        error={errors.salaryMax?.message}
                        styles={{
                          input: {
                            height: "45px",
                            borderRadius: "8px",
                          },
                          wrapper: {
                            flex: 1,
                          },
                        }}
                        {...field}
                      />
                    )}
                  />
                </Flex>
              </Stack>
            </Grid.Col>

            <Grid.Col span={6}>
              {/* Empty column for balance */}
            </Grid.Col>

            <Grid.Col span={12}>
              <Stack spacing={8}>
                <Text weight={500}>Job Description</Text>
                <Textarea
                  placeholder="Please share a description to let the candidate know about the job"
                  minRows={5}
                  {...register("description", { required: "Job description is required" })}
                  error={errors.description?.message}
                  styles={{
                    input: {
                      borderRadius: "8px",
                    },
                  }}
                />
              </Stack>
            </Grid.Col>

            <Grid.Col span={12}>
              <Flex justify="space-between" mt={20}>
                <Button
                  variant="outline"
                  color="dark"
                  radius="md"
                  onClick={() => router.push("/")}
                  rightIcon={<ChevronDown size={16} />}
                  styles={{
                    root: {
                      border: "1px solid #e0e0e0",
                      padding: "8px 16px",
                    },
                  }}
                >
                  Save Draft
                </Button>
                <Button
                  type="submit"
                  loading={submitting}
                  radius="md"
                  rightIcon={<ArrowRight size={16} />}
                  styles={{
                    root: {
                      backgroundColor: "#00000",
                      padding: "8px 16px",
                      "&:hover": {
                        backgroundColor: "#0099ee",
                      },
                    },
                  }}
                >
                  Publish
                </Button>
              </Flex>
            </Grid.Col>
          </Grid>
        </form>
      </Modal>

      <JobListPage/>
      
    </>
  )
}