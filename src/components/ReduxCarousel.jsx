import { useStores } from "../contexts/storeContext";
import Carousel from "./Carousel";

function ReduxCarousel() {
  const { slides } = useStores();
  return (
    <div>
      <Carousel slides={slides} />
    </div>
  );
}

export default ReduxCarousel;
