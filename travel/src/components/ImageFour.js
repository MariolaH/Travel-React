import { Parallax } from "react-parallax";
import Dubrovnik4 from "../images/D4.jpeg";

const ImageFour = () => (
  <Parallax className="image" bgImage={Dubrovnik4} strength={250}>
    <div className="content">
      {/* <span className="img-text">A Trip to Croatia</span> */}
    </div>
  </Parallax>
);

export default ImageFour;
