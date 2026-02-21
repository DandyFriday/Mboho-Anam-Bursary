import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import API from "../lib/api";
import { useAuth } from "../context/AuthContext";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await API.post("/auth/login", data);
      login(res.data.token);

      const payload: any = JSON.parse(atob(res.data.token.split(".")[1]));

      if (payload.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/student/dashboard");
      }
    } catch (err) {
      alert("Login failed");
    }
  };
return (
  <div className="flex items-center justify-center min-h-[80vh]">
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 shadow rounded w-full max-w-md space-y-4"
    >
      <h2 className="text-3xl font-bold text-center">Login</h2>

      <input
        className="w-full p-2 border rounded"
        {...register("email")}
        placeholder="Email"
      />

      <input
        className="w-full p-2 border rounded"
        type="password"
        {...register("password")}
        placeholder="Password"
      />

      {/* Normal Login Button */}
      <button
        type="submit"
        className="w-full py-2 bg-[#065f46] text-white rounded hover:bg-[#4b5563] transition"
      >
        Login
      </button>

      {/* Divider */}
      <div className="flex items-center my-4">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="mx-3 text-sm text-primary">OR</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Google Button */}
      <button
        type="button"
        onClick={() =>
          (window.location.href = "http://localhost:5000/api/auth/google")
        }
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

      <p className="text-sm text-center mt-4">
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/register")}
          className="text-[#065f46] cursor-pointer"
        >
          Register
        </span>
      </p>
    </form>
  </div>
);

};

export default Login;
