import React from 'react'
import { FaSearch,FaThLarge, FaSortAmountDown, FaClock, FaTag, FaFilter, FaWifi, FaMapMarkerAlt, FaGooglePay } from 'react-icons/fa'
import { IoIosArrowDown } from "react-icons/io";
import { SiHdfcbank, SiIcicibank, SiPaytm, SiSwiggy } from "react-icons/si";

const CouponCode = () => {
  return (

<div className="w-[80%] ml-[20%] bg-[#15171cfc] p-8 flex flex-col gap-4 justify-center items-center">
    <div className='w-full'>
            <h1 className='text-5xl font-bold text-green-500'>CODOPON</h1>
        <div className="w-full flex justify-between items-center gap-5">
        <div className="w-[50%] bg-[#15171cfc] p-4 rounded-xl">
          <div className='text-xl flex flex-col gap-1'>
              <p >The source </p>
            <p className='flex'>of all &nbsp;<p className='text-green-500 font-bold'>Codes & Coupons</p></p>
            <p className='flex'>JUST SEARCH, FIND AND GET YOUR &nbsp;<p className='text-green-500'>DISCOUNT CODE</p></p>
          </div>
        </div>
          <div className="w-[50%] bg-[#15171cfc] flex justify-around p-4 rounded-xl">
            <div className='p-4'>
                <p className='text-yellow-200 text-3xl'>6788</p>
                <div>
                    <p className='font-bold'>Discounts</p>
                    <p className='text-xs'>Offers</p>
                </div>
            </div>
    <div className='p-4'>
                <p className='text-yellow-200 text-3xl'>358</p>
                <div>
                    <p className='font-bold'>Partnership</p>
                    <p className='text-xs'>Brands</p>
                </div>
            </div>

                <div className='p-4'>
                <p className='text-yellow-200 text-3xl'>208</p>
                <div>
                    <p className='font-bold'>Store</p>
                    <p className='text-xs'>Locations</p>
                </div>
            </div>

          </div>
    </div>
    </div>

       <div className='w-full flex bg-gray-800 rounded-2xl items-center px-6 p-5 gap-10 text-xl'> 
            <FaSearch />
            <input
              type="text"
              placeholder="Search"
              className="w-full text-white text-xl"
            /></div>
            

      <div className="w-full flex justify-between items-center p-2">

    <div className='flex gap-10 p-4 content-between'>
        <div className="bg-gray-600 flex items-center gap-2 p-3 rounded-xl">
        <FaThLarge/>
        <label>Category</label>
    </div>

      <div className="bg-gray-600 flex items-center gap-2 p-3 rounded-xl">
        <FaSortAmountDown/>
        <label>Status</label>
   </div>

      <div className="bg-gray-600 flex items-center gap-2 p-3 rounded-xl">
        <FaClock/>
        <label>Time</label>
    </div>

      <div className="bg-gray-600 flex items-center gap-2 p-3 rounded-xl">
        <FaTag/>
        <label>Discount</label>
    </div>
     
    </div>
    
  <div className="flex">
          <div className="w-15 h-15 bg-gray-600 flex items-center justify-center p-4 rounded-xl">
    <FaFilter />
    </div>
  </div>
    
</div>

<div className="w-full flex flex-col gap-4">
  <div className="w-full flex justify-between">
      <h1 className='text-2xl font-bold'>Places & websites</h1>
      <div className="w-30 bg-gray-600 flex items-center justify-between p-3 rounded-xl">
        <p className='font-bold'>Sort</p>
        <IoIosArrowDown />
      </div>
  </div>

<div className="w-full p-4 flex gap-8 justify-between">
  <div className="w-[20%] bg-gray-800 flex flex-col gap-7 rounded-2xl shadow-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
         <SiHdfcbank className='text-2xl' />
          <div className="text-lg font-bold">
           HDFC
          </div>
        </div>
        <div className="text-yellow-600 font-semibold bg-yellow-100 px-3 py-1 rounded-full text-sm">
          $16.99
        </div>
      </div>
      <div className="bg-gray-500 p-3 rounded-xl relative">
        <div className="absolute top-2 right-2">
          <FaWifi className="text-pink-900 w-5 h-5" />
        </div>
        <div className="flex items-center space-x-2 text-gray-200 text-sm">
          <FaMapMarkerAlt className="w-4 h-4" />
          <span>Sydney - Australia</span>
        </div>
        <div className="flex items-center space-x-2 mt-2 text-gray-200 text-sm">
          <FaClock className="w-4 h-4" />
          <span>08 : 12 : 44 : 59</span>
        </div>
      </div>
      <div className="border-t border-dashed border-gray-300 my-1" />
      <div className="text-center">
        <div className="border-2 border-dashed border-green-400 rounded-xl px-4 py-2 text-green-600 font-semibold tracking-wider">
          4Hy&l0LFF2X0
        </div>
      </div>
    </div>
 <div className="w-[20%] bg-gray-800 flex flex-col gap-7 rounded-2xl shadow-lg p-4 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
         <SiIcicibank className='text-2xl' />
          <div className="text-lg font-bold">
           ICICI
          </div>
        </div>
        <div className="text-yellow-600 font-semibold bg-yellow-100 px-3 py-1 rounded-full text-sm">
          $16.99
        </div>
      </div>
      <div className="bg-gray-500 p-3 rounded-xl relative">
        <div className="absolute top-2 right-2">
          <FaWifi className="text-pink-900 w-5 h-5" />
        </div>
        <div className="flex items-center space-x-2 text-gray-200 text-sm">
          <FaMapMarkerAlt className="w-4 h-4" />
          <span>Sydney - Australia</span>
        </div>
        <div className="flex items-center space-x-2 mt-2 text-gray-200 text-sm">
          <FaClock className="w-4 h-4" />
          <span>08 : 12 : 44 : 59</span>
        </div>
      </div>
      <div className="border-t border-dashed border-gray-300 my-1" />
      <div className="text-center">
        <div className="border-2 border-dashed border-green-400 rounded-xl px-4 py-2 text-green-600 font-semibold tracking-wider">
See Code        </div>
      </div>
    </div>

    <div className="w-[20%] bg-gray-800 flex flex-col gap-7 rounded-2xl shadow-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
        <SiPaytm className='text-2xl'/>
          <div className="text-lg font-bold">
           PAYTM
          </div>
        </div>
        <div className="text-yellow-600 font-semibold bg-yellow-100 px-3 py-1 rounded-full text-sm">
          $16.99
        </div>
      </div>
      <div className="bg-gray-500 p-3 rounded-xl relative">
        <div className="absolute top-2 right-2">
          <FaWifi className="text-pink-900 w-5 h-5" />
        </div>
        <div className="flex items-center space-x-2 text-gray-200 text-sm">
          <FaMapMarkerAlt className="w-4 h-4" />
          <span>Sydney - Australia</span>
        </div>
        <div className="flex items-center space-x-2 mt-2 text-gray-200 text-sm">
          <FaClock className="w-4 h-4" />
          <span>08 : 12 : 44 : 59</span>
        </div>
      </div>
      <div className="border-t border-dashed border-gray-300 my-1" />
      <div className="text-center">
        <div className="border-2 border-dashed border-green-400 rounded-xl px-4 py-2 text-green-600 font-semibold tracking-wider">
See Code        </div>
      </div>
    </div>

    <div className="w-[20%] bg-gray-800 flex flex-col gap-7 rounded-2xl shadow-lg p-4 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
       <FaGooglePay className='text-xl' />
          <div className="text-lg font-bold">
           GooglePay
          </div>
        </div>
        <div className="text-yellow-600 font-semibold bg-yellow-100 px-3 py-1 rounded-full text-sm">
          $16.99
        </div>
      </div>
      <div className="bg-gray-500 p-3 rounded-xl relative">
        <div className="absolute top-2 right-2">
          <FaWifi className="text-pink-900 w-5 h-5" />
        </div>
        <div className="flex items-center space-x-2 text-gray-200 text-sm">
          <FaMapMarkerAlt className="w-4 h-4" />
          <span>Sydney - Australia</span>
        </div>
        <div className="flex items-center space-x-2 mt-2 text-gray-200 text-sm">
          <FaClock className="w-4 h-4" />
          <span>08 : 12 : 44 : 59</span>
        </div>
      </div>
      <div className="border-t border-dashed border-gray-300 my-1" />
      <div className="text-center">
        <div className="border-2 border-dashed border-green-400 rounded-xl px-4 py-2 text-green-600 font-semibold tracking-wider">
See Code        </div>
      </div>
    </div>

  
    
</div>

</div>


</div>  )
}

export default CouponCode