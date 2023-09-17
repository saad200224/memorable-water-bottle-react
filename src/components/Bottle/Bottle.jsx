const Bottle = ({bottle}) => {
    const {name, img, price} = bottle;
    return (
        <div className="border-2 border-teal-500 rounded-xl p-3">
            <h3>Bottle : {name}</h3>
            <img className="w-52" src={img} alt="" />
            <p>Price : ${price}</p>
        </div>
    );
};

export default Bottle;