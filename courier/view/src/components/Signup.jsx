import React from 'react'

const Signup = () => {
  return (
    <div >
        <div className="text-center bg-blue-50">
        <p className='text-center text-xl font-semibold py-10  '>RESISTER HERE</p>
        <div className=" w-3/4 mx-auto">
        <form action="">
            <div className=" grid gap-6 md:grid-cols-2 grid-cols-1 ">
            <div className="text-start text-sm font-semibold">
                <label htmlFor="">First Name</label>
                <input type="text" className='w-full p-2 rounded-md outline-blue-300  border-blue-300 border' />
            </div>
            <div className="text-start text-sm font-semibold">
                <label htmlFor="">Last Name</label>
                <input type="text" className='w-full p-2 rounded-md outline-blue-300  border-blue-300 border' />
            </div>
            <div className="text-start text-sm font-semibold">
                <label htmlFor="">Company Name</label>
                <input type="text" className='w-full p-2 rounded-md outline-blue-300  border-blue-300 border' />
            </div>
            <div className="text-start text-sm font-semibold">
                <label htmlFor="">Email Address</label>
                <input type="text" className='w-full p-2 rounded-md outline-blue-300  border-blue-300 border' />
            </div>
            <div className="text-start text-sm font-semibold">
                <label htmlFor="">Address</label>
                <input type="text" className='w-full p-2 rounded-md outline-blue-300  border-blue-300 border' />
            </div>
            <div className="text-start text-sm font-semibold">
                <label htmlFor="">City </label>
                <input type="text" className='w-full p-2 rounded-md outline-blue-300  border-blue-300 border' />
            </div>
            <div className="text-start text-sm font-semibold">
                <label htmlFor="">Postcode</label>
                <input type="text" className='w-full p-2 rounded-md outline-blue-300  border-blue-300 border' />
            </div>
            <div className="text-start text-sm font-semibold">
                <label htmlFor="">Phone Number</label>
                <input type="text" className='w-full p-2 outline-blue-300 rounded-md border-blue-300 border' />
            </div>
            

            </div>
            <div className="p-4">
                <button className='px-8 py-3 bg-blue-primary text-white uppercase rounded-md'>Submit</button>
            </div>
        </form>
        </div>
        </div>
        <div className="text-center">
            Already Have Account ? <a className='text-blue-500 font-semibold ' href="">Login here</a>
        </div>
    </div>
  )
}

export default Signup