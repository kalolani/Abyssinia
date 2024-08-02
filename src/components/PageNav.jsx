function PageNav() {
  return (
    <div className="flex justify-between px-12 py-8 content-center items-center from-[#FBF7F4] to-[#fbf7f400] bg-gradient-180">
      <div className="">
        <p className="font-medium text-primary text-lg font-bold capitalise">
          Abyssinia software solution
        </p>
      </div>
      <ul className="flex gap-8 justify-center items-center mr-14">
        <li className="font-medium text-primary capitalize text-base text-base hover:cursor-pointer">
          Home
        </li>
        <li className="font-medium text-primary capitalize text-base text-base hover:cursor-pointer">
          services
        </li>
        <li className="font-medium text-primary capitalize text-base text-base hover:cursor-pointer">
          pages
        </li>
        <li className="font-medium text-primary capitalize text-base text-base hover:cursor-pointer">
          about
        </li>
        <li className="font-medium text-primary capitalize text-base text-base hover:cursor-pointer">
          Blog
        </li>
        <li className="font-medium text-primary capitalize text-base text-base hover:cursor-pointer">
          Contact
        </li>
      </ul>
      <div>
        <a className="font-medium text-primary capitalize hover:cursor-pointer">
          contact
        </a>
      </div>
    </div>
  );
}

export default PageNav;
