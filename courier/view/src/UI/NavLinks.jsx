"use client";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
const NavLinks = ({ style }) => {
  const pathname = usePathname();

  const Links = [{
    name :'Home',
    Path :'/home'
  },
  {
    name :'About us ',
    Path :'/about'
  },
  {
    name :'Our Company ',
    Path :'/company'
  },
  {
    name :'Services',
    Path :'/service'
  },
  {
    name :'Client Area',
    Path :'/client'
  }]
  return (
    <div className="  ">
      <ul className={`flex  gap-1 `}>
        
        {Links.map((val , i)=>{
          const {name , Path} = val ;
          return <li  key={i} className={`${pathname !== Path && 'hover:-translate-y-1 transition-all duration-700'  }  `}>
            
            <Link href={`${Path}`}  className={`  p-4 ${
              pathname === Path ? "activeLink " : ""
            }`}>{name}</Link></li>
        }) }
        
      </ul>
    </div>
  );
};

export default NavLinks;
