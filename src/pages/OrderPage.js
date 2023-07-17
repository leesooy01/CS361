import React from 'react';
import ProductRow from '../components/ProductRow.js';

function OrderPage({ products })  {
    return (
        <div>
        <h2>Order</h2>
        <article>
        <h3>Order something from us!</h3>
        <p>Choose the amount of each item. Going over the limit of 10 products will cause an error. </p>
        <table>
            <caption>Yogurt for Sale</caption>
            <thead>
                <tr> 
                    <th>Flavor</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((yogurtItem, index) =>
                    <ProductRow
                    item={yogurtItem}
                    key={index}
                    />
                )}
                
            </tbody>
        </table>
        </article>
        </div>
    )

}
export default OrderPage;


