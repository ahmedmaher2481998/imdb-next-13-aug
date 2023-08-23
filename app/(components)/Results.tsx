import { IResults } from "@/types";
import Card from "./Card";
import { getApi } from "@/lib/requests";

const url = `${process.env.API_URL}movie/popular`;
const Results = async () => {
  const res: IResults = await getApi(url);
  return (
    <section className="w-full flex justify-center items-center">
      <div className="grid grid-cols-3 max-w-4xl gap-4">
        {res.results.map((r) => (
          <Card result={r} key={r.id} />
        ))}
      </div>
    </section>
  );
};

export default Results;
