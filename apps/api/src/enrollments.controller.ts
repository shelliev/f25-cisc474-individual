import { Controller, Get, Param } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';

@Controller('enrollments')
export class EnrollmentsController {
    constructor(private readonly enrollmentsService: EnrollmentsService) {}

    @Get(':id')
    getEnrollmentById(@Param('id') id: string) {
        return this.enrollmentsService.findOne({ id: String(id) });
    }

    @Get()
    getEnrollments() {
        return this.enrollmentsService.findAll();
    }
}