import getImageSrc from "@/lib/getImage";
import { getApi } from "@/lib/requests";
import { IMovieDetails } from "@/types";
import Image from "next/image";
const MovieDetails = async ({ params: { id } }: { params: { id: string } }) => {
  const res: IMovieDetails = await getApi(`${process.env.API_URL}movie/${id}`);

  return (
    <section className="w-full min-h-full flex items-center pt-20 justify-center ">
      <div className="max-w-4xl flex gap-4 flex-row w-full">
        <Image
          className="w-96 h-auto object-cover rounded-lg"
          src={getImageSrc(res.poster_path)}
          width={300}
          height={300}
          alt={res.title}
        />
        <div className="h-full bg-slate-800 px-4 py-2 rounded-lg">
          <h3 className="text-2xl flex items-center gap-4">
            {res.title}
            <p className="text-sm rounded-lg px-4 p-1 bg-slate-700">
              {new Date(res.release_date).toLocaleDateString()}
            </p>
          </h3>
          <p className="max-w-md mt-10 text-xs font-thin">{res.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
