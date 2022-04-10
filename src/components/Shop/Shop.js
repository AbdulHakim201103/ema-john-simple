import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { faArrowAltCircleDown, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { addToDb, getStoredCard } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
   const [products, setProducts] = useProducts([])
    const [cart,setCart] = useState([])
    

    useEffect(() => {
        const storedCart = getStoredCard();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products])

    const handleAddToCart = (selecedProduct) =>{
        let newCart = [];
        const exists = cart.find(product => product.id === selecedProduct.id);
        if (!exists) {
            selecedProduct.quantity = 1;
            newCart = [...cart,selecedProduct];

        }
        else{
            const rest = cart.filter( product => product.id !== selecedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest,exists];
        }
        setCart(newCart);
        addToDb(selecedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button>Review Order<FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;