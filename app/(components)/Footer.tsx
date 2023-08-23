const Footer = () => {
  return (
    <footer className="bg-gray-950 text rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-100 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://twitter.com/a_maher_938" className="hover:underline">
            Ahmed maher
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-100 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/about" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li className="mr-4 hover:underline md:mr-6 cursor-pointer">
            Privacy Policy
          </li>
          <li className="mr-4 hover:underline md:mr-6 cursor-pointer">
            Licensing
          </li>
          <li className="mr-4 hover:underline md:mr-6 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
