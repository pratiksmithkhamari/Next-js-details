import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="text-zinc-200 bg-black h-20 text-center text-[1.3rem] flex items-center justify-between">navbar
      <div className="flex gap-3 cursor-pointer capitalize items-center">
        <Link href='/'><h2>home</h2></Link>
        <Link href='/about'><h2>about</h2></Link>
        <Link href='/contact'><h2>contact</h2></Link>
        
      </div>
      </div>
    </>
  );
};

export default Navbar;
