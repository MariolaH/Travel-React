import "../src/index.css";
import ImageFour from "./components/ImageFour";
import ImageOne from "./components/ImageOne";
import ImageThree from "./components/ImageThree";
import ImageTwo from "./components/ImageTwo";
import ImageFive from "./components/ImageFive";
import { TextBox } from "./components/TextBox";
import { TextBox3 } from "./components/TextBox3";
import { TextBox5 } from "./components/TextBox5";
import { TextBox2 } from "./components/Textbox2";
import { TextBox4 } from "./components/TextBox4";
import { TextBox6 } from "./components/TextBox6";
import ImageSix from "./components/ImageSix";

function App() {
  return (
    <div>
      <ImageOne />
      <TextBox />
      <ImageTwo />
      <TextBox2 />
      <ImageThree />
      <TextBox3 />
      <ImageFour />
      <TextBox4 />
      <ImageFive />
      <TextBox6 />
      <ImageSix />
      <TextBox5 />
    </div>
  );
}

export default App;
