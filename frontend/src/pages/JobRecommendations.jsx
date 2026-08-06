function JobRecommendations() {
  return (
    <section className="jobs-page">


      <div className="page-card">

        <p className="eyebrow">
          OPPORTUNITIES
        </p>


        <h1>
          AI Job Recommendations 💼
        </h1>


        <p className="page-description">
          Discover opportunities matched with your skills,
          projects, and career goals using AI insights.
        </p>


      </div>





      <div className="job-match-grid">


        <div className="page-card job-match-card">


          <h2>
            AI Engineer
          </h2>


          <p>
            Python • Machine Learning • NLP
          </p>


          <div className="match-score">
            94% Match
          </div>


          <button>
            View Details
          </button>


        </div>





        <div className="page-card job-match-card">


          <h2>
            Software Developer
          </h2>


          <p>
            Java • React • REST APIs
          </p>


          <div className="match-score">
            89% Match
          </div>


          <button>
            View Details
          </button>


        </div>





        <div className="page-card job-match-card">


          <h2>
            Data Analyst
          </h2>


          <p>
            SQL • Python • Visualization
          </p>


          <div className="match-score">
            86% Match
          </div>


          <button>
            View Details
          </button>


        </div>


      </div>







      <div className="page-card ai-insight">


        <h2>
          🤖 CareerForge AI Insight
        </h2>


        <p>
          Your strongest areas are Python and Machine Learning.
          Improving backend development skills can unlock
          more software engineering opportunities.
        </p>


      </div>



    </section>
  )
}

export default JobRecommendations