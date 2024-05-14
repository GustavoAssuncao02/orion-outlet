import React from 'react'
import "../Intersection/Intersection.css"
import iconGame from "../../Assets/Images/Icons/game-icons_brick-pile.png"
function Intersection() {
    return (
        <div>
            <div id="container" class="bg-black ">
                <div id="title" class="text-white">
                    Grife
                </div>
                <div id="text" class="text-white">Roupas de grife, também conhecidas como roupas de alta costura ou de designer, são peças de vestuário criadas por estilistas renomados e marcas de luxo. Elas são conhecidas por sua alta qualidade, atenção aos detalhes, materiais de primeira classe e design exclusivo.</div>
                <div class="d-flex justify-content-end">
                    <div class="text-right">
                        <img class="img" src={iconGame} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Intersection