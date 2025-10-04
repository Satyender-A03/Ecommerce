import React, { useEffect, useState } from "react";
import model from "../../assets/first.png";
import video from "../../assets/video.mp4";
import set2 from "../../assets/set2.jpg";
import set3 from "../../assets/set3.jpeg";
import jan24 from "../../assets/jan24.webp";
import spring from "../../assets/spring.webp";
import summe from "../../assets/summe.webp";
import collab1 from "../../assets/collab1.png";
import collab2 from "../../assets/collab2.png";
import collab3 from "../../assets/collab3.png";
import collab4 from "../../assets/collab4.png";
import collab5 from "../../assets/collab5.png";
import row21 from "../../assets/row21.png";
import home from "../../assets/home.png";
import download from "../../assets/download.png";
import download1 from "../../assets/download1.png";
import { Link } from "react-router-dom";

import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState(null);

  const getProduct = async () => {
    try {
      const response = await fetch("http://localhost:5000/products/");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const selectProduct = async (id) => {
    navigate(`/singleproduct/${id}`);
  };

  if (products)
    return (
      <div className="">
        <div className="pt-35 bg-gray-200 text-black font-sans">
          {/* Hero Section */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between px-15 py-30">
            {/* Left Content */}
            <div className=" text-center lg:text-left z-10">
              <h1 className="text-8xl font-bold tracking-wide leading-tight">
                <p className="pl-20">SHOPEASE</p> <p>FASHION</p>
              </h1>
              <p className="text-gray-600 text-lg mt-4 max-w-md">
                A brand of functional clothing for an active lifestyle
              </p>
            </div>

            {/* Center Image */}
            <div className=" flex justify-center left-[25%] items-center my-8 absolute z-1">
              <img
                src={home}
                alt="Dolenga Wear"
                className="w-[70%] object-cover rounded-xl"
              />
            </div>

            {/* Right Button */}
            <div className="flex-1 flex justify-end pt-60 ">
              <button className="bg-black text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-800 transition">
                Catalog
              </button>
            </div>
          </div>

          {/* Collection Section */}
          <div className="w-full flex flex-wrap z-50 pt-40">
            <div className="w-[50%] relative bg-gradient-to-r from-gray-300  to-gray-200">
              <div className="h-60">
                <img
                  src={download}
                  alt="Dolenga Hoodie"
                  className="w-[600px] object-contain"
                />
              </div>
              <div className="absolute text-lg top-6 left-6 font-semibold text-white p-5 space-y-2 ">
                <p>T-shirts</p>
                <p>Jeans</p>
                <p>Shorts</p>
                <p>Sweatshirts</p>
                <p>Hoodies</p>
                <p>Men's</p>
              </div>
            </div>

            <div className="absolute left-[36%] text-black text-center font-bold text-5xl bottom-[-55%] z-30">
              Summer Collection <p className="text-3xl pt-2">2025</p>
            </div>

            <div className="relative w-[50%] bg-gray-300 flex flex-col items-center">
              <div className="h-[80vh]">
                <img
                  src={download1}
                  alt="Dolenga Shorts"
                  className="w-[700px] object-cover "
                />
              </div>

              <div className="absolute top-6 right-6 font-semibold text-white p-10 space-y-2 ">
                <p>Hoodies</p>
                <p>T-shirts</p>
                <p>Shorts</p>
                <p>Joggers</p>
              </div>
            </div>
          </div>
        </div>

        {/* second page */}
        <div className="w-full h-[100vh] flex flex-col px-15 justify-center relative bg-[#e1e8f0]">
          <h1 className="absolute text-[17vw] pl-10 justify-center flex top-40 font-semibold text-gray-300 z-5">
            WORKOUT
          </h1>

          <div className=" flex justify-between text-center">
            <div className="flex flex-col justify-between z-2">
              <img src={set2} alt="left" className="w-70 rounded-xl" />
              <p className="text-sm text-gray-600 max-w-xs">
                Performance-driven gear for men — built for summer heat and
                winter cold.
              </p>
            </div>

            <div className="flex item-center">
              <img
                src={jan24}
                alt="center"
                className="rounded-2xl shadow-lg z-6"
              />
            </div>

            <div className="flex flex-col justify-between mb-0">
              <p className="text-sm text-gray-600 max-w-xs text-right">
                Stay warm, stay fit. Our winter workout wear blends insulation
                with flexibility to keep you going in the toughest conditions.
              </p>
              <img src={set3} alt="right" className="rounded-xl w-70 " />
            </div>
          </div>
        </div>

        {/* third page */}
        <div className="w-full h-[100vh] flex flex-col px-15 py-3 gap-2">
          <div className="w-full">
            <p className="text-gray-400 text-xs">OUR TOP PICKS</p>
          </div>

          <div className="w-full flex justify-between items-center">
            <h1 className="text-black text-5xl font-bold">
              TOP WORKOUT GEAR FOR <br />
              <span>PEAK PERFORMANCE!</span>
            </h1>
            <p className="text-gray-400 text-xs">
              Discover the best of our collection, designed <br /> to power your
              workoutes all year round.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={spring}
                alt="Winter Gear"
                className="w-full h-[100vh] object-cover"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className=" flex flex-col gap-15">
                  <p className="text-gray-100 text-xl font-bold text-right ">
                    01/WINTER <br /> _2025
                  </p>
                  <h1 className="text-5xl font-bold text-gray-100 ">
                    TOP <br /> WORKOUT <br /> GEAR FOR <br />
                    <span className="text-gray-300">PEAK</span> <br />
                    <span className="text-gray-400">PERFORMANCE !</span>
                  </h1>
                </div>

                <button className=" w-45 text-center text-white border-2 border-gray-500 rounded-2xl p-2">
                  TOP SELLING GEAR
                </button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={summe}
                alt="Winter Gear"
                className="w-full h-[100vh] object-cover"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <p className="text-gray-900 text-xl font-bold text-right ">
                  02/SUMMER <br /> _2025
                </p>
                <div className="flex flex-col justify-end gap-15">
                  <h1 className="text-4xl font-bold text-gray-400">
                    LATEST <br /> STYLE AND <br />
                    <span className="text-gray-300">INNOVATIONS</span> <br />
                    <span className="text-gray-100">IN WORKOUT</span>
                    <br />
                    <span className="text-gray-100">GEAR.</span>
                  </h1>

                  <button className=" w-45 text-center text-white border-2 border-gray-500 rounded-2xl p-2">
                    NEW ARRIVAL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* fourth page */}
        <div className="w-full relative h-[100vh] bg-[#eaf0f4] mt-[10%] flex items-center justify-center">
          <div className="absolute w-full h-[100vh] text-9xl font-bold text-gray-400">
            <div className="absolute top-[15%] left-0 px-10">
              FRESH FITS GEAR
            </div>
            <div className="absolute bottom-[10%] right-0 px-20">
              YOUR NEXT WORK
            </div>
          </div>

          <div className="w-[30%] h-[80vh] z-1 rounded-2xl text-center bg-gradient-to-b from-[#535151] to-[#919395] p-3 overflow-hidden">
            <h3 className="text-3xl text-gray-400 font-semibold tracking-widest uppercase">
              VEXO
            </h3>
            <p className="text-sm text-white/40 mt-1 mb-2">LEVEL UP</p>
            <h1 className="text-4xl font-bold text-white">
              WITH THE LATEST IN
              <br />
              <span className="decoration-white/40">WORKOUT WEAR</span>
            </h1>

            <div className="relative mt-10 w-full h-[60vh]">
              <img
                src={collab4}
                alt="main"
                className="absolute left-[5%] w-100 top-[-30px] z-13"
              />
              <img
                src={collab3}
                alt="left"
                className="absolute left-[-50px] bottom-0 z-20 w-80"
              />
              <img
                src={collab2}
                alt="right"
                className="absolute right-[-100px] top-25 z-20 w-100"
              />
              <img
                src={collab1}
                alt="back left"
                className="absolute left-15 top-0 z-10 w-30"
              />
              <img
                src={collab5}
                alt="back right"
                className="absolute right-7 w-40 top-0 z-10"
              />
            </div>
          </div>
        </div>

        {/* fifth page */}
        <div className="w-full relative min-h-screen px-10 py-2">
          <div className="w-full h-auto flex justify-between py-2">
            <p className="text-xs font-semibold text-gray-400">NEW ARRIVAL</p>
            <h1 className="text-black font-bold text-center text-7xl">
              FRESH FITS FOR YOU <br /> NEXT WORKOUT!
            </h1>
            <p className="text-xs font-semibold text-gray-400">ALL BRANDS</p>
          </div>

          <div className="w-full py-5">
            <div className="w-full flex gap-5 overflow-hidden justify-center cursor-pointer flex-wrap">
              {products.slice(0, 8).map((product, index) => (
                <div
                  onClick={() => selectProduct(product._id)}
                  key={index}
                  className="w-85 relative rounded-2xl overflow-hidden "
                >
                  <img
                    src={`http://localhost:5000/${product.image[0]}`}
                    alt="Winter Gear"
                    className="w-90 h-[60vh] object-cover object-top shadow-lg"
                  />
                  <div className="absolute inset-0 p-3 flex flex-col justify-between ">
                    <div className="w-full">
                      <button className=" text-black bg-gray-100 rounded-xl p-1 font-bold flex justify-end">
                        Winter
                      </button>
                    </div>
                    <div className="w-full font-semibold text-black bg-gray-100 flex items-center justify-between rounded-2xl p-2">
                      <div className="">
                        <p>{product.title}</p>
                        <p>INR {product.price}</p>
                      </div>
                      <div className="rounded-full bg-gray-300 w-10 h-10 text-3xl flex items-center justify-center">
                        <MdKeyboardArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* {products.map((products, index) => ( */}
              {/* <div
                // onClick={() => selectProduct(products._id)}
                // key={index}
                className="relative rounded-2xl overflow-hidden "
              >
                <img
                  src={row1}
                  alt="Winter Gear"
                  className="w-90 h-[60vh] object-cover object-top shadow-lg"
                />
                <div className="absolute inset-0 p-3 flex flex-col justify-between ">
                  <div className="w-full">
                    <button className=" text-black bg-gray-100 rounded-xl p-1 font-bold flex justify-end">
                      Winter
                    </button>
                  </div>
                  <div className="w-full font-semibold text-black bg-gray-100 flex items-center justify-between rounded-2xl p-2">
                    <div className="">
                      <p>ewfrew</p>
                      <p>rfkmewk</p>
                    </div>
                    <div className="rounded-full bg-gray-300 w-10 h-10 text-3xl flex items-center justify-center">
                      <MdKeyboardArrowRight />
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="relative rounded-2xl overflow-hidden ">
                <img
                  src={row1}
                  alt="Winter Gear"
                  className="w-90 h-[60vh] object-cover object-top shadow-lg"
                />
                <div className="absolute inset-0 p-3 flex flex-col justify-between ">
                  <div className="w-full">
                    <button className=" text-black bg-gray-100 rounded-xl p-1 font-bold flex justify-end">
                      Winter
                    </button>
                  </div>
                  <div className="w-full font-semibold text-black bg-gray-100 flex items-center justify-between rounded-2xl p-2">
                    <div className="">
                      <p>ASRV x Equinox Lycra</p>
                      <p>USD 116.00</p>
                    </div>
                    <div className="rounded-full bg-gray-300 w-10 h-10 text-3xl flex items-center justify-center">
                      <MdKeyboardArrowRight />
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="h-[60vh] relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={row12}
                  alt="Winter Gear"
                  className="w-90 h-[60vh] object-cover object-top shadow-lg"
                />
                <div className="absolute inset-0 p-3 flex flex-col justify-between ">
                  <div className="w-full">
                    <button className=" text-black bg-gray-100 rounded-xl p-1 font-bold flex justify-end">
                      Winter
                    </button>
                  </div>
                  <div className="w-full font-semibold text-black bg-gray-100 flex items-center justify-between rounded-2xl p-2">
                    <div className="">
                      <p>ASRV x Equinox Lycra</p>
                      <p>USD 116.00</p>
                    </div>
                    <div className="rounded-full bg-gray-300 w-10 h-10 text-3xl flex items-center justify-center">
                      <MdKeyboardArrowRight />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[60vh] relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={row13}
                  alt="Winter Gear"
                  className="w-90 h-[60vh] object-cover object-top shadow-lg"
                />
                <div className="absolute inset-0 p-3 flex flex-col justify-between ">
                  <div className="w-full">
                    <button className=" text-black bg-gray-100 rounded-xl p-1 font-bold flex justify-end">
                      Winter
                    </button>
                  </div>
                  <div className="w-full font-semibold text-black bg-gray-100 flex items-center justify-between rounded-2xl p-2">
                    <div className="">
                      <p>ASRV x Equinox Lycra</p>
                      <p>USD 116.00</p>
                    </div>
                    <div className="rounded-full bg-gray-300 w-10 h-10 text-3xl flex items-center justify-center">
                      <MdKeyboardArrowRight />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[60vh] relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={row16}
                  alt="Winter Gear"
                  className="w-90 h-[60vh] object-cover object-top shadow-lg"
                />
                <div className="absolute inset-0 p-3 flex flex-col justify-between ">
                  <div className="w-full">
                    <button className=" text-black bg-gray-100 rounded-xl p-1 font-bold flex justify-end">
                      Winter
                    </button>
                  </div>
                  <div className="w-full font-semibold text-black bg-gray-100 flex items-center justify-between rounded-2xl p-2">
                    <div className="">
                      <p>ASRV x Equinox Lycra</p>
                      <p>USD 116.00</p>
                    </div>
                    <div className="rounded-full bg-gray-300 w-10 h-10 text-3xl flex items-center justify-center">
                      <MdKeyboardArrowRight />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" h-[60vh] relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={row2}
                  alt="Winter Gear"
                  className="w-90 h-[63vh] object-cover object-top shadow-lg"
                />
                <div className="absolute inset-0 p-3 flex flex-col justify-between ">
                  <div className="w-full">
                    <button className=" text-black bg-gray-100 rounded-xl p-1 font-bold flex justify-end">
                      Winter
                    </button>
                  </div>
                  <div className="w-full font-semibold text-black bg-gray-100 flex items-center justify-between rounded-2xl p-2">
                    <div className="">
                      <p>ASRV x Equinox Lycra</p>
                      <p>USD 116.00</p>
                    </div>
                    <div className="rounded-full bg-gray-300 w-10 h-10 text-3xl flex items-center justify-center">
                      <MdKeyboardArrowRight />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" h-[60vh] relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={row3}
                  alt="Winter Gear"
                  className="w-90 h-[60vh] object-cover object-top shadow-lg"
                />
                <div className="absolute inset-0 p-3 flex flex-col justify-between ">
                  <div className="w-full">
                    <button className=" text-black bg-gray-100 rounded-xl p-1 font-bold flex justify-end">
                      Winter
                    </button>
                  </div>
                  <div className="w-full font-semibold text-black bg-gray-100 flex items-center justify-between rounded-2xl p-2">
                    <div className="">
                      <p>ASRV x Equinox Lycra</p>
                      <p>USD 116.00</p>
                    </div>
                    <div className="rounded-full bg-gray-300 w-10 h-10 text-3xl flex items-center justify-center">
                      <MdKeyboardArrowRight />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" h-[60vh] relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={row4}
                  alt="Winter Gear"
                  className="w-90 h-[60vh] object-cover object-top shadow-lg"
                />
                <div className="absolute inset-0 p-3 flex flex-col justify-between ">
                  <div className="w-full">
                    <button className=" text-black bg-gray-100 rounded-xl p-1 font-bold flex justify-end">
                      Winter
                    </button>
                  </div>
                  <div className="w-full font-semibold text-black bg-gray-100 flex items-center justify-between rounded-2xl p-2">
                    <div className="">
                      <p>ASRV x Equinox Lycra</p>
                      <p>USD 116.00</p>
                    </div>
                    <div className="rounded-full bg-gray-300 w-10 h-10 text-3xl flex items-center justify-center">
                      <MdKeyboardArrowRight />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" h-[60vh] relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={row12}
                  alt="Winter Gear"
                  className="w-90 h-[60vh] object-cover object-top shadow-lg"
                />
                <div className="absolute inset-0 p-3 flex flex-col justify-between ">
                  <div className="w-full">
                    <button className=" text-black bg-gray-100 rounded-xl p-1 font-bold flex justify-end">
                      Winter
                    </button>
                  </div>
                  <div className="w-full font-semibold text-black bg-gray-100 flex items-center justify-between rounded-2xl p-2">
                    <div className="">
                      <p>ASRV x Equinox Lycra</p>
                      <p>USD 116.00</p>
                    </div>
                    <div className="rounded-full bg-gray-300 w-10 h-10 text-3xl flex items-center justify-center">
                      <MdKeyboardArrowRight />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="w-full flex justify-center gap-4 items-center">
            <button className="bg-black text-white text-xl px-4 py-2 rounded-xl">
              SEE ALL BRANDS
            </button>
            <BsFillArrowUpRightCircleFill className="text-black text-4xl" />
          </div>
        </div>

        {/* sixth page */}

        <div className="w-full relative h-[100vh] bg-[#eaf0f4] flex items-center justify-center">
          <div className="absolute w-full h-[100vh] text-9xl font-bold text-gray-300">
            <div className="absolute top-[12%] left-0 px-10 z-1">
              FITS FOR YOUR NEXT
            </div>
            <div className="absolute bottom-[10%] z-3 right-[-110px] px-10">
              YOUR NEXT WORKOUTS
            </div>
          </div>

          <div className="w-[30%] h-[80vh] rounded-2xl text-center bg-gradient-to-b from-[#535151] to-[#919395] overflow-hidden">
            <div className="relative w-full h-[60vh]">
              <img
                src={row21}
                alt="back right"
                className="absolute object-cover h-[83vh] top-[-8px] z-2"
              />
              <div className="w-full h-[80vh] p-10 flex flex-col gap-55 justify-center">
                <div className="w-full flex justify-between font-bold text-xs">
                  <p>
                    T-SHIRT & INNER <br /> THERMAL
                  </p>
                  <p>
                    12/08/2024 <br />
                    DELIVERY
                  </p>
                </div>
                <div className="w-full flex justify-between font-bold text-xs">
                  <p className="text-end">
                    FALL / WINTER <br /> 2024
                  </p>
                  <p>
                    TROUSER
                    <br />
                    SHOE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Homepage;
