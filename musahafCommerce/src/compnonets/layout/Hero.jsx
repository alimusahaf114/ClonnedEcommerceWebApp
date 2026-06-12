import React from "react";
import heroImg from "../../assets/images/profile.png";
import ProductCard from "../product/ProductCard";

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
         <ProductCard />
         <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;
