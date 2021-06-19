import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import data from '../../data/data.json';
import './Products.css';

function Products() {
    const [sortType, setSortType] = useState('asc');
  
    const changeSortState = sortState => {
        setSortType(sortState);
    }

    const sorted = data.sort((a, b) => {
        const isReversed = (sortType === 'asc') ? 1 : -1;
        return isReversed * a.price.localeCompare(b.price);
    })

    return (
        <div className="products">
            <button onClick={() => changeSortState("asc")}>Low-to-high</button>
            <button onClick={() => changeSortState("desc")}>high-to-low</button>
            <div className="products__list">
                {sorted?.map(prod => (
                    <Product item={prod} key={prod.id}/>
                ))}
            </div>   
        </div>
    )
}

export default Products;
