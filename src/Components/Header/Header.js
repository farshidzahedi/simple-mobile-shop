import React from "react";
import {Link} from 'react-router-dom'
// import { BiLogIn } from "react-icons/bi";
import { BsBag } from "react-icons/bs";


function Header() {
  return (
    <header className="shadow-md z-10 bg-white">
      <div className="flex items-center justify-around">
        <div className="flex">
          <img src="./image/logo.svg" className="md:cursor-pointer w-20 ml-5" />
      
        <div>
          <ul className="flex items-center gap-8 font-medium text-[12px]">
            <li><Link to="/" className="py-7 px-3 inline-block">صفحه اصلی</Link></li>
            <li><Link to="/" className="py-7 px-3 inline-block">فروشگاه</Link></li>
            <li><Link to="/" className="py-7 px-3 inline-block">درباره ما</Link></li>
          </ul>
        </div>  </div>
      <div className="flex items-center">
      <button className="border ml-4 py-2 px-4 rounded-md text-[12px] text-gray-500 transition delay-100 duration-500 hover:text-black hover:border-black ">ورود/ثبت نام</button>
      <Link className="relative border p-2.5 rounded-md text-[12px] text-gray-500 transition delay-100 duration-500 hover:text-black hover:border-black"><BsBag/>
      <span className="absolute top-0 right-0 w-3 h-3 bg-[#0187FC] text-white rounded-full justify-center items-center flex text-xs">0</span>
      </Link>
      </div>
      </div>
    </header>
  );
}

export default Header;
