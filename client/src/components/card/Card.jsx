import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const Card = ({ product, index }) => {
  const [brands, setBrands] = useState("");
  const getBrand = async (id) => {
    try {
      console.log(id);
      const response = await fetch(`http://localhost:5000/brands/${id}`);
      const data = await response.json();
      console.log(data);
      setBrands(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getBrand(product.brand);
  }, []);

  if (brands)
    return (
      <Link
        to={`/singleproduct/${product._id}`}
        key={index}
        className="relative rounded-2xl overflow-hidden cursor-pointer"
      >
        <img
          src={`http://localhost:5000/${product.image[0]}`}
          alt={product.title}
          className="w-90 h-[60vh] object-cover object-top shadow-lg"
        />
        <div className="absolute inset-0 p-3 flex flex-col justify-between">
          <div className="w-full">
            <button className="text-black bg-gray-100 rounded-xl px-2 py-1 font-bold flex justify-end">
              {brands.title}
            </button>
          </div>
          <div className="w-full font-semibold text-black bg-gray-100 flex items-center justify-between rounded-2xl p-2">
            <div>
              <p>{product.title}</p>
              <p>INR {product.price}</p>
            </div>
            <div className="rounded-full bg-gray-300 w-10 h-10 text-3xl flex items-center justify-center">
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>
      </Link>
    );
};

export default Card;
