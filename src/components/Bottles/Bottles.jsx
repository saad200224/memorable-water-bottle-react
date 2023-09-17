import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    useEffect(()=>{
        fetch('./bottles.json')
        .then(res => res.json())
        .then(date => setBottles(date))
    },[])
    return (
        <div>
            <h2>Bottles Here : {bottles.length}</h2>
            <div className="grid grid-cols-3 gap-4">
            {
                bottles.map(bottle => <Bottle
                key={bottle.id}
                bottle={bottle}
                ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;