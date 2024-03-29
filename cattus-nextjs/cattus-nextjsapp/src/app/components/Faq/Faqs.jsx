import Faq from "./Faq"


export default function Faqs(){

    return (
        <div className="p-5 flex flex-col gap-2 ">
        <h1 className="title text-4xl py-12 text-center font-bold">Foire Aux Questions (faq)</h1>


        <Faq question="test question1" answer="test reponse1" />
        <Faq question="test question2" answer="test reponse2" />


        </div>
    )
}