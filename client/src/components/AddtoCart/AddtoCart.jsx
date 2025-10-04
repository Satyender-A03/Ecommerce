import React, { useContext, useEffect } from "react";
import { CartContext } from "../../Context/Cart";

import { Link } from "react-router-dom";

const AddtoCart = () => {
  // const { incQty } = useContext(CartContext);
  const { cart, setCart, incQty, decQty } = useContext(CartContext);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("RAZORPAY SDK FAILED TO LOAD");
      return;
    }

    const result = await fetch(
      "https://ecommerce-6-15vr.onrender.com/payment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ totalPrice }),
      }
    );

    const data = await result.json();

    if (!data) {
      alert("RESULT API NOT WORKING");
      return;
    }

    const { amount, id: order_id, currency } = data;
    console.log(data);
    console.log(amount);
    const options = {
      key: "rzp_test_3WbPzeexWFf3Wx",
      amount: amount.toString(),
      currency,
      name: "Payment Gateway",
      description: "Testing Payment Gateway",
      order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        console.log(data);
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeItem = (id) => {
    const updatedCart = cart.filter(
      (item) => String(item.product._id) !== String(id)
    );
    setCart(updatedCart);
  };

  console.log(cart);
  const shipping = 50;
  const subtotal = cart.reduce((total, item) => {
    if (item.product?.price) {
      return total + item.product.price * item.qty;
    }
    return total;
  }, 0);

  const totalPrice = subtotal + shipping;

  return (
    <div className="max-w-6xl mx-auto pt-23">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-2xs">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {cart.map((item, index) => {
              if (!item.product || !item.product._id) return null;

              return (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={`https://ecommerce-6-15vr.onrender.com/${
                        item.product?.image?.[0] || "images/default.jpg"
                      }`}
                      alt={item.product?.title || "Product"}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">
                        {item.product?.title}
                      </h3>
                      <p className="text-gray-500">₹{item.product?.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => decQty(item.product._id)}
                      className={`px-2 rounded ${
                        item.qty <= 1 ? "bg-gray-300" : "bg-gray-100"
                      }`}
                      disabled={item.qty <= 1}
                    >
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => incQty(item.product._id)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.product._id)}
                      className="text-red-500 hover:underline cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>{shipping}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
            <button
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              onClick={displayRazorpay}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddtoCart;
