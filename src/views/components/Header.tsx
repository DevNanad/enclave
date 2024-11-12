import React from 'react'
import { RiSettingsFill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";

export default function Header() {
    return (
        <header className='flex flex-none w-full gap-3 flex-row'>
            <div className='user p-2 basis-8/12 rounded-lg drop-shadow-md text-tertiary font-semibold text-base bg-secondary '>
                <h3>John Doe</h3>
            </div>
            <button className='p-2 basis-2/12 rounded-lg drop-shadow-md text-tertiary font-semibold text-base bg-secondary flex flex-row items-center gap-1 '>All <FaChevronDown /></button>
            <button className="settings flex-1 rounded-lg shadow-md text-tertiary font-semibold bg-secondary flex justify-center items-center  flex-grow ">
                <RiSettingsFill size={35} />
            </button>
        </header>
    )
}
