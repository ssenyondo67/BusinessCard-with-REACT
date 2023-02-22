import React from "react";
import "./component.css"

function CardInfo(){
    return(
        <section>
           <div className="flex__item card-info">
           <div className="cardholder-img">              
            </div>
            <h1 className="cardholder-name">Laura Smith</h1>
            <h3 className="cardholder-role">Frontend Developer</h3>
            <h5 className="cardholder-site"><a href="#">laurasmith.website</a></h5>
            <div className="button">
                <button className="btn email-btn">
                    <i className="bi bi-envelope"></i>
                    Email
                </button>
                <button className="btn linkedin-btn">
                    <i className="bi bi-linkedin"></i>
                    LinkedIn
                </button>
            </div>
           </div>
        </section>
    )
}



export default CardInfo