import React from 'react'
import '../Search/Search.css'
import NavBar from '../../components/NavBar/NavBar.js'

function Search() {
    return (
        <div>
            <NavBar></NavBar>
            <div className="text-center">
                <div className="row align-items-start">
                    <div className="col-2">
                        Filtros
                        <div className='pt-5'>
                            categorias
                            <div className='pt-3'>
                                <div>
                                    <input type="checkbox" id="category1" name="category1" value="Category1" />
                                    <label htmlFor="category1"> Pegar do banco</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="category2" name="category2" value="Category2" />
                                    <label htmlFor="category2"> Pegar do banco</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="category3" name="category3" value="Category3" />
                                    <label htmlFor="category3"> Pegar do banco</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="category4" name="category4" value="Category4" />
                                    <label htmlFor="category4">Pegar do banco</label>
                                </div>
                            </div>
                        </div>
                        <div className='pt-1'>
                            Valor
                            <div className='pt-1 ms-5 me-5'>
                                <label htmlFor="minValue">Min:</label>
                                <input type="number" id="minValue" name="minValue" min="0" className='form-control' />
                                <label htmlFor="maxValue" className='pt-3'>Max:</label>
                                <input type="number" id="maxValue" name="maxValue" min="0" className='form-control' />
                            </div>
                        </div>
                    </div>
                    <div className="col-10">
                        Você procurou por:
                        <div>

                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Search