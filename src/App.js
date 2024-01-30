import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Slider from './components/Slider';
import 'react-multi-carousel/lib/styles.css';
import About from './components/About';  
import Slider1 from './components/Slider1';
import Soon from './components/Soon';
import Review from './components/Review';
import Slider2 from './components/Slider2';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <About />
      <div className="abou">
        <h1>ABOUT US</h1>
        <Slider1 />
      </div>
      <Soon />
      <Review />
      <Slider2/>
      <Footer />
    </div>
  );
}

export default App;
