import Button from "./Button";

function PageNav() {
  return (
    <div className="bg-[#FBF7F4] fixed top-0 left-0 w-full z-[99] flex justify-between px-12 pt-6 pb-2 content-center items-center from-[#FBF7F4] to-[#fbf7f400] bg-gradient-180">
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
        <Button variant="primary" size="md">
          contact
        </Button>
      </div>
    </div>
  );
}

export default PageNav;
