import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common"
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger"
import  { JobsService } from "./jobs.service"
import type { CreateJobDto } from "./dto/create-job.dto"
import type { UpdateJobDto } from "./dto/update-job.dto"
import type { FilterJobsDto } from "./dto/filter-jobs.dto"
import { Job } from "./entities/job.entity"

@ApiTags("jobs")
@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new job posting' })
  @ApiResponse({ status: 201, description: 'The job has been successfully created.', type: Job })
  create(@Body() createJobDto: CreateJobDto): Promise<Job> {
    return this.jobsService.create(createJobDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all job postings with optional filters' })
  @ApiResponse({ status: 200, description: 'Return all jobs matching the filters.', type: [Job] })
  findAll(@Query() filterJobsDto: FilterJobsDto): Promise<Job[]> {
    return this.jobsService.findAll(filterJobsDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a job posting by ID' })
  @ApiResponse({ status: 200, description: 'Return the job.', type: Job })
  @ApiResponse({ status: 404, description: 'Job not found.' })
  findOne(@Param('id') id: string): Promise<Job> {
    return this.jobsService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update a job posting" })
  @ApiResponse({ status: 200, description: "The job has been successfully updated.", type: Job })
  @ApiResponse({ status: 404, description: "Job not found." })
  update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto): Promise<Job> {
    return this.jobsService.update(+id, updateJobDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a job posting' })
  @ApiResponse({ status: 200, description: 'The job has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Job not found.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.jobsService.remove(+id);
  }
}

