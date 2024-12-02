import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FiLock } from "react-icons/fi";

export const Register = () => {
    const navigation = useNavigate();

    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    type FormErrors = {
        email?: string;
        password?: string;
        confirmPassword?: string;
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors, formValues, isSubmit]);

    const validate = (values: typeof initialValues) => {
        const errors: FormErrors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Those passwords didn’t match. Try again.";
        }
        return errors;
    };

    return (
        <>
            <div className="container">
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="ui message success">
                        Registered Successfully
                    </div>
                ) : (
                    <div></div> // Or null if you prefer
                )}

                <form onSubmit={handleSubmit} className="w-full">
                    <h1 className=" text-4xl text-blue-500 w-full font-semibold text-center mt-16 ">Register</h1>
                    <h1 className=" text-blue-500 w-full font-medium text-center pb-4">Create your account</h1>

                    <div className="ui form text-lg text-[#2974BD] w-full flex gap-2 flex-col items-center my-5">
                        <div className="field w-9/12 flex py-2 px-3 bg-[#e7f0f8] rounded-xl">
                            <FaRegUser size={30} />
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={formValues.email}
                                onChange={handleChange}
                                className=" bg-transparent focus:outline-none pl-2 flex-grow placeholder:text-[#2974BD]"
                            />
                        </div>
                        <p>{formErrors.email}</p>
                        <div className="field w-9/12 flex py-2 px-3 bg-[#e7f0f8] rounded-xl">
                            <FiLock size={30} />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formValues.password}
                                onChange={handleChange}
                                className=" bg-transparent focus:outline-none pl-2 flex-grow placeholder:text-[#2974BD]"
                            />
                        </div>
                        <p>{formErrors.password}</p>
                        <div className="field w-9/12 flex py-2 px-3 bg-[#e7f0f8] rounded-xl">
                            <FiLock size={30} />
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm password"
                                value={formValues.confirmPassword}
                                onChange={handleChange}
                                className=" bg-transparent focus:outline-none pl-2 flex-grow placeholder:text-[#2974BD]"
                            />
                        </div>
                        <p>{formErrors.confirmPassword}</p>
                        <button className="bg-[#1B87EA] text-white font-semibold py-2 w-9/12 rounded-xl">Register</button>
                    </div>
                </form>
                <div className="text-[#2974BD] w-full text-center mt-5">
                    Already have an account? <span onClick={() => navigation("/login")} className="px-2 font-medium">Login</span>
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