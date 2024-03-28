import './index.css';
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Faqs from "./components/Faq/Faqs"
import CardsPreview from './components/CardsPreview/Cardspreview';

function App() {
  return (
    <div>
    <Header/>
    <Hero />
    <CardsPreview/>
    <Faqs/>
    <Footer/>
    </div>
 );
}

export default App;
