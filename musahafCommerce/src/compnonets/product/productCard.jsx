import React from "react";
import heroImg from "../../assets/images/profile.png";
const productCard = () => {
  return (
    <div>
      <div className="card w-[23rem] rounded-lg h-50 p-4 bg-gray-100 flex items-center">
        <div className="info flex flex-col gap-5 w-1/2">
          <div className="mobDetail ">
            <h2 className="text-lg font-medium">
              iPhone 16 Pro & <br /> 16 Pro Max
            </h2>
            <span className="text-sm">
              Get your desired phone
              <br /> from desired category
            </span>
          </div>
          <div className="mobPrice">
            <span className="block text-xs">LIMITED TIME OFFER</span>
            <span className="font-bold">$600</span>
            <span className="font-bold text-gray-400 line-through"> $898</span>
          </div>
        </div>
        <div className=" w-1/2 h-full flex justify-center items-center ">
          <img
            src={heroImg}
            alt="Musahaf"
            className="w-full h-full object-contain overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default productCard;
