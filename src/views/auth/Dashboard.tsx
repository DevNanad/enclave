import { useEffect, useState } from "react"
import "~style.css"
import Header from "../components/Header"
import Chat from "../components/Chat"

function Dashboard() {
    const [emailBody, setEmailBody] = useState("")

    useEffect(() => {
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            if (message.action === "logEmailContent") {
                console.log("SIDEPANEL:", message.content);
                setEmailBody(message.content)
                return true
            }
            return true;
        });
    }, [])

    return (
        <div className="h-screen flex gap-3 flex-col bg-primary rounded-sm w-full">
            <Header />
            <Chat emailBody={emailBody} />
        </div>
    )
}

export default Dashboard
