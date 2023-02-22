import React from "react";
import "./card.css"

// import icon
import dark from '/dark_mode.png'
import light from '/light_mode.png'

// importing components
import CardInfo from './components/CardInfo'
import CardAbout from './components/CardAbout'
import CardInterest from './components/CardInterest'
import CardFooter from './components/CardFooter'
function changeTheme(){
    let body =document.getElementsByTagName('body')
    
    let icon =document.getElementById('mode');
    let text =document.getElementById('modeText');
    if(icon.classList.contains('bi-sun')){
        icon.classList.remove('bi-sun')
        icon.classList.add('bi-moon')
        text.innerHTML='Dark mode'
        body[0].classList.add('lightTheme')

    }else{
        icon.classList.remove('bi-moon')
        icon.classList.add('bi-sun')
        text.innerHTML='Light mode'
        body[0].classList.remove('lightTheme')
    }

}

function Card(){
    return(
        <main className="flex__item">
          <div className="container">
             <div className="theme-switcher">
                <i className="bi bi-sun" id="mode" onClick={changeTheme}></i>
                <span id="modeText" className="mode-text" onClick={changeTheme}>Light mode</span>
             </div>
             <div className="card-container">
              <CardInfo />
              <CardAbout />
              <CardInterest />
              <CardFooter />
             </div>
          </div>
        </main>
    )
}

export default Card;