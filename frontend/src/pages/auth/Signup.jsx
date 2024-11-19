import axios from "axios";
import "./styles/Signup.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Buildings from "../../assets/images/building.jpg";
import { z } from "zod";

export default function Signup() {
  const schema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    password: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSignUpAccount = async (data) => {
    const result = axios.post("/api/v1/auth/signup", data);
    if (result.success === true) {
      alert("Account created successfully");
    }
  };
  return (
    <div className="auth-signup row">
      <div className="auth-signup-item">
        <img className="auth-signup-img" src={Buildings} alt="signup" />
      </div>
      <div className="auth-signup-item cent">
        <div className="auth-signup-form-container">
          <form
            action=""
            method="post"
            onSubmit={handleSubmit(onSignUpAccount)}
          >
            <div className="input-box">
              <input
                type="text"
                className="input"
                placeholder="First Name"
                {...register("firstName", { required: true })}
              />
            </div>
            {errors.firstName && <p>{errors.firstName.message}</p>}
            <div className="input-box">
              <input
                type="text"
                className="input"
                placeholder="Last Name"
                {...register("lastName")}
              />
            </div>
            {errors.lastName && <p>{errors.lastName.message}</p>}
            <div className="input-box">
              <input
                type="date"
                className="input"
                placeholder="Date Of Birth"
                {...register("dob")}
              />
            </div>
            {errors.dob && <p>{errors.dob.message}</p>}
            <div className="input-box">
              <input
                type="email"
                className="input"
                placeholder="Email"
                {...register("email")}
              />
            </div>
            {errors.email && <p>{errors.email.message}</p>}
            <div className="input-box">
              <input
                type="password"
                className="input"
                placeholder="Password"
                {...register("password")}
              />
            </div>
            {errors.password && <p>{errors.password.message}</p>}
            <button>Create Account</button>
          </form>
          <div className="auth-others">
            <p>
              Already have an account? <Link to="/auth/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
