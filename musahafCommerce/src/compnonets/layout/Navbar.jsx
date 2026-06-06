import React from 'react';

const Navbar = () => {
  return (
    <div>
        {/* This is upper header for authentication */}

    <div className=" flex justify-between bg-blue-900 p-2 text-white" >
      <h1>Get free delivery on orders over $80</h1>
      <div className='flex gap-3 font-medium'>
        <a href="#">Create an account</a>
        <span className='text-gray-100 opacity-20 '>|</span>
        <a href="#">Sign In</a>
      </div>
    </div>
    {/* This is Navbar for navigation */}
    <div className=" flex justify-between item-center bg-gray-200 p-2 text-black" >
      <div className="ml-10">
        <h2 className='font-medium'>Mushi</h2>
        <span>Commerce</span>
      </div>
      <div className='flex justify-between items-center  '>
        <ul className='flex gap-6 text-sm'>
            <li><a href="#">Popular</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className='flex justify-between items-center gap-3 mr-10'>
        <span>🔍</span>
        <span>❤️</span>
        <span>🧑‍🏫</span>
        <span>🛒</span>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
