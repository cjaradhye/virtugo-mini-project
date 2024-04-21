import React from "react";
import Navbar from "./Header";
import Footer from "./Footer";

function Trending(){

    const trips = [
        {
            title: "Delhi Itinerary",
            description: "Explore historic landmarks like the Red Fort and India Gate, dive into the bustling streets of Chandni Chowk, and experience modernity at Qutub Minar and Lotus Temple. Indulge in shopping at Connaught Place and savor Delhi's vibrant street food."
        },
        {
            title: "Mumbai Itinerary",
            description: "Discover Mumbai's iconic landmarks including the Gateway of India and Elephanta Caves, delve into Bollywood at Film City, and unwind at Juhu Beach. Explore the city's cultural heritage at Chhatrapati Shivaji Maharaj Vastu Sangrahalaya and enjoy the scenic Bandra-Worli Sea Link."
        },
        {
            title: "Kolkata Itinerary",
            description: "Immerse yourself in Kolkata's rich history with visits to Victoria Memorial and Dakshineswar Kali Temple, explore the cultural heart of the city at Kalighat Temple and Mother House, and indulge in culinary delights at New Market. Enjoy a boat ride on the Hooghly River and discover vibrant street art."
        }
    ]



    function doPlease(stuff){
        return(
            
            <div className="sblogcard flex flex-col justify-center items-center bg-white gap-5">
                <h1 className="font-bold">{stuff.title}</h1>
                <h4 className="text-center">{stuff.description}</h4>
            </div>
            
        )
    }

    return(
        <div>
            <div className="back">
                <Navbar />
                <div className="ml-48 mt-20 font-bold text-white text-6xl">
                    <div className="px-5 py-2 ">Trending Vacations</div>
                    <br></br>
                    <br></br>
                </div>
                
            </div>
            <div className="mybg">
                <div className="meraservice py-16">
                    {trips.map(doPlease)}
                </div>
            </div>
            <Footer />
        </div>)
}

export default Trending;