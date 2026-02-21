import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import API from "../lib/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object({
  name: yup.string().required("Name required"),
  email: yup.string().email("Invalid email").required("Email required"),
  password: yup
    .string()
    .min(6, "At least 6 characters")
    .matches(/[A-Z]/, "Must contain one uppercase letter")
    .matches(/[0-9]/, "Must contain one number")
    .required("Password required"),
});

type FormValues = yup.InferType<typeof schema>;

const Register: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const passwordValue = watch("password") || "";

  // Simple password strength calculation
  const strength = useMemo(() => {
    let score = 0;
    if (passwordValue.length >= 8) score++;
    if (/[A-Z]/.test(passwordValue)) score++;
    if (/[0-9]/.test(passwordValue)) score++;
    if (/[^A-Za-z0-9]/.test(passwordValue)) score++;
    return score;
  }, [passwordValue]);

  const getStrengthLabel = () => {
    if (strength <= 1) return "Weak";
    if (strength === 2) return "Moderate";
    if (strength >= 3) return "Strong";
  };

  const onSubmit = async (values: FormValues) => {
    try {
      await API.post("/auth/register", { ...values, role: "student" });
      toast.success("Registration successful. Redirecting...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Registration failed");
    }
  };

  const handleGoogleRegister = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <div className="pt-24 max-w-md mx-auto px-4">
      <ToastContainer position="top-right" autoClose={3000} />

      <h2 className="text-3xl font-bold mb-6 text-center">
        Create Account
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Name */}
        <div>
          <input
            className="w-full p-2 border rounded"
            {...register("name")}
            placeholder="Full name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            className="w-full p-2 border rounded"
            {...register("email")}
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            className="w-full p-2 border rounded"
            {...register("password")}
            placeholder="Password"
            type="password"
          />

          {passwordValue && (
            <div className="mt-2 text-sm">
              Strength:{" "}
              <span
                className={`font-semibold ${
                  strength <= 1
                    ? "text-red-500"
                    : strength === 2
                    ? "text-yellow-500"
                    : "text-green-600"
                }`}
              >
                {getStrengthLabel()}
              </span>
            </div>
          )}

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Register Button */}
        <button className="w-full py-2 bg-emerald text-white rounded  hover:bg-[#4b5563] hover:text-[#f3f4f6 ] transition">
          Register
        </button>
{/* Divider */}
<div className="flex items-center my-4">
  <div className="flex-grow h-px bg-gray-300"></div>
  <span className="mx-3 text-sm text-primary">OR</span>
  <div className="flex-grow h-px bg-gray-300"></div>
</div>

                          {/* Google Register */}
         <button
           type="button"
           onClick={handleGoogleRegister}
           className="w-full flex items-center justify-center gap-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-400 transition shadow-sm"
          >
        <img
         src="https://www.svgrepo.com/show/475656/google-color.svg"
         alt="Google logo"
          className="w-5 h-5"
        />
         <span className="text-sm font-medium text-gray-700">
          Continue with Google
         </span>
         </button>

        {/* Login link */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-orange cursor-pointer font-medium"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;

