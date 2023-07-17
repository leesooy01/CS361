import React, { useState } from 'react';
import { GoChevronDown, GoPlus } from 'react-icons/go';

function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);

    const increment = () => setQuantity(quantity === 10 ? quantity : quantity + 1)
    const decrement = () => setQuantity(quantity === 0 ? 0 : quantity - 1)
    return (
        <div>
            <GoChevronDown onClick={decrement}/>
            <span class="q">{quantity}</span>
            <GoPlus onClick={increment}/>
        </div>
    );
}

export default ProductQuantity;