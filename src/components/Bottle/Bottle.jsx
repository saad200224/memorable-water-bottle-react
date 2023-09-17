import PropTypes from 'prop-types';
const Bottle = ({bottle, handleAddToCart}) => {
    const {name, img, price} = bottle;
    return (
        <div className=" text-center border-2 border-teal-500 rounded-xl p-3 w-72">
            <h3 className="my-4">Bottle : {name}</h3>
            <img className="w-52 mx-auto rounded-xl" src={img} alt="" />
            <p className="my-4">Price : ${price}</p>
            <button onClick={() => handleAddToCart(bottle)} className="px-3 py-2 bg-red-300 rounded-lg text-lg font-medium">Purchase</button>
        </div>
    );
};
Bottle.propTypes = {
    bottle: PropTypes.object,
    handleAddToCart: PropTypes.func
}
export default Bottle;