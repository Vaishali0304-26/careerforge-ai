import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async () => {

    if (
      !formData.name ||
      !formData.email ||
      !formData.password
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {

      setLoading(true);

     await api.post("/auth/register", formData);

      alert("🎉 Registration Successful!");

      navigate("/login");

    } catch (error) {

      console.error(error);

      alert("Registration failed.");

    } finally {

      setLoading(false);

    }

  };

  return (
    <section className="auth-page">

      <div className="auth-card">

        <p className="eyebrow">
          JOIN CAREERFORGE AI
        </p>

        <h1>
          Create your profile 🚀
        </h1>

        <p className="page-description">
          Start your personalized AI career journey.
        </p>

        <div className="input-group">

          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

        </div>

        <button
          className="auth-btn"
          onClick={handleRegister}
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <p className="auth-bottom">
          Already have an account?
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

      <div className="auth-side">

        <div className="ai-circle">
          ✨
          <span>AI</span>
        </div>

        <h2>
          Your AI career companion
        </h2>

        <p>
          Get smarter recommendations,
          improve skills, and prepare
          for your dream role.
        </p>

      </div>

    </section>
  );
}

export default Register;