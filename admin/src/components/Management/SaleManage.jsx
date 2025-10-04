import React from 'react'
import { GrTransaction } from 'react-icons/gr'
 import { LuRefreshCcw } from 'react-icons/lu'
import { PiDotsThreeOutlineBold } from 'react-icons/pi'
import { BsGraphUpArrow } from "react-icons/bs";
import { BarChart,LineChart,Line, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', revenue: 10000, quantity: 6000 },
  { name: 'Tue', revenue: 23000, quantity: 18000 },
  { name: 'Wed', revenue: 34000, quantity: 25000 },
  { name: 'Thu', revenue: 27000, quantity: 20000 },
  { name: 'Fri', revenue: 8000, quantity: 5000 },
  { name: 'Sat', revenue: 32000, quantity: 24000 },
  { name: 'Sun', revenue: 22000, quantity: 14000 },
];

const datas= [
  { value: 30 },
  { value: 40 },
  { value: 75 },
  { value: 20 },
  { value: 60 },
  { value: 45 },
  { value: 35 },
];
const day =[
{    name: 'Sat'},
{name: 'Sun'},
{name: 'Mon'},
{name: 'Tue'},
{name: 'Wed'},
{name: 'Tus'},
{name: 'Fri'},
]
const SaleManage = () => {
  return (
   
    <div className="w-[80%] ml-[20%] bg-[#15171cfc] p-4 flex flex-col justify-center items-center">
      <div className="w-full text-white p-3 rounded-lg flex flex-col gap-2">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold">Sales Analytics</h2>
            </div>
            <div className='p-2 flex gap-2'>
    <button className=" hover:bg-gray-700 text-white px-3 py-3 rounded">
<LuRefreshCcw />
          </button>
    <button className='bg-blue-600 font-bold p-2 rounded-md text-center'>Data Refresh</button>
            </div>
           
          </div>

          <div className="w-full flex gap-5">
                      <div className="w-[50%] bg-[#15171cfc] border-2 border-[#fff1f110] px-6 p-5 rounded-xl flex flex-col gap-8">
                    <div className="w-full flex justify-between"> 
                        <GrTransaction className='text-2xl' />
                        <PiDotsThreeOutlineBold className="text-xl"/>
                        </div>
                        <div className="w-full flex flex-col gap-3 text-2xl">
                            <p>Transaction</p>
                          <div className='text-green-600 flex items-center gap-4'>
                            <BsGraphUpArrow />
                             <p>16.45%</p>
                             </div>
                 <p className='text-4xl font-bold'>$4,541.47</p>


                        </div>

                      </div>
                                
           <div className="w-[50%] bg-[#15171cfc] border-2 border-[#fff1f110] p-4 rounded-xl">
 <div className="w-full text-white rounded-xl p-4 shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Analytics</h3>
        <span className="text-sm text-gray-400">Weekly ▾</span>
      </div>

      <ResponsiveContainer width="100%" height={120}>
        <LineChart data={datas}>
          <XAxis dataKey="name" tick={{ fill: '#ccc', fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ backgroundColor: '#333', border: 'none' }}
            labelStyle={{ color: '#fff' }}
            itemStyle={{ color: '#fff' }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#facc15" // yellow-400
            strokeWidth={3}
            dot={{ fill: '#facc15', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="flex justify-between px-1 pt-2 text-gray-400">
        {day.map((dat, i) => (
          <span
            key={i}
            className={dat.name === 'Wed' ? 'text-yellow-400 font-medium' : ''}
          >
            {dat.name}
          </span>
        ))}
      </div>
    </div>
</div>
   </div>


           <div className="p-6 mt-3 rounded-xl bg-[#15171cfc] border-2 border-[#fff1f110] ">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold">Sales Revenue</h2>
        <span className="text-sm">January 01, 2023</span>
      </div>

      <div className="flex gap-5 mb-6">
        <div className="flex-1 border-2 border-[#fff1f110] p-4 rounded-lg">
          <p className="text-sm text-blue-500">Revenue by:</p>
          <p className="text-sm text-blue-400 mb-1">▲ 16.45%</p>
          <p className="text-xl font-semibold text-blue-700">$9,577.25</p>
        </div>
        <div className="flex-1 border-2 border-[#fff1f110] p-4 rounded-lg">
          <p className="text-sm text-purple-500">Sales Quantity:</p>
          <p className="text-sm text-purple-400 mb-1">▲ 1.12%</p>
          <p className="text-xl font-semibold text-purple-700">$9,577.25</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Bar dataKey="quantity" fill="#a855f7" radius={[4, 4, 0, 0]} />
          <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
          </div>
          </div>
          
          
  )
}

export default SaleManage