import React from 'react'
import {
  Link
} from "react-router-dom";

import Doctor from './Image/cover-bg.jpg'
import teeth from './Icons/tooth.png'
import surgery from './Icons/oral.png'
import pain from './Icons/headache.png'
import dirl from './Icons/drill.png'
import dentl from './Image/dental cinik.jpeg'

export default function Navbar() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer')
  };

  return (
    <div>
      <main className="w-full">
        {/* <!-- start header --> */}
        <header className=' absolute top-0 left-0 w-full px-4 z-50 sm:px-8 lg:px-16 xl:px-40 2xl:px-64'>
          <div className="hidden md:flex justify-between items-center  border-b text-sm py-3" >
            <div className=''>
              <ul className='flex text-white'>
                <li>
                  <div className='flex items-center '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" className="w-6 h-6 fill-current text-white" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    <span className='ml-2  font-bold text-sm'> 1983 Kerry Way, Whittier, CA, USA</span>
                  </div>
                </li>
                <li className='ml-6'>
                  <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="w-6 h-6 fill-current text-white" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                    <span className='ml-2 font-bold text-sm'>+44 2525 358</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <ul className='flex justify-end text-white'>
                <li className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text=black bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </li >
                <li className='ml-6'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text=black bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </li>
                <li className='ml-6'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text=black bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                </li>
                <li className='ml-6'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text=black bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-wrap items-center justify-between py-6'>
            <div className='w-1/2 md:w-auto'>
              <Link className='text-white font-bold text-2xl' to="/">Dental Care</Link>
            </div>
            <label className='pointer-cursor md:hidden block' htmlFor=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="fill-current text-white" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg></label>
            <input className='hidden' type="checkbox" id="menu-toggle" />
            <div className='hidden md:block w-full md:w-auto ' id='menu'>
              <nav className='w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none'>
                <ul className='md:flex items-center '>
                  <li className='py-2 inline-block md:text-white md:hidden lg:block font-semibold'><Link to="">About Us</Link> </li>
                  <li className='md:ml-4'><Link className='py-2 inline-block md:text-white md:px-2 font-semibold' to="">Treatment</Link></li>
                  <li className='md:ml-4'><Link className='py-2 inline-block md:hidden lg:block md:text-white md:px-2 font-semibold' to="">Blog</Link></li>
                  <li className='md:ml-4'><Link className='py-2 inline-block  md:text-white md:px-2 font-semibold' to="">Testimonials</Link></li>
                  <li className='md:ml-4'><Link className='py-2 inline-block md:text-white md:px-2 font-semibold' to="">Contact Us</Link></li>
                  <li className='md:ml-6 mt-3 md:mt-0'><Link className='inline-block font-semibold px-4 py-2 text-white bg-blue-600 md:bg-transparent md:text-white border border-white rounded ' to="/appointment">Book Appointment</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {/* <!-- end header --> */}

        {/* <!-- start hero --> */}
        <div className="bg-gray-100">
          <section className="cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex items-center ">
            <div className="h-full absolute top-0 left-0 z-0 w-full">
              <img src={Doctor} alt="" className="w-full  h-full object-cover opacity-20" />
            </div>
            <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
              <div>
                <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">A better life starts with a
                  beautiful
                  smile.</h1>
                <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">Welcome to the Dentist Office of Dr. D. K. Rajak, where trust and comfort are priorities.</p>
                <Link to="/appointment" className="px-8 py-4 bg-teal-500 text-white rounded inline-block mt-8 font-semibold">Book
                  Appointment</Link>
              </div>
            </div>
          </section>
        </div>
        {/* <!-- end hero --> */}
      </main >
      {/* Start About */}
      <section className='relative 2xl:px-64 py-32 sm:px-8 lg:px-16 xl:px-40 px-4' >
        <div className='flex flex-col md:flex-row lg:mx-8'>
          <div className='w-full lg:w-1/2 lg:px-8 '>
            <h6 className='text-base font-semibold uppercase tracking-widest '>Our Clinic</h6>
            <h2 className='text-3xl font-bold mt-4'>Welcome to Dentist Office of Dr. D.K. Rajak </h2>
            <p className='text-sm font-semibold mt-1'>Excellence in Dentistry in the Heart of NY</p>
            <p className='text-base mt-5 font-semibold'>Donec convallis sollicitudin facilisis. Integer nisl ligula, accumsan non tincidunt ac, imperdiet in enim. Donec efficitur ullamcorper metus, eu venenatis nunc. Nam eget neque tempus, mollis sem a, faucibus mi.</p>
          </div>
          <div className='w-full lg:w-1/2 lg:px-8 py-5'>
            <div className='flex'>
              <div>
                <div className='w-16 h-16 bg-blue-600 rounded-full'></div>
              </div>
              <div className='ml-8'>
                <h4 className='text-xl font-bold'>Our Patient-Focused Approach</h4>
                <p className='mt-4 text-base font-semibold'>Your treatment plan will perfectly match your needs, lifestyle, and goals. Even if it’s been years since you last visited the dentist, we can help. Our comfortable office, compassionate team, and minimally-invasive treatments will help you feel completely at ease.</p>
              </div>
            </div>
            <div className='flex mt-9'>
              <div>
                <div className='w-16 h-16 bg-blue-600 rounded-full'></div>
              </div>
              <div className='ml-8'>
                <h4 className='text-xl font-bold'>Everything You Need Under One Roof</h4>
                <p className='mt-4 text-base font-semibold'>Our comprehensive services allow you to receive all needed dental care right here in our state-of-art office - from dental cleanings and fillings to dental implants and extractions.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-24 flex flex-col md:flex-row'>
          <div className='bg-white shadow-lg text-center items-center rounded-xl p-8 mx-4 my-2'>
            <div className='items-center'><img className='h-14 w-14 mb-6 mx-auto' src={teeth} alt="" /></div>
            <h4 className='text-xl font-bold '>Teet Whitening</h4>
            <p className='text-base font-semibold mb-4'>Let us show you how our experience</p>
            <button className='p-2 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-500 shadow-lg hover:text-white'>Read More</button>
          </div>
          <div className='bg-white shadow-lg text-center p-8 rounded-xl mx-4 my-2 '>
            <img className='h-14 w-14 mb-6 mx-auto' src={surgery} alt="" />
            <h4 className='text-xl font-bold'>Oral Surgery Work</h4>
            <p className='text-base font-semibold mb-4'>Let us show you how our experience</p>
            <button className='p-2 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-500 shadow-lg hover:text-white'>Read More</button>
          </div>
          <div className='bg-white shadow-lg text-center p-8 rounded-xl mx-4 my-2 '>
            <img className='h-14 w-14 mb-6 mx-auto' src={pain} alt="" />
            <h4 className='text-xl font-bold'>Painless Dentistry</h4>
            <p className='text-base font-semibold mb-4'>Let us show you how our experience</p>
            <button className='p-2 border-2 border-blue-500 rounded-lg font-semibold shadow-lg hover:bg-blue-500 hover:text-white'>Read More</button>
          </div>
          <div className='bg-white shadow-lg text-center p-8 rounded-xl mx-4 my-2 '>
            <img className='h-14 w-14 mb-6 mx-auto' src={dirl} alt="" />
            <h4 className='text-xl font-bold'>Periodontics Test</h4>
            <p className='text-base font-semibold mb-4'>Let us show you how our experience</p>
            <button className='p-2 border-2  border-blue-500 rounded-lg font-semibold hover:bg-blue-500 shadow-lg hover:text-white'>Read More</button>
          </div>
        </div>
      </section>
      {/* End About  */}

      {/* Start Testmonials  */}
      <section className='relative 2xl:px-64 md:py-32 py-10 sm:py-10 sm:px-8 lg:px-16 xl:px-40 px-4 bg-slate-50'>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full lg:w-1/2 lg:px-8 '>
            <h6 className='text-sm font-bold uppercase sm:pt-0 lg:pt-1  '>Patient testimonials.</h6>
            <h2 className='text-3xl font-extrabold pt-3'>Why choose the DentalCare Center ?</h2>
            <p className='text-base font-semibold pt-3'>Aeneas that the earth is the earth. Homes The earth does not start to develop, but there is some transportation. None of the main flavor of the game, the pure teenagers of the sauce in the vehicles. It's easy to take care of the valley. Integer nisl ligula, accumsan non tincidunt ac, imperdiet in enim. Until it becomes a fear of bears, it is now poisonous. For no time needs, a soft salad from my throat.</p>
          </div>
          <div className='w-full lg:w-1/2 lg:px-8  '>
            <img className='h-auto w-auto drop-shadow-2xl rounded-lg' src={dentl} alt="" />
          </div>
        </div>
      </section>
      {/* End Testmonials */}

      {/* Start cart */}
      <section className=' relative bg-gradient-to-r from-indigo-500 px-4 to-emerald-500 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-8'>
        <div className='flex items-center justify-center'>
          <h2 className='font-semibold text-lg text-white'>Get in touch with us today! Call us on: +1 562-789-1935</h2>
          <div className='pl-10'>
            <Link to="/appointment"><button className='font-semibold text-white border-2 p-3 rounded-lg '>Book Appointment</button></Link>
          </div>
        </div>
      </section>
      {/* End Start Cart  */}

      {/* Footer Start */}
      <footer className='relative bg-gray-900 2xl:px-64 md:py-32 py-10 sm:py-10 sm:px-8 lg:px-16 xl:px-40 px-4 '>
        <div className='flex md:flex-row flex-col  '>
          <div className='w-full lg:w-2/6 lg:mx-4 lg:pr-8 '>
            <h3 className='text-white text-2xl font-semibold'>Dental Care</h3>
            <p className='text-white font-semibold text-sm'>Our center 84 year work experience we have very excellent Docter of the hightest quality machnices and equment </p>
          </div>
          <div className='text-white w-full lg:w-1/6 lg:mt-0 lg:mx-4 lg:pr-8 mt-8'>
            <h4 className='text-lg font-semibold'>Treatments</h4>
            <p className='pt-4'>Teet Whitening</p>
            <p className='pt-2'>Oral Surgery Work</p>
            <p className='pt-2'>Painless Dentistry</p>
            <p className='pt-2'>Periodontics Test</p>
          </div>
          <div className='w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8'>
            <h4 className='text-white text-lg font-semibold'>Contact Details</h4>
            <ul className='text-white pt-4'>
              <li className='flex flex-row items-center'>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg></span>
                <span className='ml-2'>1983 Kerry Way, Whittier, CA, USA</span>
              </li>
              <li className='flex flex-row items-center pt-2'>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg></span>
                <span className='ml-2'>+1 562-789-1935</span>
              </li>
              <li className='flex flex-row items-center pt-2'>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                </svg></span>
                <span className='ml-3'>Mon - Fri: 9:00am - 10:pm <br />Closed on Weekends</span>
              </li>
              <li className='flex flex-row items-center pt-2'>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg></span>
                <span className='ml-3'>denalcare@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className='text-white  w-full lg:w-1/6 lg:mt-0 mt-8 lg:mx-4'>
            <h4 className='text-lg font-semibold uppercase '>We're Social</h4>
            <ul className='flex text-white mt-3'>
              <li className=''>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </li>
              <li className='ml-5'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg></li>
              <li className='ml-5'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg></li>
              <li className='ml-5'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-youtube " viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
              </svg></li>
            </ul>
            <p className='mt-20 text-gray-400 text-sm'>© 2018 DentalCare. <br className='hidden lg:block' />All Rights Reserved.  </p>
          </div>
        </div>
        <div className='text-center mt-10'><p className='text-white text-lg'>I'm change some style By Dhananjay Kumar <br />Owner is  </p>
          <p className='p-2 text-white hover:cursor-pointer' onClick={() => openInNewTab('https://themewagon.com/themes/free-tailwind-css-medical-website-template-dental-pro/')}>https://themewagon.com/themes/free-tailwind-css-medical-website-template-dental-pro/</p>
          <br /> <p className='p-2 text-white hover:cursor-pointer' onClick={() => openInNewTab('https://icons.getbootstrap.com/')}> And Use https://icons.getbootstrap.com/</p></div>
      </footer>
      {/* Footer End  */}
    </div>


  );

}
