import React from 'react'
import '../Product/Product.css'
import NavBar from '../../components/NavBar/NavBar.js'
import Shirt from "../../assets/Images/Products/OakleyWindbreaker/shirt1.png"
import Shirt2 from "../../assets/Images/Products/OakleyWindbreaker/shirt2.png"
import Shirt3 from "../../assets/Images/Products/OakleyWindbreaker/shirt3.png"
import Shirt4 from "../../assets/Images/Products/OakleyWindbreaker/shirt4.png"
import Lineup from '../../components/Lineup/Lineup.js'
import Footer from '../../components/Footer/Footer.js'

function Product() {
    return (
        <div>
            <NavBar />
            <div>
                <div className=" p-5 ">
                    <div className="row justify-content-center col-12">
                        <div className="col-2">
                            <img src={Shirt} alt='OakleyWindbreaker' className='pb-5' />
                            <img src={Shirt2} alt='OakleyWindbreaker' className='pb-5' />
                            <img src={Shirt3} alt='OakleyWindbreaker' className='pb-5' />
                        </div>
                        <div className="col-sm col-2">
                            <img src={Shirt4} alt='OakleyWindbreaker' />
                        </div>
                        <div className="col-5 pe-5 text-center product-catalog ">
                            <h2>CORTA VENTO OAKLEY</h2>
                            <h5 className="pt-4">R$100,00</h5>
                            <h6>À Vista ou Cartão</h6>
                            <h6>Em até 3x sem juros</h6>
                            <div className="colors pb-5 pt-3">
                                <div className="circle m-1 bg-success"></div>
                                <div className="circle m-1 bg-secondary"></div>
                                <div className="circle m-1 bg-danger"></div>
                                <div className="circle m-1 bg-dark"></div>
                                <div className="circle m-1 bg-warning"></div>
                            </div>
                            <h6 className='p-1 border custom-border'>Escolha o tamanho</h6>
                        </div>


                    </div>
                </div>
            </div>
            <Lineup></Lineup>
            <Footer></Footer>
        </div>
    )
}

export default Product