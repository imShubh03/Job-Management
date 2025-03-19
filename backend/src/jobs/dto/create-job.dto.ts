import { IsNotEmpty, IsString, IsEnum, IsNumber, IsDate, Min, IsPositive } from "class-validator"
import { Type } from "class-transformer"
import { ApiProperty } from "@nestjs/swagger"

export enum JobType {
  FULL_TIME = "Full-time",
  PART_TIME = "Part-time",
  CONTRACT = "Contract",
  INTERNSHIP = "Internship",
}

export class CreateJobDto {
  @ApiProperty({ example: "Full Stack Developer" })
  @IsNotEmpty()
  @IsString()
  title: string | undefined

  @ApiProperty({ example: "Acme Inc." })
  @IsNotEmpty()
  @IsString()
  companyName: string | undefined

  @ApiProperty({ example: "New York, NY" })
  @IsNotEmpty()
  @IsString()
  location: string | undefined

  @ApiProperty({ enum: JobType, example: JobType.FULL_TIME })
  @IsNotEmpty()
  @IsEnum(JobType)
  jobType: JobType | undefined

  @ApiProperty({ example: 50000 })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Min(10000)
  salaryMin: number | undefined

  @ApiProperty({ example: 80000 })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Min(10000)
  salaryMax: number | undefined

  @ApiProperty({ example: "We are looking for a Full Stack Developer..." })
  @IsNotEmpty()
  @IsString()
  description: string | undefined

  @ApiProperty({ example: "3+ years of experience with React..." })
  @IsNotEmpty()
  @IsString()
  requirements: string | undefined

  @ApiProperty({ example: "Develop and maintain web applications..." })
  @IsNotEmpty()
  @IsString()
  responsibilities: string | undefined

  @ApiProperty({ example: "2023-12-31" })
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  applicationDeadline: Date | undefined
}

