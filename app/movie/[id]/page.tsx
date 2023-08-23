import getImageSrc from "@/lib/getImage";
import { getApi } from "@/lib/requests";
import { IMovieDetails } from "@/types";
import Image from "next/image";
const MovieDetails = async ({ params }: { params: { id: string } }) => {
  const res: IMovieDetails = await getApi(
    `${process.env.API_URL}movie/${params.id}`
  );
  return (
    <div>
      <p>Movie ID is {params.id}</p>
      <Image
        src={getImageSrc(res.poster_path)}
        width={300}
        height={300}
        alt={res.title}
      />
      <p>{JSON.stringify(res, null, 2)}</p>
    </div>
  );
};

export default MovieDetails;
