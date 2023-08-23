import Results from "@/components/Results";
import SearchBox from "@/components/SearchBox";
import "./styles.css";
export default function Home() {
  return (
    <>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <div className="w-full h-full min-h-screen bg-slate-50 ">
        <SearchBox />
        {/* @ts-expect-error */}
        <Results />
      </div>
      {/* </main> */}
    </>
  );
}
