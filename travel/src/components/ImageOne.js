import { Parallax } from "react-parallax";
import Dubrovnik from "../images/D1.jpeg";

const ImageOne = () => (
  <Parallax className="image" bgImage={Dubrovnik} strength={200} bgImageAlt="Image of Dubrovnik from the top of the walls">
    <div className="content">
      <span className="img-text">Croatia</span>
    </div>
  </Parallax>
);

export default ImageOne;
