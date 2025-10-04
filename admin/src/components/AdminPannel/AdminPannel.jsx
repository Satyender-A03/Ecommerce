import React, { useState } from "react";
import { PiDotsThreeOutlineBold, PiShoppingBagOpenFill } from "react-icons/pi";

import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from "recharts";
import gaming from "../../assets/gaming.svg";
import gloves from "../../assets/gloves.svg";
import shoes from "../../assets/shoes.svg";
import tshirt from "../../assets/t-shirt.svg";
import watch from "../../assets/watch.svg";
import acommercetried from "../../assets/2.svg";

const data = [
  { name: "Jan", uv: 400, pv: 240 },
  { name: "Feb", uv: 300, pv: 139 },
  { name: "Mar", uv: 200, pv: 980 },
  { name: "Apr", uv: 278, pv: 390 },
  { name: "May", uv: 189, pv: 480 },
  { name: "Jun", uv: 239, pv: 380 },
  { name: "Jul", uv: 349, pv: 430 },
  { name: "Aug", uv: 150, pv: 330 },
  { name: "Sep", uv: 309, pv: 450 },
  { name: "Oct", uv: 295, pv: 390 },
  { name: "NOv", uv: 379, pv: 490 },
  { name: "Dec", uv: 289, pv: 360 },
];

const orders = [
  {
    id: "#XGY-346",
    created: "7 min ago",
    customer: "Albert Flores",
    total: 630.0,
    profit: 86.7,
    status: "Pending",
  },
  {
    id: "#YHD-047",
    created: "52 min ago",
    customer: "Jenny Wilson",
    total: 25.0,
    profit: 4.2,
    status: "Confirmed",
  },
  {
    id: "#SRR-678",
    created: "1 hour ago",
    customer: "Robert Fox",
    total: 1630.0,
    profit: 203.9,
    status: "Pending",
  },
  {
    id: "#PXF-534",
    created: "3 hour ago",
    customer: "Cody Fisher",
    total: 119.0,
    profit: 12.0,
    status: "Shipped",
  },
  {
    id: "#XGD-249",
    created: "2 day ago",
    customer: "Arlene McCoy",
    total: 660.0,
    profit: 52.26,
    status: "Shipped",
  },
  {
    id: "#SKP-035",
    created: "2 day ago",
    customer: "Eleanor Pena",
    total: 290.0,
    profit: 29.0,
    status: "Rejected",
  },
  {
    id: "#SKP-567",
    created: "7 min ago",
    customer: "Dan Wilson",
    total: 590.0,
    profit: 50.0,
    status: "Shipped",
  },
];

const reports = [
  {
    item: "Macbook Air M1	",
    id: "#XGY-346",
    date: "02 Apr, 2025	",
    qty: "58 PCS",
    price: 630.0,
    profit: 86.7,
    status: "InStock",
  },
  {
    item: "Surface Laptop 4		",
    id: "#YHD-047",
    date: "02 Apr, 2025	",
    qty: "0 PCS",
    price: 25.0,
    profit: 4.2,
    status: "OutOfStock",
  },
  {
    item: "Logitech MX 250	 	",
    id: "#SRR-678",
    date: "02 Apr, 2025	",
    qty: "290 PCS",
    price: 1630.0,
    profit: 203.9,
    status: "InStock",
  },
  {
    item: "AudioEngine HD3		",
    id: "#PXF-534",
    date: "02 Apr, 2025	",
    qty: "46 PCS",
    price: 119.0,
    profit: 12.0,
    status: "OutOfStock",
  },
  {
    item: "HP Hyper LTR	",
    id: "#XGD-249",
    date: "02 Apr, 2025	",
    qty: "78 PCS",
    price: 660.0,
    profit: 52.26,
    status: "InStock",
  },
  {
    item: "Dell 32 UltraSharp	",
    id: "#SKP-035",
    date: "02 Apr, 2025	",
    qty: "8 PCS",
    price: 290.0,
    profit: 29.0,
    status: "LowStock",
  },
  {
    item: "Google Pixel 6 Pro	",
    id: "#SKP-567",
    date: "02 Apr, 2025	",
    qty: "124 PCS",
    price: 590.0,
    profit: 50.0,
    status: "InStock",
  },
];

