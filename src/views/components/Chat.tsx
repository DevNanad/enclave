import React, { useEffect, useRef, useState } from 'react';
import { IoIosSend } from "react-icons/io";

export default function Chat({ emailBody }) {
    const [message, setMessage] = useState('');
    const textareaRef = useRef(null);
    useEffect(() => {
        // Ensure emailBody is a string before assigning to the state
        if (emailBody != null) {
            setMessage(String(emailBody).trim()); // Convert emailBody to string if it's not already
        }
    }, [emailBody]);


    const handleInput = (e) => {
        const textarea = textareaRef.current;

        // Reset the height to calculate the scrollHeight correctly
        textarea.style.height = "auto";

        // Adjust height based on scrollHeight
        textarea.style.height = `${textarea.scrollHeight}px`;

        // Update the value state
        setMessage(e.target.value);
    };

    return (
        <div className="flex-1 rounded-2xl border bg-white border-tertiary/40 relative overflow-hidden">

            <form className='text-base pt-4 pb-2 px-2 bg-tertiary absolute bottom-0 rounded-tl-2xl rounded-tr-2xl w-full flex items-end gap-1 '>
                <textarea
                    ref={textareaRef}
                    value={message}
                    onInput={handleInput}
                    placeholder="Message..."
                    rows={1}
                    onChange={(e) => setMessage(e.target.value)}
                    className="resize-none max-h-48 text-white scrollbar-custom outline-none overflow-y-auto box-border px-3 py-2 w-full rounded-xl bg-black/30"
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
