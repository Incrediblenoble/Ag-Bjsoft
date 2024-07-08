import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemList from './components/listGroup/ItemList';
import DarkVariantExample from './components/Carousel';
import Hero from './components/Heros';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <ItemList />
    {/* <DarkVariantExample /> */}
    <Footer />
      {/* <NavBar /> */}
      {/* <div>AG_BJSOFT</div> */}
    </div>
  )
}

export default App;
