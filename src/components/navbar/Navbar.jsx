import React from 'react'
import dollerImg from "../../assets/dollar 1.png"
export const Navbar = () => {
  return (
    <div>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <button className="btn btn-square items-center gap-2 font-bold text-xl">
        0 icons
      <img src={dollerImg} alt="" />
    </button>
  </div>
</div>
    </div>
  )
}
