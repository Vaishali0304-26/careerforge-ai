import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await api.post("/auth/login", {
        email,
        password,
      });

      console.log(response.data);
      localStorage.setItem(
    "user",
    JSON.stringify(response.data)
);

      alert("Login Successful ✅");

      navigate("/dashboard");

    } catch (error) {

      alert("Invalid Email or Password ❌");

    }

  };

  return (

    <section className="auth-page">

      <div className="auth-card">

        <p className="eyebrow">
          WELCOME BACK
        </p>

        <h1>
          Sign in to CareerForge AI
        </h1>

        <p className="page-description">
          Continue your career journey with AI-powered insights.
        </p>

        <div className="input-group">

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        </div>

        <button
          className="auth-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="auth-bottom">

          Don't have an account?

          <Link to="/register">
            Create account
          </Link>

        </p>

      </div>

      <div className="auth-side">

        <div className="ai-circle">
          🤖
          <span>AI</span>
        </div>

        <h2>
          Build your future with intelligence
        </h2>

        <p>
          Analyze resumes, discover jobs,
          practice interviews,
          and track your career growth.
        </p>

      </div>

    </section>

  );

}

export default Login;