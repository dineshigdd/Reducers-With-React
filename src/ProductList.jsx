// RadioButton.js
import './App.css'
import React from 'react';

function ProductList( { product ,checked, onChange  }) {
 
  return (
    <label>
      <input      
        
        name="product"
        type="radio"
        value={ product.id }
        checked={checked}
        onChange={onChange}
        
      />
      { product.name }
    </label>
  );
}

export default ProductList;
