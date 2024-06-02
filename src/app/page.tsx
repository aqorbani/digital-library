"use client";
import { useState } from "react";
import SearchBox from "@/components/modules/SearchBox";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <main
      dir="rtl"
      className="flex min-h-screen flex-col items-center justify-between"
    >
      <SearchBox text={text} setText={setText} />
    </main>
  );
}
