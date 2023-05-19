"use client";

import { useFormik } from 'formik';
import * as Yup from "yup";
import { useRouter } from 'next/navigation';
// Google
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from "../firebase/firebase";
import { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";


export default function SignUp() {

    const [user, loading] = useAuthState(auth);

    // Router
    const router = useRouter();

    // Sign In with Google
    const googleProvider = new GoogleAuthProvider();

    function googleLogin() {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;

                console.log(user);
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);

                console.log(errorMessage);
                // ...
            });
    };

    // Sign In with GitHub
    const githubprovider = new GithubAuthProvider();

    function githubLogin() {
        signInWithPopup(auth, githubprovider)
            .then((result) => {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GithubAuthProvider.credentialFromError(error);
                // ...
            });
    }

    useEffect(() => {
        if (user) {
            router.push("/");
        } else {
            console.log("Log In");
        }
    }, [user, router]);

    // Formik

    // const formik = useFormik({
    //     // Initial
    //     initialValues: {
    //         name: "",
    //         email: "",
    //         country: "United States",
    //         terms: "",
    //     },

    //     // Validate Form
    //     validationSchema: Yup.object({
    //         name: Yup
    //             .string()
    //             .max(20, "Name must be less than 20 characters long")
    //             .required("Name is required"),
    //         email: Yup
    //             .string()
    //             .email(20, "Invalid email address")
    //             .required("Email is required"),
    //         terms: Yup
    //             .bool()
    //             .isTrue("Terms of service must be checked")
    //     }),

    //     // Submit Form
    //     onSubmit: (values) => {
    //         console.log(values);
    //         router.push({ pathname: "/sign-up/success", query: values });
    //     }
    // });


    return (
        <form
        // onSubmit={formik.handleSubmit}
        >
            <div className=''>

                {/* Intro */}
                <h1 className=' text-3xl pb-4'>Let&apos;s get started</h1>
                <h5>
                    Create a Cuboost Utilities account to access more features and tailored content just for you. However, no information is linked to this account.
                </h5>

                {/* Forms */}
                <div className='mt-6'>

                    {/* Name Input */}
                    {/* <div className='pb-4'>
                        <label className={`block text-sm pb-2 ${formik.touched.name && formik.errors.name ? "text-cyan-600" : ""}`} htmlFor="name">{formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}</label>
                        <input className='border-2 border-gray-500 p-2 rounded-md w-full focus:border-cyan-600 focus:ring-cyan-600' type="text" name='name' placeholder='Enter your name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    </div> */}

                    {/* Email Input */}
                    {/* <div className='pb-4'>
                        <label className={`block text-sm pb-2 ${formik.touched.email && formik.errors.email ? "text-cyan-600" : ""}`} htmlFor="email">{formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}</label>
                        <input className='border-2 border-gray-500 p-2 rounded-md w-full focus:border-cyan-600 focus:ring-cyan-600' type="email" name='email' placeholder='Enter your email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    </div> */}

                    {/* Countries Input */}
                    {/* <div className='pb-4'>
                        <label className='block text-sm pb-2' htmlFor="country">Country</label>
                        <select className='border-2 border-gray-500 p-2 cursor-pointer rounded-md w-full hover:border-cyan-600 focus:border-cyan-600 focus:ring-cyan-600' type="country" name='country' placeholder='Enter your country' value={formik.values.country} onChange={formik.handleChange}>
                            <option>United States</option>
                            <option>United Kingdom</option>
                            <option>Germany</option>
                            <option>France</option>
                        </select>
                    </div> */}

                    {/* Terms of Service */}
                    {/* <div>
                        <label className={`block text-sm pb-2 ${formik.touched.terms && formik.errors.terms ? "text-cyan-600" : ""}`} htmlFor="terms">{formik.touched.terms && formik.errors.terms ? formik.errors.terms : "Terms"}</label>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" name="terms" className='h-5 w-5 text-cyan-600 rounded-sm cursor-pointer border-2 focus:border-cyan-600 focus:ring-cyan-600' value={formik.values.terms} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <label className='text-lg text-gray-500' for="terms">
                                I agree to the terms of service.
                            </label>
                        </div>
                    </div> */}

                    {/* <hr className=' my-10 ' /> */}

                    <div className=' my-6 flex items-center justify-center gap-4'>
                        <button className=' p-3 border-cyan-600 border-2 rounded-lg text-cyan-600 font-medium flex align-middle gap-2 hover:text-white hover:bg-cyan-600 transition duration-500' onClick={googleLogin}><FcGoogle className='text-2xl' />Sign in with Google</button>

                        <button className=' p-3 border-cyan-600 border-2 rounded-lg text-cyan-600 font-medium flex align-middle gap-2 hover:text-white hover:bg-cyan-600 transition duration-500' onClick={githubLogin}><FaGithub className='text-2xl text-black' />Sign in with GitHub</button>
                    </div>

                    {/* Start */}
                    {/* <button className='bg-cyan-600 text-sm text-white py-3 mt-6 rounded-lg w-full hover:bg-cyan-700 transition duration-500' type='submit'>Start</button> */}
                </div>
            </div>
        </form>
    );
}