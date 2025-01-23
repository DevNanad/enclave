import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z, ZodType } from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { HiOutlineMail } from "react-icons/hi";
import { FiLock } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify"
import { login } from "~api/auth";
import { useLoginAuth } from "~api/requests/user/useLoginAuth";

type LoginFD = {
    email?: string;
    password?: string;
}

export const Login = () => {
    const navigation = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const loginQuery = useLoginAuth()


    const schema: ZodType<LoginFD> = z.object({
        email: z.string().min(1, { message: "Email is required" }).max(255),
        password: z.string().min(1, { message: "Password is required" }).max(255),

    })

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFD>({ resolver: zodResolver(schema) })

    async function handleLogin(data: LoginFD) {
        //setIsLoading(true)

        try {
            //const response = await login(data.email, data.password)

            loginQuery.mutate({
                email: data.email,
                password: data.password
            })

            console.log(loginQuery.data);


            //const responseData = await response.data

            //setIsLoading(false);

            //console.log(responseData);

            //setIsLoading(false)

            // if (responseData.role === "USER") {
            //     toast.success(responseData.message, {
            //         position: "top-center",
            //         autoClose: 5000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //         progress: undefined,
            //         theme: "colored",
            //     })
            //     //navigate to user dashboard
            //     // useAuthStore.setState({ token: JSON.stringify(responseData)})
            //     // useAuthStore.setState({ user_id: responseData.user_id})
            //     // localStorage.setItem('user_id', responseData.user_id)
            //     navigation('/dashboard', { replace: true })
            // } else if (responseData.role === 'ADMIN') {
            //     //navigate to admin dashboard
            //     // useAuthStore.setState({ token: JSON.stringify(responseData)})
            //     // useAuthStore.setState({ user_id: responseData.user_id})
            //     // localStorage.setItem('user_id', responseData.user_id)
            //     // navigate('/admin', {replace: true})
            // } else {
            //     console.log("No role specified");
            // }

        } catch (err: any) {
            //setIsLoading(false)
            console.log(loginQuery.error)
            // if (err.message === "Network Error") {
            //     //setIsLoading(false)
            // } else {
            //     //setIsLoading(false)
            //     toast.error(err.response.data.message, {
            //         position: "top-center",
            //         autoClose: 5000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //         progress: undefined,
            //         theme: "colored",
            //     })
            // }
        }
    }

    return (
        <>
            <div className="container h-full flex flex-col justify-center gap-12">
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
                <div className="w-full">
                    <h1 className=" text-4xl text-blue-500 w-full font-semibold text-center">Welcome Back</h1>
                    <h1 className=" text-blue-500 w-full font-medium text-center pb-4">Enter your login details to access your account</h1>
                </div>
                <form onSubmit={handleSubmit(handleLogin)} className="w-full">
                    <h1 className=" text-4xl text-blue-500 w-full font-semibold text-center my-5"></h1>
                    <h1 className=" text-blue-500 w-full font-medium text-center pb-4"></h1>

                    <div className="ui form text-lg text-[#2974BD] w-full flex gap-2 flex-col items-center my-5">
                        <div className="field w-9/12 flex py-2 px-3 bg-[#e7f0f8] rounded-xl">
                            <HiOutlineMail size={30} />
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                {...register("email")}
                                className=" bg-transparent focus:outline-none pl-2 flex-grow placeholder:text-[#2974BD]"
                            />
                        </div>
                        {errors.email && <span className="text-red-400 text-center text-sm">{errors.email.message}</span>}
                        <div className="field w-9/12 flex py-2 px-3 bg-[#e7f0f8] rounded-xl">
                            <FiLock size={30} />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                {...register("password")}
                                className=" bg-transparent focus:outline-none pl-2 flex-grow placeholder:text-[#2974BD]"
                            />
                        </div>
                        {errors.password && <span className="text-red-400 text-center text-sm">{errors.password.message}</span>}
                        <div className="checkme w-9/12 py-1 px-3 flex gap-3">
                            <input className='h-4 w-4 bg-transparent checked:bg-red-500' type="checkbox" onChange={() => setShowPassword(!showPassword)} />
                            <p className='text-sm font-medium text-dos'>{showPassword ? "Hide" : "Show"} password</p>
                        </div>
                        {loginQuery.isPending
                            ? (<button disabled className="bg-[#1B87EA] mt-5 text-white font-semibold py-2 w-9/12 rounded-xl">Loading...</button>)
                            : (<button type="submit" className="bg-[#1B87EA] mt-5 text-white font-semibold py-2 w-9/12 rounded-xl">Login</button>)}
                    </div>
                </form>
                <div className="text-[#2974BD] w-full text-center mt-5 text-sm">
                    Don't have an account? <span onClick={() => navigation("/")} className="px-2 font-medium cursor-pointer">Register</span>
                </div>
            </div>
        </>
    );
};


//     return (
//         <div style={{ padding: 16 }}>
//             <span className="text-lg">Home page</span>
//             <button onClick={() => navigation("/about")}>About</button>
//             <button onClick={() => navigation("/dashboard")}>dashboard</button>
//         </div>
//     )
// }