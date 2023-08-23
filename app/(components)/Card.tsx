import getImageSrc from "@/lib/getImage";
import { IMovie } from "@/types";
import Image from "next/image";
import Link from "next/link";

type props = {
  result: IMovie;
};
const Card = ({ result: movie }: props) => {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="hover:shadow-2xl hover:scale-105 transition duration-200 rounded-sm">
        <Image
          src={getImageSrc(movie.poster_path)}
          alt={movie.title}
          width={250}
          className="object-cover w-full"
          height={200}
        />
        <div className="bg-slate-800 py-2 px-4 ">
          <p
            className={`text-xs w-fit py-1 px-2 rounded-xl  ${
              movie.adult ? "bg-pink-500" : "bg-green-500"
            }`}
          >
            {movie.adult ? "+18" : "family friendly"}
          </p>
          <h4>{movie.title}</h4>
          <p className="truncate text-sm ">{movie.overview}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
