import React from 'react'
import dollerImg from "../../assets/dollar 1.png"
export const Navbar = ({coin}) => {
  return (
    <div>
        <div className="navbar bg-base-100 shadow-sm container mx-auto">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <button className="btn btn-square items-center gap-2 font-bold text-xl">
          {coin} coins
        <img src={dollerImg} alt="" />
    </button>
  </div>
</div>
    </div>
  )
}
