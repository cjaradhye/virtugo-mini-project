import React from "react";
import Navbar from "./Header";
import Footer from "./Footer";

function Blogs(){
    const blogsAndNames = [
        {
          title: "India's Virtugo Journey",
          content: "From Delhi to Kerala, Virtugo crafted a seamless journey of discovery and delight. Let's relive the magic!",
          name: "Aisha Patel"
        },
        {
          title: "Virtugo's India Odyssey",
          content: "From Rajasthan to Goa, Virtugo curated an unforgettable odyssey through India's diverse landscapes and heritage.",
          name: "Rohan Singhania"
        },
        {
          title: "Virtugo's Indian Adventure",
          content: "From Mumbai to Varanasi, Virtugo ensured every moment was filled with wonder and joy.",
          name: "Priya Sharma"
        }
      ];

    function doPlease(stuff){
        return(
            
            <div className="blogcard flex flex-col justify-center items-center bg-white gap-5">
                <h1 className="font-bold">{stuff.title}</h1>
                <h4 className="w-64 text-center">{stuff.content}</h4>
                <br></br>
                <h4 className="w-64 text-right">-{stuff.name}</h4>
            </div>
            
        )
    }
    
    return(
    <div>
        <div className="back">
            <Navbar />
            <div className="ml-48 mt-20 font-bold text-white text-6xl">
                <div className="px-5 py-2 ">Blogs</div>
                <br></br>
                <br></br>
            </div>
        </div>
        <div class="blogbg">
            <div className="flex gap-8 justify-center py-16">
                {blogsAndNames.map(doPlease)}
            </div>
        </div> 
        <Footer />
    </div>)
}

export default Blogs;