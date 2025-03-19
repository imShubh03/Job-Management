import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { type Repository, Like, Between, type FindOptionsWhere } from "typeorm"
import type { CreateJobDto } from "./dto/create-job.dto"
import type { UpdateJobDto } from "./dto/update-job.dto"
import type { FilterJobsDto } from "./dto/filter-jobs.dto"
import { Job } from "./entities/job.entity"

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobsRepository: Repository<Job>,
  ) {}

  async create(createJobDto: CreateJobDto): Promise<Job> {
    const job = this.jobsRepository.create(createJobDto)
    return this.jobsRepository.save(job)
  }

  async findAll(filterJobsDto: FilterJobsDto): Promise<Job[]> {
    const { title, location, jobType, salaryMin, salaryMax } = filterJobsDto

    const where: FindOptionsWhere<Job> = {}

    if (title) {
      where.title = Like(`%${title}%`)
    }

    if (location) {
      where.location = Like(`%${location}%`)
    }

    if (jobType) {
      where.jobType = jobType
    }

    if (salaryMin !== undefined && salaryMax !== undefined) {
      where.salaryMin = Between(salaryMin, salaryMax)
      where.salaryMax = Between(salaryMin, salaryMax)
    } else if (salaryMin !== undefined) {
      where.salaryMin = Between(salaryMin, 1000000000) // Large number as upper bound
    } else if (salaryMax !== undefined) {
      where.salaryMax = Between(0, salaryMax)
    }

    return this.jobsRepository.find({
      where,
      order: {
        createdAt: "DESC",
      },
    })
  }

  async findOne(id: number): Promise<Job> {
    const job = await this.jobsRepository.findOne({ where: { id } })

    if (!job) {
      throw new NotFoundException(`Job with ID ${id} not found`)
    }

    return job
  }

  async update(id: number, updateJobDto: UpdateJobDto): Promise<Job> {
    const job = await this.findOne(id)

    Object.assign(job, updateJobDto)

    return this.jobsRepository.save(job)
  }

  async remove(id: number): Promise<void> {
    const result = await this.jobsRepository.delete(id)

    if (result.affected === 0) {
      throw new NotFoundException(`Job with ID ${id} not found`)
    }
  }
}

