import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrAnalytics } from "react-icons/gr";
import { IoWalletOutline } from "react-icons/io5";
import { SiBrandfolder } from "react-icons/si";
import { RiCouponLine } from "react-icons/ri";
import { LuLayoutDashboard, LuUsers } from "react-icons/lu";
import { PiShoppingBagOpenFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
        <div className="w-[20%] h-[100vh] bg-[#090a0cdd] p-4 text-center flex flex-col gap-15 fixed">
<div className="font-bold text-3xl">E-commerce</div>

<div className=" text-xl flex flex-col gap-7 ">
<div className="flex gap-3 items-center">
  <LuLayoutDashboard/>
  <Link to="/">Dashboard</Link>
</div>

<div className="flex gap-3 items-center"> 
<AiOutlineShoppingCart />
  <Link to="/ordermanage">Order Management</Link>
</div>

<div className="flex gap-3 items-center">
<LuUsers  />
  <Link to="/usermanage">User Management</Link>
</div>

<div className="flex gap-3 items-center">
  <PiShoppingBagOpenFill/>
  <Link to="/productmanage">Product Management</Link>
</div>

<div className="flex gap-3 items-center">
<SiBrandfolder />
 
  <Link to="/brandmanage">Brand Management</Link>
</div>

<div className="flex gap-3 items-center">
<IoWalletOutline/>
 
  <Link to="/salemanage">Sales Analytics</Link>
</div>

<div className="flex gap-3 items-center">
<RiCouponLine />

  <Link to="/couponcodes">Coupon Codes</Link>
</div>




</div>
  </div>

  )
}

export default Sidebar