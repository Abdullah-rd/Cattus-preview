import './index.css';
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Faqs from "./components/Faq/Faqs"
import CardsAnimalPreview from './components/CardsPreviewAdoption/CardsAnimalPreview';
import CardsProduitPreview from './components/CardPreviewBoutique/CardsProduitPreview'

function App() {

  return (
    <div>
    <Header/>
    <Hero />
    <CardsAnimalPreview/>
    <CardsProduitPreview/>
    <Faqs/>


    <Footer/>





    </div>
 );
}

export default App;
