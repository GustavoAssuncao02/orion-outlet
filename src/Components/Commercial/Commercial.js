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
                    <a href="https://api.whatsapp.com/send/?phone=5571996613066&text=Ol%C3%A1%21+Desejo+ver+o+cat%C3%A1logo+com+todos+os+produtos.&type=phone_number&app_absent=0">
                        <img src={WhatsApp} alt="WhatsApp" />
                    </a>
                    <a href="https://www.instagram.com/orionoutlet_/" > 
                    <img src={Instagram} alt="Instagram"/>
                    </a>
                    <a href='https://www.facebook.com/oironoutlet3066'>
                    <img src={facebook}  alt="Facebook"/>
                    </a>
                </div>
            </div>
            <div>
                <h1 id="CommercialText" class="text-white">Até 60% de <br></br>desconto</h1>
            </div>
        </div>
    )
}

export default Commercial