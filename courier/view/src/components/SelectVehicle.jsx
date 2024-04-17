import Image from 'next/image'
import React from 'react'

const SelectVehicle = () => {
  return (

        <div className=" p-20 bg-orange-200">
            <div className="w-9/12 mx-auto space-y-10">
            <div className="flex justify-center">
                <p className='text-white text-2xl  px-8 rounded-lg py-2 flex font-semibold text-center bg-orange-800'>Please Select The Vehicle You Need</p>
            </div>

            <div className="flex justify-around">
                <div className="space-y-4 text-center hover:bg-orange-800 rounded-md py-4 px-8">
                    <Image src="https://www.couriernet.co.uk/wp-content/uploads/2019/12/car-bg-preview-300-n.png" width={150} height={150} alt='Car'/>
                    <p className='font-medium text-lg'>Car</p>
                    <p className='text-sm font-semibold font-serif'>Small Parcels Only</p>
                </div>
                <div className="space-y-4 text-center hover:bg-orange-800 rounded-md py-4 px-8 ">
                    <Image src="https://www.couriernet.co.uk/wp-content/uploads/2019/12/car-bg-preview-300-n.png" width={150} height={150} alt='Car'/>
                    <p className='font-medium text-lg'>Car</p>
                    <p className='text-sm font-semibold font-serif'>Up to 1.2 Meters</p>
                </div>
                <div className="space-y-4 text-center hover:bg-orange-800 rounded-md py-4 px-8">
                    <Image src="https://www.couriernet.co.uk/wp-content/uploads/2019/12/van-bg-preview300b.png" className='hover:scale-125' width={150} height={150} alt='Car'/>
                    <p className='font-medium text-lg'>Car</p>
                    <p className='text-sm font-semibold font-serif'>Large van</p>
                </div>
                <div className="space-y-4 text-center hover:bg-orange-800 rounded-md py-4 px-8">
                    <Image src="https://www.couriernet.co.uk/wp-content/uploads/2019/12/van-bg-preview300b.png" width={150} height={150} alt='Car'/>
                    <p className='font-medium text-lg'>Car</p>
                    <p className='text-sm font-semibold font-serif'>Large van</p>
                </div>
            </div>
            <div className="w-3/4 mx-auto">
            <form action="">
                <div className=" space-y-6">
            <div className="flex gap-5  ">

                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="" className='font-semibold'>Full Collection Postcode*</label>
                    <input type="text" className='p-2 rounded-md' />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="" className='font-semibold'>Full Delivery Postcode*</label>
                    <input type="text" className='p-2 rounded-md' />
                </div>
               
            </div>
            <div className="text-center">
                    <button className='text-white bg-orange-800 p-3'>Get a Quote</button>
                </div>
                </div>
                </form>
                </div>
            </div>
        </div>
  )
}

export default SelectVehicle