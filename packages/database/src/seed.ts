import {  Role, CourseRole, MoodTag, PrismaClient } from "./client"; // your Prisma client
//
const prisma = new PrismaClient();

async function main() {
  await prisma.moodSubmission.deleteMany();
  await prisma.submission.deleteMany();
  await prisma.assignment.deleteMany();
  await prisma.enrollment.deleteMany();
  await prisma.course.deleteMany();
  await prisma.user.deleteMany();
  // Your seeding logic, e.g., create users, courses, etc.
    const [prof, ta, s1, s2, s3, s4] = await Promise.all([
    prisma.user.create({ data: { email: "prof@ud.edu", firstName: "Ada", lastName: "Lovelace", role: Role.INSTRUCTOR } }),
    prisma.user.create({ data: { email: "ta@ud.edu", firstName: "Alan", lastName: "Turing", role: Role.INSTRUCTOR } }),
    prisma.user.create({ data: { email: "grace@ud.edu", firstName: "Grace", lastName: "Hopper", role: Role.STUDENT } }),
    prisma.user.create({ data: { email: "linus@ud.edu", firstName: "Linus", lastName: "Torvalds", role: Role.STUDENT } }),
    prisma.user.create({ data: { email: "barbara@ud.edu", firstName: "Barbara", lastName: "Liskov", role: Role.STUDENT } }),
    prisma.user.create({ data: { email: "donald@ud.edu", firstName: "Donald", lastName: "Knuth", role: Role.STUDENT } }),
  ]);

    const [cisc474, span300] = await Promise.all([
    prisma.course.create({
      data: { courseCode: "CISC474-F25", courseName: "Web Tech", description: "LMS MVP project course" },
    }),
    prisma.course.create({
      data: { courseCode: "SPAN300-F25", courseName: "Advanced Spanish", description: "Essay + conversation practice" },
    }),
  ]);

  //enrollment table
    await Promise.all([
    prisma.enrollment.create({ data: { userId: prof.id, courseId: cisc474.id, role: CourseRole.INSTRUCTOR } }),
    prisma.enrollment.create({ data: { userId: ta.id, courseId: cisc474.id, role: CourseRole.INSTRUCTOR } }),
    prisma.enrollment.create({ data: { userId: s1.id, courseId: cisc474.id, role: CourseRole.STUDENT } }),
    prisma.enrollment.create({ data: { userId: s2.id, courseId: cisc474.id, role: CourseRole.STUDENT } }),
    prisma.enrollment.create({ data: { userId: s3.id, courseId: span300.id, role: CourseRole.STUDENT } }),
    prisma.enrollment.create({ data: { userId: s4.id, courseId: span300.id, role: CourseRole.STUDENT } }),
  ]);

  //assignments
    const now = new Date();
  const [a1, a2, a3, a4, a5, a6] = await Promise.all([
    prisma.assignment.create({ data: { courseId: cisc474.id, assignmentTitle: "A1: Requirements", description: "Write-up", dueDate: new Date(now.getTime() + 3*86400000) } }),
    prisma.assignment.create({ data: { courseId: cisc474.id, assignmentTitle: "A2: Prototype", description: "Upload zip", dueDate: new Date(now.getTime() + 5*86400000) } }),
    prisma.assignment.create({ data: { courseId: cisc474.id, assignmentTitle: "A3: Mood Check", description: "Submit mood reflection", dueDate: new Date(now.getTime() + 7*86400000) } }),
    prisma.assignment.create({ data: { courseId: span300.id, assignmentTitle: "Ensayo 1", description: "Google Doc essay", dueDate: new Date(now.getTime() + 4*86400000) } }),
    prisma.assignment.create({ data: { courseId: span300.id, assignmentTitle: "Ensayo 2", description: "Oral presentation reflection", dueDate: new Date(now.getTime() + 9*86400000) } }),
    prisma.assignment.create({ data: { courseId: span300.id, assignmentTitle: "Ensayo 3", description: "Final essay submission", dueDate: new Date(now.getTime() + 12*86400000) } }),
  ]);

  //submissions
   const [sub1, sub2, sub3, sub4, sub5, sub6] = await Promise.all([
    prisma.submission.create({ data: { userId: s1.id, assignmentId: a1.id, grade: 18.5 } }),
    prisma.submission.create({ data: { userId: s2.id, assignmentId: a1.id, grade: 19.0 } }),
    prisma.submission.create({ data: { userId: s1.id, assignmentId: a2.id, grade: null } }), // ungraded
    prisma.submission.create({ data: { userId: s2.id, assignmentId: a3.id, grade: 5.0 } }),
    prisma.submission.create({ data: { userId: s3.id, assignmentId: a4.id, grade: 45.0 } }),
    prisma.submission.create({ data: { userId: s4.id, assignmentId: a5.id, grade: null } }),
  ]);
  //mood submissions
  await Promise.all([
    prisma.moodSubmission.create({ data: { submissionId: sub2.id, moodTag: MoodTag.HAPPY, reflection: "Great progress!" } }),
    prisma.moodSubmission.create({ data: { submissionId: sub3.id, moodTag: MoodTag.CONFUSED, reflection: "Struggling with setup" } }),
    prisma.moodSubmission.create({ data: { submissionId: sub4.id, moodTag: MoodTag.HAPPY, reflection: "Feeling confident" } }),
    prisma.moodSubmission.create({ data: { submissionId: sub5.id, moodTag: MoodTag.NEUTRAL, reflection: "Essay done, nothing special" } }),
    prisma.moodSubmission.create({ data: { submissionId: sub6.id, moodTag: MoodTag.CONFUSED, reflection: "Not sure what to write" } }),
    prisma.moodSubmission.create({ data: { submissionId: sub1.id, moodTag: MoodTag.NEUTRAL, reflection: "Finished but not my best" } }),
  ]);
  console.log(" Seed complete");
}



main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