const statusColor = {
  Pending: "bg-yellow-500 text-black",
  Confirmed: "bg-blue-600 text-white",
  Shipped: "bg-green-600 text-white",
  Rejected: "bg-red-600 text-white",
  Delivered: "bg-green-600 text-white",
  Shopping: "bg-red-700 text-white",
  InStock: "bg-blue-600 text-white",
  OutOfStock: "bg-red-700 text-white",
  LowStock: "bg-yellow-500 text-black",
};

const categories = [
  { label: "T-shirt" },
  { label: "Gaming" },
  { label: "Watch" },
  { label: "Gloves" },
  { label: "Shoes" },
];
const items = [
  {
    name: "Elephant 1802",
    to: "Jason Bourne",
    status: "Delivered",
    code: "#XDG-2347",
    qty: 1,
    price: 72,
    total: 126,
  },
  {
    name: "Red Laga",
    to: " Marie Durant",
    status: "Shopping",
    code: "#XDG-1321",
    qty: 2,
    price: 45,
    total: 76,
  },
  {
    name: "RiseUP",
    to: " Dan Wilson",
    status: "Confirmed",
    code: "#XDG-4312",
    qty: 3,
    price: 84,
    total: 168,
  },
];

const AdminPannel = () => {
  const [active, setActive] = useState("T-shirt");

  return (
    <div className="w-[80%] ml-[20%] bg-[#0d0e126c] flex text-white ">
      <div className="w-full p-8 flex flex-col gap-5">
        <div className="w-full">
          <div className="flex justify-between">
            <div>
              <p className="font-bold text-xl">eCommerce Dashboard</p>
              <p className="text-xs">Home - Dashboards</p>
            </div>
            <div className="flex flex-column gap-2">
              <button className="border-0 bg-gray-700 p-2 rounded-md">
                Manage Sales
              </button>
              <button className="border-0 bg-[#107EFF] p-2 rounded-md">
                {" "}
                Add Product
              </button>
            </div>
          </div>

          {/* center */}
          <div className="w-full mt-10 flex gap-4">
            <div className="w-[50%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
              <div className="bg-[#15171cfc] border-2 border-[#fff1f110] p-4 rounded-xl">
                <div className="text-2xl font-bold">
                  $69,700 <span className="text-green-400 text-sm">▲ 2.2%</span>
                </div>
                <div className="text-gray-400 text-sm">Expected Earnings</div>
                <div className="mt-4 text-sm">
                  <div>Shoes: $7,660</div>
                  <div>Gaming: $2,820</div>
                  <div>Others: $45,257</div>
                </div>
              </div>

              <div className="bg-[#15171cfc] border-2 border-[#fff1f110] p-4 rounded-xl">
                <div className="text-2xl font-bold">
                  $2,420 <span className="text-green-400 text-sm">▲ 2.6%</span>
                </div>
                <div className="text-gray-400 text-sm">Average Daily Sales</div>
                <div className="mt-4 flex gap-3">
                  {[4, 6, 5, 8, 7, 4].map((val, idx) => (
                    <div
                      key={idx}
                      className="bg-blue-500 rounded w-3"
                      style={{ height: `${val * 6}px` }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="bg-[#15171cfc] border-2 border-[#fff1f110]  p-4 rounded-xl">
                <div className="text-gray-400">Orders This Month</div>
                <div className="text-2xl font-bold">
                  1,836 <span className="text-red-400 text-sm">▼ 2.2%</span>
                </div>
                <div className="mt-2 text-sm text-gray-400">1,048 to Goal</div>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                  <div className="bg-green-500 h-2.5 rounded-full w-[60%]"></div>
                </div>
              </div>
              <div className="bg-[#15171cfc] border-2 border-[#fff1f110]  p-4 rounded-xl">
                <div className="text-gray-400">New Customers This Month</div>
                <div className="text-2xl font-bold">6.3k</div>
                <div className="text-sm mt-2">Today's Heroes</div>
                <div className="flex mt-2 -space-x-2">
                  {["A", "S", "C", "P"].map((letter, idx) => (
                    <div
                      key={idx}
                      className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-800 flex items-center justify-center text-sm"
                    >
                      {letter}
                    </div>
                  ))}
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-700 text-sm rounded-full border-2 border-gray-800">
                    +42
                  </div>
                </div>
              </div>
            </div>

            {/* Graph */}
            <div className="w-[50%] bg-[#15171cfc] border-2 border-[#fff1f110]  p-4 rounded-xl">
              <div className="w-full flex justify-between">
                <div>
                  <div className="font-bold">Sales This Months</div>
                  <div className="text-gray-400 text-sm">
                    User from all channels
                  </div>
                </div>
                <PiDotsThreeOutlineBold className="text-xl" />
              </div>
              <div className="mt-5">
                {" "}
                <div className="text-2xl font-bold">$14,094</div>
                <div className="text-gray-400 text-sm">
                  Another $48,346 to Goal
                </div>
                <div className="ml-10 w-full">
                  <LineChart
                    width={500}
                    height={350}
                    data={data}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                  >
                    <XAxis dataKey="name" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#404e68",
                        color: "#fff",
                        borderRadius: "10px",
                      }}
                    />
                    <CartesianGrid stroke="#404e68" />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#ffa600"
                      yAxisId={0}
                    />
                    <Line
                      type="monotone"
                      dataKey="uv"
                      stroke="#00ff00"
                      yAxisId={1}
                    />
                  </LineChart>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* recent order */}
        <div className="w-full flex gap-4">
          <div className="w-[50%] bg-[#15171cfc] border-2 border-[#fff1f110] p-4 rounded-xl">
            <div className="w-full">
              <div className="w-full flex justify-between">
                <h1 className="font-bold">Recent Order</h1>
                <PiDotsThreeOutlineBold className="text-xl" />
              </div>

              <div className="text-white p-6 rounded-lg shadow-md w-full">
                <div className="flex gap-4 mb-6">
                  {categories.map((cat) => (
                    <button
                      key={cat.label}
                      onClick={() => setActive(cat.label)}
                      className={`flex flex-col items-center text-sm px-4 p-2 rounded-lg border  ${
                        active === cat.label
                          ? "border-blue-500 text-blue-400 bg-gray-800"
                          : "border-gray-700 text-gray-400 hover:text-white"
                      }`}
                    >
                      <div className="text-2xl">{cat.image}</div>
                      {cat.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-5 text-gray-400 text-sm pb-2 border-b border-gray-700">
                  <div className="col-span-2">ITEM</div>
                  <div>QTY</div>
                  <div>PRICE</div>
                  <div>TOTAL PRICE</div>
                </div>

                <div className="divide-y divide-gray-800 mt-3">
                  {items.map((item, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-5 py-3 items-center"
                    >
                      <div className="col-span-2 flex items-center gap-3">
                        <img
                          src={tshirt}
                          alt={item.name}
                          className="w-10 h-10 rounded"
                        />
                        <div>
                          <p>{item.name}</p>
                          <p className="text-xs text-gray-400">
                            Item: {item.code}
                          </p>
                        </div>
                      </div>
                      <div className="text-white">x{item.qty}</div>
                      <div className="font-semibold">
                        ${item.price.toFixed(2)}
                      </div>
                      <div className="font-semibold">
                        ${item.total.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Graph */}
          <div className="w-[50%] bg-[#15171cfc] border-2 border-[#fff1f110] p-4 rounded-xl">
            <div className="w-full flex justify-between">
              <div>
                <div className="font-bold">Discounted Product Sales</div>
                <div className="text-gray-400 text-sm">
                  User from all channels
                </div>
              </div>
              <PiDotsThreeOutlineBold className="text-1xl" />
            </div>
            <div className="mt-5">
              {" "}
              <div className="text-2xl font-bold">
                $3,706<span className="text-red-400 text-sm ml-2">▼ 2.2%</span>
              </div>
              <div className="text-gray-400 text-sm">
                Total Discounted Sales This Month
              </div>
              <div className="ml-10 w-full">
                <LineChart
                  width={500}
                  height={260}
                  data={data}
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <XAxis dataKey="name" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#404e68",
                      color: "#fff",
                      borderRadius: "10px",
                    }}
                  />
                  <CartesianGrid stroke="#404e68" />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#ffa600"
                    yAxisId={0}
                  />
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#00ff00"
                    yAxisId={1}
                  />
                </LineChart>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-5">
          <div className="w-[30%] bg-[#15171cfc] border-2 border-[#fff1f110] p-10 rounded-xl flex flex-col gap-10 justify-center items-center">
            <h1 className="text-gray-400 font-bold text-2xl text-center ">
              Have you tried new eCommerce App ?
            </h1>

            <img src={acommercetried} alt="" />

            <div className="flex gap-5">
              <button className="border-0 bg-[#107EFF] p-2 rounded-md">
                {" "}
                View App
              </button>
              <button className="border-0 bg-gray-700 p-2 rounded-md">
                New Product
              </button>
            </div>
          </div>

          <div className="w-[70%] bg-[#15171cfc] border-2 border-[#fff1f110] p-4 rounded-xl flex flex-col gap-10 justify-center items-center">
            <div className="w-full text-white p-6 rounded-lg ">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold">Product Orders</h2>
                  <p className="text-sm text-gray-400">
                    Avg. 57 orders per day
                  </p>
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-1 rounded-md bg-gray-800 text-sm text-white border border-gray-700"
                />
              </div>

              <div className="">
                <table className="w-full text-sm">
                  <thead className="text-gray-400 text-left border-b border-gray-700">
                    <tr>
                      <th className="py-2">ORDER ID</th>
                      <th>CREATED</th>
                      <th>CUSTOMER</th>
                      <th>TOTAL</th>
                      <th>PROFIT</th>
                      <th>STATUS</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-800 hover:bg-gray-800"
                      >
                        <td className="py-3 text-blue-400">{order.id}</td>
                        <td>{order.created}</td>
                        <td>{order.customer}</td>
                        <td>${order.total.toFixed(2)}</td>
                        <td className="font-semibold">
                          ${order.profit.toFixed(2)}
                        </td>
                        <td>
                          <span
                            className={`px-2 py-1 rounded-md text-xs font-medium ${
                              statusColor[order.status]
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td>
                          <button className="bg-gray-800 hover:bg-gray-700 text-white px-2 py-1 rounded">
                            +
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-5">
          <div className="w-[30%] bg-[#15171cfc] border-2 border-[#fff1f110] p-5 rounded-xl ">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h2 className="text-md font-bold">Product Details</h2>
                <p className="text-xs text-gray-400">
                  1M Products Shipped so far
                </p>
              </div>
              <button className="border-0 bg-gray-800 text-xs p-2 rounded-md">
                {" "}
                Order Details
              </button>
            </div>
            <div className="text-white p-3 rounded-lg shadow-md w-full">
              <div className="divide-y divide-gray-800 mt-3">
                {items.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-5 py-3 items-center">
                    <div className="col-span-4 w-full flex items-center gap-2 ">
                      <div className="">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-10 h-10 rounded"
                        />
                        <p className="text-xs">To: {item.to}</p>
                      </div>
                      <div className="text-xs">
                        <p>{item.name}</p>
                      </div>
                    </div>

                    <div
                      className={`p-1.5 rounded-md text-xs font-medium flex justify-center ${
                        statusColor[item.status]
                      }`}
                    >
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[70%] bg-[#15171cfc] border-2 border-[#fff1f110] p-4 rounded-xl flex flex-col gap-10 justify-center items-center">
            <div className="w-full text-white p-6 rounded-lg ">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold">Product Orders</h2>
                  <p className="text-sm text-gray-400">
                    Avg. 57 orders per day
                  </p>
                </div>
                <button className="border-0 bg-gray-800 text-md p-2 rounded-md">
                  {" "}
                  View Stock{" "}
                </button>
              </div>

              <div className="">
                <table className="w-full text-sm">
                  <thead className="text-gray-400 text-left border-b border-gray-700">
                    <tr>
                      <th className="py-2">#</th>
                      <th>ITEM</th>
                      <th>PRODUCT ID</th>
                      <th>DATE ADDED</th>
                      <th>PRICE</th>
                      <th>STATUS</th>
                      <th>QTY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reports.map((report, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-800 hover:bg-gray-700"
                      >
                        <td className="py-3 font-bold">{report.item}</td>
                        <td>{report.id}</td>
                        <td>{report.date}</td>
                        <td>${report.price}</td>
                        <td>
                          <span
                            className={`px-2 py-1 rounded-md text-xs font-medium ${
                              statusColor[report.status]
                            }`}
                          >
                            {report.status}
                          </span>
                        </td>
                        <td>{report.qty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminPannel;
