import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="relative bg-[#FBF7F4] my-16 py-16">
      <div className="flex justify-center">
        <p className="capitalize text-center text-secondary text-[14px] font-medium py-2 px-[20px] tracking-wider rounded-[5px] bg-gradient-to-r from-[#FEE7C4] to-[#BEE5E4]">
          our services
        </p>
      </div>

      <h1 className="text-primary font-bold text-center capitalize text-4xl my-6 mt-8">
        Offering the Best high quality Services
      </h1>
      <div className="relative z-[11] max-w-[1150px] m-auto grid grid-cols-3 gap-8 pt-10 z-[10]">
        <ServiceCard
          image="pc.png"
          title="website development"
          description="we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design."
          buttonText="Learn More"
        />
        <ServiceCard
          image="mobile-app.png"
          title="mobile app development"
          description="we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design."
          buttonText="Learn More"
        />
        <ServiceCard
          image="consulting.png"
          title="software as service"
          description="we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design."
          buttonText="Learn More"
        />
        <ServiceCard
          image="sass.png"
          title="General technology consulting"
          description="we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design."
          buttonText="Learn More"
        />
        <ServiceCard
          image="pc-1.png"
          title="software development training"
          description="we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design."
          buttonText="Learn More"
        />
        <ServiceCard
          image="testing.png"
          title="software security tasting"
          description="we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design."
          buttonText="Learn More"
        />
      </div>
      <div className="absolute top-[40%] -start-[11%] z-[9]">
        <img src="shape-02.webp" />
      </div>
      <div className="absolute top-[23%] -start-[5%] z-[9]">
        <img src="shape-01.webp" />
      </div>
      <div className="absolute top-[25%] -end-[0%] z-[9]">
        <img src="triangle_two.5876f8fe.png" />
      </div>
    </div>
  );
}

export default Services;
