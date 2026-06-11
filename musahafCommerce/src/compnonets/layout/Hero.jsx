import React from "react";
import heroImg from "../../assets/images/profile.png";

const Hero = () => {
  return (
    <div>
      <div className="previewProduct p-10 flex items-center ">
        <div className="productCardPreview w-[50rem] h-100 p-10 bg-gray-100 flex items-center">
          <div className="info ">
            <div>
              <span>20%</span>
              <span>
                SALEA <br /> OFF
              </span>
            </div>
            <h2>iPhone 16 Pro - 8/128GB</h2>
            <p>
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
      </div>
    </div>
  );
};

export default Hero;
