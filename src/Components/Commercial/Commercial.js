import React from 'react';
import "../Commercial/Commercial.css"
import WhatsApp from "../../Assets/Images/Icons/whatsapp.png"
import Instagram from "../../Assets/Images/Icons/instagram.png"
import facebook from "../../Assets/Images/Icons/facebook.png"

function Commercial() {
    return (
        <div className="background-container">

            <div class="text-end text-white">
                <h1 >Nossas Redes Sociais</h1>
                <div id="socialMidias">
                    <img src={WhatsApp} />
                    <img src={Instagram} />
                    <img src={facebook} />
                </div>
            </div>
        <div>
            <h1 id="CommercialText"class="text-white">Até 60% de <br></br>desconto</h1>
        </div>
        </div>
    )
}

export default Commercial