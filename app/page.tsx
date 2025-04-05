'use client'

import { redirect } from "next/navigation";

export default function Index() {

  // Temporary to experiment with state
  // Remove when tokens are implemented
  if (false) {
    redirect(`./cold-login`);
  }
}
