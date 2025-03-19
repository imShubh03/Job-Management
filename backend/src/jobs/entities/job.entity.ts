import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255, nullable: false })
  title!: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  companyName!: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  location!: string;

  @Column({ type: "varchar", length: 50, nullable: false })
  jobType!: string;

  @Column({ type: "int", nullable: true })
  salaryMin!: number;

  @Column({ type: "int", nullable: true })
  salaryMax!: number;

  @Column({ type: "text", nullable: false })
  description!: string;

  @Column({ type: "text", nullable: false })
  requirements!: string;

  @Column({ type: "text", nullable: false })
  responsibilities!: string;

  @Column({ type: "timestamp", nullable: true })
  applicationDeadline!: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
