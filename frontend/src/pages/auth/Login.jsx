import axios from "axios";
import "./styles/Login.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../utils/validate/Resolver";
import Window from "../../assets/images/windows.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSlice } from "../../slices/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const loginSubmit = (data) => {
    axios
      .post(import.meta.env.VITE_BASE_URI + "/auth/login", data)
      .then((res) => {
        if (res.data.error) {
          setError("email", { message: res.data.error });
        } else {
          localStorage.setItem("in-token", res.data.token);
          dispatch(
            loginSlice({
              isAuthenticated: !!localStorage.getItem("in-token"),
              user: {},
            })
          );
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="auth-login row">
      <div className="auth-login-item">
        <img className="auth-login-img" src={Window} alt="login" />
      </div>
      <div className="auth-login-item cent">
        <div className="auth-login-form-container">
          <div className="auth-login-form-heading">
            <h1>Incubora</h1>
            <p className="auth-login-form-heading-subtitle">
              India largest online startup community. Join us, let&apos;s grow
            </p>{" "}
            <div className="auth-signup-item"></div>
          </div>
          <form method="post" onSubmit={handleSubmit(loginSubmit)}>
            <div className="input-box">
              <input
                type="text"
                className="input"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors && errors.email && (
                <p className="error-p">{errors.email.message}</p>
              )}
            </div>
            <div className="input-box">
              <input
                type="password"
                className="input"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="error-p">{errors.password.message}</p>
              )}
            </div>
            <button>Submit</button>
          </form>
          <div className="auth-extras">
            <p>
              Don&apos;t have an account? <Link to="/auth/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
