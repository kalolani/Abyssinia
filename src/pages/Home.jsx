// import FlipCard from "../components/FlipCard";
import FrequentlyAsked from "../components/FrequentlyAsked";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Services from "../components/Services";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdSecurity } from "react-icons/md";
import { AiOutlineSecurityScan } from "react-icons/ai";
import Testimony from "../components/Testimony";
// import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import { useStores } from "../contexts/storeContext";
import PagesDropdown from "../components/PagesDropdown";
import Carousel from "../components/Carousel";
// import ReduxCarousel from "../components/ReduxCarousel";

const faqs = [
  {
    id: 1,
    image: <AiOutlineDollarCircle size={30} color=" rgb(69 26 3)" />,
    title: "How is your pricing?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    id: 2,
    image: <HiOutlineLocationMarker size={30} color=" rgb(69 26 3)" />,
    title: "Where we got your address?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    id: 3,
    image: <AiOutlineSecurityScan size={30} color=" rgb(69 26 3)" />,
    title: "Do you have warenty?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    id: 4,
    image: <MdSecurity size={25} color=" rgb(69 26 3)" />,
    title: "What about security of your project?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];
// const slides = [1, 2, 3, 4, 5];

function Home() {
  const { showPages, content } = useStores();
  return (
    <div className="relative overflow-hidden">
      <Header />
      {showPages && <PagesDropdown />}
      <Services />
      <Projects />
      <FrequentlyAsked data={faqs} />
      <Testimony />
      {/* <div className="py-8">kaleab</div> */}
      <Carousel content={content} />
      <Footer />
    </div>
  );
}

export default Home;
