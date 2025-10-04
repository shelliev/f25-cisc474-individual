import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { MoodSubmission, Prisma } from '@repo/database/generated/client';

@Injectable()
export class MoodSubmissionsService {
    constructor(private prisma: PrismaService) {} 

    async findOne(
        moodSubmissionWhereUniqueInput: Prisma.MoodSubmissionWhereUniqueInput,
    ): Promise<MoodSubmission | null> {
        return this.prisma.moodSubmission.findUnique({
            where: moodSubmissionWhereUniqueInput,
        });
    }
    
    async findAll(): Promise<MoodSubmission[]> {
        return this.prisma.moodSubmission.findMany();
    }

    async createMoodSubmission(data: Prisma.MoodSubmissionCreateInput): Promise<MoodSubmission> {
        return this.prisma.moodSubmission.create({
            data,
        });
    }

    async updateMoodSubmission(params: {
    where: Prisma.MoodSubmissionWhereUniqueInput;
    data: Prisma.MoodSubmissionUpdateInput;
  }): Promise<MoodSubmission> {
    const { where, data } = params;
    return this.prisma.moodSubmission.update({
      data,
      where,
    });
  }

  async deleteMoodSubmission(where: Prisma.MoodSubmissionWhereUniqueInput): Promise<MoodSubmission> {
    return this.prisma.moodSubmission.delete({
      where,
    });
  }
}