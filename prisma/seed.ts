import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const initialUsers: Prisma.UsersCreateInput[] = [
  {
    username: "terry",
    password: "1234",
    Clocks: {
      create: [
        {
          name: "superClock",
          allTime: 10000,
          editing: false,
          lastSessionTime: 2,
          thisWeekTime: 222222,
          todaySessionTime: 222,
        },
        {
          name: "third clock",
          allTime: 100,
          editing: true,
          lastSessionTime: 0,
          thisWeekTime: 22,
          todaySessionTime: 2,
        },
        {
          name: "nuh nuh clock",
          allTime: 1000,
          editing: false,
          lastSessionTime: 2,
          thisWeekTime: 2222,
          todaySessionTime: 222356,
        },
      ],
    },
  },
  {
    username: "dave",
    password: "2345",
    Clocks: {
      create: [
        {
          name: "su",
          allTime: 100,
          editing: false,
          lastSessionTime: 2,
          thisWeekTime: 222345222,
          todaySessionTime: 222,
        },
      ],
    },
  },
  {
    username: "steve",
    password: "1",
  },
];

async function main() {
  console.log("Starting seeding...");

  for (const user of initialUsers) {
    const newUser = await prisma.users.create({
      data: user,
    });
  }
  console.log("Finished seeding!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
