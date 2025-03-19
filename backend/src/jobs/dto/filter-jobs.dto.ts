import { IsOptional, IsString, IsEnum, IsNumber, Min } from "class-validator"
import { Type } from "class-transformer"
import { ApiProperty } from "@nestjs/swagger"
import { JobType } from "./create-job.dto"

export class FilterJobsDto {
  @ApiProperty({ required: false, example: "Developer" })
  @IsOptional()
  @IsString()
  title?: string

  @ApiProperty({ required: false, example: "New York" })
  @IsOptional()
  @IsString()
  location?: string

  @ApiProperty({ required: false, enum: JobType })
  @IsOptional()
  @IsEnum(JobType)
  jobType?: JobType

  @ApiProperty({ required: false, example: 50000 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  salaryMin?: number

  @ApiProperty({ required: false, example: 100000 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  salaryMax?: number
}

