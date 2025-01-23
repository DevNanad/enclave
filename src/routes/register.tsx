import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock } from "react-icons/fi";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { toast, ToastContainer } from "react-toastify";
import { registerUser } from "~api/auth";

type RegisterFD = {
    email?: string;
    password?: string;
    confirmPassword?: string;
}

export const Register = () => {
    const navigation = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const schema: ZodType<RegisterFD> = z.object({
        email: z.string().email(),
        password: z.string().min(4, { message: "Password too short" }).max(30),
        confirmPassword: z.string(),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Password does not match",
        path: ["confirmPassword"]
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm<RegisterFD>({ resolver: zodResolver(schema) })

    async function handleRegister(data: RegisterFD) {
        setIsLoading(true)

        try {
            const response = await registerUser(data.email, data.password)

            const responseData = await response.data

            setIsLoading(false);
            //console.log(responseData);

            if (responseData.message === "success") {
                toast.success("Registered Successfully", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
                reset()
                navigation('/login', { replace: true })
            }

        } catch (err: any) {
            setIsLoading(false)
            if (err.message === "Network Error") {
                setIsLoading(false)
            } else {
                setIsLoading(false)
                console.log(err.response);

                toast.warning(err.response.data.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            }
        }
    }

    return (
        <div className="container h-full flex flex-col relative justify-center gap-12">
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
                <h1 className=" text-4xl text-blue-500 w-full font-semibold text-center">Register</h1>
                <h1 className=" text-blue-500 w-full font-medium text-center pb-4">Create your account</h1>
            </div>

            <form onSubmit={handleSubmit(handleRegister)} className="w-full">
                <div className="ui form text-lg text-[#2974BD] w-full flex gap-3 flex-col items-center my-5">
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
                    <div className="field w-9/12 flex py-2 px-3 bg-[#e7f0f8] rounded-xl">
                        <FiLock size={30} />
                        <input
                            type={showPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Confirm password"
                            {...register("confirmPassword")}
                            className=" bg-transparent focus:outline-none pl-2 flex-grow placeholder:text-[#2974BD]"
                        />
                    </div>
                    {errors.confirmPassword && <span className="text-red-400 text-center text-sm">{errors.confirmPassword.message}</span>}
                    <div className="checkme w-9/12 py-1 px-3 flex gap-3">
                        <input className='h-4 w-4 bg-transparent checked:bg-red-500' type="checkbox" onChange={() => setShowPassword(!showPassword)} />
                        <p className='text-sm font-medium text-dos'>{showPassword ? "Hide" : "Show"} password</p>
                    </div>
                    {isLoading
                        ? (<button disabled className="bg-[#1B87EA] mt-5 text-white font-semibold py-2 w-9/12 rounded-xl">Loading...</button>)
                        : (<button type="submit" className="bg-[#1B87EA] mt-5 text-white font-semibold py-2 w-9/12 rounded-xl">Register</button>)}
                </div>
            </form>
            <div className="text-[#2974BD] text-sm w-full text-center mt-5">
                Already have an account? <span onClick={() => navigation("/login")} className="px-2 font-medium cursor-pointer">Login</span>
            </div>
        </div>

    );
};