import React from 'react'
import '../Admin/Admin.css'

function Admin() {
    return (
        <div>
            <div class="container-admin pt-5">
                <h1>Portal do Admin</h1>
                <a href="#" class="button-admin">Adicionar novo item</a>
                <a href="#" class="button-admin">Alterar item</a>
                <a href="#" class="button-admin">Deletar/Ocultar Item</a>
                <a href="#" class="button-admin">Lista de items</a>
                <a href="#" class="button-admin">Editar propagandas</a>
                <h1>Gerenciar Admins</h1>
                <a href="#" class="button-admin">Adicionar Admin</a>
                <a href="#" class="button-admin">Remover Admin</a>
                <a href="#" class="button-admin">Lista de admins</a>
                <a href="#" class="button-admin">Alterar meus dados</a>
            </div>

        </div>
    )
}

export default Admin