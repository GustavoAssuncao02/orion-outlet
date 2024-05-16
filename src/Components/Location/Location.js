import React from 'react'

function Location() {
    return (
        <div className="pt-5">
            <h1 className=" justify-content-between align-items-center text-center pb-5">Localização</h1>
            <div className="ratio ratio-16x9">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.177013207651!2d-38.39014322503417!3d-12.37107234802363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7168d9146daa98b%3A0xc04a8507585a305b!2sOrion%20Outlet%20-%20Moda%20Masculina!5e0!3m2!1spt-BR!2sbr!4v1715783782556!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Location