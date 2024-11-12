import React, { useEffect, useState } from 'react';

export default function Chat({ emailBody }) {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Ensure emailBody is a string before assigning to the state
        if (emailBody != null) {
            setMessage(String(emailBody).trim()); // Convert emailBody to string if it's not already
        }
    }, [emailBody]);

    return (
        <div className="flex-1 rounded-2xl border border-tertiary/40 overflow-hidden p-3">
            <h2 className="text-center text-lg text-tertiary font-bold">
                Enclave
            </h2>

            <form>
                <textarea
                    rows={10}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="outline-violet-500 text-base rounded-lg bg-blue-300 w-full"
                />

            </form>
        </div>
    );
}
