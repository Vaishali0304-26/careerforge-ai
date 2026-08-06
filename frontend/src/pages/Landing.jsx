import { Link } from "react-router-dom";

function Landing() {
  return (
    <>

      <section className="page-card hero-section">

        <div className="hero-content">

          <p className="eyebrow">
            CAREERFORGE AI
          </p>

          <h1>
            Plan your next career move with confidence.
          </h1>

          <p className="page-description">
            An AI-powered career companion to analyze resumes,
            discover opportunities, track placements, and prepare
            for interviews.
          </p>


          <div className="actions">

            <Link 
              className="primary-btn"
              to="/register"
            >
              Get Started
            </Link>


            <Link
              className="secondary-btn"
              to="/dashboard"
            >
              Explore Dashboard
            </Link>

          </div>

        </div>


        <div className="ai-visual">


          <div className="floating-card resume-card">
            📄 Resume Score
            <strong>92%</strong>
          </div>


          <div className="ai-circle">
            🤖
            <span>AI</span>
          </div>


          <div className="floating-card job-card">
            💼 Job Match
            <strong>95%</strong>
          </div>


          <div className="floating-card interview-card">
            🎤 Interview Ready
            <strong>87%</strong>
          </div>


        </div>

      </section>



      <section className="features">


        <div className="feature-card">
          <h3>🤖 AI Resume Analyzer</h3>
          <p>
            Improve your resume with AI-powered insights
            and ATS optimization.
          </p>
        </div>


        <div className="feature-card">
          <h3>💼 Smart Job Matching</h3>
          <p>
            Discover opportunities based on your skills
            and career goals.
          </p>
        </div>


        <div className="feature-card">
          <h3>🎯 Placement Tracker</h3>
          <p>
            Track applications, interviews, and placement progress.
          </p>
        </div>


        <div className="feature-card">
          <h3>🎤 Interview Practice</h3>
          <p>
            Prepare with AI-powered interview simulations.
          </p>
        </div>


      </section>


    </>
  );
}

export default Landing;