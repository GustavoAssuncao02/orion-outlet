import React from 'react'
import '../Product/Product.css'
import NavBar from '../../components/NavBar/NavBar.js'
import Shirt from "../../assets/Images/Products/OakleyWindbreaker/shirt1.png"
import Shirt2 from "../../assets/Images/Products/OakleyWindbreaker/shirt2.png"
import Shirt3 from "../../assets/Images/Products/OakleyWindbreaker/shirt3.png"
import Shirt4 from "../../assets/Images/Products/OakleyWindbreaker/shirt4.png"



function Product() {
    return (
        <div>
            <NavBar />
            <div>
                <div className=" pt-5 ">
                    <div className="row justify-content-center">
                        <div className="col col-2">
                            <img src={Shirt} alt='OakleyWindbreaker' className='pb-5' />
                            <img src={Shirt2} alt='OakleyWindbreaker' className='pb-5' />
                            <img src={Shirt3} alt='OakleyWindbreaker' className='pb-5' />
                        </div>
                        <div className="col-sm col-3">
                            <img src={Shirt4} alt='OakleyWindbreaker' />
                        </div>
                        <div className="col col-6 text-center product-catalog ">
                            <h2>CORTA VENTO OAKLEY</h2>
                            <h5 className="pt-4">R$100,00</h5>
                            <h6>À Vista ou Cartão</h6>
                            <h6>Em até 3x sem juros</h6>
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Product