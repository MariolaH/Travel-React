import { Parallax } from "react-parallax";
import Dubrovnik3 from "../images/Dubrovnik3.jpeg";

const ImageThree = () => (
  <Parallax className="image" bgImage={Dubrovnik3} strength={200}>
    <div className="content">
      {/* <span className="img-text">A Trip to Croatia</span> */}
    </div>
  </Parallax>
);

export default ImageThree;
