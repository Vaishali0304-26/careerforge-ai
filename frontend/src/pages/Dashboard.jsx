import { useNavigate } from "react-router-dom";
function Dashboard() {
    const navigate = useNavigate();
    function handleLogout(){

  localStorage.removeItem("user");

  navigate("/login");

}

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <section className="dashboard-page">

      <div className="page-card dashboard-header">

        <p className="eyebrow">
          CAREER OVERVIEW
        </p>

        <h1>
          Welcome back, {user?.name || "User"} 👋
        </h1>
         
         <button onClick={handleLogout}>
  Logout
</button>

        <p className="page-description">
          Track your career growth, opportunities, skills,
          and placement journey from one intelligent dashboard.
        </p>

        <p>
          Logged in as: <strong>{user?.email}</strong>
        </p>

      </div>

      <div className="quick-actions">

        <button>
          📄 Upload Resume
        </button>

        <button>
          🎤 Practice Interview
        </button>

        <button>
          💼 Find Jobs
        </button>

      </div>

      <div className="dashboard-stats">

        <div className="stat-card">
          <h3>📄 Resume Score</h3>
          <strong>92%</strong>
          <p>ATS Optimization</p>
        </div>

        <div className="stat-card">
          <h3>💼 Job Matches</h3>
          <strong>24</strong>
          <p>AI Recommended</p>
        </div>

        <div className="stat-card">
          <h3>🎯 Applications</h3>
          <strong>12</strong>
          <p>Placement Progress</p>
        </div>

        <div className="stat-card">
          <h3>🎤 Interviews</h3>
          <strong>5</strong>
          <p>Practice Sessions</p>
        </div>

      </div>

      <div className="dashboard-grid">

        <div className="page-card">

          <h2>
            Career Progress
          </h2>

          <div className="progress-item">

            <span>
              Resume Completion
            </span>

            <div className="progress-bar">
              <div className="progress-fill resume"></div>
            </div>

          </div>

          <div className="progress-item">

            <span>
              Skill Development
            </span>

            <div className="progress-bar">
              <div className="progress-fill skills"></div>
            </div>

          </div>

          <div className="progress-item">

            <span>
              Interview Preparation
            </span>

            <div className="progress-bar">
              <div className="progress-fill interview"></div>
            </div>

          </div>

        </div>

        <div className="page-card">

          <h2>
            Recent Activity
          </h2>

          <div className="activity">
            📄 Resume analyzed successfully
          </div>

          <div className="activity">
            💼 New AI job matches found
          </div>

          <div className="activity">
            🎤 Interview practice completed
          </div>

          <div className="activity">
            ⭐ Skills profile updated
          </div>

        </div>

      </div>

      <div className="dashboard-grid">

        <div className="page-card profile-card">

          <h2>
            Profile Strength
          </h2>

          <div className="circle-progress">

            <span>
              75%
            </span>

          </div>

          <p>
            Complete your profile to unlock better AI job matches.
          </p>

          <button>
            Improve Profile
          </button>

        </div>

        <div className="page-card assistant-card">

          <h2>
            🤖 CareerForge AI Assistant
          </h2>

          <p>
            Your resume is strong in Python and Machine Learning.
            Improving Java Spring Boot skills can increase your
            backend opportunities.
          </p>

          <button>
            View Suggestions
          </button>

        </div>

      </div>

      <div className="page-card">

        <h2>
          Recommended Opportunities
        </h2>

        <div className="job-list">

          <div className="job-card-dashboard">

            <h3>
              AI Engineer
            </h3>

            <p>
              Python • Machine Learning • NLP
            </p>

            <span>
              94% Match
            </span>

          </div>

          <div className="job-card-dashboard">

            <h3>
              Software Developer
            </h3>

            <p>
              Java • React • APIs
            </p>

            <span>
              89% Match
            </span>

          </div>

          <div className="job-card-dashboard">

            <h3>
              Data Analyst
            </h3>

            <p>
              SQL • Python • Visualization
            </p>

            <span>
              86% Match
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;