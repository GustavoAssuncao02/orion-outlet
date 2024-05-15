import React from 'react'
import WhatsApp from "../../Assets/Images/Icons/whatsapp.png"
import Instagram from "../../Assets/Images/Icons/instagram.png"
import facebook from "../../Assets/Images/Icons/facebook.png"
import "../Footer/Footer.css"

function Footer() {
  return (
    <div>
      <div id="container" class="bg-black ">
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col text-white">
              Social
              <div id="socialMidias" class="p-4">
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
            <div class="col text-white">
              Horário de Funcionamento
              <div class="p-4">
                7h às 17h
              </div>
            </div>
            <div class="col text-white">
              Contato 
              <div class="p-4">
              (071)99661-3066
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer