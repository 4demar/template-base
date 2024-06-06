import { JSX } from "react/jsx-runtime";

export const Pagina2 = () => {
   const numberOfItems = 5;
   const items: JSX.Element[] = []

   for (let i = 1; i <= numberOfItems; i++) {
      items.push(
         <li key={i}>
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
            Accusamus nulla mollitia, odit magni enim at laudantium ipsam iste quisquam error officiis nostrum, non reprehenderit alias sint debitis corrupti animi deleniti!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Facilis quia debitis voluptatem ad delectus, eum nam placeat, labore, quod mollitia ea repellat ducimus molestias voluptatibus ex tenetur. <br />
            Laboriosam, culpa aut?
         </li>
      );
   }


   return (
      <>
         {/* <div className="row"> */}
         <div className="col-5">
            {items}
         </div>
         <div className="col-5">
            {items}
         </div>
         {/* </div> */}
      </>
   )
}