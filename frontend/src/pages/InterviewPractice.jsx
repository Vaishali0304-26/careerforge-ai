function InterviewPractice() {
  return (
    <section className="interview-page">


      <div className="page-card">

        <p className="eyebrow">
          PREPARATION
        </p>


        <h1>
          AI Interview Practice 🎤
        </h1>


        <p className="page-description">
          Practice interviews with AI guidance and improve
          your technical and communication skills.
        </p>


      </div>






      <div className="interview-grid">


        <div className="page-card">


          <h2>
            Choose Interview Type
          </h2>


          <div className="interview-options">

            <button>
              💻 Technical
            </button>


            <button>
              🤝 HR Round
            </button>


            <button>
              🤖 AI/ML
            </button>


            <button>
              ☕ Java
            </button>


          </div>


        </div>






        <div className="page-card">


          <h2>
            AI Interview Question
          </h2>


          <div className="question-card">

            Explain the difference between
            supervised and unsupervised learning.


          </div>


          <textarea
            placeholder="Write your answer here..."
          />


          <button className="primary-btn interview-btn">

            Analyze Answer

          </button>


        </div>


      </div>







      <div className="page-card feedback-card">


        <h2>
          🤖 AI Feedback
        </h2>



        <div className="feedback-item">

          Technical Knowledge
          <strong>
            85%
          </strong>

        </div>



        <div className="feedback-item">

          Communication
          <strong>
            90%
          </strong>

        </div>



        <div className="feedback-item">

          Confidence
          <strong>
            82%
          </strong>

        </div>



        <p>
          Tip: Add more real-world examples while
          explaining technical concepts.
        </p>


      </div>



    </section>
  )
}

export default InterviewPractice