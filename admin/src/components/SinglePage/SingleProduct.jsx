import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const navigate = useNavigate();

  const userComments = [
    {
      userName: "Alice",
      comment: "This backpack is perfect for my travels!",
    },

    {
      userName: "Fiona",
      comment: "The football is of excellent quality.",
    },
    {
      userName: "George",
      comment: "These shoes are super comfortable!",
    },
  ];

  const { id } = useParams();
  const [file, setFile] = useState(null);

  const product = async () => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`);
      const data = await response.json();
      console.log(data);
      setFile(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    product();
  }, []);
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });
      navigate(`/productmanage`);
    } catch (error) {
      console.log(error);
    }
  };

  const [activeTab, setActiveTab] = useState("description");
  if (file)
    return (
      <div className="flex min-h-screen w-[80%] ml-[20%]">
        {/* Image Section */}
        <div className="w-1/2 bg-gray-800 flex justify-center items-center p-10">
          <img
            src={`http://localhost:5000/${file.image[0]}`}
            alt={file.title}
            className="object-contain max-h-[80vh] w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Info Section */}
        <div className="w-1/2 bg-gray-700 text-white p-10 flex flex-col justify-between">
          {/* Top Content */}
          <div>
            <h3 className="text-xl font-semibold mb-1">{file.category}</h3>
            <h1 className="text-5xl font-extrabold leading-tight mb-2">
              {file.title}
            </h1>
            <p className="text-2xl font-bold text-amber-400 mb-4">
              $ {file.price}
            </p>

            <div className="flex items-center text-lg mb-6">
              <span className="font-semibold mr-2">Available Quantity:</span>
              <span className="text-white">2</span>
            </div>

            {/* Tabs */}
            <div className="border-b border-white/40 mb-4">
              <div className="flex gap-10 text-xl font-bold">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`pb-2 transition ${
                    activeTab === "description"
                      ? "border-b-4 border-blue-700 text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("comments")}
                  className={`pb-2 transition ${
                    activeTab === "comments"
                      ? "border-b-4 border-blue-700 text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Comments
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-amber-50 text-black rounded-lg p-4 max-h-60 overflow-y-auto shadow-inner">
              {activeTab === "description" && (
                <p className="leading-relaxed">{file.desc}</p>
              )}

              {activeTab === "comments" && (
                <div className="space-y-4">
                  {userComments.length > 0 ? (
                    userComments.map((comment, index) => (
                      <div key={index}>
                        <h4 className="text-lg font-bold text-[#173E59]">
                          {comment.userName}
                        </h4>
                        <p className="bg-white p-3 rounded-md shadow text-sm">
                          {comment.comment}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-600">
                      No comments yet.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <Link
              to={`/productmanage/updateproduct/${file._id}`}
              className="bg-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Update Product
            </Link>
            <button
              onClick={() => deleteProduct(file._id)}
              className="bg-red-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-800 transition"
            >
              Delete Product
            </button>
          </div>
        </div>
      </div>
    );
};

export default SingleProduct;
