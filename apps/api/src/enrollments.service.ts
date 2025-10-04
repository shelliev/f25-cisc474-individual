import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Enrollment, Prisma } from '@repo/database/generated/client';

@Injectable()
export class EnrollmentsService {
    constructor(private prisma: PrismaService) {}

    async findOne(
        enrollmentWhereUniqueInput: Prisma.EnrollmentWhereUniqueInput,
    ): Promise<Enrollment | null> {
        return this.prisma.enrollment.findUnique({
            where: enrollmentWhereUniqueInput,
        });
    }
    
    async findAll(): Promise<Enrollment[]> {
        return this.prisma.enrollment.findMany();
    }

    async createEnrollment(data: Prisma.EnrollmentCreateInput): Promise<Enrollment> {
        return this.prisma.enrollment.create({
            data,
        });
    }

    async updateEnrollment(params: {
    where: Prisma.EnrollmentWhereUniqueInput;
    data: Prisma.EnrollmentUpdateInput;
  }): Promise<Enrollment> {
    const { where, data } = params;
    return this.prisma.enrollment.update({
      data,
      where,
    });
  }

  async deleteEnrollments(where: Prisma.EnrollmentWhereUniqueInput): Promise<Enrollment> {
    return this.prisma.enrollment.delete({
      where,
    });
  }
}