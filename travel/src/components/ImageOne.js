import { Parallax } from "react-parallax";
import Dubrovnik from "../images/Dobrovnik.jpeg";

const ImageOne = () => (
  <Parallax className="image" bgImage={Dubrovnik} strength={200}>
    <div className="content">
        <span className="img-text">A Trip to Croatia</span>
    </div>
  </Parallax>
);

export default ImageOne;
