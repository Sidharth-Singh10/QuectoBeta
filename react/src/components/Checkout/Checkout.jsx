import React from "react";

const Checkout = () => {
  return (
    <>
      <div className="hero h-auto overflow-hidden">
        <div className="main w-screen px-36 pt-10  h-custom1 ">
          <div className=" w-100 h-full py-6 gap-2 flex flex-row items-center justify-center">
            <div className="left w-2/3 p-10 h-full bg-stone-300 text-black rounded-lg flex flex-col">
              <div className="top1 h-1/6  w-full rounded-lg flex flex-row items-center gap-4">
                <h1 className="text-3xl font-extrabold">Your Cart</h1>
                <i class="ri-shopping-cart-line text-3xl font-bold"></i>
              </div>
              <div className="top2 h-3/6 w-full  text-black">
              <table class="w-full bg-none shadow-md rounded-md overflow-hidden">
            <thead class="bg-none p-12 ">
                <tr className="">
                    <th class="py-3 text-left">Product</th>
                    <th class="py-3 text-left">Size</th>
                    <th class="py-3 text-left">Quantity</th>
                    <th class="py-3 text-left">Total Price</th>
                    <th class="py-3 text-left"></th>
                </tr>
            </thead>
            <tbody>
                <tr class="hover:bg-gray-100">
                    <td class="py-3 px-4">
                        <div class="flex items-center">
                            <img src="https://placekitten.com/40/40" alt="Product Image" class="mr-2 w-8 h-8 rounded-full" />
                            <span>Reference Item</span>
                        </div>
                    </td>
                    <td class="py-3 px-4">Medium</td>
                    <td class="py-3 px-4">2</td>
                    <td class="py-3 px-4 relative">
                        $30.00
                        <span class="absolute top-0 right-0 mt-1 mr-2 text-red-500 cursor-pointer">&#10005;</span>
                    </td>
                </tr>
                <tr class="hover:bg-gray-100">
                    <td class="py-3 px-4">
                        <div class="flex items-center">
                            <img src="https://placekitten.com/40/40" alt="Product Image" class="mr-2 w-8 h-8 rounded-full" />
                            <span>Product 2</span>
                        </div>
                    </td>
                    <td class="py-3 px-4">Large</td>
                    <td class="py-3 px-4">1</td>
                    <td class="py-3 px-4 relative">
                        $20.00
                        <span class="absolute top-0 right-0 mt-1 mr-2 text-red-500 cursor-pointer">&#10005;</span>
                    </td>
                </tr>
                <tr class="hover:bg-gray-100">
                    <td class="py-3 px-4">
                        <div class="flex items-center">
                            <img src="https://placekitten.com/40/40" alt="Product Image" class="mr-2 w-8 h-8 rounded-full" />
                            <span>Product 3</span>
                        </div>
                    </td>
                    <td class="py-3 px-4">Small</td>
                    <td class="py-3 px-4">3</td>
                    <td class="py-3 px-4 relative">
                        $45.00
                        <span class="absolute top-0 right-0 mt-1 mr-2 text-red-500 cursor-pointer">&#10005;</span>
                    </td>
                </tr>
                <tr class="hover:bg-gray-100">
                    <td class="py-3 px-4">
                        <div class="flex items-center">
                            <img src="https://placekitten.com/40/40" alt="Product Image" class="mr-2 w-8 h-8 rounded-full" />
                            <span>Product 4</span>
                        </div>
                    </td>
                    <td class="py-3 px-4">Extra Large</td>
                    <td class="py-3 px-4">4</td>
                    <td class="py-3 px-4 relative">
                        $80.00
                        <span class="absolute top-0 right-0 mt-1 mr-2 text-red-500 cursor-pointer">&#10005;</span>
                    </td>
                </tr>
             
            </tbody>
        </table>
              </div>
              <div className="top3 h-2/6 w-full flex flex-row">
                <div className="left w-1/2 "></div>
                <div className="right w-1/2  p-3">
                    <div className="w-full h-full  py-7 px-16 flex flex-col">
                        <div className=" flex flex-row justify-between">
                            <h1 className="font-bold">Subtotal :</h1>
                            <p>$35.17</p>
                        </div>
                        <div className=" flex flex-row justify-between mt-2">
                            <h1 className="font-bold">Subtotal :</h1>
                            <p>$35.17</p>
                        </div>
                        
                    </div>
                </div>
              </div>
            </div>
            <div className="right w-1/3 p-10 h-full bg-black rounded-lg text-white">
              <div className=" w-full h-full  flex flex-col items-start ">
                <div className="flex flex-row w-full h-auto font-normal gap-1">
                  <i class="ri-arrow-left-circle-line"></i>
                  <p>Checkout: Step</p>
                </div>
                <div>
                  <h1 className="text-3xl font-extrabold mt-4">Payment Info</h1>
                </div>
                <div>
                  <p className="mt-8 font-semibold">payment method</p>
                </div>
                <div className="flex flex-row  w-full gap-5 items-center mt-4">
                  <button className="bg-white w-40 hover:bg-btcol duration-200  hover:scale-105 text-black font-bold text-lg h-12 rounded-lg ">
                    Credit Card
                  </button>
                  <button className="bg-white w-40 hover:bg-btcol duration-200  hover:scale-105 text-black font-bold text-lg h-12 rounded-lg  ">
                    PayPal
                  </button>
                </div>
                <div className="w-full flex flex-col border-t mt-4 gap-2 pt-5 border-white">
                  <p className="font-bold">Cardholder Name</p>
                  <h6>Anton</h6>
                </div>

                <div className="w-full flex flex-col border-t  mt-4 gap-2 pt-5 border-white">
                  <p className="font-bold">Card Number</p>
                  <h6>4532 3257 9023 1208</h6>
                </div>
                <div className="w-full flex flex-row border-t  mt-4 gap-36 pt-5 border-white">
                  <p className="font-bold">Expiration Date: </p>
                  <p className="font-bold">CVV: </p>
                </div>
                <div className="w-full h-auto mt-12 ">
                  <button className="w-full bg-white hover:bg-btcol duration-200  hover:scale-105 text-black h-12 rounded-2xl text-xl font-bold">
                    Confirm and Pay $37.17
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
