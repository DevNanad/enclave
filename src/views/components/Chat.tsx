import React, { useEffect, useRef, useState } from 'react';

export default function Chat({ emailBody }) {
    const [message, setMessage] = useState('');
    const [value, setValue] = useState("");
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
        setValue(e.target.value);
    };

    return (
        <div className="flex-1 rounded-2xl border bg-white border-tertiary/40 relative overflow-hidden">
            <h2 className="text-center text-lg text-tertiary font-bold">
                Enclave
            </h2>

            <form className='text-base pt-9 px-3 bg-tertiary absolute bottom-0 rounded-tl-2xl rounded-tr-2xl w-full'>
                <textarea
                    ref={textareaRef}
                    value={value}
                    onInput={handleInput}
                    placeholder="Message..."
                    rows={1}
                    onChange={(e) => setMessage(e.target.value)}
                    className="resize-none max-h-40 text-white scrollbar-custom outline-none overflow-y-auto box-border px-3 py-2 w-full rounded-xl bg-black/30"
                />
            </form>
        </div>
    );
}
