import { Module } from '@nestjs/common'; 
import { MoodSubmissionsController } from './moodSubmissions.controller';
import { MoodSubmissionsService} from './moodSubmissions.service';
import { PrismaService } from './prisma.service';

@Module ({
    controllers: [MoodSubmissionsController],
    providers: [MoodSubmissionsService, PrismaService],
})
export class MoodSubmissionsModule {}