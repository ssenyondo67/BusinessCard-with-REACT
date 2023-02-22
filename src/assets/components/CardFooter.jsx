import React from "react";
import "./component.css"

function CardFooter(){
    return(
        <section className="card-footer">
           <div className="links">
            <a href="#" className="link">
             <img src="/Twitter Icon.png" alt="twitter" className="image" />
            </a>    
            <a href="#" className="link">
                 <img src="Instagram Icon.png" alt="Instagram Icon" className="image" />
            </a>
            <a href="#" className="link">
            <img src="/Facebook Icon.png" alt="Facebook Icon" className="image" />
            </a>
            <a href="#" className="link">
               <img src="GitHub Icon.png" alt="GitHub Icon" className="image" />
             </a>
           
           </div>
        </section>
    )
}



export default CardFooter