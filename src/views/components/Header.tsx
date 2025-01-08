import React, { useState } from 'react'
import { RiSettingsFill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";

export default function Header() {
    const [openMore, setOpenMore] = useState(false)

    return (
        <header className='flex flex-none w-full gap-3 flex-row relative'>
            <div className='user py-2 px-4 basis-8/12 rounded-lg drop-shadow-sm text-tertiary font-semibold text-base bg-white '>
                <h3>John Doe</h3>
            </div>
            <button className='p-2 basis-2/12 rounded-lg drop-shadow-sm text-tertiary font-semibold text-base bg-white flex flex-row items-center gap-1 '>All <FaChevronDown /></button>
            <button onClick={() => setOpenMore(!openMore)} className="settings flex-1 rounded-lg text-tertiary font-semibold flex justify-center items-center  flex-grow ">
                <RiSettingsFill size={36} />
            </button>

            {!openMore ? '' : (
                <div className='border border-tertiary/50 z-10 absolute top-10 right-0 flex flex-col items-start gap-1 shadow-sm bg-white py-3 rounded-lg text-base'>
                    <button className='hover:bg-tertiary hover:text-white text-left w-full px-5'>Profile</button>
                    <button className='hover:bg-tertiary hover:text-white text-left w-full px-5'>Subscription</button>
                    <button className='hover:bg-tertiary hover:text-white text-left w-full px-5'>Logout</button>
                </div>

            )}

        </header>
    )
}
