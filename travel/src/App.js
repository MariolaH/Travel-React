import './App.css';
import ImageFour from './components/ImageFour';
import ImageOne from './components/ImageOne';
import ImageThree from './components/ImageThree';
import ImageTwo from './components/ImageTwo';
import { TextBox } from './components/TextBox';
import { TextBox3 } from './components/TextBox3';
import { TextBox2 } from './components/Textbox2';



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
    </div>
  );
}

export default App;
