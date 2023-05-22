import { Parallax } from "react-parallax";
import Dubrovnik from "../images/D1.jpeg";

const ImageOne = () => (
  <Parallax className="image" bgImage={Dubrovnik} strength={200}>
    <div className="content">
      <span className="img-text">Croatia</span>
    </div>
  </Parallax>
);

export default ImageOne;
