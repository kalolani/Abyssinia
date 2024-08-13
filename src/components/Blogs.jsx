import BlogCard from "./BlogCard";

function Blogs() {
  return (
    <div className="relative py-[64px]">
      <div className="flex justify-center">
        <p className="tracking-widest capitalize text-center text-secondary text-[14px] font-medium py-2 px-[20px] tracking-wider rounded-[5px] bg-gradient-to-r from-[#FEE7C4] to-[#BEE5E4]">
          our blogs
        </p>
      </div>

      <h1 className="text-primary font-bold text-center capitalize text-4xl my-6 mt-8">
        Latest Articles & News from the Blogs
      </h1>
      <div className="relative z-[1] mt-[70px] max-w-[1000px] m-auto gap-8">
        <BlogCard />
      </div>
    </div>
  );
}

export default Blogs;
