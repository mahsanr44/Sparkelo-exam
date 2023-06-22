import React from 'react'

const AddTodo = () => {
    return (
        <div className='my-16 max-w-lg mx-12 md:mx-32 lg:mx-[420px]'>
            <div className='border-2 border-primary rounded-md'>
                <div className='bg-primary py-3'>
                    <h2 className='text-white px-4'>New Employee</h2>
                </div>
                <div className='m-6'>
                    <form action="" className='space-y-1'>
                        <label className='mr-8'>First Name<span className='text-red-500'>*</span></label>
                        <input type="text" className='border border-primary rounded px-1.5' required />
                        <br />
                        <label className='mr-8' >Last Name<span className='text-red-500'>*</span></label>
                        <input type="text" className='border border-primary rounded px-1.5' required />
                        <br />
                        <label className='mr-[73px]' >Email<span className='text-red-500'>*</span></label>
                        <input type="text" className='border border-primary rounded px-1.5' required />
                        <br />
                        <label className='mr-[66px]' >Phone<span className='text-red-500'>*</span></label>
                        <input type="text" className='border border-primary rounded px-1.5' required />
                        <br />
                        <div className='flex justify-end space-x-2 mx-4 pt-3'>
                            <button className='text-gray-400 font-semibold'>Clear All</button>
                            <button className='bg-primary text-white px-5  font-semibold rounded-2xl'>ADD</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTodo
