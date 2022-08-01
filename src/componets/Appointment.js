import React from 'react'
// import Doctor from './images 2/cover-bg.jpg'

export default function appointment() {

  const handleSubmit = () => {
    console.log("Submit was clikid")
  }

  return (
    <>
      <main className='bg-slate-100 text-center md:text-left'>
        <section className='2xl:px-64 py-32 sm:px-8 lg:px-16 xl:px-40 px-4'>
          <div className=' items-center '>
            <h1 className='uppercase font-extrabold text-3xl mb-20 underline '>appointment from</h1>
            <div className='flex flex-col '>
              <span className='mb-2 font-semibold'>Your Name:</span>
              <div><input className='w-96 p-1 border-2 border-blue-500 rounded-md shadow-lg font-semibold' type="text" placeholder='Ex: John F. Ford' /></div>
            </div>
            <div className='flex flex-col md:flex-row pt-10 '>
              <div className='flex flex-col  pt-10 '>
                <span className='mb-2 font-semibold'>Your Age:</span>
                <div><input className='p-1 border-2 border-blue-500 rounded-md shadow-lg font-semibold' type="number" required minLength={9} mixlength={2} /></div>
              </div>
              <div className='flex flex-col  pt-10 md:pl-40 items-center md:items-start'>
                <span className='mb-2 font-semibold'>Gender:</span>
                {/* <div><input className='p-1 border-2 border-blue-500 rounded-md shadow-lg font-semibold' type="text" name="" id="" /></div> */}
                {/* <span className='text-xs'>Male, Female and TirdGender</span> */}
                <select className='p-1 border-2 w-40  bg-white border-blue-500 rounded-md shadow-lg font-semibold' name="" id="">
                  <option value="">Male</option>
                  <option value="">Female</option>
                  <option value="">Third gender</option>
                </select>
              </div>
            </div>
            <div className='flex flex-col md:flex-row pt-10 '>

              <div className='flex flex-col  pt-10'>
                <span className='mb-2 font-semibold'>Date of Birth:</span>
                <div><input className='p-1 border-2 border-blue-500 rounded-md shadow-lg font-semibold' type="date" name="" id="" /></div>
              </div>
              <div className='flex flex-col  pt-10 md:pl-40'>
                <span className='mb-2 font-semibold'>Mrried:</span>
                <div>
                  {/* <input className='p-1 border-2 border-blue-500 rounded-md shadow-lg font-semibold' type="text" name="" id="" placeholder="Yes or No" /> */}
                  <select className='p-1 bg-white border-2 border-blue-500 rounded-md shadow-lg font-semibold' name="" id="">
                    <option className='p-1 bg-white border-2 border-blue-500 rounded-md shadow-lg font-semibold' value="">Yes</option>
                    <option className='p-1 bg-white border-2 border-blue-500 rounded-md shadow-lg font-semibold' value="">No</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row pt-10 '>
            <div className='flex flex-col pt-10'>
              <span className='mb-2 font-semibold'>Mobile Number:</span>
              <div><input className='p-1 border-2 border-blue-500 rounded-md shadow-lg font-semibold ' type="number" name="" id="" /></div>
            </div>
            <div className='flex flex-col pt-10 md:pl-40'>
              <span className='mb-2 font-semibold'>OTP:</span>
              <div><input className='p-1 border-2 border-blue-500 rounded-md shadow-lg font-semibold' type="password" name="" id="" /></div>
            </div>
          </div>
          <div className='pt-20'>
            <input type="checkbox" name="" id="" />
            <span className='pl-4 text-sm font-bold'>Your Information Is Currect</span>
          </div>
          <div className='flex flex-col md:flex-row pl-10 '>
            <div className='pt-40  text-center'>
              <button className='p-2 px-10 border-2 bg-emerald-500 border-emerald-500 text-white rounded-md shadow-lg font-semibold shadow-emerald-500' type="submit">Send OTP</button>
            </div>
            <div className='pt-40 md:pl-10  text-center'>
              <button className='p-2 px-10 border-2 bg-emerald-500 border-emerald-500 text-white rounded-md shadow-lg font-semibold shadow-emerald-500' type="submit" onClick={handleSubmit}>Submit</button>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}
