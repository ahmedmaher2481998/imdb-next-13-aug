import Link from "next/link";
const Navbar = () => {
  return (
    <div className="w-full bg-amber-600 flex justify-center">
      <div className=" max-w-4xl flex justify-between items-center w-full">
        <Link
          href={"/"}
          className="text-white font-mono font-extrabold text-4xl"
        >
          IMDB
        </Link>
        <Link
          href={"/about"}
          className="text-white font-mono font-extrabold text-2xl"
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
