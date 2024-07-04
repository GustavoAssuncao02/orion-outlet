import React from 'react'
import '../AddItems/AddItems.css'

function AddItems() {
    return (
        <div>
            <div class="container-AddItem">
                <h1>Adicionar Item</h1>
                <form>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required/>

                        <label for="quantidade">Quantidade:</label>
                        <input type="number" id="quantidade" name="quantidade" min="1" required/>

                            <label for="categoria">Categoria:</label>
                            <select id="categoria" name="categoria" required>
                                <option value="eletronicos">Camisa</option>
                                <option value="roupas">Bermuda</option>
                                <option value="alimentos">calças</option>
                                <option value="livros">Inverno</option>
                            </select>

                            <label for="imagem">Imagem:</label>
                            <input type="file" id="imagem" name="imagem" multiple accept="image/*"/>

                                <label for="cor">Cor:</label>
                                <input type="color" id="cor" name="cor" multiple/>

                                    <fieldset>
                                        <legend>Tamanhos:</legend>
                                        <label><input type="checkbox" name="tamanhos" value="pp"/> PP</label>
                                        <label><input type="checkbox" name="tamanhos" value="p"/> P</label>
                                        <label><input type="checkbox" name="tamanhos" value="m"/> M</label>
                                        <label><input type="checkbox" name="tamanhos" value="g"/> G</label>
                                        <label><input type="checkbox" name="tamanhos" value="gg"/> GG</label>
                                    </fieldset>

                                    <label for="estilo">Estilo:</label>
                                    <select id="estilo" name="estilo" required>
                                        <option value="casual">Casual</option>
                                        <option value="formal">Formal</option>
                                        <option value="esportivo">Esportivo</option>
                                        <option value="social">Social</option>
                                    </select>

                                    <label for="preco">Preço:</label>
                                    <input type="number" id="preco" name="preco" min="0" step="0.01" required/>

                                        <button type="submit">Adicionar Item</button>
                                    </form>
                                </div>
                            </div>
                            )
}

                            export default AddItems