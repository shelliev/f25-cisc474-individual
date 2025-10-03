import { Injectable } from '@nestjs/common';
import { Assignment, Prisma } from '@repo/database/generated/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class AssignmentsService {
  constructor(private prisma: PrismaService) {}
//     async findAll(): Promise<Assignment[]> {
//         return this.prisma.assignment.findMany();
//     }
//     async findOne(
//         assignmentWhereUniqueInput: Prisma.AssignmentWhereUniqueInput,
//     ): Promise<Assignment | null> {
//         return this.prisma.assignment.findUnique({
//             where: assignmentWhereUniqueInput,
//         });
//     }
//     async createAssignment(data: Prisma.AssignmentCreateInput): Promise<Assignment> {
//         return this.prisma.assignment.create({
//             data,
//         });
//     }

//     async updateAssignment(params: {
//     where: Prisma.AssignmentWhereUniqueInput;
//     data: Prisma.AssignmentUpdateInput;
//   }): Promise<Assignment> {
//     const { where, data } = params;
//     return this.prisma.assignment.update({
//       data,
//       where,
//     });
//   }

//   async deleteAssignment(where: Prisma.AssignmentWhereUniqueInput): Promise<Assignment> {
//     return this.prisma.assignment.delete({
//       where,
//     });
//   }
  
}