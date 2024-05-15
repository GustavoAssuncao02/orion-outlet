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
                    <img src={WhatsApp} />
                    <img src={Instagram} />
                    <img src={facebook} />
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