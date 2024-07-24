"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

export async function deleteClock(id, userId) {
  console.log("DELETING")
  await prisma.clocks.delete({
    where: {
      id: id,
    }
  });
  console.log(id);
  revalidatePath(`./clocks/`)
}

export async function addClock(userId) {
    console.log("ADDING CLOCK")
    console.log(userId)
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
  revalidatePath(`./clocks/${userId}`)
}
