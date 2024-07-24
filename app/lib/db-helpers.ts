"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

export async function deleteClock(id: string, userId: string) {
  console.log("DELETING")
  await prisma.clocks.delete({
    where: {
      id: id,
    }
  });
  await revalidatePath(`./clocks/${userId}`)
}

export async function addClock(userId) {
  await prisma.clocks.create({
    data: {
      name: "New Clock",
      userId: userId,
      lastSessionTime: 0,
      todaySessionTime: 0,
      thisWeekTime: 0,
      allTime: 0,
    },
  });
  await revalidatePath(`./clocks/${userId}`)
}

export async function updateClock(id: string, userId: string) {
  console.log("UPDATING CLOCK")
}

// For client-side login page
export async function authenticateUser(formData) {
  const { username, password } = formData;
  const user = await prisma.users.findUnique({
    where: {
      username: username,
      password: password
    }
  })
  return user;
}
