import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigation = useNavigate()

    return (
        <div style={{ padding: 16 }}>
            <span className="text-lg">Home page</span>
            <button onClick={() => navigation("/about")}>About</button>
            <button onClick={() => navigation("/dashboard")}>dashboard</button>
        </div>
    )
}