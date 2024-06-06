import { Link } from "react-router-dom";
import { Card } from "../../layout/Card"
import { FaApple } from "react-icons/fa";

export const Pagina1 = () => {

   const clickCard = () => {
      <Link className="link" to='/Pagina2' />
   }

   return (
      <>
         <Card
            icon={<FaApple />}
            cardTitle="Maça"
            cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
         />
         <div
            className="mouse-pointer"
            onClick={clickCard}
         >
            teste
         </div>


      </>
   )
}