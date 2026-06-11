import React from "react";
import heroImg from "../../assets/images/profile.png";

const Hero = () => {
  return (
    <div>
      <div className="previewProduct p-14 flex items-center gap-5  ">
        <div className="productCardPreview w-[50rem] rounded-lg h-100 p-10 bg-gray-100 flex items-center">
          <div className="info w-200 ">
            <div className="flex items-center gap-3">
              <span className=" font-semibold text-heading-3 sm:text-[58px] text-violet-900">20%</span>
              <span className="">
                SALEA <br /> OFF
              </span>
            </div>
            <h2 className="text-3xl font-medium">IPhone 16 Pro - 8/128GB</h2>
            <p className="text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              accusantium commodi doloribus, praesentium tenetur pariatur ipsa
              quo, quisquam accusamus aliquam iure ducimus doloremque odit enim
              aliquid? Quam adipisci provident nostrum.
            </p>
            <button>Shop Now</button>
          </div>
          <div className="imagePreview">
            <img src={heroImg} alt="Musahaf" />
          </div>
        </div>
        <div className="sideCard flex flex-col gap-3">
          <div className="card w-[23rem] rounded-lg h-50 p-2 bg-gray-100 flex items-center">
            <div className="info">
              <div className="mobDetail">
                <h2>iPhone 16 Pro & <br /> 16 Pro Max</h2>
              <span>Get your desired phone 
               <br /> from desired category</span>
              </div>
              <div className="mobPrice">
                <span>LIMITED TIME OFFER</span>
                <span>$600</span>
                <span>$898</span>
              </div>
            </div>
            <div className="imagePreview w-1/2">
            <img src={heroImg} alt="Musahaf" />
          </div>
          </div>
          <div className="card w-[23rem] rounded-lg h-50 p-2 bg-gray-100 flex items-center">
            <div className="info">
              <div className="mobDetail">
                <h2>iPhone 16 Pro & <br /> 16 Pro Max</h2>
              <span>Get your desired phone 
               <br /> from desired category</span>
              </div>
              <div className="mobPrice">
                <span>LIMITED TIME OFFER</span>
                <span>$600</span>
                <span>$898</span>
              </div>
            </div>
            <div className="imagePreview w-1/2">
            <img src={heroImg} alt="Musahaf" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
