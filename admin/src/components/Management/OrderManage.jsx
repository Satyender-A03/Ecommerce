import React from 'react'
import { FaRegCommentDots, FaSearch } from "react-icons/fa";
import { MdNotificationsNone  } from "react-icons/md";


const orders = [
  { serial:'1',id: '#XGY-346', created: '7 min ago', customer: 'Albert Flores', total: 630.0, profit: 86.7, status: 'Pending' },
  { serial:'2',id: '#YHD-047', created: '52 min ago', customer: 'Jenny Wilson', total: 25.0, profit: 4.2, status: 'Confirmed' },
  { serial:'3',id: '#SRR-678', created: '1 hour ago', customer: 'Robert Fox', total: 1630.0, profit: 203.9, status: 'Pending' },
  { serial:'4',id: '#PXF-534', created: '3 hour ago', customer: 'Cody Fisher', total: 119.0, profit: 12.0, status: 'Shipped' },
  { serial:'5',id: '#XGD-249', created: '2 day ago', customer: 'Arlene McCoy', total: 660.0, profit: 52.26, status: 'Shipped' },
  { serial:'6',id: '#SKP-035', created: '2 day ago', customer: 'Eleanor Pena', total: 290.0, profit: 29.0, status: 'Rejected' },
  { serial:'7',id: '#SKP-567', created: '7 min ago', customer: 'Dan Wilson', total: 590.0, profit: 50.0, status: 'Shipped' },
  { serial:'8',id: '#SKP-567', created: '7 min ago', customer: 'Dan Wilson', total: 590.0, profit: 50.0, status: 'Pending' },
  { serial:'9',id: '#SKP-567', created: '7 min ago', customer: 'Dan Wilson', total: 590.0, profit: 50.0, status: 'Confirmed' },
  {serial:'10',id: '#SKP-567', created: '7 min ago', customer: 'Dan Wilson', total: 590.0, profit: 50.0, status: 'Rejected' },
]

const statusColor = {
  Pending: 'bg-yellow-500 text-black',
  Confirmed: 'bg-blue-600 text-white',
  Shipped: 'bg-green-600 text-white',
  Rejected: 'bg-red-600 text-white',
  Delivered: 'bg-green-600 text-white',
  Shopping:'bg-red-700 text-white', 
  InStock:'bg-blue-600 text-white',
  OutOfStock:'bg-red-700 text-white',
  LowStock:'bg-yellow-500 text-black'
};
const OrderManage = () => {

    
  return (
<div className="w-[80%] ml-[20%] bg-[#15171cfc] p-4 flex flex-col justify-center items-center">
  <div className="w-full text-white p-3 rounded-lg flex flex-col gap-2">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">Order Management</h2>

        </div>
        <div className='p-2 flex gap-4'>
<button className='bg-blue-700 font-bold p-2 rounded-md text-center'>+ New Order</button>
<button className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-3 rounded">
                    <FaSearch />
                  </button>
  <button className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-3 rounded text-xl">
<MdNotificationsNone />
                  </button>
        </div>
       
      </div>
      <div className='flex bg-gray-800 rounded-2xl items-center px-6 p-5 gap-10 text-xl'> 
       
        <FaSearch />
        <input
          type="text"
          placeholder="Search"
          className="w-full text-white text-xl"
        /></div>

      <div className="">
        <table className="w-full text-sm">
          <thead className="text-gray-400 text-left border-b border-gray-700 ">
            <tr className='text-md text-center'>
              <th className="p-4">#</th>
              <th>ORDER ID</th>
              <th>CREATED</th>
              <th>CUSTOMER</th>
              <th>TOTAL</th>
              <th>PROFIT</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
           
            {orders.map((order, index) => (
              <tr key={index} className="border-b border-gray-800 hover:bg-gray-800 text-center">
                <td className='p-7'>{order.serial}</td>
                <td className="text-blue-400">{order.id}</td>
                <td>{order.created}</td>
                <td>{order.customer}</td>
                <td>${order.total.toFixed(2)}</td>
                <td className="font-semibold">${order.profit.toFixed(2)}</td>
                <td>
                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${statusColor[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td >
                  <button className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-3 rounded">
                    <FaRegCommentDots />
                    
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

</div>
)}

export default OrderManage