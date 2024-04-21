import React from "react";
import Navbar from "./Header";
import Footer from "./Footer";

function Services(){

    const travelPackages = [
        {
          title: "Budget",
          description: "Embark on a solo adventure without breaking the bank. Our Budget package offers affordability and excitement, ensuring every penny is wisely spent on thrilling experiences, cozy accommodations, and off-the-beaten-path expeditions."
        },
        {
          title: "Romantic Getaways",
          description: "Celebrate love and companionship with our Romantic Getaways package. Indulge in luxurious accommodations, intimate dining experiences, and breathtaking landscapes, creating timeless moments together amidst pristine beaches, starlit dinners, and secluded villas."
        },
        {
          title: "Family Vacations",
          description: "Create cherished memories with our Family Vacations package. Offering something for every member, from thrilling adventures to relaxing retreats, we ensure quality time and unforgettable experiences with family-friendly accommodations, exciting activities, and personalized service."
        },
        {
          title: "Corporate Bookings",
          description: "Elevate your corporate travel experience with our Corporate Bookings package. Streamlining the process from start to finish, we handle every aspect of team-building retreats, client meetings, or company conferences, ensuring professionalism, efficiency, and impeccable service."
        }
    ];
      

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
                    <div className="px-5 py-2 ">Services</div>
                    <br></br>
                    <br></br>
                </div>
        
            </div>
            <div class="mybg">
            <div className="meraservice py-16">
                {travelPackages.map(doPlease)}
            </div>
            
        </div> 
        <Footer />
        </div>)
}

export default Services;