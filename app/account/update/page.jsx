"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/components/firebase";
import SettingContainer from "../SettingsContainer";
import Container from "./Container";

export default function UpdateAccount() {
  const [user, loading] = useAuthState(auth);

  const formik = useFormik({
    // Initial
    initialValues: {
      email: "",
      password: "",
    },

    // Validate Form
    validationSchema: Yup.object({
      email: Yup.string()
        .email(20, "Invalid email address")
        .required("Email is required"),
    }),

    // Submit Form
    onSubmit: (values) => {
      console.log(values);
      createUserWithEmail(values);
    },
  });

  return (
    <div>
      <h1>Update Accout Info</h1>

      <Container>
        {/* Forms */}
        <form onSubmit={formik.handleSubmit}>
          {/* Name Input */}
          {/* <div className='pb-4'>
                        <label className={`block text-sm pb-2 ${formik.touched.name && formik.errors.name ? "text-cyan-600" : ""}`} htmlFor="name">{formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}</label>
                        <input className='border-2 border-gray-500 p-2 rounded-md w-full focus:border-cyan-600 focus:ring-cyan-600' type="text" name='name' placeholder='Enter your name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    </div> */}

          {/* Email Input */}
          <div className="pb-4">
            <label
              className={`block text-sm pb-2 ${
                formik.touched.email && formik.errors.email
                  ? "text-cyan-600"
                  : ""
              }`}
              htmlFor="email"
            >
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : "Email"}
            </label>
            <input
              className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-cyan-600 focus:ring-cyan-600"
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Password Input */}
          <div className="pb-4">
            <label
              className={`block text-sm pb-2 ${
                formik.touched.password && formik.errors.password
                  ? "text-cyan-600"
                  : ""
              }`}
              htmlFor="password"
            >
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : "Password"}
            </label>
            <input
              className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-cyan-600 focus:ring-cyan-600"
              type="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="new-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Start */}
          <button
            className="bg-cyan-600 text-sm text-white py-3 mt-6 rounded-lg w-full hover:bg-cyan-700 transition duration-500"
            type="submit"
          >
            Update
          </button>
        </form>
      </Container>
    </div>
  );
}
