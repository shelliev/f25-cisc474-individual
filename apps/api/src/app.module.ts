import { Module } from '@nestjs/common';

import { LinksModule } from './links/links.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';

import { AssignmentsModule } from './assignments.module';
import { SubmissionsModule } from './submissions.module';
import { MoodSubmissionsModule } from './moodSubmissions.module';
import { CoursesModule } from './courses.module';
import { EnrollmentsModule } from './enrollments.module';
import { UsersModule } from './users.module';

@Module({
  imports: [LinksModule, AssignmentsModule, SubmissionsModule, MoodSubmissionsModule, CoursesModule, EnrollmentsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
