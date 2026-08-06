function ResumeAnalyzer() {
  return (
    <section className="resume-page">


      <div className="page-card resume-header">

        <p className="eyebrow">
          RESUME INTELLIGENCE
        </p>

        <h1>
          AI Resume Analyzer 🤖
        </h1>

        <p className="page-description">
          Analyze your resume, identify improvement areas,
          and optimize it for your dream roles.
        </p>

      </div>



      <div className="resume-grid">


        <div className="page-card upload-card">

          <h2>
            Upload Resume
          </h2>


          <div className="upload-box">

            📄

            <p>
              Drag & Drop your resume PDF
            </p>

            <button>
              Choose File
            </button>

          </div>


        </div>




        <div className="page-card score-card">

          <h2>
            ATS Score
          </h2>


          <div className="ats-circle">

            <span>
              92%
            </span>

          </div>


          <p>
            Your resume is optimized for AI screening.
          </p>


        </div>


      </div>





      <div className="resume-grid">


        <div className="page-card">


          <h2>
            ✅ Skills Detected
          </h2>


          <div className="skill-tags">

            <span>Python</span>
            <span>Java</span>
            <span>Machine Learning</span>
            <span>React</span>
            <span>SQL</span>

          </div>


        </div>





        <div className="page-card">


          <h2>
            ⚠️ Missing Skills
          </h2>


          <div className="skill-tags missing">

            <span>Spring Boot</span>
            <span>Docker</span>
            <span>AWS</span>

          </div>


        </div>


      </div>






      <div className="page-card suggestion-card">


        <h2>
          💡 AI Suggestions
        </h2>


        <div className="suggestion">

          Add measurable achievements to your projects.

        </div>


        <div className="suggestion">

          Highlight your AI and Machine Learning experience.

        </div>


        <div className="suggestion">

          Improve backend skills with Spring Boot and APIs.

        </div>


      </div>


    </section>
  )
}

export default ResumeAnalyzer