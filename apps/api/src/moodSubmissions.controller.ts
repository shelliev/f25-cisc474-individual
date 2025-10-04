import { Controller, Get, Param } from '@nestjs/common';
import { MoodSubmissionsService } from './moodSubmissions.service';

@Controller('moodSubmissions')
export class MoodSubmissionsController {
    constructor(private readonly moodSubmissionsService: MoodSubmissionsService) {}

    @Get(':id')
    getMoodSubmissionById(@Param('id') id: string) {
        return this.moodSubmissionsService.findOne({ id: String(id) });
    }

    @Get()
    getMoodSubmissions() {
        return this.moodSubmissionsService.findAll();
    }
}