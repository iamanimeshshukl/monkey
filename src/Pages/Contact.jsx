import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer.jsx';

const Contact = () => {
  const[userdata , setuserData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    phone:"",
    message:"",
  });

let name, value;
  const submit=(e)=> {
    name = e.target.name;
    value = e.target.value;

    setuserData({ ...userdata,[name]:value});
  };

  const submitData = async (e)=>{
    e.preventDefault();
    const {firstname,lastname,email,phone,message} = userdata;
    if(firstname && lastname && email && phone && message){
    const res = await fetch("https://anichat-17bc4-default-rtdb.firebaseio.com//userDataRecords.json",
    {
      method : "POST",
      headers :{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        firstname,lastname,email,phone,message
      }),
    }
    );
    if (res){
      setuserData({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        message:"",
      })
      toast.success('🦄 Thank you !!!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }else{
      toast.error('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      
    }
  }else{
    toast.warn('Please fill All Fields !', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
  };


  return (
    <>
      <Navbar />
      <ToastContainer/>
      <div>
    <div className="mx-auto max-w-7xl py-12 md:py-24">
      <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="px-2 md:px-12">
            <p className="text-4xl font-bold text-gray-900 md:text-4xl">
              Get in touch
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Our friendly team would love to hear from you.
            </p>
            <form method='POST' className="mt-8 space-y-4">
              <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="firstname"
                  >
                    First Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    type="text"
                    name="firstname"
                    value={userdata.firstname}
                    onChange={submit}
                    placeholder="First Name"
                  required/>
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="lastname"
                  >
                    Last Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm 
                    placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    type="text"
                    name="lastname"
                    onChange={submit}
                    value={userdata.lastname}
                    placeholder="Last Name"
                 required />
                </div>
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm 
                  placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="text"
                  name="email"
                  value={userdata.email}
                  onChange={submit}
                  placeholder="Email"
                required/>
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="phone"
                >
                  Phone number
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm 
                  placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="tel"
                  name="phone"
                  value={userdata.phone}
                  onChange={submit}
                  placeholder="Phone number"
               required />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="message"
                >
                  Message
                </label>
                <textarea
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm 
                  placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  name="message"
                  value={userdata.message}
                  onChange={submit}
                  placeholder="Leave us a message"
                  cols="3"
                required></textarea>
              </div>
              <button
              onClick={submitData}
                type="submit"
                className="w-full rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <img
          alt="Contact us"
          className="hidden max-h-full w-full rounded-lg object-cover lg:block"
          src="https://plus.unsplash.com/premium_photo-1661375025352-d5a4d633999b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
      </div>
    </div>
  </div>
<Footer />
    </>
  )
}

export default Contact
