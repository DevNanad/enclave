import React, { useEffect, useState } from 'react';
import { IoIosSend } from "react-icons/io";

export default function Chat({ emailBody }) {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Ensure emailBody is a string before assigning to the state
        if (emailBody != null) {
            console.log(emailBody);

            setMessage(String(emailBody).trim()); // Convert emailBody to string if it's not already
        }
    }, [emailBody]);


    return (
        <div className="flex-1 rounded-2xl border bg-white border-tertiary/40 relative overflow-hidden">

            <form className='text-base pt-4 pb-2 px-2 bg-tertiary absolute bottom-0 rounded-tl-2xl rounded-tr-2xl w-full flex items-end gap-1 '>
                <textarea
                    value={message}
                    placeholder="Message..."
                    rows={1}
                    onChange={(e) => setMessage(e.target.value)}
                    className="resize-none max-h-48 text-white scrollbar-custom outline-none overflow-y-auto box-border pl-3 pr-2 py-2 w-full rounded-xl bg-black/10 border border-black/10"
                />

                {!message ? "" :

                    <button className="flex-1 p-1 text-white flex justify-center items-center flex-grow ">
                        <IoIosSend size={28} />
                    </button>
                }
            </form>
        </div>
    );
}
