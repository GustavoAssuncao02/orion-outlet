import React from 'react'
import '../AddItems/AddItems.css'
function AddItems() {

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        const fileInput = document.querySelector('#imagem'); // ID do input file
        const file = fileInput.files[0];
        const uploadPath = '../../../src/assets/Images/Products/Camisa/Camisa Premium'; // Defina o caminho desejado aqui

        formData.append('file', file);
        formData.append('uploadPath', uploadPath);

        try {
            const response = await fetch('http://localhost:4000/img/', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Upload failed');
            }

            const result = await response.json();
            console.log('Upload successful:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div>
            <div class="container-AddItem">
                <h1>Adicionar Item</h1>
                <form onSubmit={handleSubmit}>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required />

                    <label for="quantidade">Quantidade:</label>
                    <input type="number" id="quantidade" name="quantidade" min="1" required />

                    <label for="categoria">Categoria:</label>
                    <select id="categoria" name="categoria" required>
                        <option value="eletronicos">Camisa Premium</option>
                        <option value="roupas">Camisa Grife</option>
                        <option value="alimentos">Camisa Peruana</option>
                        <option value="livros">Camisa Stret Wear</option>
                        <option value="eletronicos">Camisa de Time</option>
                        <option value="roupas">Camisa Regata</option>
                        <option value="alimentos">Bermuda Jeans</option>
                        <option value="livros">Bermuda Dri-Fit</option>
                        <option value="eletronicos">Bermuda Nacional</option>
                        <option value="roupas">Bermuda Cargo High</option>
                        <option value="alimentos">Bermuda Tactel</option>
                        <option value="livros">Bermuda Brim Lacost</option>
                        <option value="eletronicos">Calça</option>
                        <option value="roupas">Calça Jeans</option>
                        <option value="alimentos">Carça Jogger</option>
                        <option value="livros">Suéter</option>
                        <option value="eletronicos">Moleton Gola Careca</option>
                    </select>

                    <label for="imagem">Imagem:</label>
                    <input type="file" id="imagem" name="imagem" multiple accept="image/*" />


                    <label for="cor">Cor:</label>
                    <input type="color" id="cor" name="cor" multiple />

                    <fieldset>
                        <legend>Tamanhos:</legend>
                        <label><input type="checkbox" name="tamanhos" value="pp" /> PP</label>
                        <label><input type="checkbox" name="tamanhos" value="p" /> P</label>
                        <label><input type="checkbox" name="tamanhos" value="m" /> M</label>
                        <label><input type="checkbox" name="tamanhos" value="g" /> G</label>
                        <label><input type="checkbox" name="tamanhos" value="gg" /> GG</label>
                    </fieldset>

                    <label for="estilo">Estilo:</label>
                    <select id="estilo" name="estilo" required>
                        <option value="casual">Casual</option>
                        <option value="formal">Formal</option>
                        <option value="esportivo">Esportivo</option>
                        <option value="social">Social</option>
                    </select>

                    <label for="preco">Preço:</label>
                    <input type="number" id="preco" name="preco" min="0" step="0.01" required />

                    <button type="submit">Adicionar Item</button>
                </form>
            </div>
        </div>
    )
}

export default AddItems