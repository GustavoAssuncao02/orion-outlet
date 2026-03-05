import React, { useState } from "react";
import "./ShirtsDetails.css";
import { useParams } from "react-router-dom";
import Shirt01Back from "../../../assets/Images/shirts/1.png";
import Shirt01Frente from "../../../assets/Images/shirts/shirt01.webp";
import Shirt01Model from "../../../assets/Images/shirts/shirt01model.webp";
import Shirt01Details from "../../../assets/Images/shirts/shirt01details.webp";
import Shirt02Frente from "../../../assets/Images/shirts/shirt09.png";
import Shirt02Back from "../../../assets/Images/shirts/shirt09back.png";
import Shirt02Logo from "../../../assets/Images/shirts/shirt09logo.png";
import Shirt02Manga from "../../../assets/Images/shirts/shirt09manga.png";
import Shirt04 from "../../../assets/Images/shirts/shirt04.png";
import Shirt04Back from "../../../assets/Images/shirts/shirt04Back.png";
import Shirt04Details from "../../../assets/Images/shirts/shirt04Details.png";
import Shirt04Verse from "../../../assets/Images/shirts/shirt04verse.png";
import Shirt06 from "../../../assets/Images/shirts/shirt06.png";
import Shirt06Logo from "../../../assets/Images/shirts/shirt06logo.jpg";
import Shirt06Model from "../../../assets/Images/shirts/shirt06model.webp";
import Shirt06Tecido from "../../../assets/Images/shirts/shirt06tecido.jpg";
import Shirt06Red from "../../../assets/Images/shirts/shirt06Red.png";
import Shirt06RedLogo from "../../../assets/Images/shirts/shirt06RedLogo.png";
import ShirtBg07 from "../../../assets/Images/shirts/bgremove/shirt07bg.png";
import ShirtBg08 from "../../../assets/Images/shirts/bgremove/shirt08bg.png";
import Shirt12 from "../../../assets/Images/shirts/shirt12.webp";
import Shirt12Back from "../../../assets/Images/shirts/shirt12back.webp";
import Shirt12Details from "../../../assets/Images/shirts/shirt12details.webp";
import Shirt12Gola from "../../../assets/Images/shirts/shirt12gola.webp";
import Shirt03 from "../../../assets/Images/shirts/shirt02.png";
import Shirt03Back from "../../../assets/Images/shirts/shirt02back.webp";
import Shirt03Details from "../../../assets/Images/shirts/shirt02details.webp";
import Shirt03Logo from "../../../assets/Images/shirts/shirt02logo.webp";

const shirts = [
  {
    id: 1,
    name: "",
    price: "",
    imagesByColor: {
      "#455C74": [Shirt01Frente, Shirt01Back, Shirt01Model, Shirt01Details],
    },
    sizes: ["P", "G", "GG"],
    colors: ["#455C74"],
    description:
      "Material: 70% algodão, 30% poliéster. Detalhes da roupa: Franja irregular.",
  },
  {
    id: 2,
    name: "",
    price: "254,98",
    imagesByColor: {
      "#EBB3BB": [Shirt02Frente, Shirt02Back, Shirt02Logo, Shirt02Manga],
    },
    sizes: ["P", "M", "G", "GG"],
    colors: ["#EBB3BB"],
    description:
      "Esta camiseta faz parte da coleção super premium da Hoshwear. Fabricada em malha 100%.",
  },
  {
    id: 3,
    name: "",
    price: "",
    imagesByColor: {
      default: [Shirt03, Shirt03Back, Shirt03Details, Shirt03Logo],
    },
    sizes: [],
    colors: [],
    description:
      "Material: 70% algodão, 30% poliéster. Detalhes da roupa: Franja irregular.",
  },
  {
    id: 4,
    name: "",
    price: "",
    imagesByColor: {
      "#BF3131": [Shirt04, Shirt04Back, Shirt04Details, Shirt04Verse],
    },
    sizes: [],
    colors: ["#BF3131"],
    description:
      "Material: 70% algodão, 30% poliéster. Detalhes da roupa: Franja irregular.",
  },
  {
    id: 5,
    name: "",
    price: "",
    imagesByColor: {
      default: [Shirt12, Shirt12Back, Shirt12Details, Shirt12Gola],
    },
    sizes: ["P", "M", "G"],
    colors: ["#9B7D57"],
    description:
      "Material: 70% algodão, 30% poliéster. Detalhes da roupa: Franja irregular.",
  },
  {
    id: 6,
    name: "",
    price: "",
    imagesByColor: {
      "#141D2E": [Shirt06, Shirt06Logo, Shirt06Tecido, Shirt06Model],
      "#BF3131": [Shirt06Red, Shirt06RedLogo, Shirt06Tecido, Shirt06Model],
    },
    sizes: [],
    colors: ["#141D2E", "#BF3131"],
    description: "",
  },
  {
    id: 7,
    name: "",
    price: "",
    imagesByColor: {
      default: [ShirtBg07],
    },
    sizes: [],
    colors: [],
    description: "",
  },
  {
    id: 8,
    name: "",
    price: "",
    imagesByColor: {
      default: [ShirtBg08],
    },
    sizes: [],
    colors: [],
    description: "",
  },
];

const ShirtsDetails = () => {
  const { id } = useParams();
  const shirt = shirts.find((item) => item.id === parseInt(id));
  const defaultColor = shirt?.colors?.[0] || "default";
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [mainImage, setMainImage] = useState(
    shirt?.imagesByColor[defaultColor]?.[0] ||
      shirt?.imagesByColor["default"]?.[0]
  );

  if (!shirt) return <p>Produto não encontrado</p>;

  const handleColorClick = (color) => {
    setSelectedColor(color);
    const newImages = shirt.imagesByColor[color];
    if (newImages && newImages.length > 0) {
      setMainImage(newImages[0]);
    }
  };

  const images =
    shirt.imagesByColor[selectedColor] || shirt.imagesByColor["default"] || [];
  return (
    <div className="shirt-container">
      <div className="shirt-images">
        <div className="main-image">
          <img src={mainImage} alt="camisa" />
        </div>
        <div className="thumbnails">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              onClick={() => setMainImage(img)}
              className="thumbnail"
            />
          ))}
        </div>
      </div>

      <div className="shirt-details">
        <h2>{shirt.name}</h2>
        <p className="price">R$ {shirt.price}</p>
        <p className="payment-info">
          À Vista ou Cartão
          <br />
          Em até <strong>3x sem juros</strong>
        </p>

        <div className="colors">
          {shirt.colors.map((color, i) => (
            <span
              key={i}
              className="color-dot"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></span>
          ))}
        </div>

        <select
          onChange={(e) => setSelectedSize(e.target.value)}
          value={selectedSize}
        >
          <option>Escolha o tamanho</option>
          {shirt.sizes.map((size, i) => (
            <option key={i} value={size}>
              {size}
            </option>
          ))}
        </select>

        <div className="cart-controls">
          <input type="number" min="1" defaultValue="1" className="qty-input" />
          <button className="add-button">Adicionar ao carrinho</button>
        </div>

        <div className="description">
          <h4>DESCRIÇÃO</h4>
          <p>{shirt.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ShirtsDetails;
