import React from "react";

const Footer = ()=>{
    return (
        <>
        <div className="w-full h-40 bg-black mt-36 px-10 py-5">
        <div className="w-full h-full flex flex-row">
            <div className="w-4/5 text-white">
                <h1 className="text-4xl font-bold mb-4">QUECTO</h1>
                <p className="font-medium">Fresh Goods Delivered To Your Doorsteps</p>
                <div className="flex text-2xl flex-row gap-4 mt-4 cursor-pointer" > 
                <i class="ri-instagram-line"></i>
                <i class="ri-twitter-x-line"></i>
                <i class="ri-facebook-fill"></i>
                <i class="ri-github-line"></i>
                </div>
            </div>
            <div className=" w-1/5 text-white flex flex-col align-center">
                <h5>Need Help ?</h5>
                <h5>Our Support is available</h5>
                
                <h3 className="mt-4 text-xl font-semibold">+91-9369831243</h3>
                <h3 className="text-xl font-semibold">rishyym0927@quecto.com</h3>
            </div>

        </div>

        </div>
        
        </>
    )
}

export default Footer