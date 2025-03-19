import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JobsModule } from "./jobs/jobs.module";
import { Job } from "./jobs/entities/job.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get<string>("DB_HOST", "localhost"),
        port: parseInt(configService.get<string>("DB_PORT", "5433"), 10),
        username: configService.get<string>("DB_USERNAME", "postgres"),
        password: configService.get<string>("DB_PASSWORD", "Shubham@03"),
        database: configService.get<string>("DB_DATABASE", "job_management"),
        entities: [Job],
        synchronize: configService.get<string>("NODE_ENV", "development") !== "production",
        retryAttempts: 5, 
        retryDelay: 3000, 
      }),
    }),
    JobsModule,
  ],
})



export class AppModule { }
