import React from "react";
import Footer from "./Footer";
import Navbar from "./Header";

function Cards(){
    return(
        <div class="mybg">
            <div className="flex justify-center items-center flex-col ">
                <div className="text-[#23C6BB] text-2xl">Services Offered</div>
                <div className="text-6xl">We Have Something For Everybody!</div>
            </div>
            <div className="flex gap-8 justify-center py-16">
                <div className="mycard flex flex-col justify-center items-center bg-white gap-5">
                    <img className="h-20 object-center" src="./images/pic1.png"></img>
                    <h1 className="font-bold">Budget</h1>
                    <h4 className="w-32 text-center">Suitable for Solo Travelers, or Small Student Groups.</h4>
                </div>
                <div className="mycard flex flex-col justify-center items-center bg-white w-64 gap-5">
                    <img className="h-20 object-center" src="./images/pic2.png"></img>
                    <h1 className="font-bold">Romantic Getaways</h1>
                    <h4 className="w-32 text-center">Perfect to spend some quality love with your special someone!</h4>
                </div>
                <div className="mycard flex flex-col justify-center items-center bg-white w-64 gap-5">
                    <img className="h-20 object-center" src="./images/pic3.png"></img>
                    <h1 className="font-bold">Family Vacations</h1>
                    <h4 className="w-32 text-center">Itineraries custom tailored, to have an optimal balance.</h4>
                </div>
                <div className="mycard flex flex-col justify-center items-center bg-white w-64 gap-5">
                    <img className="h-20 object-center" src="./images/pic4.png"></img>
                    <h1 className="font-bold">Corporate Bookings</h1>
                    <h4 className="w-32 text-center">Optimize corporate travel with our itinerary platform.</h4>
                </div>
            </div>
        </div>  
    )
}

export default Cards