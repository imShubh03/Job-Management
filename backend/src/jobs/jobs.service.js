"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const job_entity_1 = require("./entities/job.entity");
let JobsService = class JobsService {
    constructor(jobsRepository) {
        this.jobsRepository = jobsRepository;
    }
    create(createJobDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const job = this.jobsRepository.create(createJobDto);
            return this.jobsRepository.save(job);
        });
    }
    findAll(filterJobsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, location, jobType, salaryMin, salaryMax } = filterJobsDto;
            const where = {};
            if (title) {
                where.title = (0, typeorm_2.Like)(`%${title}%`);
            }
            if (location) {
                where.location = (0, typeorm_2.Like)(`%${location}%`);
            }
            if (jobType) {
                where.jobType = jobType;
            }
            if (salaryMin !== undefined && salaryMax !== undefined) {
                where.salaryMin = (0, typeorm_2.Between)(salaryMin, salaryMax);
                where.salaryMax = (0, typeorm_2.Between)(salaryMin, salaryMax);
            }
            else if (salaryMin !== undefined) {
                where.salaryMin = (0, typeorm_2.Between)(salaryMin, 1000000000); // Large number as upper bound
            }
            else if (salaryMax !== undefined) {
                where.salaryMax = (0, typeorm_2.Between)(0, salaryMax);
            }
            return this.jobsRepository.find({
                where,
                order: {
                    createdAt: "DESC",
                },
            });
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const job = yield this.jobsRepository.findOne({ where: { id } });
            if (!job) {
                throw new common_1.NotFoundException(`Job with ID ${id} not found`);
            }
            return job;
        });
    }
    update(id, updateJobDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const job = yield this.findOne(id);
            Object.assign(job, updateJobDto);
            return this.jobsRepository.save(job);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.jobsRepository.delete(id);
            if (result.affected === 0) {
                throw new common_1.NotFoundException(`Job with ID ${id} not found`);
            }
        });
    }
};
exports.JobsService = JobsService;
exports.JobsService = JobsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(job_entity_1.Job)),
    __metadata("design:paramtypes", [Function])
], JobsService);
