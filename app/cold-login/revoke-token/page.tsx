'use client'
import { redirect } from "next/navigation";

export default function Index() {
    console.log("REVOKING TOKEN HERE")
    redirect(`../cold-login`);
}