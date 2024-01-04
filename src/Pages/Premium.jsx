import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
//import Payment from '../components/Payment.jsx';
const About = () => {

  return (
    <>
     <Navbar />
     <div className="bg-[#ffd148] flex items-center justify-center min-h-[90vh] relative z-10">
    <div className="absolute -top-40 -right-40 lg:w-2/3 w-full h-80 -z-10">
    </div>

    <div
        className="w-full max-w-[1190px] px-6 sm:px-8 md:px-16 py-10 md:py-20 rounded-xl bg-[#ffffff]/60 min-h-[300px] m-2 shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.21)]">
        <h1 className="font-semibold text-black text-2xl mb-2 tracking-wider drop-shadow-[3px_3px_5px_rgba(91,91,91,0.58)]"> Monkey -
            Sponsorship</h1>
        <small className="font-[500] text-black">In the event that we do not have a full 30-days, we extrapolate based on data we have.</small>
        <ul className="flex items-start justify-between gap-8 mt-10 md:flex-row flex-col">
            <li
                className="w-full lg:w-[32%] px-10 pt-16 pb-8 bg-white rounded-lg self-stretch hover:scale-105 hover:shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.1)] transition-all duration-150 ease-in">
                <h2
                    className="text-center font-semibold text-lg tracking-wider mb-3 drop-shadow-[3px_3px_5px_rgba(91,91,91,0.58)]">
                    Sidebar Block</h2>
                <p className="text-center tracking-tighter block mb-14">
                    <span className="text-4xl font-bold">$5</span>
                    <span className="text-black/40 text-center">/mo</span>
                </p>
                <button className="w-full p-2 bg-yellow-500 text-white rounded-md font-semibold hover:bg-red-500 transition-all duration-150 ease-in mb-8 border-[#13181f]"><a href='https://buy.stripe.com/test_14kaEYcpt0hX6cMbII'>Pay Now</a></button>
                <ol className="list-disc text-[#ff2865] w-[80%] mx-auto">
                    <li><span className="text-black text-xs font-semibold">439,000 Est. Impressions</span></li>
                    <li><span className="text-black text-xs font-semibold">180 x 150</span></li>
                    <li><span className="text-black text-xs font-semibold">Middle Right</span></li>
                </ol>
            </li>
            <li
                className="w-full lg:w-[32%] px-10 pt-16 pb-8 bg-white rounded-lg self-stretch hover:scale-105 hover:shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.1)] transition-all duration-150 ease-in relative group">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 rounded-br-xl rounded-bl-xl text-white px-8 py-2 bg-[#ff2865] transition-all duration-150 ease-in group-hover:shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.1)]">
                    Hot take!
                </div>
                <h2
                    className="text-center font-semibold text-lg tracking-wider mb-3 drop-shadow-[3px_3px_5px_rgba(91,91,91,0.58)]">
                    Sidebar Block</h2>
                <p className="text-center tracking-tighter block mb-14">
                    <span className="text-4xl font-bold">$50</span>
                    <span className="text-black/40 text-center">/mo</span>
                </p>
                <button className="w-full p-2 bg-yellow-500 text-white rounded-md font-semibold hover:bg-red-500 transition-all duration-150 ease-in mb-8 border-[#13181f]"><a href='https://buy.stripe.com/test_14kaEYcpt0hX6cMbII'>Pay Now</a></button>
                <ol className="list-disc text-[#ff2865] w-[80%] mx-auto">
                    <li><span className="text-black text-xs font-semibold">439,000 Est. Impressions</span></li>
                    <li><span className="text-black text-xs font-semibold">300 x 250</span></li>
                    <li><span className="text-black text-xs font-semibold">Middle Right</span></li>
                </ol>
            </li>
            <li
                className="w-full lg:w-[32%] px-10 pt-16 pb-8 bg-white rounded-lg self-stretch hover:scale-105 hover:shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.1)] transition-all duration-150 ease-in relative group">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 rounded-br-xl rounded-bl-xl bg-[#e2e2e2] text-black px-8 py-2 group-hover:bg-red-800 group-hover:text-white transition-all duration-150 ease-in group-hover:shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.1)]">
                    Pro
                </div>
                <h2
                    className="text-center font-semibold text-lg tracking-wider mb-3 drop-shadow-[3px_3px_5px_rgba(91,91,91,0.58)]">
                    Premium Sidebar</h2>
                <p className="text-center tracking-tighter block mb-14">
                    <span className="text-4xl font-bold">$100</span>
                    <span className="text-black/40 text-center">/mo</span>
                </p>
                <button type='submit' className="w-full p-2 text-white bg-yellow-500 rounded-md font-semibold hover:bg-red-500 hover:text-Black transition-all duration-150 ease-in mb-8 border border-[#13181f]"><a href='https://buy.stripe.com/test_14kaEYcpt0hX6cMbII'>Pay Now</a></button>
                <ol className="list-disc text-[#ff2865] w-[80%] mx-auto">
                    <li><span className="text-black text-xs font-semibold">2,000,000 Est. Impressions</span></li>
                    <li><span className="text-black text-xs font-semibold">300 x 250</span></li>
                    <li><span className="text-black text-xs font-semibold">Top Right</span></li>
                </ol>
            </li>
        </ul>
    </div>
</div>

<Footer />
    </>
  )
}

export default About
