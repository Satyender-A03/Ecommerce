import React from 'react'
import { FaSearch } from "react-icons/fa";
import { MdNotificationsNone  } from "react-icons/md";



const users =[
  { serial:'1',name:'ritik',id:'345',email:'ritik123@gmail.com',phone:'8959447893',address:'Tilak Nagar, New Delhi-110059',orderId:'234' } ,
  { serial:'2',name:'ritik',id:'345',email:'ritik123@gmail.com',phone:'8959447893',address:'Tilak Nagar, New Delhi-110059',orderId:'234'  },
  { serial:'3',name:'ritik',id:'345',email:'ritik123@gmail.com',phone:'8959447893',address:'Tilak Nagar, New Delhi-110059',orderId:'234'  },
  { serial:'4',name:'ritik',id:'345',email:'ritik123@gmail.com',phone:'8959447893',address:'Tilak Nagar, New Delhi-110059',orderId:'234'  },
  { serial:'5',name:'ritik',id:'345',email:'ritik123@gmail.com',phone:'8959447893',address:'Tilak Nagar, New Delhi-110059',orderId:'234'  },
  { serial:'6',name:'ritik',id:'345',email:'ritik123@gmail.com',phone:'8959447893',address:'Tilak Nagar, New Delhi-110059',orderId:'234'  },
  { serial:'7',name:'ritik',id:'345',email:'ritik123@gmail.com',phone:'8959447893',address:'Tilak Nagar, New Delhi-110059',orderId:'234'  },
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
const UserManage = () => {

    
  return (
<div className="w-[80%] ml-[20%] bg-[#15171cfc] p-4 flex flex-col justify-center items-center">
  <div className="w-full text-white p-3 rounded-lg flex flex-col gap-2">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">Users Management</h2>

        </div>
        <div className='p-2 flex gap-4'>
<button className='bg-blue-700 font-bold p-2 rounded-md text-center'>+ New User</button>
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
              <th>USER NAME</th>
              <th>USER ID</th>
              <th>E-mail</th>
              <th>PHONE</th>
              <th>ADDRESS</th>
              <th>ORDER ID</th>
            </tr>
          </thead>
        <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b border-gray-800 hover:bg-gray-800 text-center">
                <td className="p-7">{user.serial}</td>
                <td>{user.name}</td>
                <td className="text-blue-400">#{user.id}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td className="text-blue-400">#{user.orderId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

</div>
)}

export default UserManage