import React from "react";
import App from "./clocks/[userId]/page";
import { redirect } from "next/navigation";

export default async function Index() {
  redirect(`./clocks/default`);
}
