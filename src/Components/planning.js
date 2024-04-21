import React from "react";


function Plan() {
  return (
    <div className="back2 flex justify-center items-center text-white">
      <div className=" ">
        <div className="mt-20">
          <div className="text-5xl p-5">Let's Make Your</div>
          <div className="text-5xl p-5">Next Holiday Amazing</div>
        </div>
        <div className="mb-20 mt-5 flex  justify-center items-center backdrop-blur text-white   px-5 py-5 ">
          <div className="text-xl px-5 flex justify-center">
            <input
              className=" placeholder:text-white border-0 bg-transparent focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
              type="text"
              placeholder=" Where to?"
            />
          </div>
          <div className="text-xl px-5">
            <select
              name="languages"
              className="bg-transparent text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
            >
              <option
                className="text-[#23C6BB] hover:text-white hover:bg-[#23C6BB]"
                value="st"
              >
                Travel Type
              </option>
              <option className="text-[#23C6BB]" value="st">
                Solo Travel
              </option>
              <option className="text-[#23C6BB]" value="cot">
                Couple Travel
              </option>
              <option className="text-[#23C6BB]" value="ft">
                Family Travel
              </option>
              <option className="text-[#23C6BB]" value="ct">
                Coerperate Travel
              </option>
            </select>
          </div>
          <div className="text-xl px-5">
            <select className="bg-transparent text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white">
              <option className="text-[#23C6BB]" value="st">
                Duration
              </option>
              <option className="text-[#23C6BB]">
                <iframe
                  title="Calender"
                  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=UTC&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23009688"
                  className="border-2 border-solid border-[#777777]"
                  height="400"
                  width="400"
                  frameborder="0"
                >
                  Calender
                </iframe>
              </option>
            </select>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Plan;
