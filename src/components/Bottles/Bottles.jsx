import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('./bottles.json')
        .then(res => res.json())
        .then(date => setBottles(date))
    },[])

    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle]
        setCart(newCart)
    }

    return (
        <div>
            <h2 className="mb-5 max-w-7xl mx-auto text-center">Bottles Available : {bottles.length}</h2>
            <h4 className="text-center mb-5">Cart : {cart.length}</h4>
            <div className="flex flex-wrap gap-4 max-w-7xl mx-auto">
            {
                bottles.map(bottle => <Bottle
                key={bottle.id}
                bottle={bottle}
                handleAddToCart={handleAddToCart}
                ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;