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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const job_entity_1 = require("./entities/job.entity");
let JobsController = class JobsController {
    constructor(jobsService) {
        this.jobsService = jobsService;
    }
    create(createJobDto) {
        return this.jobsService.create(createJobDto);
    }
    findAll(filterJobsDto) {
        return this.jobsService.findAll(filterJobsDto);
    }
    findOne(id) {
        return this.jobsService.findOne(+id);
    }
    update(id, updateJobDto) {
        return this.jobsService.update(+id, updateJobDto);
    }
    remove(id) {
        return this.jobsService.remove(+id);
    }
};
exports.JobsController = JobsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new job posting' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The job has been successfully created.', type: job_entity_1.Job }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all job postings with optional filters' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all jobs matching the filters.', type: [job_entity_1.Job] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a job posting by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the job.', type: job_entity_1.Job }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Job not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Update a job posting" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "The job has been successfully updated.", type: job_entity_1.Job }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Job not found." }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Function]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a job posting' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The job has been successfully deleted.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Job not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "remove", null);
exports.JobsController = JobsController = __decorate([
    (0, swagger_1.ApiTags)("jobs"),
    (0, common_1.Controller)("jobs"),
    __metadata("design:paramtypes", [Function])
], JobsController);
