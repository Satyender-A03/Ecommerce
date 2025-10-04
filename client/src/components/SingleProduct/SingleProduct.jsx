import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/Cart";

const SingleProduct = () => {
  const { setCart, cart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [brand, setBrand] = useState(null);
  const [activeTab, setActiveTab] = useState("description");

  const userComments = [
    { userName: "Alice", comment: "This backpack is perfect for my travels!" },
    { userName: "Fiona", comment: "The football is of excellent quality." },
    { userName: "George", comment: "These shoes are super comfortable!" },
  ];

  const fetchProduct = async () => {
    try {
      const res = await fetch(`http://localhost:5000/products/${id}`);
      const data = await res.json();
      setProduct(data);
      fetchBrand(data.brand);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBrand = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/brands/${id}`);
      const data = await res.json();
      setBrand(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (!product || !brand) return null;

  return (
    <div className="min-h-screen pt-25 bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg flex flex-col lg:flex-row gap-6 p-6">
        {/* Left: Images */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          {/* Main Image */}
          <div className="bg-gray-50 p-4 rounded-lg flex justify-center items-center">
            <img
              src={`http://localhost:5000/${product.image[0]}`}
              alt={product.title}
              className="object-contain h-96 w-full rounded-lg"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-3 mt-2 overflow-x-auto">
            {product.image.map((img, idx) => (
              <img
                key={idx}
                src={`http://localhost:5000/${img}`}
                alt={product.title}
                className="h-20 w-20 object-contain border rounded cursor-pointer hover:border-indigo-600"
              />
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-gray-500 text-sm mb-1">{product.category}</h2>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-gray-600">(123 reviews)</span>
            </div>

            {/* Price */}
            <p className="text-3xl font-bold text-gray-900 mb-4">
              ₹ {product.price}
            </p>

            {/* Stock Info */}
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Availability:</span>
              {product.qty > 0 ? "In Stock" : "Out of Stock"}
            </p>

            {/* Tabs */}
            <div className="border-b border-gray-300 mb-4">
              <div className="flex gap-6 text-md font-medium">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`pb-2 transition ${
                    activeTab === "description"
                      ? "border-b-2 border-indigo-600 text-indigo-600"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("comments")}
                  className={`pb-2 transition ${
                    activeTab === "comments"
                      ? "border-b-2 border-indigo-600 text-indigo-600"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  Reviews
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-gray-50 rounded-lg p-4 shadow-inner mb-6 max-h-64 overflow-y-auto">
              {activeTab === "description" && (
                <p className="text-gray-800 leading-relaxed">{product.desc}</p>
              )}
              {activeTab === "comments" && (
                <div className="space-y-4">
                  {userComments.length > 0 ? (
                    userComments.map((comment, idx) => (
                      <div key={idx} className="border-b pb-3">
                        <h4 className="font-semibold text-gray-800">
                          {comment.userName}
                        </h4>
                        <p className="text-gray-700 text-sm">
                          {comment.comment}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No reviews yet.</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Add to Cart Section */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <button
              className={`w-full py-3 text-white font-bold rounded-lg shadow-lg transition ${
                cart.some((item) => item.product._id === product._id)
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
              onClick={() => {
                if (!cart.some((item) => item.product._id === product._id)) {
                  setCart(product);
                }
              }}
            >
              {cart.some((item) => item.product._id === product._id)
                ? "GO TO CART"
                : "ADD TO CART"}
            </button>
            {product.qty > 0 && (
              <p className="text-gray-600 mt-2 text-sm">
                Ships within 2-3 business days
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
