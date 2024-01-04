import React, { useState } from "react";

const Payment = () => {
 
    const Payment = () => {
        const[userdata , setuserData] = useState({
          number:"",
          lastname:"",
          email:"",
          phone:"",
        });
      
      let name, value;
        const data=(e)=> {
          name = e.target.name;
          value = e.target.value;
      
          setuserData({ ...userdata,[name]:value});
        };
      
        const click= async (e)=>{
          e.preventDefault();
          const {firstname,lastname,email,phone,message} = userdata;
          if(firstname && lastname && email && phone && message){
          const res = await fetch("https://buy.stripe.com/test_14kaEYcpt0hX6cMbII",
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
      
         
    }

  return (
    <center>
      <section>
        <div className="flex hidden-card fixed top-0 left-0 w-full h-screen z-50 bg-white bg-opacity-90 items-center justify-center">
       
        <form >
        <h1 className="text-blacl font-semibold text-4xl">Payment Details</h1>
        <hr className="w-[30vw] mt-2"/>
        <br/>
            <div class="grid grid-cols-2 gap-6">
                <div class="col-span-2 sm:col-span-1">
                    <label for="card-number" class="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                    <input onChange={data}  type="text"  value={userdata.value} name="value"  placeholder="0000 0000 0000 0000" class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" required/>
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <label for="expiration-date" class="block text-sm font-medium text-gray-700 mb-2">Expiration Date</label>
                    <input onChange={data}  type="text"  value={userdata.date} name="date"  placeholder="Date" class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" required/>
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <label for="cvv" class="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                    <input onChange={data}  type="text"  value={userdata.cvv} name="cvv"  placeholder="MM / YY" class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" required/>
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <label for="card-holder" class="block text-sm font-medium text-gray-700 mb-2">Card Holder</label>
                    <input onChange={data}  type="text"  value={userdata.holder} name="holder" placeholder="Full Name" class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" required/>
                </div>
            </div>
            <div class="mt-8">
                <button type="submit" onClick={click} class="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none">Submit</button>
            </div>
        </form>
    </div>
      </section>
    </center>
  );
  }
export default Payment;
