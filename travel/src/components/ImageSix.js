import { Parallax } from "react-parallax";
import Food from "../images/Food.png";

const ImageSix = () => (
  <Parallax className="image" bgImage={Food} strength={200} bgImageAlt="Image of fresh seafood, potatoes and a salad"></Parallax>
);

export default ImageSix;
