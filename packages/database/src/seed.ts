import { prisma } from "./client"; // your Prisma client

async function main() {
  // Your seeding logic, e.g., create users, courses, etc.
  await prisma.user.create({ data: { firstName: "Alice", lastName: "Smith", email: "alice@example.com", role: "STUDENT" } });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
