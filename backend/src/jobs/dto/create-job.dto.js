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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateJobDto = exports.JobType = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
var JobType;
(function (JobType) {
    JobType["FULL_TIME"] = "Full-time";
    JobType["PART_TIME"] = "Part-time";
    JobType["CONTRACT"] = "Contract";
    JobType["INTERNSHIP"] = "Internship";
})(JobType || (exports.JobType = JobType = {}));
class CreateJobDto {
}
exports.CreateJobDto = CreateJobDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Full Stack Developer" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Acme Inc." }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "New York, NY" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: JobType, example: JobType.FULL_TIME }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(JobType),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "jobType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 50000 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.Min)(10000),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "salaryMin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 80000 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.Min)(10000),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "salaryMax", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "We are looking for a Full Stack Developer..." }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "3+ years of experience with React..." }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "requirements", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Develop and maintain web applications..." }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "responsibilities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2023-12-31" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "applicationDeadline", void 0);
