/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const PriceOption = ({option}) => {
    const {id, name, price, features} = option;
    return (
        <div className="bg-purple-500 rounded-lg p-7 flex flex-col">
            <h1 className="text-4xl font-extrabold text-center">
                <span>{price}</span>
                <span>/mon</span>
            </h1>
            <p className="text-2xl text-center ">{name}</p>
            <div className="p-7 flex-grow">
                {
                    features.map(feat => <li>{feat}</li>)
                }
            </div>
            <button className="font-bold text-lg text-center bg-pink-400 w-full py-2 rounded-lg hover:bg-pink-300">Buy Now</button>
        </div>
    );
};

export default PriceOption;