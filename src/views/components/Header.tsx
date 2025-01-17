import React, { useState } from 'react'
import { RiSettings4Fill, RiSettings4Line } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { IoCheckmarkCircleSharp, IoClose } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { GiPadlock, GiPadlockOpen } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';



export default function Header() {
    const [openMore, setOpenMore] = useState(false)
    const [openProfile, setOpenProfile] = useState(false)
    const [openSubs, setOpenSubs] = useState(false)
    const [email, setEmail] = useState('juandelacruz@gmail.com')
    const [isEmail, setIsEmail] = useState(true)
    const [mobileNumber, setMobileNumber] = useState('09123456789')
    const [IsMobileNumber, setIsMobileNumber] = useState(true)
    const [password, setPassword] = useState('juandelacruzzx')
    const [showPassword, setShowPassword] = useState(true)

    const navigation = useNavigate();

    return (
        <header className='flex flex-none w-full gap-3 flex-row relative'>
            <div className='user py-2 px-4 border border-tertiary/40  basis-8/12 rounded-xl text-tertiary font-semibold text-base bg-white '>
                <h3>Super Mario</h3>
            </div>
            <button className='p-2 basis-2/12 border border-tertiary/40  rounded-xl drop-shadow-sm text-tertiary font-semibold text-base bg-white flex flex-row items-center gap-1 '>All <FaChevronDown /></button>

            {!openMore ? (<button onClick={() => setOpenMore(!openMore)} className="settings flex-1 rounded-lg text-tertiary font-semibold flex justify-center items-center  flex-grow ">
                <RiSettings4Line size={36} />
            </button>) : (<button onClick={() => setOpenMore(!openMore)} className="settings flex-1 rounded-lg text-tertiary font-semibold flex justify-center items-center  flex-grow ">
                <RiSettings4Fill size={36} />
            </button>)}




            {!openMore ? '' : (
                <div
                    onClick={() => setOpenMore(false)}
                    className={`fixed inset-0 flex z-30 justify-center items-center transition-colors ${openMore ? "visible" : "invisible"
                        }`}
                >
                    {/* Modal */}
                    <div onClick={(e: any) => e.stopPropagation()} className='border border-tertiary/50 z-10 absolute top-10 right-0 flex flex-col items-start gap-1 shadow-sm bg-white py-3 rounded-lg text-base'>
                        <button onClick={() => {
                            setOpenProfile(true)
                            setOpenMore(false)
                        }} className='hover:bg-tertiary hover:text-white text-left w-full px-5'>Profile</button>
                        <button onClick={() => {
                            setOpenSubs(true)
                            setOpenMore(false)
                        }} className='hover:bg-tertiary hover:text-white text-left w-full px-5'>Subscription</button>
                        <button onClick={() => navigation("/login")} className='hover:bg-tertiary hover:text-white text-left w-full px-5'>Logout</button>
                    </div>
                </div>


            )}

            <div
                onClick={() => setOpenProfile(false)}
                className={`fixed inset-0 flex z-30 w-full h-full justify-center items-center transition-colors ${openProfile ? "visible bg-black/50" : "invisible"
                    }`}
            >
                {/* Profile Modal */}
                <div onClick={(e: any) => e.stopPropagation()} className='border relative w-11/12 h-4/6 border-tertiary/50 z-10 shadow-sm bg-white p-3 rounded-xl text-base overflow-hidden'>
                    <div className='w-full flex justify-end'>
                        <button onClick={() => setOpenProfile(false)} className="text-tertiary/80">
                            <IoClose size={30} />
                        </button>
                    </div>
                    <h1 className='text-left font-semibold text-lg mb-7'>My profile</h1>
                    <div className="profile flex justify-center items-center">
                        <div className="circle px-3 h-16 w-16 flex justify-center items-center overflow-hidden border-4 bg-emerald-200 border-gray-200 rounded-full">
                            <h1 className='text-2xl font-extrabold text-black'>JD</h1>
                        </div>
                    </div>
                    <h2 className='text-center py-2 font-medium text-lg'>Juan Dela Cruz</h2>

                    <form className='mt-4 flex flex-col gap-5'>
                        <div className="email flex flex-col">
                            <label className='text-xs'>Your Email</label>
                            <div className=" flex relative text-neutral-700">
                                <input value={email} onFocus={() => setIsEmail(false)} onBlur={() => setIsEmail(true)} onChange={(e) => setEmail(e.target.value)} type="text" className='flex-1 focus:outline-none bg-gray-100 py-3 px-3 rounded-md' />
                                {!isEmail ? "" : (
                                    <MdEmail size={23} className='absolute top-3 right-3 text-neutral-400' />
                                )}
                            </div>

                        </div>
                        <div className="email flex flex-col">
                            <label className='text-xs'>Phone Number</label>
                            <div className=" flex relative text-neutral-700">
                                <input value={mobileNumber} onFocus={() => setIsMobileNumber(false)} onBlur={() => setIsMobileNumber(true)} onChange={(e) => setMobileNumber(e.target.value)} type="text" className='flex-1 focus:outline-none bg-gray-100 py-3 px-3 rounded-md' />
                                {!IsMobileNumber ? "" : (
                                    <FaPhoneFlip size={20} className='absolute top-3 right-3 text-neutral-400' />
                                )}
                            </div>

                        </div>
                        <div className="email flex flex-col">
                            <label className='text-xs'>Password</label>
                            <div className=" flex relative text-neutral-700">
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type={!showPassword ? "text" : "password"} className='flex-1 focus:outline-none bg-gray-100 py-3 pl-3 pr-10 rounded-md' />
                                {!showPassword
                                    ?
                                    (<GiPadlockOpen onClick={() => setShowPassword(true)} size={23} className='absolute top-3 cursor-pointer right-3 text-neutral-400' />)
                                    :
                                    (<GiPadlock onClick={() => setShowPassword(false)} size={23} className='absolute top-3 cursor-pointer right-3 text-neutral-400' />
                                    )}
                            </div>

                        </div>

                        <button type='submit' className='absolute bottom-5 right-5 py-2 px-4 rounded-full bg-tertiary text-white font-semibold'>Save</button>

                    </form>

                </div>
            </div>
            <div
                onClick={() => setOpenSubs(false)}
                className={`fixed inset-0 flex z-30 justify-center items-center transition-colors ${openSubs ? "visible bg-black/50" : "invisible"
                    }`}
            >
                {/* Subscription Modal */}
                <div onClick={(e: any) => e.stopPropagation()} className='border relative w-11/12 h-4/6 border-tertiary/50 z-10 shadow-sm bg-white p-3 rounded-xl text-base overflow-hidden'>
                    <div className='w-full flex justify-end'>
                        <button onClick={() => setOpenSubs(false)} className="text-tertiary/80">
                            <IoClose size={30} />
                        </button>
                    </div>
                    <h1 className='text-left font-semibold text-lg mb-7'>Subscription</h1>
                    {/* PLAN */}
                    <div className="plan">
                        <h1 className="text-center font-medium pb-3">Current Plan</h1>
                        <div className="relative">
                            <div
                                className="absolute -top-2 -right-2 z-10 bg-white"
                            >
                                <IoCheckmarkCircleSharp size={25} className="text-blue-400" />
                            </div>
                            <div className="px-5 pt-5 pb-4 flex flex-col z-0 border-2 border-blue-400 rounded-md bg-white">
                                <div className="flex">
                                    <div className="flex-1 flex flex-col gap-5">
                                        <h2 className="font-bold">Free</h2>
                                        <button className="text-xs p-1 rounded-md border border-blue-400 font-semibold text-blue-400">
                                            Cancel Subscription
                                        </button>
                                    </div>

                                    <h3 className="flex-1 font-extrabold text-right">
                                        $0<span className="font-light text-neutral-600">/month</span>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <button className='text-blue-400 w-full py-3 text-right font-medium text-sm underline'>Change plan</button>
                    </div>

                    <hr className='mb-3' />

                    {/* PAYMENT METHOD */}
                    <div className="w-full">
                        <h1 className="text-center font-medium pb-3">Payment Method</h1>
                        <div className="relative w-1/2">
                            <div
                                className="absolute -top-2 -right-2 z-10 bg-white"
                            >
                                <IoCheckmarkCircleSharp size={20} className="text-blue-400" />
                            </div>
                            <div className="p-4 text-sm flex flex-col z-0 border-2 border-blue-400 rounded-md bg-white">
                                <h3 className='text-neutral-500 text-xs'>Manual/Gcash</h3>
                                <h5 className='font-semibold'>09123456789</h5>
                            </div>
                        </div>
                    </div>

                    <hr className='my-3' />

                    {/* BILLING HISTORY */}
                    <div className="w-full">
                        <h1 className="text-center font-medium pb-3">Billing History</h1>

                        <div className="w-full h-32 overflow-y-auto barrr border-b border-gray-200">
                            <table className='text-xs w-full relative p-1 even:bg-gray-100'>
                                <thead className='sticky top-0'>
                                    <tr className='bg-blue-100 rounded-md font-semibold'>
                                        <td className='p-1'>Date</td>
                                        <td className='p-1'>Details</td>
                                        <td className='p-1'>Amount</td>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr className='py-2'>
                                        <td className='p-1'>11/14/2024</td>
                                        <td className='p-1'>Free plan, monthly</td>
                                        <td className='p-1 font-bold'>$0.00</td>
                                    </tr>
                                    <tr className='py-2'>
                                        <td className='p-1'>12/14/2024</td>
                                        <td className='p-1'>Free plan, monthly</td>
                                        <td className='p-1 font-bold'>$0.00</td>
                                    </tr>
                                    <tr className='py-2'>
                                        <td className='p-1'>01/14/2025</td>
                                        <td className='p-1'>Free plan, monthly</td>
                                        <td className='p-1 font-bold'>$0.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>



                    </div>

                </div>
            </div>

        </header>
    )
}
