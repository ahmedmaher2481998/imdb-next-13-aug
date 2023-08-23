"use client";
import Results from "@/app/(components)/Results";
import SearchBox from "@/app/(components)/SearchBox";
import "./styles.css";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <div className="w-full h-full min-h-screen  ">
        <SearchBox router={router} />
        {/* @ts-expect-error */}
        <Results />
      </div>
      {/* </main> */}
    </>
  );
}
