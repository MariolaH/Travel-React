import { Parallax } from "react-parallax";
import Dubrovnik2 from "../images/Dobrovink2.jpeg";

const ImageTwo = () => (
  <Parallax className="image" bgImage={Dubrovnik2} strength={200}>
    <div className="content">
      {/* <span className="img-text">A Trip to Croatia</span> */}
    </div>
  </Parallax>
);

export default ImageTwo;
