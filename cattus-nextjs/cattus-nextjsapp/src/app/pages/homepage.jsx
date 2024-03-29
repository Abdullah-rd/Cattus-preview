

import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Faqs from "../components/Faq/Faqs"
import CardsAnimalPreview from '../components/CardsPreviewAdoption/CardsAnimalPreview';
import CardsProduitPreview from '../components/CardPreviewBoutique/CardsProduitPreview'


export default function Homepage(){

    return(
        <>       
         <Header/>
        <Hero />
        <CardsAnimalPreview/>
        <CardsProduitPreview/>
        <Faqs/>
        <Footer/>
        </>

    )
}