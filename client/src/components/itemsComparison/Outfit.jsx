import React from 'react';

export default function Outfit({ item, onRemoveFromOutfit }) {
  return (
    <div className="outfitCard">
      <div className="cardContent">
        <img className="relatedImage" src={item.image} alt="current item - need to update" />
        <i className="fa-regular fa-circle-xmark fa-lg" onClick={onRemoveFromOutfit} id={item.name} />
        <div className="productCardCategory">{item.category}</div>
        <div className="productCardName">{item.name}</div>
        <div className="productCardPrice">${item.default_price}</div>
      </div>
    </div>
  );
}
