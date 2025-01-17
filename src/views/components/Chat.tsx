import React, { useEffect, useRef, useState } from 'react';
import { RiSendPlaneFill, RiSendPlaneLine } from 'react-icons/ri';

export default function Chat({ emailBody }) {
    const [message, setMessage] = useState('');
    const textareaRef = useRef(null);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there!", sender: "person1" },
        { id: 2, text: "Hello!", sender: "person2" },
        { id: 4, text: "How are you?", sender: "person1" }
    ]);

    const [newMessage, setNewMessage] = useState("");
    const [currentSender, setCurrentSender] = useState("person1");

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([
                ...messages,
                { id: messages.length + 1, text: newMessage, sender: currentSender },
            ]);
            setNewMessage("");
            setCurrentSender(currentSender === "person1" ? "person2" : "person1");
        }
    };

    useEffect(() => {
        if (emailBody != null) {
            setMessage(String(emailBody));
        }
    }, [emailBody]);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            // Adjust height when the message changes
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight + 2}px`;
        }
    }, [message]);

    const handleInput = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div className="flex-1 rounded-2xl border w-full h-full flex flex-col gap-5 bg-white border-tertiary/40 relative overflow-hidden">
            <div className="flex-1 text-sm overflow-y-auto barrr">
                <div className="flex flex-col justify-end overflow-hidden">
                    <h1 className='text-4xl text-center font-extrabold p-10 opacity-15'>Enclave</h1>
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.sender === "person1" ? "justify-start" : "justify-end"
                                } mb-2`}
                        >
                            <div
                                className={`px-4 py-2 mx-4 rounded-lg max-w-[75%] shadow-sm ${message.sender === "person1"
                                    ? "bg-gray-100 rounded-bl-none"
                                    : "bg-blue-100 rounded-br-none"
                                    }`}
                            >
                                {/* {message.sender === "person1" ? "person1:" : "person2:"}{" "} */}
                                {message.text}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <form className='text-base pt-4 pb-2 px-2 bg-tertiary/90 rounded-tl-2xl rounded-tr-2xl w-full flex items-end gap-1'>
                <div className=' overflow-hidden w-full rounded-xl'>
                    <textarea
                        value={message.trim()}
                        placeholder="Message..."
                        ref={textareaRef}
                        rows={1}
                        onChange={handleInput}
                        className="box-border resize-none leading-5 max-h-48 overflow-y-auto focus:border-white/30 text-white barrr outline-none border pl-3 pr-2 py-3 w-full rounded-xl bg-white/5 border-white/10"
                    />
                </div>



                {!message ?
                    <button disabled className="flex-1 p-1 text-white flex justify-center items-center flex-grow">
                        <RiSendPlaneLine size={28} />
                    </button>
                    :
                    <button className="flex-1 p-1 text-white flex justify-center items-center flex-grow">
                        <RiSendPlaneFill size={28} />
                    </button>
                }
            </form>
        </div>
    );
}
