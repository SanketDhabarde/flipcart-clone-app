import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import data from '../../data/data.json';
import './Products.css';

function Products() {
    const [sortType, setSortType] = useState('asc');
    const [filterValue, setFilterValue] = useState(null);
    const [flip, setFlip] = useState("sorted");
    const [size, setSize] = useState(null);
    const [brand, setBrand] = useState(null);

    const filterChangeHandler = (value, type) => {
        setFilterValue(value);
        setFlip("filter");
    }

    const changeSortState = sortState => {
        setSortType(sortState);
        setFlip("sorted");
    }

    let filteredData = data.filter(product => product.gender === filterValue)
  
    const sorted = data.sort((a, b) => {
        const isReversed = (sortType === 'asc') ? 1 : -1;
        return isReversed * a.price.localeCompare(b.price);
    })

    let filteredDataSize= data.filter(product => product.size === size);

    const handleSizeChange = (event) => {
        setSize(event.target.value);
        setFlip("size");
    }

    const handleBrandChange = e => {
        setBrand(e.target.value);
        setFlip("brand");
    }
    let filteredDataBrand= data.filter(product => product.brand === brand);
    return (
        <div className="products">
            <div className="products__header">
                <div className="products__sortBy">
                    <h5>sort by:</h5>
                    <button onClick={() => changeSortState("asc")}>Low-to-high</button>
                    <button onClick={() => changeSortState("desc")}>high-to-low</button>
                </div>
                <div className="products__filterBy">
                    <h5>filer by:</h5>
                    <button onClick={() => filterChangeHandler("male", "gender")}>male</button>
                    <button onClick={() => filterChangeHandler("female", "gender")}>female</button>
                    <h6>sizes:</h6>
                    <input type="radio" name="S" value="S" onChange={handleSizeChange}/> S
                    <input type="radio" name="S" value="M" onChange={handleSizeChange}/> M
                    <input type="radio" name="S" value="L" onChange={handleSizeChange}/> L
                    
                </div>
                <div>
                <label for="brand">Choose a brand:</label>
                    <select id="brand" name="brand" onChange={handleBrandChange}>
                        <option value="FLEXIMAA">FLEXIMAA</option>
                        <option value="Aelomart">Aelomart</option>
                        <option value="HELMONT">HELMONT</option>
                        <option value="Levi">Levi</option>
                    </select>
                </div>
            </div>
            
            <div className="products__list">
                { flip === "sorted" && (
                    sorted?.map(prod => (
                        <Product item={prod} key={prod.id}/>
                    ))
                )}
                { flip === "filter" && (
                    filteredData?.map(prod => (
                        <Product item={prod} key={prod.id}/>
                    ))    
                )}
                { flip === "size" && (
                    filteredDataSize?.map(prod => (
                        <Product item={prod} key={prod.id}/>
                    ))    
                )}
                { flip === "brand" && (
                    filteredDataBrand?.map(prod => (
                        <Product item={prod} key={prod.id}/>
                    ))    
                )}
            </div>   
        </div>
    )
}

export default Products;
